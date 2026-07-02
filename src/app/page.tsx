import Link from "next/link";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

const proofLayers = [
  "Professional context",
  "Final deliverable",
  "Process evidence",
  "Method explanation",
  "Resume language",
  "Interview defense",
  "Extension roadmap",
];

const assetCategories = [
  {
    name: "TechProof",
    body: "For engineering, CS, EE, AI, data, and technical students who need project evidence, technical deliverables, resume language, and interview defense.",
  },
  {
    name: "FinanceProof",
    body: "For students preparing investment research, valuation, market analysis, and finance internship evidence.",
  },
  {
    name: "BusinessProof",
    body: "For students building strategy, product, market entry, operations, or consulting-style evidence assets.",
  },
  {
    name: "ResearchProof",
    body: "For students who need structured research evidence, literature positioning, methodology explanation, and academic-facing project assets.",
  },
];

const currentFocus = [
  "AI Document Review Platform Starter Pack",
  "Student-facing project roadmap",
  "Evidence checklist",
  "Resume bullets",
  "Interview defense points",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.34em] text-amber-300">
              MajorProof
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Build evidence-based professional assets before you need them
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-300">
              MajorProof helps students turn projects, coursework, research,
              and career preparation into structured Proof Assets. Each asset is
              designed to support resumes, applications, interviews, and
              long-term professional positioning.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/ai-roadmap-preview"
                className="inline-flex rounded-2xl bg-amber-300 px-6 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-amber-200"
              >
                Try AI Roadmap Preview
              </Link>

              <Link
                href="/request-access"
                className="inline-flex rounded-2xl border border-neutral-700 px-6 py-4 text-sm font-semibold text-neutral-100 transition hover:border-amber-300 hover:text-amber-200"
              >
                Request early access
              </Link>

              <Link
                href="/product/techproof-ai-document-review"
                className="inline-flex rounded-2xl border border-neutral-700 px-6 py-4 text-sm font-semibold text-neutral-100 transition hover:border-amber-300 hover:text-amber-200"
              >
                View TechProof product
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              AI Preview
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Generate your Proof Asset roadmap
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-300">
              Fill in your major, year, goal, current experience, and main
              problem. MajorProof will generate a structured roadmap preview
              showing which asset direction fits you and what evidence you need
              to build.
            </p>

            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm leading-7 text-amber-100">
              Controlled test feature. Access code required. No homework
              ghostwriting, no fake experience, no guaranteed outcomes.
            </div>

            <Link
              href="/ai-roadmap-preview"
              className="mt-6 inline-flex w-full justify-center rounded-2xl bg-amber-300 px-5 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-amber-200"
            >
              Open AI Roadmap Preview
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-3">
          <ValueCard
            title="For students"
            body="Build professional evidence before applications, internship interviews, graduate school preparation, or career transitions."
          />
          <ValueCard
            title="Not a template library"
            body="MajorProof focuses on evidence systems, not generic resume templates or one-off project ideas."
          />
          <ValueCard
            title="Integrity first"
            body="The system does not fabricate experience, write coursework for users, or promise admissions, grades, internships, jobs, or scholarships."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
            Proof Asset Framework
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A Proof Asset is more than a project
          </h2>

          <p className="mt-5 text-sm leading-7 text-neutral-300">
            A useful professional asset needs context, deliverables, process
            evidence, explanation, resume language, and interview defense. The
            goal is to make a student able to explain what they built, why it
            matters, and how they can extend it.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {proofLayers.map((layer, index) => (
            <div
              key={layer}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-5"
            >
              <p className="text-sm font-semibold text-amber-300">
                Layer {index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {layer}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
            Asset Categories
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Choose the asset direction that fits your target
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {assetCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {category.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                {category.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-amber-400/20 bg-amber-400/10 p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
                Current Focus
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                TechProof AI Document Review Platform
              </h2>

              <p className="mt-5 text-sm leading-7 text-amber-100">
                The first focused product direction is a technical Proof Asset
                starter pack around an AI document review platform. It is aimed
                at students who need a concrete technical project with clear
                deliverables and defensible explanation.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/product/techproof-ai-document-review"
                  className="inline-flex rounded-2xl bg-amber-300 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-200"
                >
                  View product page
                </Link>

                <Link
                  href="/product/techproof-ai-document-review/starter-pack"
                  className="inline-flex rounded-2xl border border-amber-300/40 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200"
                >
                  View Starter Pack
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              {currentFocus.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-amber-300/20 bg-neutral-950/50 p-4 text-sm text-amber-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/70 p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
                Start Here
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Not sure which asset fits you
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-300">
                Use the AI Roadmap Preview first. If the result fits your goal,
                submit a formal early access request and continue into a more
                complete Proof Asset workflow.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="/ai-roadmap-preview"
                className="inline-flex justify-center rounded-2xl bg-amber-300 px-6 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-amber-200"
              >
                Try AI Roadmap Preview
              </Link>

              <Link
                href="/request-access"
                className="inline-flex justify-center rounded-2xl border border-neutral-700 px-6 py-4 text-sm font-semibold text-neutral-100 transition hover:border-amber-300 hover:text-amber-200"
              >
                Request early access
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
}

function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-neutral-300">{body}</p>
    </div>
  );
}