import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

type RoadmapPreviewRecord = {
  id: string;
  name_or_alias: string | null;
  contact_method: string | null;
  current_major: string;
  current_year: string | null;
  target_goal: string;
  interested_asset: string | null;
  existing_experience: string | null;
  primary_need: string;
  ai_result: string;
  created_at: string;
};

type MemoField = {
  label: string;
  body: string;
};

type MemoSection = {
  title: string;
  fields: MemoField[];
  fallbackBody: string[];
};

export default async function EnglishRoadmapPreviewResultPage({
  params,
}: PageProps) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  const preview = await getRoadmapPreview(id);

  if (!preview) {
    notFound();
  }

  const requestAccessHref = getRequestAccessHref(preview.interested_asset);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            MajorProof · AI Roadmap Preview
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Your professional asset
            <br />
            roadmap preview
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            This preview is generated from your major, target goal, current
            experience, and main problem. It is meant to help you identify a
            practical Proof Asset direction before requesting manual review.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            The result is not a guarantee of admission, employment, grades, or
            scholarship outcome. It is an initial planning reference for building
            verifiable professional evidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={requestAccessHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              Request manual review
            </Link>

            <Link
              href="/en/ai-roadmap-preview"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              Generate another preview
            </Link>

            <Link
              href="/en"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          <MetaCard title="Major" value={preview.current_major} />
          <MetaCard title="Year" value={preview.current_year || "Not provided"} />
          <MetaCard
            title="Asset direction"
            value={preview.interested_asset || "Not selected"}
          />
          <MetaCard title="Created" value={formatDate(preview.created_at)} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="space-y-5">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Submitted Context
            </p>

            <div className="space-y-5">
              <InfoBlock title="Target goal" body={preview.target_goal} />
              <InfoBlock title="Main problem" body={preview.primary_need} />

              {preview.existing_experience ? (
                <InfoBlock
                  title="Existing experience"
                  body={preview.existing_experience}
                />
              ) : null}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Next Step
            </p>

            <h2 className="text-2xl font-semibold">
              Turn this preview into a real asset
            </h2>

            <p className="mt-4 leading-7 text-neutral-400">
              A roadmap preview only tells you the direction. The real value
              comes from building deliverables, process evidence, resume
              language, and interview-defense material.
            </p>

            <Link
              href={requestAccessHref}
              className="mt-6 inline-flex rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              Request manual review
            </Link>
          </div>
        </aside>

        <article className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-8">
<div className="mb-8">
  <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
    Professional Assessment Memo
  </p>

  <h2 className="text-4xl font-semibold tracking-tight">
    Evidence-based roadmap review
  </h2>

  <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-400">
    This memo is a preliminary assessment generated from the information
    submitted by the student. It should be read as a conservative planning
    reference, not as a guarantee of admission, employment, internship outcome,
    scholarship result, or interview performance.
  </p>
</div>

<RoadmapResultContent content={preview.ai_result} />
        </article>
      </section>

      <PublicFooter locale="en" />
    </main>
  );
}
async function getRoadmapPreview(id: string) {
  const supabase = getSupabaseServerClient();

  const { data, error } = await supabase
    .from("majorproof_ai_roadmap_previews")
    .select(
      [
        "id",
        "name_or_alias",
        "contact_method",
        "current_major",
        "current_year",
        "target_goal",
        "interested_asset",
        "existing_experience",
        "primary_need",
        "ai_result",
        "created_at",
      ].join(", ")
    )
    .eq("id", id)
    .maybeSingle<RoadmapPreviewRecord>();

  if (error) {
    console.error("Failed to load roadmap preview", error);
    return null;
  }

  return data;
}

function getSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
  }

  if (!serviceRoleKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function getRequestAccessHref(asset: string | null) {
  if (asset === "TechProof") {
    return "/en/request-access?source=techproof-starter-pack&asset=TechProof";
  }

  if (asset === "FinanceProof") {
    return "/en/request-access?source=financeproof-company-research-valuation-kit&asset=FinanceProof";
  }

  if (asset === "BusinessProof") {
    return "/en/request-access?source=businessproof-market-entry-strategy-kit&asset=BusinessProof";
  }

  if (asset === "ResearchProof") {
    return "/en/request-access?source=researchproof-literature-method-kit&asset=ResearchProof";
  }

  return "/en/request-access";
}
function RoadmapResultContent({ content }: { content: string }) {
  const sections = parseMemoContent(content);

  if (sections.length === 0) {
    return (
      <p className="text-base leading-8 text-neutral-400">
        No roadmap content was generated.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {sections.map((section, index) => (
        <MemoSectionCard
          key={`${section.title}-${index}`}
          index={index}
          section={section}
        />
      ))}
    </div>
  );
}

function MemoSectionCard({
  index,
  section,
}: {
  index: number;
  section: MemoSection;
}) {
  return (
    <section className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-neutral-700 text-sm font-medium text-neutral-300">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
            Assessment Section
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-neutral-100">
            {removeLeadingSectionNumber(section.title)}
          </h3>
        </div>
      </div>

      {section.fields.length > 0 ? (
        <div className="grid gap-4">
          {section.fields.map((field, fieldIndex) => (
            <div
              key={`field-${index}-${fieldIndex}-${field.label}`}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5"
            >
              <p className="mb-3 text-sm font-medium text-neutral-200">
                {field.label}
              </p>
              <p className="text-sm leading-7 text-neutral-400">{field.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {section.fallbackBody.map((paragraph, paragraphIndex) => (
            <p
              key={`paragraph-${index}-${paragraphIndex}`}
              className="text-sm leading-7 text-neutral-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

function parseMemoContent(content: string): MemoSection[] {
  const lines = content
    .split(/\r?\n/)
    .map((line) => sanitizeGeneratedLine(line))
    .filter(Boolean);

  const sections: MemoSection[] = [];
  let currentSection: MemoSection | null = null;

  for (const line of lines) {
    if (isMemoSectionTitle(line)) {
      if (currentSection) {
        sections.push(currentSection);
      }

      currentSection = {
        title: line,
        fields: [],
        fallbackBody: [],
      };

      continue;
    }

    if (!currentSection) {
      currentSection = {
        title: "Assessment note",
        fields: [],
        fallbackBody: [],
      };
    }

    const field = parseMemoField(line);

    if (field) {
      currentSection.fields.push(field);
    } else {
      currentSection.fallbackBody.push(line);
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections.filter(
    (section) =>
      section.title.trim() ||
      section.fields.length > 0 ||
      section.fallbackBody.length > 0
  );
}

function isMemoSectionTitle(line: string) {
  return /^[0-9]+[.)]?\s+/.test(line);
}

function parseMemoField(line: string): MemoField | null {
  const normalized = line.trim();

  const englishColonIndex = normalized.indexOf(":");
  const chineseColonIndex = normalized.indexOf("：");

  const colonIndex =
    englishColonIndex >= 0 && chineseColonIndex >= 0
      ? Math.min(englishColonIndex, chineseColonIndex)
      : Math.max(englishColonIndex, chineseColonIndex);

  if (colonIndex > 0) {
    const label = normalized.slice(0, colonIndex).trim();
    const body = normalized.slice(colonIndex + 1).trim();

    if (label.length > 0 && label.length <= 80 && body.length > 0) {
      return {
        label,
        body,
      };
    }
  }

  return null;
}

function removeLeadingSectionNumber(value: string) {
  return value.replace(/^[0-9]+[.)]?\s+/, "").trim();
}

function sanitizeGeneratedLine(line: string) {
  return line
    .replace(/```/g, "")
    .replace(/\*\*/g, "")
    .replace(/__/g, "")
    .replace(/^#{1,6}\s*/g, "")
    .replace(/^\s*[-*•]\s+/g, "")
    .replace(/^\s*[-–—]{3,}\s*$/g, "")
    .replace(/\s+$/g, "")
    .trim();
}


function isListLine(line: string) {
  return /^[-*]\s+/.test(line) || /^[0-9]+[.)]\s+/.test(line);
}

function cleanListLine(line: string) {
  return line.replace(/^[-*]\s+/, "").replace(/^[0-9]+[.)]\s+/, "").trim();
}

function MetaCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
        {title}
      </p>
      <p className="text-lg font-semibold text-neutral-100">{value}</p>
    </div>
  );
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-neutral-300">{title}</p>
      <p className="text-sm leading-7 text-neutral-500">{body}</p>
    </div>
  );
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  return date.toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}