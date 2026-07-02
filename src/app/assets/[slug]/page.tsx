import { notFound } from "next/navigation";
import PublicFooter from "@/components/PublicFooter";
import RequestAccessCTA from "@/components/RequestAccessCTA";
import SiteNav from "@/components/SiteNav";
import { getProofAsset, proofAssets } from "@/lib/assets";

type AssetDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return proofAssets.map((asset) => ({
    slug: asset.slug,
  }));
}

export default async function AssetDetailPage({ params }: AssetDetailPageProps) {
  const { slug } = await params;
  const asset = getProofAsset(slug);

  if (!asset) {
    notFound();
  }

  const hasProductPage = asset.slug === "ai-document-review-platform";

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <a
          href="/assets"
          className="mb-10 inline-block text-sm text-neutral-500 hover:text-neutral-100"
        >
          ← 返回资产库
        </a>

        <header className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            {asset.category}
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight">
            {asset.zhName}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            {asset.zhSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {hasProductPage ? (
              <a
                href="/product/techproof-ai-document-review"
                className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                查看产品页
              </a>
            ) : null}

            <a
              href="/request-access"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              申请早期访问
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <p className="mb-2 text-sm text-neutral-500">适用对象</p>
              <p className="text-neutral-200">{asset.zhAudience}</p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <p className="mb-2 text-sm text-neutral-500">资产类型</p>
              <p className="text-neutral-200">
                专业能力作品样本，包含文档说明、展示表达和面试防守结构。
              </p>
            </div>
          </div>
        </header>

        <div className="grid gap-6">
          <Section title="最终成果">
            <p>{asset.zhOutcome}</p>
          </Section>

          <Section title="包含材料">
            <List items={asset.zhIncludes} />
          </Section>

          <Section title="展示能力">
            <TagList items={asset.zhAbilities} />
          </Section>

          <Section title="推荐完成流程">
            <OrderedList items={asset.zhWorkflow} />
          </Section>

          <Section title="使用边界">
            <List items={asset.zhBoundary} />
          </Section>

          <section className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="mb-5 text-2xl font-semibold">使用场景</h2>

            <div className="space-y-4 leading-8 text-neutral-300">
              <p>
                这个资产适合需要实习申请、作品集展示、申请材料补充或面试准备的学生。它应当被用作学习、训练和展示框架，而不是替代个人完成过程。
              </p>

              <p>
                最终版本需要结合学生自己的数据、实现选择、书面解释和实际贡献进行个性化修改。
              </p>
            </div>
          </section>
        </div>
      </section>

      <RequestAccessCTA locale="zh" />

      <PublicFooter locale="zh" />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-5 text-2xl font-semibold">{title}</h2>
      <div className="leading-8 text-neutral-300">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-3 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function OrderedList({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal space-y-3 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-400"
        >
          {item}
        </span>
      ))}
    </div>
  );
}