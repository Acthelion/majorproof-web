import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";
import { submitAccessRequest } from "@/app/request-access/actions";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const assetOptions = [
  {
    value: "TechProof",
    label: "TechProof",
    body: "Technical projects, AI tools, data projects, engineering portfolios, and interview-defensible project assets",
  },
  {
    value: "FinanceProof",
    label: "FinanceProof",
    body: "Valuation models, company research, industry analysis, investment reasoning, and finance internship materials",
  },
  {
    value: "BusinessProof",
    label: "BusinessProof",
    body: "Business analysis, market entry strategy, product strategy, consulting-style case materials, and strategic reasoning",
  },
  {
    value: "ResearchProof",
    label: "ResearchProof",
    body: "Research plans, literature review structures, method explanations, academic project evidence, and research positioning",
  },
];

const yearOptions = [
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Master",
  "Other",
];

const priceOptions = [
  {
    value: "",
    label: "Not sure yet",
  },
  {
    value: "29-roadmap-review",
    label: "¥29 Roadmap Review",
  },
  {
    value: "99-starter-pack",
    label: "¥99 TechProof Starter Pack",
  },
  {
    value: "199-personalized-plan",
    label: "¥199+ Personalized TechProof Plan",
  },
  {
    value: "need-discussion",
    label: "Need discussion first",
  },
];

