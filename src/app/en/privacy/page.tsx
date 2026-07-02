import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

export default function EnglishPrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Privacy
        </p>

        <h1 className="mb-6 text-5xl font-semibold tracking-tight">
          Privacy Notice
        </h1>

        <p className="mb-10 text-lg leading-8 text-neutral-300">
          The current version of MajorProof is intended for product
          presentation, demand validation, and early user communication. This
          notice explains the types of information that may be involved, the
          purposes of use, and the basic handling principles.
        </p>

        <div className="space-y-8 leading-8 text-neutral-300">
          <Section title="1. Current Version Scope">
            <p>
              The first version of MajorProof does not provide an automated
              account system, online checkout, or user file upload system. The
              website currently presents the product concept, professional
              categories, integrity policy, and initial asset plan.
            </p>
          </Section>

          <Section title="2. Information We May Receive">
            <p>
              If users contact MajorProof through email, forms, direct messages,
              or other channels, we may receive information voluntarily provided
              by the user, such as contact details, major, target role,
              application context, needs, and feedback.
            </p>
          </Section>

          <Section title="3. Purpose of Use">
            <p>
              User-provided information is used only to understand needs, reply
              to inquiries, deliver purchased materials, improve asset
              structures, and assess future product direction. MajorProof does
              not sell user-provided information to third parties.
            </p>
          </Section>

          <Section title="4. Information Users Should Not Submit">
            <p>
              Users should not submit identity documents, bank details, home
              addresses, school account passwords, unredacted transcripts,
              passport scans, or other sensitive information unrelated to
              product purchase or demand communication.
            </p>
          </Section>

          <Section title="5. Third-Party Tools">
            <p>
              Future versions may use hosting, database, email, payment, or file
              distribution services. If these features are enabled, the relevant
              data-handling description will be updated.
            </p>
          </Section>

          <Section title="6. Deletion and Correction">
            <p>
              Users may request deletion, correction, or discontinuation of use
              for information they voluntarily provided. MajorProof will process
              verifiable requests within a reasonable period.
            </p>
          </Section>
        </div>
      </section>

      <PublicFooter locale="en" />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-3 text-2xl font-semibold text-neutral-100">{title}</h2>
      {children}
    </section>
  );
}