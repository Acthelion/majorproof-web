import PublicFooter from "@/components/PublicFooter";
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
          首发专业能力资产。
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          以下资产用于验证 MajorProof 的核心产品形态。每一项资产都围绕一个具体专业场景展开，
          包含最终成果、过程证据、方法解释、简历表达、面试防守和扩展路线。
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {proofAssets.map((asset) => (
            <a
              key={asset.slug}
              href={`/assets/${asset.slug}`}
              className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-600"
            >
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                {asset.category}
              </p>

              <h2 className="mb-3 text-2xl font-semibold">{asset.zhName}</h2>

              <p className="mb-5 text-sm leading-6 text-neutral-400">
                {asset.zhSubtitle}
              </p>

              <p className="text-sm text-neutral-500">{asset.zhAudience}</p>
            </a>
          ))}
        </div>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
}