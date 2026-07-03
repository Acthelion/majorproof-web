import Link from "next/link";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

const requestAccessHref =
  "/en/request-access?source=researchproof-literature-method-kit&asset=ResearchProof";

const deliverables = [
  {
    title: "Research question definition",
    body: "Define the research topic, question boundary, core concepts, research object, and answerable scope instead of turning the project into a vague interest statement or material summary.",
  },
  {
    title: "Literature review structure",
    body: "Map key literature, theoretical threads, existing debates, research gaps, and methodological differences so the research question can be positioned within prior work.",
  },
  {
    title: "Method choice explanation",
    body: "Explain why quantitative, qualitative, experimental, case-based, text analysis, modeling, simulation, or another method is appropriate, including conditions and limitations.",
  },
  {
    title: "Evidence and material checklist",
    body: "List the data, literature, cases, variables, materials, or research records that need to be collected, and clarify how the evidence supports the research question.",
  },
  {
    title: "Research boundary and limitation",
    body: "Clarify what the research cannot answer, what limitations the data or method has, what scope the conclusion applies to, and how the work can be extended.",
  },
  {
    title: "Resume and interview defense",
    body: "Turn the research process into restrained and verifiable resume language, while preparing for questions about motivation, literature choice, method fit, and limitations.",
  },
];

const fitItems = [
  "Students preparing for research projects, research assistant roles, overseas applications, thesis proposals, or academic portfolios",
  "Students who need to turn course papers, research interests, or literature reading into a formal research asset",
  "Students who have a research topic but lack a clear question, literature structure, or method explanation",
  "Students who want to explain their research ability clearly in applications, interviews, or communication with supervisors",
];

const notFitItems = [
  "Students who want someone else to write papers, coursework, or research reports for them",
  "Students who want to fabricate research experience, publications, or supervisor projects",
  "Students unwilling to read literature, organize materials, or explain method choices",
  "Students who only want academic-sounding packaging that cannot survive follow-up questions",
];

const methodSections = [
  {
    title: "Research question",
    body: "Whether the question is specific enough, answerable by available material or data, and not too broad, abstract, or impossible to verify.",
  },
  {
    title: "Literature position",
    body: "What existing research has already said, where the main debates are, and how the student's question relates to the literature.",
  },
  {
    title: "Method fit",
    body: "Whether the method fits the question, whether the material can support the analysis, and whether the design can produce meaningful but not exaggerated conclusions.",
  },
  {
    title: "Boundary and extension",
    body: "What scope the conclusion applies to, where the limitations are, and how future work could add data, expand the sample, or improve the method.",
  },
];
export default function EnglishResearchProofLiteratureMethodKitPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            ResearchProof · Literature and Method Kit
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Literature review and method
            <br />
            research asset kit
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            ResearchProof helps students turn research interests, course papers,
            literature reading, method design, and academic expression into
            presentable and explainable research evidence assets for
            applications, interviews, academic portfolios, and supervisor
            communication.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            This kit does not write papers, fabricate research experience, or
            package fake publications. It focuses on whether you can define a
            clear question, understand existing literature, choose an appropriate
            method, and honestly explain the boundary of your research.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={requestAccessHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              Apply for ResearchProof test
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
            value="ResearchProof"
            label="Research assets for research projects, assistant roles, thesis proposals, overseas applications, and academic portfolios"
          />
          <StatBlock
            value="Method awareness"
            label="Build a complete explanation chain from research question and literature position to method fit and research boundary"
          />
          <StatBlock
            value="Academically defensible"
            label="Prepare for questions about literature choice, question origin, method fit, evidence limits, and future extension"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Problem
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            Many research projects do not lack topics. They lack answerable
            questions.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Research interests, course papers, and literature reading are not
            strong evidence if they remain a list of topics. A valuable research
            asset needs to explain where the question comes from, how existing
            literature has discussed it, why the method fits, what the evidence
            can support, and where the research boundary lies.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-400">
            ResearchProof is not designed to create academic packaging. It is
            designed to help you build a research explanation chain from
            question to literature, method, and boundary.
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
              The ResearchProof kit is not meant to write a paper for you. It
              helps build the research question, literature structure, method
              explanation, evidence checklist, boundary awareness, and
              interview-defense points.
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
            Method Spine
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            A research asset needs a clear methodological spine
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            A research asset is not a stack of literature summaries. It needs to
            explain how the question is formed, how existing research supports
            the inquiry, why the method fits, and within what boundary the
            conclusion can hold.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {methodSections.map((item) => (
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
                pay for structured research assets. Submitting a request does
                not trigger automatic payment. The delivery scope must be
                manually confirmed later.
              </p>
            </div>

            <div className="grid gap-5">
              <PriceCard
                title="Roadmap Review"
                price="¥29"
                body="For students who want to check whether the research topic, question boundary, literature structure, and method path are valid before going further."
              />
              <PriceCard
                title="ResearchProof Starter Kit"
                price="¥99"
                body="For students who want to build a literature review structure, method explanation, evidence checklist, research boundary, and interview-defense material around one research question."
                emphasized
              />
              <PriceCard
                title="Personalized ResearchProof Plan"
                price="¥199+"
                body="For students who need a more customized research asset path around research projects, research assistant roles, overseas applications, thesis proposals, or supervisor communication."
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
                ResearchProof is research training, not paper ghostwriting
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                This kit does not write papers, complete coursework, fabricate
                research experience, fake publications, or package false
                supervisor projects. It only helps you build an explainable
                research asset based on real reading, real materials, and real
                methodological awareness.
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
                Apply for ResearchProof testing
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                If you need to turn a course paper, research interest,
                literature reading, research proposal, or academic project into
                a presentable asset, submit a request first. The current stage
                is focused on manual validation and early-user communication.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={requestAccessHref}
                className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                Apply for ResearchProof test
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