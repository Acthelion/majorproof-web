import { NextResponse } from "next/server";
import { getOpenAIClient, getOpenAIModel } from "@/lib/openai";
import { isAdminAuthenticated, type RequestStatus } from "@/lib/adminAuth";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

type MajorProofRequest = {
  id: string;
  name_or_alias: string | null;
  contact_method: string;
  current_major: string;
  current_year: string | null;
  target_goal: string | null;
  interested_assets: string[] | null;
  primary_need: string;
  language_preference: string | null;
  willing_to_test: boolean;
  source_page: string | null;
  asset_intent: string | null;
  purchase_intent: string | null;
  expected_price_range: string | null;
  status: RequestStatus | null;
  admin_note: string | null;
  created_at: string;
  updated_at: string | null;
};

type AiAnalysisResult = {
  analysis: string;
  intentLevel: string;
  recommendedAsset: string;
  followupMessage: string;
};

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return redirectTo(requestUrl, "/admin/requests?error=unauthorized");
  }

  try {
    const formData = await request.formData();
    const requestId = String(formData.get("requestId") || "").trim();

    if (!requestId) {
      return redirectTo(requestUrl, "/admin/requests?error=missing-request-id");
    }

    const client = await getOpenAIClient();

    if (!client) {
      return redirectTo(requestUrl, "/admin/requests?error=missing-openai-key");
    }

    const { data, error } = await supabaseAdmin
      .from("majorproof_requests")
      .select(
        "id, name_or_alias, contact_method, current_major, current_year, target_goal, interested_assets, primary_need, language_preference, willing_to_test, source_page, asset_intent, purchase_intent, expected_price_range, status, admin_note, created_at, updated_at"
      )
      .eq("id", requestId)
      .single();

    if (error || !data) {
      console.error("AI route failed to read request:", {
        message: error?.message,
        code: error?.code,
        details: error?.details,
        hint: error?.hint,
      });

      return redirectTo(requestUrl, "/admin/requests?error=ai-read-failed");
    }

    const majorProofRequest = data as MajorProofRequest;

    const response = await client.responses.create({
      model: getOpenAIModel(),
      input: [
        {
          role: "system",
          content:
            "You are an internal CRM analyst for MajorProof. MajorProof sells evidence-based professional asset packs for students. Analyze the request commercially and operationally. Return only valid JSON. Do not use markdown.",
        },
        {
          role: "user",
          content: buildAiAnalysisPrompt(majorProofRequest),
        },
      ],
    });

    const rawText = response.output_text || "";
    const aiResult = parseAiAnalysis(rawText);

    const { error: updateError } = await supabaseAdmin
      .from("majorproof_requests")
      .update({
        ai_analysis: aiResult.analysis,
        ai_intent_level: aiResult.intentLevel,
        ai_recommended_asset: aiResult.recommendedAsset,
        ai_followup_message: aiResult.followupMessage,
        ai_analyzed_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", requestId);

    if (updateError) {
      console.error("AI route failed to save analysis:", {
        message: updateError.message,
        code: updateError.code,
        details: updateError.details,
        hint: updateError.hint,
      });

      return redirectTo(requestUrl, "/admin/requests?error=ai-save-failed");
    }

    return redirectTo(requestUrl, "/admin/requests");
  } catch (error) {
    console.error("AI route unexpected error:", error);

    return redirectTo(requestUrl, "/admin/requests?error=ai-generate-failed");
  }
}

function buildAiAnalysisPrompt(request: MajorProofRequest) {
  return `
Analyze this MajorProof early-access request.

MajorProof positioning:
- Evidence-based professional asset system for students
- Core product: Proof Asset
- Main categories: TechProof, FinanceProof, BusinessProof, ResearchProof
- Current priority product: TechProof AI Document Review Platform Starter Pack
- Business goal: identify purchase intent, asset fit, follow-up priority, and suitable messaging
- Integrity boundary: no homework ghostwriting, no fake experience, no guaranteed outcome

Request data:
- Name or alias: ${request.name_or_alias || "not provided"}
- Current major: ${request.current_major || "not provided"}
- Current year: ${request.current_year || "not provided"}
- Target goal: ${request.target_goal || "not provided"}
- Interested assets: ${(request.interested_assets || []).join(" / ") || "not provided"}
- Primary need: ${request.primary_need || "not provided"}
- Language preference: ${request.language_preference || "not provided"}
- Willing to test: ${request.willing_to_test ? "yes" : "no"}
- Source page: ${request.source_page || "not recorded"}
- Asset intent: ${request.asset_intent || "not recorded"}
- Purchase intent: ${request.purchase_intent || "not provided"}
- Expected price range: ${request.expected_price_range || "not provided"}
- Current admin status: ${request.status || "new"}
- Existing admin note: ${request.admin_note || "none"}

Return only a JSON object with exactly these keys:
{
  "analysis": "A concise Chinese analysis of the user's profile, pain point, asset fit, purchase likelihood, and recommended next step.",
  "intentLevel": "low | medium | medium-high | high",
  "recommendedAsset": "TechProof | FinanceProof | BusinessProof | ResearchProof | unclear",
  "followupMessage": "A concise Chinese message that the founder can send to this user. It should be specific, restrained, and not overpromise."
}

Rules:
- Use Chinese for all values.
- Do not fabricate user facts.
- Do not promise internship, admission, job, score, admission, scholarship, or employment outcome.
- Do not suggest doing homework or fake experience.
- If the user is not a fit for TechProof, say so clearly.
- If price intent is strong, mention that they may be suitable for early paid validation.
`.trim();
}

function parseAiAnalysis(rawText: string): AiAnalysisResult {
  const fallback: AiAnalysisResult = {
    analysis: rawText || "AI 未返回有效分析结果。",
    intentLevel: "medium",
    recommendedAsset: "unclear",
    followupMessage:
      "你好，我们已经收到你的申请。根据你填写的信息，我们会判断是否适合进入 MajorProof 的早期测试名单。",
  };

  const jsonText = extractJsonObject(rawText);

  if (!jsonText) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(jsonText) as Partial<AiAnalysisResult>;

    return {
      analysis: normalizeAiString(parsed.analysis, fallback.analysis),
      intentLevel: normalizeAiString(parsed.intentLevel, fallback.intentLevel),
      recommendedAsset: normalizeAiString(
        parsed.recommendedAsset,
        fallback.recommendedAsset
      ),
      followupMessage: normalizeAiString(
        parsed.followupMessage,
        fallback.followupMessage
      ),
    };
  } catch {
    return fallback;
  }
}

function extractJsonObject(value: string) {
  const firstBrace = value.indexOf("{");
  const lastBrace = value.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
    return "";
  }

  return value.slice(firstBrace, lastBrace + 1);
}

function normalizeAiString(value: unknown, fallback: string) {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();

  return trimmed || fallback;
}

function redirectTo(requestUrl: URL, path: string) {
  return NextResponse.redirect(new URL(path, requestUrl.origin), {
    status: 303,
  });
}