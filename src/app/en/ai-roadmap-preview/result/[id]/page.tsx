import { notFound } from "next/navigation";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

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

export default async function EnglishAiRoadmapPreviewResultPage({
  params,
}: PageProps) {
  const { id } = await params;

  const { data, error } = await supabaseAdmin
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

  if (error || !data) {
    notFound();
  }

  const requestHref = buildRequestHref(data.interested_asset);
  const createdAt = formatDate(data.created_at);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="en" />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            MajorProof · AI Asset Roadmap Result
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Your asset roadmap
            <br />
            preview is ready
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            This preview turns your major, target goal, existing experience, and
            current problem into a structured Proof Asset direction. Use it as a
            starting point for a more complete asset workflow, not as a
            guaranteed outcome or fabricated experience.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/en/ai-roadmap-preview"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              Generate another preview
            </a>

            <a
              href={requestHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              Submit formal request
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          <MetaCard title="Major" body={data.current_major} />
          <MetaCard title="Year" body={data.current_year || "Not provided"} />
          <MetaCard
            title="Asset direction"
            body={data.interested_asset || "Not sure yet"}
          />
          <MetaCard title="Created" body={createdAt} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="space-y-5">
          <InfoPanel
            title="Input summary"
            items={[
              {
                label: "Name or alias",
                value: data.name_or_alias || "Not provided",
              },
              {
                label: "Contact method",
                value: data.contact_method || "Not provided",
              },
              {
                label: "Target goal",
                value: data.target_goal,
              },
              {
                label: "Main problem",
                value: data.primary_need,
              },
            ]}
          />

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <h2 className="text-2xl font-semibold">Integrity boundary</h2>

            <p className="mt-4 leading-7 text-neutral-400">
              MajorProof helps you structure real learning, real projects, and
              real evidence. It does not write coursework for you, invent
              internships, fabricate deliverables, or guarantee admissions,
              grades, scholarships, jobs, or interviews.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <h2 className="text-2xl font-semibold">Next step</h2>

            <p className="mt-4 leading-7 text-neutral-400">
              If this roadmap fits your situation, submit a formal request so
              the asset direction can be reviewed and converted into a more
              complete Proof Asset workflow.
            </p>

            <a
              href={requestHref}
              className="mt-6 inline-flex rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              Submit formal request
            </a>
          </div>
        </aside>

        <article className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-8">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Generated Roadmap
          </p>

          <RenderedRoadmap content={data.ai_result} />
        </article>
      </section>

      <PublicFooter locale="en" />
    </main>
  );
}

function MetaCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-5">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
        {title}
      </p>
      <p className="break-words text-sm leading-6 text-neutral-200">{body}</p>
    </div>
  );
}

function InfoPanel({
  title,
  items,
}: {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <div key={item.label}>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
              {item.label}
            </p>
            <p className="break-words text-sm leading-7 text-neutral-300">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RenderedRoadmap({ content }: { content: string }) {
  const blocks = parseRoadmapContent(content);

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={`${block.text}-${index}`}
              className="border-t border-neutral-800 pt-8 text-3xl font-semibold tracking-tight first:border-t-0 first:pt-0"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={`${block.items.join("-")}-${index}`}
              className="space-y-3 text-neutral-300"
            >
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 leading-8">
                  <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-neutral-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={`${block.text}-${index}`}
            className="whitespace-pre-wrap leading-8 text-neutral-300"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

function parseRoadmapContent(content: string) {
  const lines = content.split("\n");
  const blocks:
    | {
        type: "heading";
        text: string;
      }
    | {
        type: "paragraph";
        text: string;
      }
    | {
        type: "list";
        items: string[];
      }[] = [];

  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];

  function flushParagraph() {
    if (paragraphBuffer.length > 0) {
      blocks.push({
        type: "paragraph",
        text: paragraphBuffer.join("\n").trim(),
      });
      paragraphBuffer = [];
    }
  }

  function flushList() {
    if (listBuffer.length > 0) {
      blocks.push({
        type: "list",
        items: listBuffer,
      });
      listBuffer = [];
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "heading",
        text: line.replace(/^##\s+/, ""),
      });
      continue;
    }

    if (/^\d+\.\s+/.test(line) || line.startsWith("- ")) {
      flushParagraph();
      listBuffer.push(line.replace(/^\d+\.\s+/, "").replace(/^-\s+/, ""));
      continue;
    }

    flushList();
    paragraphBuffer.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function buildRequestHref(assetDirection: string | null) {
  const params = new URLSearchParams();

  params.set("source", "ai-roadmap-preview");

  if (assetDirection) {
    params.set("asset", assetDirection);
  }

  return `/en/request-access?${params.toString()}`;
}

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value));
  } catch {
    return value;
  }
}