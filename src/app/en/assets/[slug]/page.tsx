import { notFound } from "next/navigation";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";
import { getProofAsset, proofAssets } from "@/lib/assets";

type EnglishAssetDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return proofAssets.map((asset) => ({
    slug: asset.slug,
  }));
}

export default async function EnglishAssetDetailPage({
  params,
}: EnglishAssetDetailPageProps) {
  const { slug } = await params;
  const asset = getProofAsset(slug);

  if (!asset) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <a
          href="/en/assets"
          className="mb-10 inline-block text-sm text-neutral-500 hover:text-neutral-100"
        >
          ← Back to asset list
        </a>

        <header className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            {asset.category}
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight">
            {asset.enName}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            {asset.enSubtitle}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <p className="mb-2 text-sm text-neutral-500">Audience</p>
              <p className="text-neutral-200">{asset.enAudience}</p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <p className="mb-2 text-sm text-neutral-500">Asset Type</p>
              <p className="text-neutral-200">
                Professional work sample with documentation, presentation
                language, and interview defense.
              </p>
            </div>
          </div>
        </header>

        <div className="grid gap-6">
          <Section title="Final Deliverable">
            <p>{asset.enOutcome}</p>
          </Section>

          <Section title="Included Materials">
            <List items={asset.enIncludes} />
          </Section>

          <Section title="Demonstrated Abilities">
            <TagList items={asset.enAbilities} />
          </Section>

          <Section title="Recommended Workflow">
            <OrderedList items={asset.enWorkflow} />
          </Section>

          <Section title="Scope Boundary">
            <List items={asset.enBoundary} />
          </Section>

          <section className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="mb-5 text-2xl font-semibold">Use Case</h2>
            <div className="space-y-4 leading-8 text-neutral-300">
              <p>
                This asset is intended for students who need a concrete work
                sample for internships, applications, portfolios, or interview
                preparation. It should be used as a structured learning and
                presentation framework rather than a substitute for personal
                work.
              </p>
              <p>
                The final version should be adapted with the student&apos;s own
                data, implementation choices, written explanation, and
                demonstrated contribution.
              </p>
            </div>
          </section>
        </div>
      </section>

      <PublicFooter locale="en" />
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