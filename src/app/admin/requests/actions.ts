"use server";

import { redirect } from "next/navigation";
import {
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