import PublicFooter from "@/components/PublicFooter";
import RequestAccessCTA from "@/components/RequestAccessCTA";
import SiteNav from "@/components/SiteNav";
import { proofAssets } from "@/lib/assets";

export default function AssetsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Proof Assets
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight">
          首批专业能力资产
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          MajorProof 第一阶段用于验证学生是否愿意为结构化专业能力证据付费，而不是只购买孤立模板。每个资产都围绕具体的学习、求职或申请场景设计，并包含成果本体、过程证据、方法解释、简历表达、面试防守和扩展路线。
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {proofAssets.map((asset) => {
            const hasProductPage =
              asset.slug === "ai-document-review-platform";

            return (
              <article
                key={asset.slug}
                className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-600 hover:bg-neutral-900/80"
              >
                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                  {asset.category}
                </p>

                <h2 className="mb-3 text-2xl font-semibold text-neutral-100">
                  {asset.zhName}
                </h2>

                <p className="mb-5 text-sm leading-6 text-neutral-400">
                  {asset.zhSubtitle}
                </p>

                <div className="mb-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-neutral-600">
                    Audience
                  </p>
                  <p className="text-sm text-neutral-400">
                    {asset.zhAudience}
                  </p>
                </div>

                <div className="flex flex-col gap-3 border-t border-neutral-800 pt-4 text-sm">
                  {hasProductPage ? (
                    <a
                      href="/product/techproof-ai-document-review"
                      className="rounded-full bg-neutral-100 px-5 py-2 text-center font-medium text-neutral-950 transition hover:bg-white"
                    >
                      查看产品页
                    </a>
                  ) : null}

                  <a
                    href={`/assets/${asset.slug}`}
                    className="rounded-full border border-neutral-700 px-5 py-2 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
                  >
                    查看资产结构
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <RequestAccessCTA locale="zh" />

      <PublicFooter locale="zh" />
    </main>
  );
}