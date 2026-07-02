import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

export default function EnglishIntegrityPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Academic Integrity
        </p>

        <h1 className="mb-6 text-5xl font-semibold tracking-tight">
          Academic Integrity Policy
        </h1>

        <p className="mb-10 text-lg leading-8 text-neutral-300">
          MajorProof is designed to help students develop real, explainable, and
          presentable evidence of professional ability. Our assets may be used
          for learning, portfolio development, internship preparation, and
          application presentation. All use should be based on genuine
          contribution, independent understanding, and accurate representation.
        </p>

        <div className="space-y-5">
          <PolicyBlock
            title="What MajorProof Provides"
            items={[
              "Project and work-sample framing for professional contexts",
              "Example structures for projects, models, reports, cases, and research assets",
              "Process notes, method explanations, and quality standards",
              "Bilingual resume language and interview explanation frameworks",
              "Extension routes from sample assets to individualized versions",
            ]}
          />

          <PolicyBlock
            title="What MajorProof Does Not Provide"
            items={[
              "Completion of coursework, assignments, exams, or graded projects",
              "Essay ghostwriting, thesis writing, or application essay writing",
              "Fabrication of internships, research experience, competitions, or project history",
              "Materials intended to bypass school, employer, exam, or platform rules",
              "Guaranteed outcomes for employment, admission, interviews, or financial returns",
            ]}
          />

          <PolicyBlock
            title="User Responsibility"
            items={[
              "Use assets as learning materials, training frameworks, and portfolio references",
              "Adapt the material using personal background, data, understanding, and contribution",
              "Represent personal work accurately in resumes, portfolios, and interviews",
              "Do not submit sample materials unchanged as coursework or personal original work",
              "Do not use this service to create experience claims that cannot be explained or verified",
            ]}
          />

          <PolicyBlock
            title="Why These Boundaries Matter"
            items={[
              "The value of evidence-based work comes from real understanding, not surface-level packaging",
              "Interviews and applications often test contribution, method, and limitations",
              "Professional credibility depends on records that can withstand scrutiny",
              "Clear boundaries protect students, institutions, employers, and MajorProof itself",
            ]}
          />
        </div>
      </section>

      <PublicFooter locale="en" />
    </main>
  );
}

function PolicyBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-5 text-2xl font-semibold">{title}</h2>
      <ul className="list-disc space-y-3 pl-6 leading-7 text-neutral-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}