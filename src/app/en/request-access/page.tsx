import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";
import { submitAccessRequest } from "@/app/request-access/actions";

export default function EnglishRequestAccessPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Request Access
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight">
          Request early access
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          MajorProof is currently validating product demand. You can submit your
          major, target scenario, and the type of professional asset you need.
          These responses will help determine the priority of the first asset
          packs.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            action={submitAccessRequest}
            className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6"
          >
            <input type="hidden" name="locale" value="en" />

            <div className="grid gap-5">
              <Field
                label="Name / Alias"
                name="nameOrAlias"
                placeholder="For example: Kevin"
              />

              <Field
                label="Contact"
                name="contactMethod"
                placeholder="Email, WeChat, or another contact method"
                required
              />

              <Field
                label="Current Major"
                name="currentMajor"
                placeholder="For example: Finance / EE / Marketing / Economics"
                required
              />

              <Field
                label="Current Year"
                name="currentYear"
                placeholder="For example: Year 2 / Year 3 / Master"
              />

              <SelectField
                label="Primary Goal"
                name="targetGoal"
                options={[
                  "Internship application",
                  "Full-time job search",
                  "Graduate application",
                  "Major transition",
                  "Portfolio building",
                  "Not sure yet",
                ]}
              />

              <AssetCheckboxGroup />

              <TextArea
                label="What problem do you most need to solve"
                name="primaryNeed"
                placeholder="For example: I do not have projects for my resume; I do not know what a finance analysis asset should look like; I cannot explain my experience clearly in interviews."
                required
              />

              <SelectField
                label="Preferred Language"
                name="languagePreference"
                options={["Chinese", "English", "Bilingual"]}
              />

              <label className="flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-sm leading-6 text-neutral-300">
                <input
                  type="checkbox"
                  name="willingToTest"
                  className="mt-1 h-4 w-4 accent-neutral-100"
                />
                I am willing to participate in early testing and accept that
                MajorProof may adjust the product format based on feedback.
              </label>

              <button
                type="submit"
                className="rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-950 transition hover:bg-white"
              >
                Submit request
              </button>
            </div>
          </form>

          <aside className="space-y-5">
            <InfoCard
              title="Why we collect this information"
              body="MajorProof needs to understand real demand across disciplines before building a larger platform. Early requests help determine which asset packs should be prioritized."
            />

            <InfoCard
              title="What this does not mean"
              body="Submitting this form does not create a payment obligation or an account. The current stage is for demand validation and early user communication."
            />

            <InfoCard
              title="What we care about"
              body="We are especially interested in what kind of presentable work you lack, what role or application you are targeting, and what specific problem you want an asset pack to solve."
            />
          </aside>
        </div>
      </section>

      <PublicFooter locale="en" />
    </main>
  );
}

function Field({
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
        {required ? <span className="text-neutral-500"> *</span> : null}
      </span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
      />
    </label>
  );
}

function TextArea({
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
        {required ? <span className="text-neutral-500"> *</span> : null}
      </span>
      <textarea
        name={name}
        required={required}
        rows={6}
        placeholder={placeholder}
        className="w-full resize-none rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-neutral-300">
        {label}
      </span>

      <select
        name={name}
        className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition focus:border-neutral-500"
      >
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function AssetCheckboxGroup() {
  const options = [
    "TechProof",
    "FinanceProof",
    "BusinessProof",
    "ResearchProof",
    "DesignProof",
    "PolicyProof",
    "Not sure yet",
  ];

  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium text-neutral-300">
        Interested Asset Directions
      </legend>

      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-sm text-neutral-300"
          >
            <input
              type="checkbox"
              name="interestedAssets"
              value={option}
              className="mt-0.5 h-4 w-4 accent-neutral-100"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}