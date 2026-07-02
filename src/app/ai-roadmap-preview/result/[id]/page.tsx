import Link from "next/link";
import { notFound } from "next/navigation";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

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
  created_at: string;
};

export default async function AiRoadmapPreviewResultPage({
  params,
}: PageProps) {
  const { id } = await params;

  const { data, error } = await supabaseAdmin
    .from("majorproof_ai_roadmap_previews")
    .select(
      "id, name_or_alias, contact_method, current_major, current_year, target_goal, interested_asset, existing_experience, primary_need, ai_result, created_at"
    )
    .eq("id", id)
    .single();

  if (error || !data) {
    notFound();
  }

  const preview = data as RoadmapPreview;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            MajorProof · AI 资产路线预览结果
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            你的专业能力
            <br />
            资产路线预览
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            这是一份路线预览，不是最终交付资产。它的作用是帮助你判断当前背景适合从哪个 Proof Asset 方向开始，以及后续需要补哪些成果、证据和表达材料。
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            结果只能作为规划参考。MajorProof 不承诺实习、录取、成绩、奖学金或就业结果，也不支持代写作业或编造经历。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/ai-roadmap-preview"
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              重新生成路线预览
            </Link>

            <Link
              href="/request-access"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              申请早期访问
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          <SummaryBlock title="当前专业" body={preview.current_major} />
          <SummaryBlock
            title="当前年级"
            body={preview.current_year || "未填写"}
          />
          <SummaryBlock
            title="资产方向"
            body={preview.interested_asset || "暂不确定"}
          />
          <SummaryBlock title="生成时间" body={formatDate(preview.created_at)} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="space-y-5">
          <InfoPanel title="你的目标" body={preview.target_goal} />

          <InfoPanel title="当前主要问题" body={preview.primary_need} />

          <InfoPanel
            title="已有经历"
            body={preview.existing_experience || "未填写"}
          />

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Next Step
            </p>

            <h2 className="text-2xl font-semibold">想继续做成完整资产</h2>

            <p className="mt-4 leading-7 text-neutral-400">
              如果这份路线符合你的方向，可以提交正式申请，进入 MajorProof 早期测试名单。
            </p>

            <Link
              href="/request-access"
              className="mt-6 inline-flex rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              申请早期访问
            </Link>
          </div>
        </aside>

        <article className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-8">
          <div className="mb-8">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Generated Roadmap
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              AI 生成的路线预览
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              下面的内容按照 MajorProof 的 Proof Asset 结构生成，包括资产方向、项目建议、最终成果、过程证据、简历表达、面试防守和扩展路线。
            </p>
          </div>

          <div className="whitespace-pre-wrap rounded-3xl border border-neutral-800 bg-neutral-950 p-6 text-sm leading-8 text-neutral-300 md:p-8">
            {preview.ai_result}
          </div>
        </article>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
}

function SummaryBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="text-sm text-neutral-500">{title}</p>
      <p className="mt-3 text-xl font-semibold text-neutral-100">{body}</p>
    </div>
  );
}

function InfoPanel({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-4 whitespace-pre-wrap leading-7 text-neutral-400">
        {body}
      </p>
    </div>
  );
}

function formatDate(value: string) {
  return new Date(value).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}