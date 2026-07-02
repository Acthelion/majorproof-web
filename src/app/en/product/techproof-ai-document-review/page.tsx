import PublicFooter from "@/components/PublicFooter";
import RequestAccessCTA from "@/components/RequestAccessCTA";
import SiteNav from "@/components/SiteNav";

const requestHref =
  "/en/request-access?asset=TechProof&source=techproof-product-en";

export default function EnglishTechProofProductPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            TechProof · Product Page
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            AI Document Review Platform Asset Pack
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            An engineering-focused project asset pack for students in CS, EE,
            Data Science, and Automation. It helps students turn a runnable AI
            document processing system into project evidence, technical
            documentation, deployment workflow, resume language, and interview
            defense material.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            This asset pack is designed for students who need stronger resume
            projects, technical interview material, GitHub portfolio evidence,
            or a way to convert coursework into a presentable engineering
            output.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={requestHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              Request Early Access
            </a>

            <a
              href="/en/assets/ai-document-review-platform"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              View Asset Structure
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <MetricCard
            title="Project Type"
            value="Full-stack AI application"
            body="Includes frontend routes, file upload, admin review, AI report generation, private report links, and deployment workflow"
          />
          <MetricCard
            title="Audience"
            value="Technical students"
            body="For students in CS, EE, Data Science, Automation, and related fields who need stronger engineering evidence"
          />
          <MetricCard
            title="Core Goal"
            value="Presentable and explainable"
            body="The project should not only run, but also support resume writing, portfolio presentation, and interview explanation"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Problem
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            Many students do not lack project names, they lack verifiable project evidence
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            A project with only a few resume lines often looks thin. Interviewers
            usually care about system design, data flow, interface handling,
            deployment, personal contribution, limitations, and possible
            improvements.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <ProblemCard
            title="The project looks like coursework"
            body="Many projects remain local demos without a clear user flow, system boundary, deployment note, or presentable entry point."
          />
          <ProblemCard
            title="README and documentation are weak"
            body="Even if the project runs, it may lack installation steps, architecture notes, feature boundaries, technical reasoning, and improvement plans."
          />
          <ProblemCard
            title="Resume language is not professional"
            body="Project descriptions often become tool lists instead of demonstrating system design, engineering implementation, API integration, database modeling, and deployment ability."
          />
          <ProblemCard
            title="Interview defense is underprepared"
            body="If students cannot explain key decisions, error handling, security boundaries, and limitations, the project cannot become credible evidence of ability."
          />
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Deliverables
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              What this asset pack delivers
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              TechProof AI Document Review Platform is not an isolated code
              snippet. It is a project asset structure that can be studied,
              reproduced, adapted, presented, and defended.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <DeliverableCard
              title="Runnable Project"
              items={[
                "Next.js pages and route structure",
                "File submission and preview workflow",
                "Admin review interface",
                "AI report generation logic",
                "Private report access links",
              ]}
            />

            <DeliverableCard
              title="Engineering Documentation"
              items={[
                "README structure",
                "System architecture notes",
                "Database and storage design",
                "Environment variable explanation",
                "Deployment and testing steps",
              ]}
            />

            <DeliverableCard
              title="Presentation Material"
              items={[
                "Chinese and English resume bullets",
                "Project explanation framework",
                "Interview follow-up preparation",
                "Project boundary notes",
                "Extension roadmap",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Workflow
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              From reproduction to an individualized work sample
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              The asset pack is not designed for mechanical copying. It provides
              a path from a base implementation to an individualized version.
              Students need to understand the system and adapt it with their own
              features, data, interface choices, or documentation.
            </p>
          </div>

          <div className="space-y-4">
            <StepCard
              step="01"
              title="Understand the system goal"
              body="Clarify the simulated scenario: users upload documents, the system generates review results, admins manage requests, and users view reports through private links."
            />
            <StepCard
              step="02"
              title="Reproduce the base version"
              body="Follow the asset pack to complete local setup, page structure, database tables, file storage, and AI report generation."
            />
            <StepCard
              step="03"
              title="Record process evidence"
              body="Keep implementation steps, error records, key configuration, data structures, and technical decisions so the final project does not become an unexplained black box."
            />
            <StepCard
              step="04"
              title="Add personal adaptation"
              body="Depending on the target direction, add features such as multi-file comparison, scoring dimensions, PDF summary, admin filtering, report export, or stronger access control."
            />
            <StepCard
              step="05"
              title="Convert it into career material"
              body="Organize the project into a GitHub README, portfolio page, resume bullets, and interview explanation instead of leaving it as raw code."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Boundary
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              What this asset pack does not provide
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              MajorProof focuses on evidence of ability, not fabricated
              experience or coursework completion. The asset pack can be used as
              learning material, project structure, and presentation support,
              but the final version must reflect the student&apos;s own
              understanding and contribution.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <BoundaryCard body="It does not complete coursework, course projects, or exam tasks for students" />
            <BoundaryCard body="It does not guarantee internships, employment, interviews, or admissions outcomes" />
            <BoundaryCard body="It should not be copied unchanged into a resume or portfolio" />
            <BoundaryCard body="It should not be presented as a production-grade security system or commercial SaaS product" />
            <BoundaryCard body="It does not support fabricated project experience, fake user data, or false internship claims" />
            <BoundaryCard body="It does not encourage students to use technical terms they cannot explain" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Pricing Validation
              </p>

              <h2 className="text-4xl font-semibold tracking-tight">
                The first stage validates purchase intent
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                This asset pack is currently in early validation. MajorProof
                will use request volume, user background, and demand patterns to
                determine the first delivery format, price, and update schedule.
              </p>
            </div>

            <div className="space-y-4">
              <PriceRow title="Early single asset pack" price="¥29–69" />
              <PriceRow title="TechProof category pack" price="¥99–199" />
              <PriceRow
                title="Full project roadmap and interview defense"
                price="From ¥299"
              />

              <a
                href={requestHref}
                className="mt-6 block rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                Request Early Access
              </a>
            </div>
          </div>
        </div>
      </section>

      <RequestAccessCTA
        locale="en"
        sourcePage="techproof-product-bottom-en"
        assetIntent="TechProof"
      />

      <PublicFooter locale="en" />
    </main>
  );
}

function MetricCard({
  title,
  value,
  body,
}: {
  title: string;
  value: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="mb-3 text-sm text-neutral-500">{title}</p>
      <h2 className="text-2xl font-semibold">{value}</h2>
      <p className="mt-3 leading-7 text-neutral-400">{body}</p>
    </div>
  );
}

function ProblemCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}

function DeliverableCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <h3 className="mb-5 text-2xl font-semibold">{title}</h3>
      <ul className="list-disc space-y-3 pl-6 leading-7 text-neutral-400">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <p className="mb-3 text-sm text-neutral-500">{step}</p>
      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}

function BoundaryCard({ body }: { body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="leading-7 text-neutral-300">{body}</p>
    </div>
  );
}

function PriceRow({ title, price }: { title: string; price: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
      <p className="text-neutral-300">{title}</p>
      <p className="text-xl font-semibold text-neutral-100">{price}</p>
    </div>
  );
}