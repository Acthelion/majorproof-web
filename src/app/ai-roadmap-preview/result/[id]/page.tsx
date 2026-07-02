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
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-16">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">
            MajorProof AI Preview
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            AI Asset Roadmap Result
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            This is a roadmap preview, not a final Proof Asset. It helps you
            identify the most suitable asset direction and the evidence you
            still need to build.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <SummaryCard title="Current major" body={preview.current_major} />
          <SummaryCard
            title="Current year"
            body={preview.current_year || "Not provided"}
          />
          <SummaryCard
            title="Asset direction"
            body={preview.interested_asset || "Not sure yet"}
          />
        </div>

        <div className="mb-8 rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-white">Target goal</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-300">
            {preview.target_goal}
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">
            Main problem
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-300">
            {preview.primary_need}
          </p>
        </div>

        <article className="rounded-3xl border border-amber-400/20 bg-neutral-900 p-6 shadow-2xl shadow-black/30 md:p-8">
          <h2 className="text-2xl font-semibold text-white">
            AI generated roadmap preview
          </h2>

          <div className="mt-6 whitespace-pre-wrap rounded-2xl border border-neutral-800 bg-neutral-950 p-5 text-sm leading-8 text-neutral-200">
            {preview.ai_result}
          </div>
        </article>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">
              Build the full asset
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300">
              If this direction fits your goal, submit a formal request and join
              the MajorProof early validation list.
            </p>
            <Link
              href="/request-access"
              className="mt-6 inline-flex rounded-2xl bg-amber-300 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-200"
            >
              Submit formal request
            </Link>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">
              Generate again
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300">
              If your first input was too short, add more course, project,
              skill, role, or application details and generate again.
            </p>
            <Link
              href="/ai-roadmap-preview"
              className="mt-6 inline-flex rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:border-amber-300 hover:text-amber-200"
            >
              Back to form
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
}

function SummaryCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-5">
      <h2 className="text-sm font-medium text-neutral-400">{title}</h2>
      <p className="mt-3 text-base font-semibold text-white">{body}</p>
    </div>
  );
}
