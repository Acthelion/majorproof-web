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

type RoadmapBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

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
              AI Result
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Roadmap preview
            </h2>
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
  const blocks = parseRoadmapContent(content);

  if (blocks.length === 0) {
    return (
      <p className="text-base leading-8 text-neutral-400">
        No roadmap content was generated.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={`${block.text}-${index}`}
              className="pt-4 text-2xl font-semibold tracking-tight text-neutral-100"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p
              key={`${block.text}-${index}`}
              className="text-base leading-8 text-neutral-300"
            >
              {block.text}
            </p>
          );
        }

        return (
          <ul
            key={`list-${index}`}
            className="space-y-3 rounded-3xl border border-neutral-800 bg-neutral-950 p-6"
          >
            {block.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-7 text-neutral-400"
              >
                <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-neutral-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

function parseRoadmapContent(content: string): RoadmapBlock[] {
  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const blocks: RoadmapBlock[] = [];
  let listItems: string[] = [];

  function flushList() {
    if (listItems.length > 0) {
      blocks.push({
        type: "list",
        items: listItems,
      });
      listItems = [];
    }
  }

  for (const line of lines) {
    if (isHeadingLine(line)) {
      flushList();
      blocks.push({
        type: "heading",
        text: cleanHeadingLine(line),
      });
      continue;
    }

    if (isListLine(line)) {
      listItems.push(cleanListLine(line));
      continue;
    }

    flushList();

    blocks.push({
      type: "paragraph",
      text: line,
    });
  }

  flushList();

  return blocks;
}

function isHeadingLine(line: string) {
  if (/^#{1,6}\s+/.test(line)) {
    return true;
  }

  if (/^\*\*.+\*\*$/.test(line)) {
    return true;
  }

  if (/^Part\s+[0-9]+/i.test(line)) {
    return true;
  }

  if (/^Step\s+[0-9]+/i.test(line)) {
    return true;
  }

  if (/^[0-9]+[.)]\s+[^.!?]{2,80}$/.test(line) && !line.includes(",")) {
    return true;
  }

  return false;
}
function cleanHeadingLine(line: string) {
  return line
    .replace(/^#{1,6}\s+/, "")
    .replace(/^\*\*/, "")
    .replace(/\*\*$/, "")
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