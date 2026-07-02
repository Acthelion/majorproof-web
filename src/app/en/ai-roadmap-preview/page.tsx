import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function EnglishAiRoadmapPreviewPage({
  searchParams,
}: PageProps) {
  const resolvedSearchParams = await searchParams;
  const error = getErrorMessage(getSearchParam(resolvedSearchParams, "error"));

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            MajorProof · AI Asset Roadmap Preview
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Generate your professional
            <br />
            asset roadmap preview
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            Fill in your major, year, target goal, existing experience, and
            current problem. MajorProof will generate a structured Proof Asset
            roadmap preview to help you identify which asset direction fits you
            best.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            This is a controlled test feature and requires an access code. It
            does not write homework, fabricate experience, or promise
            internships, admissions, grades, scholarships, or employment
            outcomes.
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value="Direction"
            label="Identify whether TechProof, FinanceProof, BusinessProof, or ResearchProof fits your current background"
          />
          <StatBlock
            value="Evidence"
            label="Clarify deliverables, process evidence, method explanation, resume language, and interview defense"
          />
          <StatBlock
            value="Validation"
            label="Use the preview first, then decide whether to apply for a complete Proof Asset workflow"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Preview Form
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Fill in your basic information
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              The more specific your input is, the more useful the roadmap will
              be. You do not need a complete project yet. Courses, skills,
              target roles, and current blockers are enough for a first
              direction check.
            </p>
          </div>

          {error ? (
            <div className="mb-8 rounded-3xl border border-red-900/60 bg-red-950/40 p-5 text-sm leading-7 text-red-200">
              {error}
            </div>
          ) : null}

          <form
            method="post"
            action="/en/ai-roadmap-preview/submit"
            className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-8"
          >
            <div className="grid gap-5">
              <FormField
                label="Access code"
                name="accessCode"
                placeholder="Enter the test access code"
                required
              />

              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="Name or alias"
                  name="nameOrAlias"
                  placeholder="For example: Kevin"
                />
                <FormField
                  label="Contact method"
                  name="contactMethod"
                  placeholder="Email / WeChat / Telegram"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="Current major"
                  name="currentMajor"
                  placeholder="For example: Electrical Engineering"
                  required
                />
                <FormField
                  label="Current year"
                  name="currentYear"
                  placeholder="For example: Year 2 / Junior / Master"
                />
              </div>

              <FormField
                label="Target goal"
                name="targetGoal"
                placeholder="For example: German-taught master's application / technical internship / research project"
                required
              />

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-neutral-300">
                  Interested asset direction
                </span>
                <select
                  name="interestedAsset"
                  className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
                  defaultValue=""
                >
                  <option value="">Not sure yet</option>
                  <option value="TechProof">TechProof</option>
                  <option value="FinanceProof">FinanceProof</option>
                  <option value="BusinessProof">BusinessProof</option>
                  <option value="ResearchProof">ResearchProof</option>
                </select>
              </label>

              <TextAreaField
                label="Existing experience"
                name="existingExperience"
                placeholder="Courses, projects, competitions, internships, research, technical skills, or leave blank if none"
              />

              <TextAreaField
                label="Main problem"
                name="primaryNeed"
                placeholder="For example: no strong project experience / weak resume / unclear project direction / cannot explain projects in interviews"
                required
              />

              <button
                type="submit"
                className="mt-3 rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                Generate AI Asset Roadmap Preview
              </button>
            </div>
          </form>
        </div>

        <aside className="space-y-5">
          <InfoCard
            title="What it generates"
            items={[
              "Recommended asset direction",
              "Suitable project direction",
              "Final deliverable shape",
              "Process evidence checklist",
              "Resume bullet drafts",
              "Interview defense questions",
              "Extension roadmap",
            ]}
          />

          <InfoCard
            title="What it will not do"
            items={[
              "No homework ghostwriting",
              "No fake internship experience",
              "No guaranteed admission or job outcome",
              "No fabricated deliverables",
            ]}
          />

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Formal Request
            </p>

            <h2 className="text-2xl font-semibold">Ready to continue</h2>

            <p className="mt-4 leading-7 text-neutral-400">
              If you already know you want to enter the MajorProof early test,
              you can submit a formal request.
            </p>

            <a
              href="/en/request-access"
              className="mt-6 inline-flex rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              Request early access
            </a>
          </div>
        </aside>
      </section>

      <PublicFooter locale="en" />
    </main>
  );
}

function FormField({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-neutral-300">
        {label}
        {required ? <span className="text-neutral-100"> *</span> : null}
      </span>
      <input
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
      />
    </label>
  );
}

function TextAreaField({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-neutral-300">
        {label}
        {required ? <span className="text-neutral-100"> *</span> : null}
      </span>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="w-full resize-y rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm leading-7 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
      />
    </label>
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

      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function getSearchParam(
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string
) {
  const value = searchParams?.[key];

  if (Array.isArray(value)) {
    return value[0] || "";
  }

  return value || "";
}

function getErrorMessage(error: string) {
  if (error === "invalid-code") {
    return "Invalid access code. Please check and try again.";
  }

  if (error === "missing-fields") {
    return "Please fill in at least your current major, target goal, and main problem.";
  }

  if (error === "missing-openai-key") {
    return "AI generation failed because the server is missing OPENAI_API_KEY.";
  }

  if (error === "save-failed") {
    return "The AI result was generated but could not be saved. Please try again.";
  }

  if (error === "generate-failed") {
    return "AI generation failed. Please try again later.";
  }

  return "";
}