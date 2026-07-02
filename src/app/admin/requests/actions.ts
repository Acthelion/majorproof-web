"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const ADMIN_COOKIE_NAME = "majorproof_admin_auth";

const allowedStatuses = ["new", "contacted", "qualified", "not_fit", "closed"];

function getAdminPasswordHash() {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    throw new Error("Missing ADMIN_PASSWORD");
  }

  return crypto.createHash("sha256").update(adminPassword).digest("hex");
}

export async function loginAdmin(formData: FormData) {
  const password = String(formData.get("password") || "").trim();

  if (!password) {
    redirect("/admin/requests?error=missing-password");
  }

  const submittedHash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const correctHash = getAdminPasswordHash();

  if (submittedHash !== correctHash) {
    redirect("/admin/requests?error=wrong-password");
  }

  const cookieStore = await cookies();

  cookieStore.set(ADMIN_COOKIE_NAME, submittedHash, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 60 * 60 * 12,
  });

  redirect("/admin/requests");
}

export async function logoutAdmin() {
  const cookieStore = await cookies();

  cookieStore.delete(ADMIN_COOKIE_NAME);

  redirect("/admin/requests");
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get(ADMIN_COOKIE_NAME);

  if (!authCookie?.value) {
    return false;
  }

  return authCookie.value === getAdminPasswordHash();
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

  if (!allowedStatuses.includes(status)) {
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