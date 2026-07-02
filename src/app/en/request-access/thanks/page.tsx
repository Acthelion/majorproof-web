import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

export default function EnglishRequestAccessThanksPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Submitted
        </p>

        <h1 className="text-5xl font-semibold tracking-tight">
          Your request has been received.
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-300">
          Thank you for requesting early access to MajorProof. We will use
          responses across disciplines to determine the priority and format of
          the first asset packs.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/en/assets"
            className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
          >
            View assets
          </a>
          <a
            href="/en"
            className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
          >
            Back to home
          </a>
        </div>
      </section>

      <PublicFooter locale="en" />
    </main>
  );
}