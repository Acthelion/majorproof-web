"use server";

import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function submitAccessRequest(formData: FormData) {
  const nameOrAlias = String(formData.get("nameOrAlias") || "").trim();
  const contactMethod = String(formData.get("contactMethod") || "").trim();
  const currentMajor = String(formData.get("currentMajor") || "").trim();
  const currentYear = String(formData.get("currentYear") || "").trim();
  const targetGoal = String(formData.get("targetGoal") || "").trim();
  const primaryNeed = String(formData.get("primaryNeed") || "").trim();
  const languagePreference = String(
    formData.get("languagePreference") || ""
  ).trim();

  const locale = String(formData.get("locale") || "zh").trim();

  const sourcePage = String(formData.get("sourcePage") || "").trim();
  const assetIntent = String(formData.get("assetIntent") || "").trim();

  const purchaseIntent = String(
    formData.get("purchaseIntent") || ""
  ).trim();

  const expectedPriceRange = String(
    formData.get("expectedPriceRange") || ""
  ).trim();

  const interestedAssets = formData
    .getAll("interestedAssets")
    .map((value) => String(value).trim())
    .filter(Boolean);

  const willingToTest = formData.get("willingToTest") === "on";

  const missingFields = [
    ["contactMethod", contactMethod],
    ["currentMajor", currentMajor],
    ["primaryNeed", primaryNeed],
  ]
    .filter(([, value]) => !value)
    .map(([field]) => field);

  if (missingFields.length > 0) {
    const errorPath =
      locale === "en"
        ? "/en/request-access?error=missing-fields"
        : "/request-access?error=missing-fields";

    redirect(errorPath);
  }

  const { error } = await supabaseAdmin.from("majorproof_requests").insert({
    name_or_alias: nameOrAlias || null,
    contact_method: contactMethod,
    current_major: currentMajor,
    current_year: currentYear || null,
    target_goal: targetGoal || null,
    interested_assets: interestedAssets,
    primary_need: primaryNeed,
    language_preference: languagePreference || null,
    willing_to_test: willingToTest,
    source_page: sourcePage || null,
    asset_intent: assetIntent || null,
    purchase_intent: purchaseIntent || null,
    expected_price_range: expectedPriceRange || null,
  });

  if (error) {
    console.error("MajorProof request insert failed:", {
      message: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
    });

    const errorPath =
      locale === "en"
        ? "/en/request-access?error=submit-failed"
        : "/request-access?error=submit-failed";

    redirect(errorPath);
  }

  if (locale === "en") {
    redirect("/en/request-access/thanks");
  }

  redirect("/request-access/thanks");
}