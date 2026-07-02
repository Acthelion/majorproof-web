import { notFound } from "next/navigation";
import PublicFooter from "@/components/PublicFooter";
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

export default async function AssetDetailPage({
  params,
}: AssetDetailPageProps) {
  const { slug } = await params;
  const asset = getProofAsset(slug);

  if (!asset) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <a
          href="/assets"
          className="mb-10 inline-block text-sm text-neutral-500 hover:text-neutral-100"
        >
          ← 返回资产列表
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

          <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <p className="mb-2 text-sm text-neutral-500">适合对象</p>
            <p className="text-neutral-200">{asset.zhAudience}</p>
          </div>
        </header>

        <div className="grid gap-6">
          <Section title="最终成果">
            <p>{asset.zhOutcome}</p>
          </Section>

          <Section title="包含内容">
            <List items={asset.zhIncludes} />
          </Section>

          <Section title="可证明能力">
            <TagList items={asset.zhAbilities} />
          </Section>

          <Section title="建议完成路径">
            <OrderedList items={asset.zhWorkflow} />
          </Section>

          <Section title="使用边界">
            <List items={asset.zhBoundary} />
          </Section>
        </div>
      </section>

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