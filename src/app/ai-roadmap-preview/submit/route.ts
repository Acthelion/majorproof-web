import { NextResponse } from "next/server";
import { getOpenAIClient, getOpenAIModel } from "@/lib/openai";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

type RoadmapPreviewInput = {
  nameOrAlias: string;
  contactMethod: string;
  currentMajor: string;
  currentYear: string;
  targetGoal: string;
  interestedAsset: string;
  existingExperience: string;
  primaryNeed: string;
};

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);

  try {
    const formData = await request.formData();

    const accessCode = String(formData.get("accessCode") || "").trim();
    const expectedAccessCode = process.env.AI_PREVIEW_ACCESS_CODE;

    if (!expectedAccessCode || accessCode !== expectedAccessCode) {
      return redirectTo(requestUrl, "/ai-roadmap-preview?error=invalid-code");
    }

    const input: RoadmapPreviewInput = {
      nameOrAlias: String(formData.get("nameOrAlias") || "").trim(),
      contactMethod: String(formData.get("contactMethod") || "").trim(),
      currentMajor: String(formData.get("currentMajor") || "").trim(),
      currentYear: String(formData.get("currentYear") || "").trim(),
      targetGoal: String(formData.get("targetGoal") || "").trim(),
      interestedAsset: String(formData.get("interestedAsset") || "").trim(),
      existingExperience: String(
        formData.get("existingExperience") || ""
      ).trim(),
      primaryNeed: String(formData.get("primaryNeed") || "").trim(),
    };

    if (!input.currentMajor || !input.targetGoal || !input.primaryNeed) {
      return redirectTo(requestUrl, "/ai-roadmap-preview?error=missing-fields");
    }

    const client = await getOpenAIClient();

    if (!client) {
      return redirectTo(requestUrl, "/ai-roadmap-preview?error=missing-openai-key");
    }

    const response = await client.responses.create({
      model: getOpenAIModel(),
      input: [
        {
          role: "system",
          content:
            "You are MajorProof's AI Asset Roadmap assistant. MajorProof creates evidence-based professional asset systems for students. Generate a structured, realistic, academically honest roadmap. Use Chinese. Do not promise admissions, jobs, internships, grades, scholarships, or guaranteed outcomes. Do not help with homework ghostwriting or fake experience.",
        },
        {
          role: "user",
          content: buildRoadmapPrompt(input),
        },
      ],
    });

    const aiResult =
      response.output_text?.trim() ||
      "AI 未能生成有效路线。请补充更具体的专业、目标和已有经历后重试。";

    const { data, error } = await supabaseAdmin
      .from("majorproof_ai_roadmap_previews")
      .insert({
        name_or_alias: input.nameOrAlias || null,
        contact_method: input.contactMethod || null,
        current_major: input.currentMajor,
        current_year: input.currentYear || null,
        target_goal: input.targetGoal,
        interested_asset: input.interestedAsset || null,
        existing_experience: input.existingExperience || null,
        primary_need: input.primaryNeed,
        ai_result: aiResult,
      })
      .select("id")
      .single();

    if (error || !data) {
      console.error("Failed to save AI roadmap preview:", {
        message: error?.message,
        code: error?.code,
        details: error?.details,
        hint: error?.hint,
      });

      return redirectTo(requestUrl, "/ai-roadmap-preview?error=save-failed");
    }

    return redirectTo(requestUrl, `/ai-roadmap-preview/result/${data.id}`);
  } catch (error) {
    console.error("AI roadmap preview failed:", error);

    return redirectTo(requestUrl, "/ai-roadmap-preview?error=generate-failed");
  }
}

function buildRoadmapPrompt(input: RoadmapPreviewInput) {
  return `
Generate a MajorProof AI Asset Roadmap Preview.

User input:
- Name or alias: ${input.nameOrAlias || "not provided"}
- Contact method: ${input.contactMethod || "not provided"}
- Current major: ${input.currentMajor}
- Current year: ${input.currentYear || "not provided"}
- Target goal: ${input.targetGoal}
- Interested asset direction: ${input.interestedAsset || "not sure"}
- Existing experience: ${input.existingExperience || "not provided"}
- Primary need: ${input.primaryNeed}

MajorProof framework:
A Proof Asset contains:
1. Professional context
2. Final deliverable
3. Process evidence
4. Method explanation
5. Resume language
6. Interview defense
7. Extension roadmap

Available categories:
- TechProof
- FinanceProof
- BusinessProof
- ResearchProof

Current priority product:
- TechProof AI Document Review Platform Starter Pack

Output in Chinese with this exact structure:

## 推荐资产方向
State the best-fit category and explain why.

## 适合做的项目
Suggest 1 realistic project direction. It must be suitable for the user's major and target.

## 最终成果应该长什么样
Describe the concrete deliverables.

## 需要保留的过程证据
List the evidence the student should collect while building.

## 简历可以怎么写
Give 2 restrained resume bullet drafts. Do not exaggerate.

## 面试会被问什么
List likely interview questions and what the student should prepare.

## 下一步扩展路线
Give a 3-step extension path from starter version to personalized version.

Rules:
- Do not fabricate experience.
- Do not write coursework for the user.
- Do not promise outcomes.
- Be specific, practical, and commercially useful.
- If the user is not a good fit for TechProof, recommend another category.
`.trim();
}

function redirectTo(requestUrl: URL, path: string) {
  return NextResponse.redirect(new URL(path, requestUrl.origin), {
    status: 303,
  });
}