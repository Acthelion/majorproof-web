import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { isAdminAuthenticated, loginAdmin, logoutAdmin } from "./actions";

type SearchParams = Promise<{
  error?: string;
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
  created_at: string;
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
              {resolvedSearchParams.error === "wrong-password"
                ? "密码错误，请重新输入。"
                : "请输入后台密码。"}
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
      "id, name_or_alias, contact_method, current_major, current_year, target_goal, interested_assets, primary_need, language_preference, willing_to_test, source_page, asset_intent, created_at"
    )
    .order("created_at", { ascending: false });

  const requests = (data || []) as MajorProofRequest[];

  const total = requests.length;
  const willingToTestCount = requests.filter(
    (request) => request.willing_to_test
  ).length;

  const assetCounts = countAssets(requests);
  const majorCounts = countByField(requests, "current_major");
  const sourceCounts = countByField(requests, "source_page");
  const assetIntentCounts = countByField(requests, "asset_intent");

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
              这里用于查看 MajorProof 表单收集到的真实需求。重点看专业分布、资产方向、来源页面、主要痛点和是否愿意参与早期测试。
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

        {error ? (
          <div className="mb-8 rounded-3xl border border-red-900/60 bg-red-950/40 p-6 text-red-200">
            <h2 className="mb-3 text-2xl font-semibold">读取数据失败</h2>
            <p className="leading-7">{error.message}</p>
          </div>
        ) : null}

        <div className="mb-8 grid gap-5 md:grid-cols-3">
          <StatCard title="总申请数" value={String(total)} />
          <StatCard title="愿意早期测试" value={String(willingToTestCount)} />
          <StatCard
            title="最近提交"
            value={requests[0] ? formatDate(requests[0].created_at) : "暂无"}
          />
        </div>

        <div className="mb-8 grid gap-5 md:grid-cols-2">
          <SummaryCard title="资产方向统计" items={assetCounts} />
          <SummaryCard title="专业方向统计" items={majorCounts} />
          <SummaryCard title="来源页面统计" items={sourceCounts} />
          <SummaryCard title="资产意向统计" items={assetIntentCounts} />
        </div>

        <div className="space-y-5">
          {requests.length === 0 ? (
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
              <h2 className="text-2xl font-semibold">暂无申请数据</h2>
              <p className="mt-3 leading-7 text-neutral-400">
                当用户提交 request-access 表单后，数据会显示在这里。
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
  return (
    <article className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <div className="mb-6 flex flex-col gap-4 border-b border-neutral-800 pb-5 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            {request.name_or_alias || "未填写称呼"}
          </h2>

          <p className="mt-2 text-sm text-neutral-500">
            {formatDateTime(request.created_at)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Tag>{request.current_major}</Tag>
          {request.current_year ? <Tag>{request.current_year}</Tag> : null}
          {request.asset_intent ? <Tag>{request.asset_intent}</Tag> : null}
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
      </div>

      <div className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
        <h3 className="mb-3 text-lg font-semibold">主要需求</h3>
        <p className="whitespace-pre-wrap leading-8 text-neutral-300">
          {request.primary_need}
        </p>
      </div>
    </article>
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

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300">
      {children}
    </span>
  );
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
    "current_major" | "source_page" | "asset_intent"
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