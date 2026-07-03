import PublicFooter from "@/components/PublicFooter";
import RequestAccessCTA from "@/components/RequestAccessCTA";
import SiteNav from "@/components/SiteNav";
import { categories, proofAssetLayersEn } from "@/lib/content";

export default function EnglishHomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            MajorProof · Evidence-based professional assets
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Turn coursework and projects
            <br />
            into verifiable evidence
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            MajorProof helps students turn coursework, project training,
            analytical work, and career preparation into professional assets
            that can be shown, explained, used in resumes, and defended in
            interviews.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            Each asset is built around a concrete professional context and
            includes the final deliverable, process evidence, method
            explanation, resume language, interview defense, and an extension
            roadmap.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/en/ai-roadmap-preview"
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              Try AI Roadmap Preview
            </a>

            <a
              href="/en/request-access"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              Request early access
            </a>

            <a
              href="#categories"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              View asset categories
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value="Evidence assets"
            label="Organize deliverables, process, methods, and positioning into professional proof"
          />
          <StatBlock
            value="Bilingual use"
            label="Useful for domestic internships, international applications, global roles, and portfolios"
          />
          <StatBlock
            value="Defensible results"
            label="Each asset prepares contribution language, method boundaries, and interview follow-up questions"
          />
        </div>
      </section>

      <section id="method" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Asset Method
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            The seven-layer Proof Asset structure
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            A valuable professional asset cannot stop at a final file. It needs
            context, process evidence, method explanation, resume language, and
            interview defense so the student can explain what was built, why it
            matters, and how it can be extended.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          {proofAssetLayersEn.map((layer, index) => (
            <div
              key={layer.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5"
            >
              <p className="mb-5 text-sm text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-lg font-medium">{layer.title}</h3>
              <p className="text-sm leading-6 text-neutral-500">
                {layer.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="categories"
        className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Categories
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Different fields need different forms of evidence
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              Technical students usually need runnable projects. Finance
              students need models, assumptions, and analytical reports.
              Business students need problem framing and strategic reasoning.
              Research students need clear questions, methods, evidence, and
              boundaries.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard
                key={category.key}
                name={category.name}
                audience={category.enAudience}
                title={category.enTitle}
                description={category.enDescription}
                examples={category.enExamples}
                abilities={category.enAbilities}
                href={getCategoryHref(category.name)}
                actionLabel={getCategoryActionLabel(category.name)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Standard
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              The MajorProof asset standard
            </h2>
          </div>

          <div className="space-y-4">
            <DifferenceItem
              title="The result must be showable"
              body="The final asset needs a clear display format, such as a GitHub project, PDF report, Excel model, presentation, research document, or portfolio page."
            />
            <DifferenceItem
              title="The process must be traceable"
              body="Data sources, implementation steps, assumptions, analysis logic, and revision history should be preserved."
            />
            <DifferenceItem
              title="The resume language must be verifiable"
              body="Resume bullets should be accurate, restrained, and explainable. They should not exaggerate contribution or use terms the student cannot defend."
            />
            <DifferenceItem
              title="The interview story must be defensible"
              body="The student should be able to explain the background, personal contribution, method choices, limitations, and possible next steps."
            />
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Pricing Test
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              The first stage is demand validation
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              The current priority is not to build a complex platform
              immediately. The first goal is to validate whether students are
              willing to pay for structured professional assets, display
              materials, and interview explanation systems.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <PriceCard
              title="Roadmap Review"
              price="¥29"
              body="For students who want a low-risk direction check before committing to a full asset pack."
            />
            <PriceCard
              title="Starter Pack"
              price="¥99"
              body="For students who want one concrete asset with structure, deliverables, evidence, resume language, and interview defense."
            />
            <PriceCard
              title="Personalized Plan"
              price="¥199+"
              body="For students who need a more personalized asset path around applications, internships, or portfolio goals."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Start Here
              </p>

              <h2 className="text-4xl font-semibold tracking-tight">
                Not sure which asset fits you
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                Use the AI Roadmap Preview first. If the result fits your goal,
                submit a formal early access request and continue into a more
                complete Proof Asset workflow.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="/en/ai-roadmap-preview"
                className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                Try AI Roadmap Preview
              </a>

              <a
                href="/en/request-access"
                className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
              >
                Request early access
              </a>
            </div>
          </div>
        </div>
      </section>

      <RequestAccessCTA locale="en" />

      <PublicFooter locale="en" />
    </main>
  );
}

function getCategoryHref(name: string) {
  if (name === "TechProof") {
    return "/en/product/techproof-ai-document-review/starter-pack";
  }

  if (name === "FinanceProof") {
    return "/en/product/financeproof-company-research-valuation-kit";
  }

  if (name === "BusinessProof") {
    return "/en/product/businessproof-market-entry-strategy-kit";
  }

  if (name === "ResearchProof") {
    return "/en/product/researchproof-literature-method-kit";
  }

  return "/en/request-access";
}

function getCategoryActionLabel(name: string) {
  if (name === "TechProof") {
    return "View TechProof Starter Pack";
  }

  if (name === "FinanceProof") {
    return "View FinanceProof Valuation Kit";
  }

  if (name === "BusinessProof") {
    return "View BusinessProof Strategy Kit";
  }

  if (name === "ResearchProof") {
    return "View ResearchProof Method Kit";
  }

  return "Request this asset direction";
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-2 text-sm leading-6 text-neutral-500">{label}</p>
    </div>
  );
}

function CategoryCard({
  name,
  audience,
  title,
  description,
  examples,
  abilities,
  href,
  actionLabel,
}: {
  name: string;
  audience: string;
  title: string;
  description: string;
  examples: string[];
  abilities: string[];
  href: string;
  actionLabel: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-neutral-600">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            {name}
          </p>
          <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
        </div>

        <span className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-500">
          Asset
        </span>
      </div>

      <p className="mb-4 text-sm text-neutral-500">{audience}</p>
      <p className="mb-6 leading-7 text-neutral-300">{description}</p>

      <div className="mb-6">
        <p className="mb-3 text-sm font-medium text-neutral-300">
          What it demonstrates
        </p>

        <div className="flex flex-wrap gap-2">
          {abilities.map((ability) => (
            <span
              key={ability}
              className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-400"
            >
              {ability}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-neutral-300">
          Example assets
        </p>

        <div className="flex flex-wrap gap-2">
          {examples.map((example) => (
            <span
              key={example}
              className="rounded-full bg-neutral-900 px-3 py-1 text-sm text-neutral-400"
            >
              {example}
            </span>
          ))}
        </div>
      </div>

      <a
        href={href}
        className="mt-8 inline-flex rounded-full border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
      >
        {actionLabel}
      </a>
    </div>
  );
}

function DifferenceItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}

function PriceCard({
  title,
  price,
  body,
}: {
  title: string;
  price: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-4xl font-semibold">{price}</p>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}