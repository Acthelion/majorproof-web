import "server-only";

import { cookies } from "next/headers";
import crypto from "crypto";

export const ADMIN_COOKIE_NAME = "majorproof_admin_auth";

export type RequestStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "not_fit"
  | "closed";

export const allowedStatuses: RequestStatus[] = [
  "new",
  "contacted",
  "qualified",
  "not_fit",
  "closed",
];

export const statusOptions: { value: RequestStatus; label: string }[] = [
  { value: "new", label: "新申请" },
  { value: "contacted", label: "已联系" },
  { value: "qualified", label: "高意向" },
  { value: "not_fit", label: "暂不匹配" },
  { value: "closed", label: "已关闭" },
];

export function getStatusLabel(status: RequestStatus) {
  const matched = statusOptions.find((option) => option.value === status);

  return matched?.label || "新申请";
}

export function getAdminPasswordHash() {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    throw new Error("Missing ADMIN_PASSWORD");
  }

  return crypto.createHash("sha256").update(adminPassword).digest("hex");
}

export function hashAdminPassword(password: string) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get(ADMIN_COOKIE_NAME);

  if (!authCookie?.value) {
    return false;
  }

  return authCookie.value === getAdminPasswordHash();
}

export async function setAdminAuthCookie(password: string) {
  const submittedHash = hashAdminPassword(password);
  const correctHash = getAdminPasswordHash();

  if (submittedHash !== correctHash) {
    return false;
  }

  const cookieStore = await cookies();

  cookieStore.set(ADMIN_COOKIE_NAME, submittedHash, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 60 * 60 * 12,
  });

  return true;
}

export async function clearAdminAuthCookie() {
  const cookieStore = await cookies();

  cookieStore.set(ADMIN_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 0,
  });
}