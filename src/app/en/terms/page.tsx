import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

export default function EnglishTermsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Terms
        </p>

        <h1 className="mb-6 text-5xl font-semibold tracking-tight">
          Terms of Use
        </h1>

        <p className="mb-10 text-lg leading-8 text-neutral-300">
          These terms describe the current service scope, user responsibilities,
          integrity boundaries, and digital product delivery principles of
          MajorProof. By using MajorProof pages or purchasing related assets,
          users acknowledge these basic rules.
        </p>

        <div className="space-y-8 leading-8 text-neutral-300">
          <Section title="1. Service Nature">
            <p>
              MajorProof provides evidence-based professional assets for
              students, including project structures, case frameworks, model
              examples, report templates, presentation materials, resume
              language, and interview explanation frameworks.
            </p>
          </Section>

          <Section title="2. No Guaranteed Outcomes">
            <p>
              MajorProof does not guarantee internships, employment, admission,
              interviews, scholarships, or any other specific outcome. Final
              outcomes depend on the user&apos;s background, actual ability,
              material quality, market conditions, and the judgment of employers
              or admissions committees.
            </p>
          </Section>

          <Section title="3. Academic and Professional Integrity">
            <p>
              Users may not use MajorProof assets for assignment completion,
              essay ghostwriting, exam misconduct, fabricated experience, false
              applications, or any use that violates school, employer, exam, or
              platform rules.
            </p>
          </Section>

          <Section title="4. User Responsibility">
            <p>
              Users should apply the assets based on their own background, data,
              understanding, and contribution. In resumes, portfolios,
              applications, and interviews, users should accurately describe
              their own work and the role of any reference material.
            </p>
          </Section>

          <Section title="5. Digital Product Delivery">
            <p>
              Once digital assets are delivered, refunds are generally not
              available for subjective dissatisfaction, changes of direction, or
              insufficient personal use. Duplicate payments, damaged files,
              missing content, or clear delivery errors will be handled based on
              the actual situation.
            </p>
          </Section>

          <Section title="6. Content Updates">
            <p>
              MajorProof may update product content, page copy, pricing
              structure, and delivery methods based on user feedback, market
              demand, and professional standards. Whether existing users receive
              future updates depends on the specific product description.
            </p>
          </Section>

          <Section title="7. Limitation of Responsibility">
            <p>
              MajorProof provides learning and professional presentation
              materials. It does not provide legal, financial, investment,
              employment, or admissions guarantees. Users should independently
              determine whether the material is appropriate for their specific
              context.
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