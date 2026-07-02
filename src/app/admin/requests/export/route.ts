import { NextResponse } from "next/server";
import {
  getStatusLabel,
  isAdminAuthenticated,
  type RequestStatus,
} from "@/lib/adminAuth";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

type MajorProofRequest = {
  id: string;
  name_or_alias: string | null;
  contact_method: string;
  current_major: string;
  current_year: string | null;
  target_goal: string | null;
  interested_assets: string[] | null;
  primary_need: string;
  language_preference: string | null;
  willing_to_test: boolean;
  source_page: string | null;
  asset_intent: string | null;
  purchase_intent: string | null;
  expected_price_range: string | null;
  status: RequestStatus | null;
  admin_note: string | null;
  created_at: string;
  updated_at: string | null;
};

export async function GET(request: Request) {
  const authenticated = await isAdminAuthenticated();
  const requestUrl = new URL(request.url);

  if (!authenticated) {
    return NextResponse.redirect(
      new URL("/admin/requests?error=unauthorized", requestUrl.origin)
    );
  }

  const { data, error } = await supabaseAdmin
    .from("majorproof_requests")
    .select(
      "id, name_or_alias, contact_method, current_major, current_year, target_goal, interested_assets, primary_need, language_preference, willing_to_test, source_page, asset_intent, purchase_intent, expected_price_range, status, admin_note, created_at, updated_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    return new NextResponse(`Failed to export requests: ${error.message}`, {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  const allRequests = (data || []) as MajorProofRequest[];
  const filteredRequests = filterRequests(allRequests, requestUrl.searchParams);
  const csv = buildCsv(filteredRequests);
  const filename = `majorproof-requests-${getDateStamp()}.csv`;

  return new NextResponse(`\uFEFF${csv}`, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}

function filterRequests(
  requests: MajorProofRequest[],
  searchParams: URLSearchParams
) {
  const status = searchParams.get("status") || "all";
  const asset = searchParams.get("asset") || "all";
  const source = searchParams.get("source") || "all";
  const query = (searchParams.get("q") || "").trim().toLowerCase();

  return requests.filter((request) => {
    const requestStatus = request.status || "new";

    if (status !== "all" && requestStatus !== status) {
      return false;
    }

    if (asset !== "all") {
      const interestedAssets = request.interested_assets || [];
      const assetMatches =
        request.asset_intent === asset || interestedAssets.includes(asset);

      if (!assetMatches) {
        return false;
      }
    }

    if (source !== "all" && request.source_page !== source) {
      return false;
    }

    if (query) {
      const searchableText = [
        request.name_or_alias,
        request.contact_method,
        request.current_major,
        request.current_year,
        request.target_goal,
        request.primary_need,
        request.language_preference,
        request.source_page,
        request.asset_intent,
        request.purchase_intent,
        request.expected_price_range,
        request.admin_note,
        ...(request.interested_assets || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      if (!searchableText.includes(query)) {
        return false;
      }
    }

    return true;
  });
}

function buildCsv(requests: MajorProofRequest[]) {
  const headers = [
    "id",
    "name_or_alias",
    "contact_method",
    "current_major",
    "current_year",
    "target_goal",
    "interested_assets",
    "primary_need",
    "language_preference",
    "willing_to_test",
    "source_page",
    "asset_intent",
    "purchase_intent",
    "expected_price_range",
    "status",
    "status_label",
    "admin_note",
    "created_at",
    "updated_at",
  ];

  const rows = requests.map((request) => {
    const status: RequestStatus = request.status || "new";

    return [
      request.id,
      request.name_or_alias || "",
      request.contact_method,
      request.current_major,
      request.current_year || "",
      request.target_goal || "",
      (request.interested_assets || []).join(" / "),
      request.primary_need,
      request.language_preference || "",
      request.willing_to_test ? "yes" : "no",
      request.source_page || "",
      request.asset_intent || "",
      request.purchase_intent || "",
      request.expected_price_range || "",
      status,
      getStatusLabel(status),
      request.admin_note || "",
      request.created_at,
      request.updated_at || "",
    ];
  });

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