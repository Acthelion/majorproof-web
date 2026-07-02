"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";

const ADMIN_COOKIE_NAME = "majorproof_admin_auth";

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

  const submittedHash = crypto.createHash("sha256").update(password).digest("hex");
  const correctHash = getAdminPasswordHash();

  if (submittedHash !== correctHash) {
    redirect("/admin/requests?error=wrong-password");
  }

  const cookieStore = await cookies();

  cookieStore.set(ADMIN_COOKIE_NAME, submittedHash, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
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