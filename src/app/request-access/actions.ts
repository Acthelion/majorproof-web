"use server";

import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

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
    throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
  }

  const { error } = await supabase.from("majorproof_requests").insert({
    name_or_alias: nameOrAlias,
    contact_method: contactMethod,
    current_major: currentMajor,
    current_year: currentYear,
    target_goal: targetGoal,
    interested_assets: interestedAssets,
    primary_need: primaryNeed,
    language_preference: languagePreference,
    willing_to_test: willingToTest,
    source_page: sourcePage || null,
    asset_intent: assetIntent || null,
  });

  if (error) {
    console.error("Supabase request insert error:", error);

    throw new Error(
      `Failed to submit request: ${error.message} | ${error.code} | ${
        error.details || ""
      }`
    );
  }

  if (locale === "en") {
    redirect("/en/request-access/thanks");
  }

  redirect("/request-access/thanks");
}