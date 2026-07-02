"use server";

import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import {
  allowedStatuses,
  clearAdminAuthCookie,
  isAdminAuthenticated,
  setAdminAuthCookie,
} from "@/lib/adminAuth";

export { isAdminAuthenticated };

export async function loginAdmin(formData: FormData) {
  const password = String(formData.get("password") || "").trim();

  if (!password) {
    redirect("/admin/requests?error=missing-password");
  }

  const authenticated = await setAdminAuthCookie(password);

  if (!authenticated) {
    redirect("/admin/requests?error=wrong-password");
  }

  redirect("/admin/requests");
}

export async function logoutAdmin() {
  await clearAdminAuthCookie();

  redirect("/admin/requests");
}

export async function updateRequestStatus(formData: FormData) {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    redirect("/admin/requests?error=unauthorized");
  }

  const requestId = String(formData.get("requestId") || "").trim();
  const status = String(formData.get("status") || "").trim();
  const adminNote = String(formData.get("adminNote") || "").trim();

  if (!requestId) {
    redirect("/admin/requests?error=missing-request-id");
  }

  if (!allowedStatuses.includes(status as (typeof allowedStatuses)[number])) {
    redirect("/admin/requests?error=invalid-status");
  }

  const { error } = await supabaseAdmin
    .from("majorproof_requests")
    .update({
      status,
      admin_note: adminNote || null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", requestId);

  if (error) {
    console.error("Failed to update request status:", {
      message: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
    });

    redirect("/admin/requests?error=update-failed");
  }

  redirect("/admin/requests");
}