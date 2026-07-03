import Link from "next/link";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

const requestAccessHref =
  "/en/request-access?source=financeproof-company-research-valuation-kit&asset=FinanceProof";

const deliverables = [
  {
    title: "Company research framework",
    body: "Define the target company, business model, revenue structure, cost structure, competitive position, and key value drivers instead of stopping at company descriptions or news summaries.",
  },
  {
    title: "Industry and competition analysis",
    body: "Map market size, growth drivers, competitive dynamics, substitutes, customer bargaining power, and regulatory constraints so the valuation assumptions have a clear business context.",
  },
  {
    title: "Key financial drivers",
    body: "Break down revenue growth, gross margin, operating expenses, capital expenditure, working capital, cash flow, leverage, and the variables that actually affect company value.",
  },
  {
    title: "Valuation model structure",
    body: "Build the basic structure for DCF, comparable company analysis, or segment-based valuation, while recording assumptions, calculation logic, sensitivity ranges, and model limitations.",
  },
  {
    title: "Investment view articulation",
    body: "Form a restrained research conclusion that explains the core judgment, upside factors, downside risks, and data that still need verification, without making exaggerated buy or sell claims.",
  },
  {
    title: "Resume and interview defense",
    body: "Turn the research process into verifiable resume language and prepare for questions about valuation assumptions, data sources, model choice, risks, and conclusion boundaries.",
  },
];

const fitItems = [
  "Finance, economics, accounting, business, or data-analysis students",
  "Students preparing for equity research, investment research, banking, fund, consulting, or business-analysis internships",
  "Students who have written course reports but lack professional research structure and valuation logic",
  "Students who want to turn one company research project into a resume and interview asset",
];

const notFitItems = [
  "Students looking for direct stock trading advice",
  "Students who want to fabricate investment research or internship experience",
  "Students unwilling to read filings, collect data, and validate assumptions",
  "Students who only want a polished report that they cannot explain",
];

const modelSections = [
  {
    title: "Business model",
    body: "How the company makes money, where revenue comes from, why margins are high or low, and whether growth depends on external cycles or internal efficiency.",
  },
  {
    title: "Financial drivers",
    body: "How revenue growth, gross margin, operating expenses, cash flow, capital expenditure, leverage, and working-capital efficiency affect valuation.",
  },
  {
    title: "Valuation logic",
    body: "Why DCF, comparable company analysis, segment valuation, or another method is appropriate, and whether the core assumptions are supported by financial data.",
  },
  {
    title: "Risk and sensitivity",
    body: "Which assumptions are fragile, which variables can materially change the conclusion, and under what conditions the research view would no longer hold.",
  },
];
export default function EnglishFinanceProofValuationKitPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            FinanceProof · Company Research and Valuation Kit
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Company research and valuation
            <br />
            finance asset kit
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            FinanceProof helps students turn company research, industry
            analysis, financial breakdowns, and valuation models into
            presentable and explainable finance evidence assets for resumes,
            interviews, applications, and portfolio review.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            This kit does not provide investment advice and does not fabricate
            finance experience. It focuses on whether you can use real data,
            clear assumptions, and traceable analysis to build a company
            research asset that can survive follow-up questions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={requestAccessHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              Apply for FinanceProof test
            </Link>

            <Link
              href="/en/ai-roadmap-preview"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              Generate AI roadmap first
            </Link>

            <a
              href="#deliverables"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              View deliverables
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value="FinanceProof"
            label="Research and valuation assets for finance, economics, business, accounting, and data-analysis students"
          />
          <StatBlock
            value="Research logic"
            label="Build a complete analysis chain from business model and industry context to financial drivers and valuation assumptions"
          />
          <StatBlock
            value="Interview defense"
            label="Prepare for questions about data sources, model choice, key assumptions, risk judgment, and conclusion boundaries"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Problem
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            Many finance projects do not lack conclusions. They lack an
            evidence chain.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            A normal course report often stops at company descriptions,
            industry headlines, and simple financial ratios. A finance asset
            that can be used in resumes and interviews needs to explain where
            the data comes from, how the assumptions were formed, why the model
            was chosen, where the risks are, and under what conditions the
            conclusion remains valid.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-400">
            FinanceProof is not designed to make a report look impressive. It
            is designed to create a traceable research path so that every major
            judgment can be explained.
          </p>
        </div>

        <div className="grid gap-5">
          <InfoCard title="Good fit" items={fitItems} />
          <InfoCard title="Not a good fit" items={notFitItems} />
        </div>
      </section>
      <section
        id="deliverables"
        className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Deliverables
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              What this kit should help you produce
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              The FinanceProof kit is not meant to write the final report for
              you. It helps define the research structure, evidence checklist,
              model framework, expression boundaries, and interview-defense
              points.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6"
              >
                <p className="mb-5 text-sm text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Analysis Spine
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            A finance asset needs a clear analytical spine
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            Company research is not a pile of materials. It should move from
            business model to financial drivers, then to valuation logic, and
            finally to risk and sensitivity analysis.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {modelSections.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-400">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Pricing Test
              </p>

              <h2 className="text-4xl font-semibold tracking-tight">
                Current validation pricing
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                This stage is used to validate whether students are willing to
                pay for structured finance research assets. Submitting a request
                does not trigger automatic payment. The delivery scope must be
                manually confirmed later.
              </p>
            </div>

            <div className="grid gap-5">
              <PriceCard
                title="Roadmap Review"
                price="¥29"
                body="For students who want to check whether their company research direction, valuation method, and asset structure are valid before going further."
              />
              <PriceCard
                title="FinanceProof Starter Kit"
                price="¥99"
                body="For students who want to build a company research framework, financial-driver analysis, valuation structure, evidence checklist, and interview-defense material around one company."
                emphasized
              />
              <PriceCard
                title="Personalized FinanceProof Plan"
                price="¥199+"
                body="For students who need a more customized asset path around investment research, equity research, finance internships, competitions, or applications."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Integrity Boundary
              </p>

              <h2 className="text-4xl font-semibold tracking-tight">
                FinanceProof is research training, not investment advice
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                This kit does not provide buy or sell recommendations, does not
                fabricate investment research experience, and does not
                guarantee internship outcomes. It only helps you build an
                explainable research asset based on real data and traceable
                reasoning.
              </p>
            </div>

            <Link
              href="/en/integrity"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              Read integrity boundary
            </Link>
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
                Apply for FinanceProof testing
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                If you need to turn company research, a valuation model, or a
                finance analysis project into a presentable asset, submit a
                request first. The current stage is focused on manual validation
                and early-user communication.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={requestAccessHref}
                className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                Apply for FinanceProof test
              </Link>

              <Link
                href="/en/ai-roadmap-preview"
                className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
              >
                Generate roadmap first
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter locale="en" />
    </main>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-2 text-sm leading-6 text-neutral-500">{label}</p>
    </div>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex gap-3 text-sm leading-7 text-neutral-400"
          >
            <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-neutral-500" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceCard({
  title,
  price,
  body,
  emphasized = false,
}: {
  title: string;
  price: string;
  body: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border p-6",
        emphasized
          ? "border-neutral-500 bg-neutral-100 text-neutral-950"
          : "border-neutral-800 bg-neutral-950 text-neutral-100",
      ].join(" ")}
    >
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-4xl font-semibold">{price}</p>
      <p
        className={[
          "leading-7",
          emphasized ? "text-neutral-700" : "text-neutral-400",
        ].join(" ")}
      >
        {body}
      </p>
    </div>
  );
}