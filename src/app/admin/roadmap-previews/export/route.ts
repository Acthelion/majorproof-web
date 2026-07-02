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
  converted_at: string | null;
  created_at: string;
};

export async function GET(request: Request) {
  const authenticated = await isAdminAuthenticated();
  const requestUrl = new URL(request.url);

  if (!authenticated) {
    return NextResponse.redirect(
      new URL("/admin/roadmap-previews", requestUrl.origin)
    );
  }

  const { data, error } = await supabaseAdmin
    .from("majorproof_ai_roadmap_previews")
    .select(
      "id, name_or_alias, contact_method, current_major, current_year, target_goal, interested_asset, existing_experience, primary_need, ai_result, converted_request_id, converted_at, created_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    return new NextResponse(
      `Failed to export roadmap previews: ${error.message}`,
      {
        status: 500,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      }
    );
  }

  const previews = (data || []) as RoadmapPreview[];
  const csv = buildCsv(previews);
  const filename = `majorproof-roadmap-previews-${getDateStamp()}.csv`;

  return new NextResponse(`\uFEFF${csv}`, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}

function buildCsv(previews: RoadmapPreview[]) {
  const headers = [
    "id",
    "name_or_alias",
    "contact_method",
    "current_major",
    "current_year",
    "target_goal",
    "interested_asset",
    "existing_experience",
    "primary_need",
    "ai_result",
    "converted",
    "converted_request_id",
    "converted_at",
    "created_at",
  ];

  const rows = previews.map((preview) => [
    preview.id,
    preview.name_or_alias || "",
    preview.contact_method || "",
    preview.current_major,
    preview.current_year || "",
    preview.target_goal,
    preview.interested_asset || "",
    preview.existing_experience || "",
    preview.primary_need,
    preview.ai_result,
    preview.converted_request_id ? "yes" : "no",
    preview.converted_request_id || "",
    preview.converted_at || "",
    preview.created_at,
  ]);

  return [headers, ...rows]
    .map((row) => row.map(escapeCsvCell).join(","))
    .join("\n");
}

function escapeCsvCell(value: string) {
  const safeValue = String(value).replaceAll('"', '""');

  return `"${safeValue}"`;
}

function getDateStamp() {
  return new Date().toISOString().slice(0, 10);
}