import { NextResponse } from "next/server";
import {
  allowedStatuses,
  isAdminAuthenticated,
} from "@/lib/adminAuth";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return redirectTo(requestUrl, "/admin/requests?error=unauthorized");
  }

  try {
    const formData = await request.formData();

    const requestId = String(formData.get("requestId") || "").trim();
    const status = String(formData.get("status") || "").trim();
    const adminNote = String(formData.get("adminNote") || "").trim();

    if (!requestId) {
      return redirectTo(requestUrl, "/admin/requests?error=missing-request-id");
    }

    if (!allowedStatuses.includes(status as (typeof allowedStatuses)[number])) {
      return redirectTo(requestUrl, "/admin/requests?error=invalid-status");
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
      console.error("Route update request failed:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      });

      return redirectTo(requestUrl, "/admin/requests?error=update-failed");
    }

    return redirectTo(requestUrl, "/admin/requests");
  } catch (error) {
    console.error("Unexpected route update error:", error);

    return redirectTo(requestUrl, "/admin/requests?error=update-failed");
  }
}

function redirectTo(requestUrl: URL, path: string) {
  return NextResponse.redirect(new URL(path, requestUrl.origin), {
    status: 303,
  });
}