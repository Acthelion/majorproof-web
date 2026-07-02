import type { ReactNode } from "react";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";
import {
  getStatusLabel,
  statusOptions,
  type RequestStatus,
} from "@/lib/adminAuth";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import {
  generateAiAnalysis,
  isAdminAuthenticated,
  loginAdmin,
  logoutAdmin,
  updateRequestStatus,
} from "./actions";

type SearchParams = Promise<{
  error?: string;
  status?: string;
  asset?: string;
  source?: string;
  q?: string;
}>;

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
  ai_analysis: string | null;
  ai_intent_level: string | null;
  ai_recommended_asset: string | null;
  ai_followup_message: string | null;
  ai_analyzed_at: string | null;
  created_at: string;
  updated_at: string | null;
};

type FilterState = {
  status: string;
  asset: string;
  source: string;
  q: string;
};

export default async function AdminRequestsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const authenticated = await isAdminAuthenticated();
  const resolvedSearchParams = await searchParams;

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-100">
        <SiteNav locale="zh" />

        <section className="mx-auto max-w-xl px-6 py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Admin
          </p>

          <h1 className="text-5xl font-semibold tracking-tight">后台登录</h1>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            请输入后台密码查看 MajorProof 早期访问申请数据。
          </p>

          {resolvedSearchParams.error ? (
            <div className="mt-8 rounded-2xl border border-red-900/60 bg-red-950/40 p-4 text-sm leading-6 text-red-200">
              {getAdminErrorMessage(resolvedSearchParams.error)}
            </div>
          ) : null}

          <form
            action={loginAdmin}
            className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-900 p-6"
          >
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-neutral-300">
                后台密码
              </span>

              <input
                type="password"
                name="password"
                required
                placeholder="输入 ADMIN_PASSWORD"
                className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
              />
            </label>

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-950 transition hover:bg-white"
            >
              登录后台
            </button>
          </form>
        </section>

        <PublicFooter locale="zh" />
      </main>
    );
  }

  const { data, error } = await supabaseAdmin
    .from("majorproof_requests")
    .select(
      "id, name_or_alias, contact_method, current_major, current_year, target_goal, interested_assets, primary_need, language_preference, willing_to_test, source_page, asset_intent, purchase_intent, expected_price_range, status, admin_note, ai_analysis, ai_intent_level, ai_recommended_asset, ai_followup_message, ai_analyzed_at, created_at, updated_at"
    )
    .order("created_at", { ascending: false });

  const allRequests = (data || []) as MajorProofRequest[];

  const filters: FilterState = {
    status: resolvedSearchParams.status || "all",
    asset: resolvedSearchParams.asset || "all",
    source: resolvedSearchParams.source || "all",
    q: resolvedSearchParams.q || "",
  };

  const requests = filterRequests(allRequests, filters);

  const total = allRequests.length;
  const filteredTotal = requests.length;
  const willingToTestCount = requests.filter(
    (request) => request.willing_to_test
  ).length;

  const aiAnalyzedCount = requests.filter(
    (request) => request.ai_analyzed_at
  ).length;

  const assetOptions = getAssetOptions(allRequests);
  const sourceOptions = getSourceOptions(allRequests);

  const assetCounts = countAssets(requests);
  const majorCounts = countByField(requests, "current_major");
  const sourceCounts = countByField(requests, "source_page");
  const assetIntentCounts = countByField(requests, "asset_intent");
  const purchaseIntentCounts = countByField(requests, "purchase_intent");
  const priceRangeCounts = countByField(requests, "expected_price_range");
  const aiIntentCounts = countByField(requests, "ai_intent_level");
  const aiAssetCounts = countByField(requests, "ai_recommended_asset");
  const statusCounts = countStatuses(requests);

  const exportHref = buildExportHref(filters);
  const hasActiveFilters = hasFilters(filters);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Admin
            </p>

            <h1 className="text-5xl font-semibold tracking-tight">
              早期访问申请数据
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              这里用于查看、筛选、导出、AI 分析和管理 MajorProof 表单收集到的真实需求。重点看专业分布、资产方向、购买意向、价格区间、AI 判断和后续跟进状态。
            </p>
          </div>

          <form action={logoutAdmin}>
            <button
              type="submit"
              className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              退出后台
            </button>
          </form>
        </div>

        {resolvedSearchParams.error ? (
          <div className="mb-8 rounded-3xl border border-red-900/60 bg-red-950/40 p-6 text-red-200">
            <h2 className="mb-3 text-2xl font-semibold">后台操作失败</h2>
            <p className="leading-7">
              {getAdminErrorMessage(resolvedSearchParams.error)}
            </p>
          </div>
        ) : null}

        {error ? (
          <div className="mb-8 rounded-3xl border border-red-900/60 bg-red-950/40 p-6 text-red-200">
            <h2 className="mb-3 text-2xl font-semibold">读取数据失败</h2>
            <p className="leading-7">{error.message}</p>
          </div>
        ) : null}

        <FilterPanel
          filters={filters}
          assetOptions={assetOptions}
          sourceOptions={sourceOptions}
          exportHref={exportHref}
          hasActiveFilters={hasActiveFilters}
        />

        <div className="mb-8 grid gap-5 md:grid-cols-4">
          <StatCard
            title="当前筛选结果"
            value={`${filteredTotal} / ${total}`}
          />
          <StatCard title="愿意早期测试" value={String(willingToTestCount)} />
          <StatCard title="AI 已分析" value={String(aiAnalyzedCount)} />
          <StatCard
            title="最近提交"
            value={requests[0] ? formatDate(requests[0].created_at) : "暂无"}
          />
        </div>

        <div className="mb-8 grid gap-5 md:grid-cols-2">
          <SummaryCard title="状态统计" items={statusCounts} />
          <SummaryCard title="AI 意向等级统计" items={aiIntentCounts} />
          <SummaryCard title="AI 推荐资产统计" items={aiAssetCounts} />
          <SummaryCard title="购买意向统计" items={purchaseIntentCounts} />
          <SummaryCard title="价格区间统计" items={priceRangeCounts} />
          <SummaryCard title="资产方向统计" items={assetCounts} />
          <SummaryCard title="专业方向统计" items={majorCounts} />
          <SummaryCard title="来源页面统计" items={sourceCounts} />
          <SummaryCard title="资产意向统计" items={assetIntentCounts} />
        </div>

        <div className="space-y-5">
          {requests.length === 0 ? (
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
              <h2 className="text-2xl font-semibold">没有匹配的申请数据</h2>
              <p className="mt-3 leading-7 text-neutral-400">
                可以调整筛选条件，或者清空筛选后查看全部申请。
              </p>
            </div>
          ) : (
            requests.map((request) => (
              <RequestCard key={request.id} request={request} />
            ))
          )}
        </div>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
}
function FilterPanel({
  filters,
  assetOptions,
  sourceOptions,
  exportHref,
  hasActiveFilters,
}: {
  filters: FilterState;
  assetOptions: string[];
  sourceOptions: string[];
  exportHref: string;
  hasActiveFilters: boolean;
}) {
  return (
    <div className="mb-8 rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">筛选和导出</h2>
          <p className="mt-2 leading-7 text-neutral-400">
            用状态、资产、来源和关键词快速定位高价值申请，也可以导出当前筛选结果。
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          {hasActiveFilters ? (
            <a
              href="/admin/requests"
              className="rounded-full border border-neutral-700 px-5 py-3 text-center text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              清空筛选
            </a>
          ) : null}

          <a
            href={exportHref}
            className="rounded-full bg-neutral-100 px-5 py-3 text-center text-sm font-medium text-neutral-950 transition hover:bg-white"
          >
            导出 CSV
          </a>
        </div>
      </div>

      <form
        method="get"
        action="/admin/requests"
        className="grid gap-4 md:grid-cols-4"
      >
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-300">
            跟进状态
          </span>

          <select
            name="status"
            defaultValue={filters.status}
            className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition focus:border-neutral-500"
          >
            <option value="all">全部状态</option>
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-300">
            资产方向
          </span>

          <select
            name="asset"
            defaultValue={filters.asset}
            className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition focus:border-neutral-500"
          >
            <option value="all">全部资产</option>
            {assetOptions.map((asset) => (
              <option key={asset} value={asset}>
                {asset}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-300">
            来源页面
          </span>

          <select
            name="source"
            defaultValue={filters.source}
            className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition focus:border-neutral-500"
          >
            <option value="all">全部来源</option>
            {sourceOptions.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-neutral-300">
            关键词
          </span>

          <input
            name="q"
            defaultValue={filters.q}
            placeholder="专业、需求、价格、联系方式、备注"
            className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
          />
        </label>

        <div className="md:col-span-4">
          <button
            type="submit"
            className="rounded-full bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white"
          >
            应用筛选
          </button>
        </div>
      </form>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <p className="mb-3 text-sm text-neutral-500">{title}</p>
      <p className="text-3xl font-semibold text-neutral-100">{value}</p>
    </div>
  );
}

function SummaryCard({
  title,
  items,
}: {
  title: string;
  items: { label: string; count: number }[];
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-5 text-2xl font-semibold">{title}</h2>

      {items.length === 0 ? (
        <p className="leading-7 text-neutral-500">暂无数据</p>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950 p-4"
            >
              <p className="text-neutral-300">{item.label}</p>
              <p className="text-lg font-semibold text-neutral-100">
                {item.count}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function RequestCard({ request }: { request: MajorProofRequest }) {
  const status = request.status || "new";

  return (
    <article className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <div className="mb-6 flex flex-col gap-4 border-b border-neutral-800 pb-5 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            {request.name_or_alias || "未填写称呼"}
          </h2>

          <p className="mt-2 text-sm text-neutral-500">
            提交时间：{formatDateTime(request.created_at)}
          </p>

          {request.updated_at ? (
            <p className="mt-1 text-sm text-neutral-600">
              更新时间：{formatDateTime(request.updated_at)}
            </p>
          ) : null}

          {request.ai_analyzed_at ? (
            <p className="mt-1 text-sm text-neutral-600">
              AI 分析时间：{formatDateTime(request.ai_analyzed_at)}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          <StatusTag status={status} />
          <Tag>{request.current_major}</Tag>
          {request.current_year ? <Tag>{request.current_year}</Tag> : null}
          {request.asset_intent ? <Tag>{request.asset_intent}</Tag> : null}
          {request.expected_price_range ? (
            <Tag>{request.expected_price_range}</Tag>
          ) : null}
          {request.ai_intent_level ? (
            <Tag>AI {request.ai_intent_level}</Tag>
          ) : null}
          {request.willing_to_test ? <Tag>愿意早期测试</Tag> : null}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <InfoBlock title="联系方式" body={request.contact_method} />
        <InfoBlock title="主要目标" body={request.target_goal || "未填写"} />
        <InfoBlock
          title="偏好语言"
          body={request.language_preference || "未填写"}
        />
        <InfoBlock
          title="感兴趣资产"
          body={
            request.interested_assets && request.interested_assets.length > 0
              ? request.interested_assets.join(" / ")
              : "未选择"
          }
        />
        <InfoBlock title="来源页面" body={request.source_page || "未记录"} />
        <InfoBlock title="资产意向" body={request.asset_intent || "未记录"} />
        <InfoBlock
          title="购买意向"
          body={request.purchase_intent || "未填写"}
        />
        <InfoBlock
          title="价格区间"
          body={request.expected_price_range || "未填写"}
        />
      </div>

      <div className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
        <h3 className="mb-3 text-lg font-semibold">主要需求</h3>
        <p className="whitespace-pre-wrap leading-8 text-neutral-300">
          {request.primary_need}
        </p>
      </div>

      <AiAnalysisBlock request={request} />

      <form
        action={updateRequestStatus}
        className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-950 p-5"
      >
        <input type="hidden" name="requestId" value={request.id} />

        <div className="grid gap-5 md:grid-cols-[0.35fr_0.65fr]">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-neutral-300">
              跟进状态
            </span>

            <select
              name="status"
              defaultValue={status}
              className="w-full rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-neutral-100 outline-none transition focus:border-neutral-500"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-neutral-300">
              后台备注
            </span>

            <textarea
              name="adminNote"
              defaultValue={request.admin_note || ""}
              rows={4}
              placeholder="例如：EE 大二，TechProof，高意向，愿意接受 ¥29–69"
              className="w-full resize-none rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-5 rounded-full bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white"
        >
          保存跟进状态
        </button>
      </form>
    </article>
  );
}

function AiAnalysisBlock({ request }: { request: MajorProofRequest }) {
  return (
    <div className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold">AI 分析结果</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-500">
            用于内部判断用户画像、意向等级、资产匹配和跟进话术。
          </p>
        </div>

        <form action={generateAiAnalysis}>
          <input type="hidden" name="requestId" value={request.id} />

          <button
            type="submit"
            className="rounded-full border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
          >
            {request.ai_analyzed_at ? "重新 AI 分析" : "AI 分析申请"}
          </button>
        </form>
      </div>

      {request.ai_analysis ? (
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <InfoBlock
              title="AI 意向等级"
              body={request.ai_intent_level || "未返回"}
            />
            <InfoBlock
              title="AI 推荐资产"
              body={request.ai_recommended_asset || "未返回"}
            />
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="mb-2 text-sm text-neutral-500">AI 用户分析</p>
            <p className="whitespace-pre-wrap leading-8 text-neutral-300">
              {request.ai_analysis}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="mb-2 text-sm text-neutral-500">建议跟进话术</p>
            <p className="whitespace-pre-wrap leading-8 text-neutral-300">
              {request.ai_followup_message || "未返回"}
            </p>
          </div>
        </div>
      ) : (
        <p className="leading-7 text-neutral-500">
          暂无 AI 分析。点击按钮后，系统会根据申请内容生成内部判断和建议话术。
        </p>
      )}
    </div>
  );
}
function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
      <p className="mb-2 text-sm text-neutral-500">{title}</p>
      <p className="break-words leading-7 text-neutral-300">{body}</p>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300">
      {children}
    </span>
  );
}

function StatusTag({ status }: { status: RequestStatus }) {
  return (
    <span className="rounded-full border border-neutral-600 bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-950">
      {getStatusLabel(status)}
    </span>
  );
}

function filterRequests(
  requests: MajorProofRequest[],
  filters: FilterState
) {
  const query = filters.q.trim().toLowerCase();

  return requests.filter((request) => {
    const requestStatus = request.status || "new";

    if (filters.status !== "all" && requestStatus !== filters.status) {
      return false;
    }

    if (filters.asset !== "all") {
      const interestedAssets = request.interested_assets || [];
      const assetMatches =
        request.asset_intent === filters.asset ||
        interestedAssets.includes(filters.asset);

      if (!assetMatches) {
        return false;
      }
    }

    if (filters.source !== "all" && request.source_page !== filters.source) {
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
        request.ai_analysis,
        request.ai_intent_level,
        request.ai_recommended_asset,
        request.ai_followup_message,
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

function countAssets(requests: MajorProofRequest[]) {
  const counts = new Map<string, number>();

  for (const request of requests) {
    for (const asset of request.interested_assets || []) {
      counts.set(asset, (counts.get(asset) || 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}

function countByField(
  requests: MajorProofRequest[],
  field: keyof Pick<
    MajorProofRequest,
    | "current_major"
    | "source_page"
    | "asset_intent"
    | "purchase_intent"
    | "expected_price_range"
    | "ai_intent_level"
    | "ai_recommended_asset"
  >
) {
  const counts = new Map<string, number>();

  for (const request of requests) {
    const value = String(request[field] || "").trim();

    if (!value) {
      continue;
    }

    counts.set(value, (counts.get(value) || 0) + 1);
  }

  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}

function countStatuses(requests: MajorProofRequest[]) {
  const counts = new Map<string, number>();

  for (const request of requests) {
    const status = request.status || "new";
    const label = getStatusLabel(status);

    counts.set(label, (counts.get(label) || 0) + 1);
  }

  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}

function getAssetOptions(requests: MajorProofRequest[]) {
  const values = new Set<string>();

  for (const request of requests) {
    if (request.asset_intent) {
      values.add(request.asset_intent);
    }

    if (request.ai_recommended_asset) {
      values.add(request.ai_recommended_asset);
    }

    for (const asset of request.interested_assets || []) {
      values.add(asset);
    }
  }

  return [...values].sort();
}

function getSourceOptions(requests: MajorProofRequest[]) {
  const values = new Set<string>();

  for (const request of requests) {
    if (request.source_page) {
      values.add(request.source_page);
    }
  }

  return [...values].sort();
}

function hasFilters(filters: FilterState) {
  return (
    filters.status !== "all" ||
    filters.asset !== "all" ||
    filters.source !== "all" ||
    Boolean(filters.q.trim())
  );
}

function buildExportHref(filters: FilterState) {
  const params = new URLSearchParams();

  if (filters.status !== "all") {
    params.set("status", filters.status);
  }

  if (filters.asset !== "all") {
    params.set("asset", filters.asset);
  }

  if (filters.source !== "all") {
    params.set("source", filters.source);
  }

  if (filters.q.trim()) {
    params.set("q", filters.q.trim());
  }

  const query = params.toString();

  return query
    ? `/admin/requests/export?${query}`
    : "/admin/requests/export";
}

function getAdminErrorMessage(error: string) {
  if (error === "wrong-password") {
    return "密码错误，请重新输入。";
  }

  if (error === "missing-password") {
    return "请输入后台密码。";
  }

  if (error === "unauthorized") {
    return "后台登录状态已失效，请重新登录。";
  }

  if (error === "missing-request-id") {
    return "缺少申请记录 ID，无法更新。";
  }

  if (error === "invalid-status") {
    return "跟进状态无效，请重新选择。";
  }

  if (error === "update-failed") {
    return "保存失败，请检查 Supabase 字段是否已经创建。";
  }

  if (error === "ai-read-failed") {
    return "AI 分析失败：无法读取这条申请记录。";
  }
    
  if (error === "missing-openai-key") {
    return "AI 分析失败：Netlify 或本地环境变量缺少 OPENAI_API_KEY。";
  }

  if (error === "ai-save-failed") {
    return "AI 分析失败：结果无法保存到 Supabase。";
  }

  if (error === "ai-generate-failed") {
    return "AI 分析失败：OpenAI 请求失败，请检查 OPENAI_API_KEY、模型名称和账户额度。";
  }

  return "操作失败，请稍后重试。";
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}