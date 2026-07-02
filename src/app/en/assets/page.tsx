import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";
import { proofAssets } from "@/lib/assets";

export default function EnglishAssetsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Proof Assets
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight">
          Initial professional assets.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          The first MajorProof assets are designed to test whether students are
          willing to pay for structured professional evidence rather than
          isolated templates. Each asset is built around a concrete academic or
          career context and includes a final deliverable, process evidence,
          method explanation, resume language, interview defense, and extension
          roadmap.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {proofAssets.map((asset) => (
            <a
              key={asset.slug}
              href={`/en/assets/${asset.slug}`}
              className="group rounded-3xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-600 hover:bg-neutral-900/80"
            >
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                {asset.category}
              </p>

              <h2 className="mb-3 text-2xl font-semibold text-neutral-100">
                {asset.enName}
              </h2>

              <p className="mb-5 text-sm leading-6 text-neutral-400">
                {asset.enSubtitle}
              </p>

              <div className="mb-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-neutral-600">
                  Audience
                </p>
                <p className="text-sm text-neutral-400">{asset.enAudience}</p>
              </div>

              <div className="flex items-center justify-between border-t border-neutral-800 pt-4 text-sm">
                <span className="text-neutral-500">View asset structure</span>
                <span className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-100">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <PublicFooter locale="en" />
    </main>
  );
}