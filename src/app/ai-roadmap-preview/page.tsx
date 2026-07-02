import Link from "next/link";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AiRoadmapPreviewPage({
  searchParams,
}: PageProps) {
  const resolvedSearchParams = await searchParams;
  const error = getErrorMessage(getSearchParam(resolvedSearchParams, "error"));

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-16">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">
            MajorProof AI Preview
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            AI Asset Roadmap Preview
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Fill in your major, year, goal, current experience, and main
            problem. MajorProof will generate a structured Proof Asset roadmap
            preview for early validation.
          </p>

          <div className="mt-8 rounded-3xl border border-amber-400/20 bg-amber-400/10 p-5 text-sm leading-7 text-amber-100">
            This is a controlled test feature. An access code is required. It
            does not write homework, fabricate experience, or promise admission,
            internship, grades, scholarship, or employment outcomes.
          </div>
        </div>

        {error ? (
          <div className="mb-8 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-100">
            {error}
          </div>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <form
            method="post"
            action="/ai-roadmap-preview/submit"
            className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 md:p-8"
          >
            <div className="grid gap-5">
              <FormField
                label="Access code"
                name="accessCode"
                placeholder="Enter your test access code"
                required
              />

              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="Name or alias"
                  name="nameOrAlias"
                  placeholder="For example Kevin"
                />
                <FormField
                  label="Contact method"
                  name="contactMethod"
                  placeholder="Email, WeChat, Telegram, etc"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="Current major"
                  name="currentMajor"
                  placeholder="For example Electrical Engineering"
                  required
                />
                <FormField
                  label="Current year"
                  name="currentYear"
                  placeholder="For example Year 2 or Junior"
                />
              </div>

              <FormField
                label="Target goal"
                name="targetGoal"
                placeholder="For example German master application or technical internship"
                required
              />

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-neutral-200">
                  Interested asset direction
                </span>
                <select
                  name="interestedAsset"
                  className="w-full rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-amber-300"
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
                placeholder="Courses, projects, competitions, internships, research, skills, or leave blank if none"
              />

              <TextAreaField
                label="Main problem"
                name="primaryNeed"
                placeholder="For example no project experience, weak resume, unclear positioning, or poor interview defense"
                required
              />

              <button
                type="submit"
                className="mt-2 rounded-2xl bg-amber-300 px-6 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-amber-200"
              >
                Generate AI Roadmap Preview
              </button>
            </div>
          </form>

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
                "No guaranteed outcomes",
                "No fabricated deliverables",
              ]}
            />

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6">
              <h2 className="text-lg font-semibold text-white">
                Ready for early access
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-300">
                If you already know you want to join the MajorProof early test,
                submit the formal request form.
              </p>
              <Link
                href="/request-access"
                className="mt-5 inline-flex rounded-2xl border border-neutral-700 px-4 py-3 text-sm font-semibold text-neutral-100 transition hover:border-amber-300 hover:text-amber-200"
              >
                Submit formal request
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <PublicFooter locale="zh" />
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
      <span className="mb-2 block text-sm font-medium text-neutral-200">
        {label}
        {required ? <span className="text-amber-300"> *</span> : null}
      </span>
      <input
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-amber-300"
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
      <span className="mb-2 block text-sm font-medium text-neutral-200">
        {label}
        {required ? <span className="text-amber-300"> *</span> : null}
      </span>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="w-full resize-y rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm leading-7 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-amber-300"
      />
    </label>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-neutral-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
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
    return "AI generation failed because OPENAI_API_KEY is missing on the server.";
  }

  if (error === "save-failed") {
    return "The AI result was generated but could not be saved. Please try again.";
  }

  if (error === "generate-failed") {
    return "AI generation failed. Please try again later.";
  }

  return "";
}
