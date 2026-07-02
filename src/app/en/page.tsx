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
            Convert academic work
            <br />
            into verifiable evidence of ability
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            MajorProof develops evidence-based professional assets for students.
            It focuses on how a piece of work is produced, what ability it
            demonstrates, whether it can be presented, and whether it can
            withstand professional scrutiny in resumes and interviews.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            Each asset is built around a concrete academic or career context. It
            includes a final deliverable, process evidence, method explanation,
            resume language, interview defense, and an extension roadmap.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/en/request-access"
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              Request Early Access
            </a>

            <a
              href="#categories"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              View Categories
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value="Evidence of ability"
            label="A structured relation between output, process, method, and presentation"
          />
          <StatBlock
            value="Bilingual expression"
            label="Designed for domestic internships, global roles, and graduate applications"
          />
          <StatBlock
            value="Defensible work"
            label="Each asset prepares contribution, limitations, and improvement paths"
          />
        </div>
      </section>

      <section id="method" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Asset Method
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            The seven-layer structure of a Proof Asset
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            A useful professional asset cannot be reduced to a final file. It
            must clarify its context, document its process, explain its method,
            and translate the work into resume language and interview narrative.
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
              Different disciplines require different forms of evidence
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              Technical fields often rely on runnable projects. Finance relies
              on models, assumptions, and analytical reports. Business fields
              emphasize problem framing and strategic reasoning. Research fields
              require data, methods, and carefully bounded conclusions.
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
              MajorProof asset standards
            </h2>
          </div>

          <div className="space-y-4">
            <DifferenceItem
              title="The output must be presentable"
              body="The final material should have a visible form, such as a GitHub project, PDF report, Excel model, slide deck, research document, or portfolio page."
            />
            <DifferenceItem
              title="The process must be traceable"
              body="Data sources, implementation steps, model assumptions, analytical scope, and revisions should be recorded."
            />
            <DifferenceItem
              title="The resume language must be verifiable"
              body="Resume bullets should be precise, restrained, and explainable without overstating contribution or using terms the student cannot defend."
            />
            <DifferenceItem
              title="The interview narrative must be defensible"
              body="Students should be able to discuss background, individual contribution, method choices, limitations, and possible improvements."
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
              Pricing
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              The first stage validates asset packs
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              The current priority is not to build a complex platform. The first
              stage tests whether students are willing to pay for structured
              professional assets, presentation materials, and interview
              explanation systems.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <PriceCard
              title="Single Asset"
              price="¥29–69"
              body="For completing one clearly defined asset, such as a technical project, valuation model, or business case."
            />
            <PriceCard
              title="Category Pack"
              price="¥99–199"
              body="For building several complementary assets within one professional direction."
            />
            <PriceCard
              title="Full Roadmap"
              price="From ¥299"
              body="For students who need a more complete proof path for internships, applications, or portfolios."
            />
          </div>
        </div>
      </section>

      <RequestAccessCTA locale="en" />

      <PublicFooter locale="en" />
    </main>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-2 text-sm text-neutral-500">{label}</p>
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
}: {
  name: string;
  audience: string;
  title: string;
  description: string;
  examples: string[];
  abilities: string[];
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
          Demonstrated abilities
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
          Sample assets
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