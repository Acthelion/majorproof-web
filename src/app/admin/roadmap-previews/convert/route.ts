import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "../../requests/actions";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

type RoadmapPreview = {
  id: string;
  name_or_alias: string | null;
  contact_method: string | null;
  current_major: string;
  current_year: string | null;
  target_goal: string;
  interested_asset: string | null;
  existing_experience: string | null;
  primary_need: string;
  ai_result: string;
  converted_request_id: string | null;
};

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return redirectTo(requestUrl, "/admin/roadmap-previews?error=unauthorized");
  }

  try {
    const formData = await request.formData();
    const previewId = String(formData.get("previewId") || "").trim();

    if (!previewId) {
      return redirectTo(
        requestUrl,
        "/admin/roadmap-previews?error=missing-preview-id"
      );
    }

    const { data: previewData, error: previewError } = await supabaseAdmin
      .from("majorproof_ai_roadmap_previews")
      .select(
        "id, name_or_alias, contact_method, current_major, current_year, target_goal, interested_asset, existing_experience, primary_need, ai_result, converted_request_id"
      )
      .eq("id", previewId)
      .single();

    if (previewError || !previewData) {
      console.error("Failed to read roadmap preview for conversion:", {
        message: previewError?.message,
        code: previewError?.code,
        details: previewError?.details,
        hint: previewError?.hint,
      });

      return redirectTo(
        requestUrl,
        "/admin/roadmap-previews?error=preview-read-failed"
      );
    }

    const preview = previewData as RoadmapPreview;

    if (preview.converted_request_id) {
      return redirectTo(requestUrl, "/admin/requests");
    }

    const interestedAssets = preview.interested_asset
      ? [preview.interested_asset]
      : [];

    const primaryNeed = buildPrimaryNeed(preview);

    const { data: requestData, error: insertError } = await supabaseAdmin
      .from("majorproof_requests")
      .insert({
        name_or_alias: preview.name_or_alias || null,
        contact_method: preview.contact_method || "not provided from AI preview",
        current_major: preview.current_major,
        current_year: preview.current_year || null,
        target_goal: preview.target_goal || null,
        interested_assets: interestedAssets,
        primary_need: primaryNeed,
        language_preference: "Chinese",
        willing_to_test: true,
        source_page: "ai-roadmap-preview",
        asset_intent: preview.interested_asset || null,
        purchase_intent: "unknown",
        expected_price_range: null,
        status: "new",
        admin_note: "Converted from AI Roadmap Preview.",
      })
      .select("id")
      .single();

    if (insertError || !requestData) {
      console.error("Failed to convert roadmap preview to request:", {
        message: insertError?.message,
        code: insertError?.code,
        details: insertError?.details,
        hint: insertError?.hint,
      });

      return redirectTo(
        requestUrl,
        "/admin/roadmap-previews?error=convert-failed"
      );
    }

    const { error: updateError } = await supabaseAdmin
      .from("majorproof_ai_roadmap_previews")
      .update({
        converted_request_id: requestData.id,
        converted_at: new Date().toISOString(),
      })
      .eq("id", preview.id);

    if (updateError) {
      console.error("Converted request created but preview update failed:", {
        message: updateError.message,
        code: updateError.code,
        details: updateError.details,
        hint: updateError.hint,
      });
    }

    return redirectTo(requestUrl, "/admin/requests");
  } catch (error) {
    console.error("Unexpected roadmap preview conversion error:", error);

    return redirectTo(requestUrl, "/admin/roadmap-previews?error=convert-failed");
  }
}

function buildPrimaryNeed(preview: RoadmapPreview) {
  return [
    "Converted from AI Roadmap Preview.",
    "",
    "Original main problem:",
    preview.primary_need,
    "",
    "Existing experience:",
    preview.existing_experience || "Not provided.",
    "",
    "AI roadmap result:",
    preview.ai_result,
  ].join("\n");
}

function redirectTo(requestUrl: URL, path: string) {
  return NextResponse.redirect(new URL(path, requestUrl.origin), {
    status: 303,
  });
}