export default async function EnglishRequestAccessPage({
  searchParams,
}: PageProps) {
  const resolvedSearchParams = await searchParams;

  const sourcePage = normalizeTrackingValue(
    getSearchParam(resolvedSearchParams, "source")
  );
  const assetIntent = normalizeTrackingValue(
    getSearchParam(resolvedSearchParams, "asset")
  );
  const error = getErrorMessage(getSearchParam(resolvedSearchParams, "error"));

  const isTechProofPaidTest =
    sourcePage === "techproof-starter-pack" && assetIntent === "TechProof";

  const pageCopy = getPageCopy(isTechProofPaidTest);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            MajorProof · Request Access
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            {pageCopy.titleLineOne}
            <br />
            {pageCopy.titleLineTwo}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            {pageCopy.description}
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            {pageCopy.subDescription}
          </p>

          {sourcePage || assetIntent ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {sourcePage ? (
                <span className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-400">
                  Source: {sourcePage}
                </span>
              ) : null}

              {assetIntent ? (
                <span className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-400">
                  Asset intent: {assetIntent}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value={pageCopy.statOneValue}
            label={pageCopy.statOneLabel}
          />
          <StatBlock
            value={pageCopy.statTwoValue}
            label={pageCopy.statTwoLabel}
          />
          <StatBlock
            value={pageCopy.statThreeValue}
            label={pageCopy.statThreeLabel}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Application Form
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Fill in your request
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              We care most about what kind of presentable asset you currently
              lack, what role or application you are targeting, and whether you
              are willing to test a structured asset pack.
            </p>
          </div>

          {error ? (
            <div className="mb-8 rounded-3xl border border-red-900/60 bg-red-950/40 p-5 text-sm leading-7 text-red-200">
              {error}
            </div>
          ) : null}

          <form
            action={submitAccessRequest}
            className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-8"
          >
            <input type="hidden" name="sourcePage" value={sourcePage} />
            <input type="hidden" name="assetIntent" value={assetIntent} />
            <input type="hidden" name="languagePreference" value="English" />

            <div className="grid gap-5">
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
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="Current major"
                  name="currentMajor"
                  placeholder="For example: Electrical Engineering"
                  required
                />

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-neutral-300">
                    Current year
                  </span>
                  <select
                    name="currentYear"
                    className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
                    defaultValue=""
                  >
                    <option value="">Select one</option>
                    {yearOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <TextAreaField
                label="Target goal"
                name="targetGoal"
                placeholder="For example: German-taught master's application / technical internship / resume project / research application"
              />

              <div>
                <p className="mb-3 text-sm font-medium text-neutral-300">
                  Interested asset directions
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {assetOptions.map((option) => (
                    <AssetCheckbox
                      key={option.value}
                      option={option}
                      defaultChecked={assetIntent === option.value}
                    />
                  ))}
                </div>
              </div>

              <TextAreaField
                label="Main problem"
                name="primaryNeed"
                placeholder="For example: no strong project experience / weak resume / unclear project direction / cannot explain projects in interviews / missing application materials"
                required
              />

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-neutral-300">
                    Paid test intent
                  </span>
                  <select
                    name="purchaseIntent"
                    className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
                    defaultValue={
                      isTechProofPaidTest
                        ? "interested-in-paid-techproof-test"
                        : ""
                    }
                  >
                    <option value="">Not sure yet</option>
                    <option value="interested-in-paid-techproof-test">
                      I am interested in the paid test
                    </option>
                    <option value="need-free-preview-first">
                      I want to see the free roadmap preview first
                    </option>
                    <option value="only-exploring">
                      I am only exploring for now
                    </option>
                    <option value="ready-to-pay-if-useful">
                      I can pay if it is useful
                    </option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-neutral-300">
                    Acceptable price range
                  </span>
                  <select
                    name="expectedPriceRange"
                    className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
                    defaultValue={isTechProofPaidTest ? "99-starter-pack" : ""}
                  >
                    {priceOptions.map((option) => (
                      <option key={option.value || "empty"} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <input
                  type="checkbox"
                  name="willingToTest"
                  value="true"
                  defaultChecked={isTechProofPaidTest}
                  className="mt-1"
                />
                <span className="text-sm leading-7 text-neutral-400">
                  I am willing to participate as an early test user and accept
                  follow-up communication or feedback interviews.
                </span>
              </label>

              <button
                type="submit"
                className="mt-3 rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                {pageCopy.submitLabel}
              </button>

              <p className="text-sm leading-7 text-neutral-500">
                Submitting this request does not create a payment obligation and
                does not automatically create an account. This stage is mainly
                for product validation, demand judgment, and early-user
                communication.
              </p>
            </div>
          </form>
        </div>

        <aside className="space-y-5">
          <InfoCard
            title={pageCopy.sideCardOneTitle}
            items={pageCopy.sideCardOneItems}
          />

          <InfoCard
            title="What MajorProof will not do"
            items={[
              "No homework ghostwriting",
              "No fake internship experience",
              "No fabricated project outcomes",
              "No guaranteed admission, job, grade, or scholarship result",
            ]}
          />

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Before Applying
            </p>

            <h2 className="text-2xl font-semibold">Not sure yet</h2>

            <p className="mt-4 leading-7 text-neutral-400">
              If you are not sure which asset direction fits your background,
              generate an AI Roadmap Preview first.
            </p>

            <a
              href="/en/ai-roadmap-preview"
              className="mt-6 inline-flex rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              Generate AI roadmap first
            </a>
          </div>
        </aside>
      </section>

      <PublicFooter locale="en" />
    </main>
  );
}

function getPageCopy(isTechProofPaidTest: boolean) {
  if (isTechProofPaidTest) {
    return {
      titleLineOne: "Apply for TechProof",
      titleLineTwo: "Starter Pack paid test",
      description:
        "You are applying for the early paid test of the TechProof AI Document Review Platform Starter Pack. This request helps us judge whether your background, target, and current problem fit the first delivery batch.",
      subDescription:
        "This stage does not charge automatically and does not promise outcomes. We will review your request and confirm whether you want to test the ¥29, ¥99, or personalized plan options.",
      statOneValue: "Paid validation",
      statOneLabel:
        "Testing whether students are willing to pay for a structured technical project asset pack",
      statTwoValue: "TechProof",
      statTwoLabel:
        "Focused on engineering, CS, EE, AI, and data-related technical project assets",
      statThreeValue: "Manual review",
      statThreeLabel:
        "Submission does not trigger automatic payment. The delivery scope must be confirmed later.",
      sideCardOneTitle: "What the TechProof Starter Pack includes",
      sideCardOneItems: [
        "Professional context",
        "Functional structure",
        "Technology stack suggestion",
        "Final deliverable checklist",
        "Process evidence checklist",
        "Resume bullet drafts",
        "Interview defense questions",
      ],
      submitLabel: "Submit paid test request",
    };
  }

  return {
    titleLineOne: "Request MajorProof",
    titleLineTwo: "early access",
    description:
      "Fill in your major, year, target goal, and current problem. This helps us judge which Proof Asset direction fits you and whether you are suitable for the early test group.",
    subDescription:
      "The current stage is mainly for product validation, demand judgment, and early-user communication. Submitting a request does not create a payment obligation or automatically create an account.",
    statOneValue: "Demand judgment",
    statOneLabel:
      "Identify whether you need a technical, finance, business, or research asset",
    statTwoValue: "Early users",
    statTwoLabel:
      "Priority goes to students with clear goals, clear problems, and willingness to give feedback",
    statThreeValue: "Verifiable assets",
    statThreeLabel:
      "Focus on what kind of presentable and explainable work you currently lack",
    sideCardOneTitle: "What we care about",
    sideCardOneItems: [
      "Your academic background",
      "Your target direction",
      "The asset type you lack",
      "Whether your pain point is clear",
      "Whether you are willing to test",
      "Whether you may become a paid user",
    ],
    submitLabel: "Submit request",
  };
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

function AssetCheckbox({
  option,
  defaultChecked,
}: {
  option: {
    value: string;
    label: string;
    body: string;
  };
  defaultChecked: boolean;
}) {
  return (
    <label className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="interestedAssets"
          value={option.value}
          defaultChecked={defaultChecked}
          className="mt-1"
        />
        <div>
          <p className="font-medium text-neutral-100">{option.label}</p>
          <p className="mt-2 text-sm leading-6 text-neutral-500">
            {option.body}
          </p>
        </div>
      </div>
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

function normalizeTrackingValue(value: string) {
  return value.trim().slice(0, 120);
}

function getErrorMessage(error: string) {
  if (error === "missing-contact") {
    return "Please provide a contact method.";
  }

  if (error === "missing-major") {
    return "Please provide your current major.";
  }

  if (error === "missing-need") {
    return "Please describe your main current problem.";
  }

  if (error === "submit-failed") {
    return "Submission failed. Please try again later.";
  }

  return "";
}