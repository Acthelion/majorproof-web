import Link from "next/link";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

const requestAccessHref =
  "/en/request-access?source=techproof-starter-pack&asset=TechProof";

const deliverables = [
  {
    title: "Professional context",
    body: "Define what problem the project solves, who it is for, and why it is relevant to technical internships, applications, or portfolios.",
  },
  {
    title: "Final deliverable map",
    body: "Clarify what the project should eventually show: demo, README, screenshots, architecture notes, feature list, or portfolio page.",
  },
  {
    title: "Functional structure",
    body: "Break the project into understandable modules so it does not remain a vague idea or generic ChatGPT output.",
  },
  {
    title: "Process evidence checklist",
    body: "List the evidence the student should preserve while building, including commits, screenshots, design notes, test records, and revision history.",
  },
  {
    title: "Resume language",
    body: "Draft restrained, defensible resume bullets that do not exaggerate contribution or fabricate completed outcomes.",
  },
  {
    title: "Interview defense",
    body: "Prepare likely interview questions around motivation, technical choices, limitations, personal contribution, and next steps.",
  },
];

const fitItems = [
  "Engineering, CS, EE, AI, data, or technical-background students",
  "Students who need one concrete project for resumes, applications, or interviews",
  "Students who do not know how to turn coursework into a professional asset",
  "Students who want a project that can be shown and explained, not just listed",
];

const notFitItems = [
  "Students looking for homework ghostwriting",
  "Students who want fake internship or project experience",
  "Students expecting guaranteed offers, admissions, grades, or scholarships",
  "Students who only want a generic project title without building anything",
];

export default function EnglishTechProofStarterPackPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            TechProof · Starter Pack
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            AI Document Review Platform
            <br />
            technical asset pack
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            A focused TechProof Starter Pack for students who need a concrete,
            defensible technical project asset instead of a vague resume idea.
            The goal is to turn one project direction into a structured asset
            with deliverables, process evidence, resume language, and interview
            defense.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            The first validation product focuses on an AI Document Review
            Platform because it is understandable, buildable, technically
            relevant, and easy to connect with software, AI, data, and product
            workflows.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={requestAccessHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              Apply for paid test
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
            value="TechProof"
            label="Focused on technical project assets for engineering, CS, EE, AI, and data students"
          />
          <StatBlock
            value="¥99 test"
            label="Early validation price for one structured Starter Pack direction"
          />
          <StatBlock
            value="Defensible"
            label="The project must be explainable in resumes, interviews, applications, and portfolio reviews"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Problem
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            Many students do not lack effort. They lack a presentable asset.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            A course project, a GitHub repository, or a random AI idea is often
            not enough. Recruiters and interviewers need to see what the project
            does, why it matters, what the student contributed, how the process
            can be verified, and whether the student can explain the work under
            questioning.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-400">
            TechProof turns one technical project direction into a professional
            evidence asset. It does not replace the work. It structures the
            work so that the student knows what to build, what to preserve, and
            how to explain it.
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
              What the Starter Pack should help you produce
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              The Starter Pack is not a finished platform and not a done-for-you
              project. It is a structured plan for one technical asset that can
              later become a real project, portfolio item, resume story, and
              interview discussion.
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
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Pricing Test
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Current validation pricing
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              The goal is to validate whether students are willing to pay for a
              structured technical asset plan before building a full platform.
              Submission does not create an automatic payment obligation.
            </p>
          </div>

          <div className="grid gap-5">
            <PriceCard
              title="Roadmap Review"
              price="¥29"
              body="A low-risk review for students who want to check whether their direction is suitable before entering a full asset pack."
            />
            <PriceCard
              title="TechProof Starter Pack"
              price="¥99"
              body="A structured asset plan for one technical project direction, including deliverables, evidence checklist, resume language, and interview defense."
              emphasized
            />
            <PriceCard
              title="Personalized TechProof Plan"
              price="¥199+"
              body="A more customized plan for students with specific internship, application, portfolio, or research goals."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Integrity Boundary
                </p>

                <h2 className="text-4xl font-semibold tracking-tight">
                  MajorProof structures real work. It does not fabricate it.
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                  TechProof can help define the project, clarify deliverables,
                  preserve process evidence, and prepare resume or interview
                  language. It cannot write coursework for you, invent
                  experience, or guarantee outcomes.
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
                Apply for the TechProof paid test
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                If this matches your problem, submit a request. The current
                stage is manual validation, so the request will be reviewed
                before any paid delivery is confirmed.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={requestAccessHref}
                className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                Apply for paid test
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
          <div key={item} className="flex gap-3 text-sm leading-7 text-neutral-400">
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