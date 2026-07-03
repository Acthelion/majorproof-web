import Link from "next/link";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

const requestAccessHref =
  "/en/request-access?source=businessproof-market-entry-strategy-kit&asset=BusinessProof";

const deliverables = [
  {
    title: "Market entry problem definition",
    body: "Define the target market, target users, entry scenario, core problem, and business constraints instead of turning the project into a generic industry overview or marketing plan.",
  },
  {
    title: "Market sizing and segmentation",
    body: "Break down TAM, SAM, SOM, or a more suitable market-sizing logic, while explaining data sources, estimation methods, customer segments, and the first user group to prioritize.",
  },
  {
    title: "Competitive landscape analysis",
    body: "Map direct competitors, substitute solutions, channel barriers, pricing ranges, differentiation space, and entry difficulties so the competitive judgment can survive follow-up questions.",
  },
  {
    title: "Entry strategy design",
    body: "Design the target customer group, value proposition, channel choice, pricing logic, acquisition path, and early validation method instead of only writing abstract brand positioning.",
  },
  {
    title: "Execution roadmap and metrics",
    body: "Turn the strategy into stages, key actions, resource requirements, validation metrics, and failure conditions so it is clear what would prove or disprove the strategy.",
  },
  {
    title: "Resume and interview defense",
    body: "Turn the business-analysis process into explainable resume language and prepare for questions about market assumptions, data sources, strategy choices, competitive judgment, and execution risks.",
  },
];

const fitItems = [
  "Business, marketing, management, economics, consulting, or product-oriented students",
  "Students preparing for consulting, business analysis, product, marketing, operations, or strategy-related internships",
  "Students who have completed business cases or course projects but lack clear problem definition and strategy logic",
  "Students who want to turn one business-analysis project into a resume, interview, or portfolio asset",
];

const notFitItems = [
  "Students who only want a generic business plan",
  "Students who want to fabricate consulting, startup, or business-analysis experience",
  "Students unwilling to collect market information, judge users, or analyze competitors",
  "Students who only want polished slides but cannot explain why the strategy should work",
];

const strategySections = [
  {
    title: "Market choice",
    body: "Why this market is worth entering, whether the market is specific enough, whether the target user is clear, and whether the entry opportunity has a realistic basis.",
  },
  {
    title: "Customer and problem",
    body: "Who the user is, whether the pain point is real, what substitutes exist today, and why the user may accept a new solution.",
  },
  {
    title: "Competitive position",
    body: "What advantages current competitors and substitute solutions have, and where a new entrant can form differentiation instead of simply claiming that the market has opportunity.",
  },
  {
    title: "Go-to-market logic",
    body: "How to reach the first users, how to choose early channels, how to test pricing, and which metrics indicate the strategy should be adjusted.",
  },
];
export default function EnglishBusinessProofMarketEntryStrategyKitPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            BusinessProof · Market Entry Strategy Kit
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Market entry strategy
            <br />
            business analysis kit
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            BusinessProof helps students turn business cases, market analysis,
            customer judgment, and strategic reasoning into presentable and
            explainable business evidence assets for resumes, interviews,
            applications, and portfolio review.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            This kit does not fabricate consulting, startup, or business
            internship experience. It focuses on whether you can use real market
            information, clear problem definition, and traceable reasoning to
            build a market entry strategy that can survive follow-up questions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={requestAccessHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              Apply for BusinessProof test
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
            value="BusinessProof"
            label="Business analysis assets for business, marketing, management, consulting, product, and operations-oriented students"
          />
          <StatBlock
            value="Strategy chain"
            label="Build a complete reasoning path from market choice and customer problem to competitive position and entry route"
          />
          <StatBlock
            value="Interview-ready"
            label="Prepare for questions about data sources, assumption boundaries, strategic tradeoffs, execution risks, and validation metrics"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Problem
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            Many business projects do not lack ideas. They lack verifiable
            strategy logic.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            A business case can easily become a collage of industry background,
            target users, competitor analysis, and marketing suggestions. A
            business asset that can be used in resumes and interviews needs to
            explain why the market was chosen, whether the user problem is real,
            where the competitive barrier is, how the entry route can be tested,
            and under what conditions the strategy would fail.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-400">
            BusinessProof is not designed to produce a polished business plan.
            It is designed to build a traceable strategy chain from problem
            definition to execution validation.
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
              The BusinessProof kit is not meant to write a full business plan
              for you. It helps build the structure, evidence, reasoning chain,
              expression boundaries, and interview-defense points for market
              entry analysis.
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
            Strategy Spine
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            A business asset needs a clear strategic spine
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            Market entry strategy is not about placing market size, user
            personas, competitor analysis, and marketing ideas side by side. It
            needs to explain why this market is worth entering, whether the user
            problem is real, where the competitive position is, and how the
            first step can be validated.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {strategySections.map((item) => (
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
                pay for structured business-analysis assets. Submitting a
                request does not trigger automatic payment. The delivery scope
                must be manually confirmed later.
              </p>
            </div>

            <div className="grid gap-5">
              <PriceCard
                title="Roadmap Review"
                price="¥29"
                body="For students who want to check whether the market entry direction, problem definition, and strategy structure are valid before going further."
              />
              <PriceCard
                title="BusinessProof Starter Kit"
                price="¥99"
                body="For students who want to build customer analysis, competitive judgment, entry strategy, execution metrics, and interview-defense material around one market entry problem."
                emphasized
              />
              <PriceCard
                title="Personalized BusinessProof Plan"
                price="¥199+"
                body="For students who need a more customized asset path around consulting, business analysis, product, marketing, operations, competitions, or applications."
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
                BusinessProof is business analysis training, not experience packaging
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                This kit does not fabricate consulting, startup, product, or
                business internship experience. It does not guarantee internship
                outcomes, and it does not help you write a business plan that
                you cannot explain. It only helps you build an explainable
                strategy asset based on real market information.
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
                Apply for BusinessProof testing
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                If you need to turn a business case, market analysis, product
                strategy, or consulting-style project into a presentable asset,
                submit a request first. The current stage is focused on manual
                validation and early-user communication.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={requestAccessHref}
                className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                Apply for BusinessProof test
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