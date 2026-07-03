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

export default async function RoadmapPreviewResultPage({ params }: PageProps) {
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
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            MajorProof · AI Roadmap Preview
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            你的专业能力资产
            <br />
            路线预览
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            这份预览基于你提交的专业、目标、已有经历和当前主要问题生成。
            它的作用不是替你包装经历，而是帮助你初步判断可以构建哪类可验证的
            Proof Asset。
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            该结果不构成录取、就业、实习、成绩、奖学金或面试表现的承诺。
            它只是一个用于后续人工 review 和资产构建的保守路线参考。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={requestAccessHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              申请人工 review
            </Link>

            <Link
              href="/ai-roadmap-preview"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              再生成一次路线
            </Link>

            <Link
              href="/"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              返回首页
            </Link>
          </div>
        </div>
      </section>
      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          <MetaCard title="专业" value={preview.current_major} />
          <MetaCard title="年级" value={preview.current_year || "未提供"} />
          <MetaCard
            title="资产方向"
            value={preview.interested_asset || "未选择"}
          />
          <MetaCard title="生成时间" value={formatDate(preview.created_at)} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="space-y-5">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Submitted Context
            </p>

            <div className="space-y-5">
              <InfoBlock title="目标" body={preview.target_goal} />
              <InfoBlock title="当前主要问题" body={preview.primary_need} />

              {preview.existing_experience ? (
                <InfoBlock
                  title="已有经历"
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
              把路线预览变成真实资产
            </h2>

            <p className="mt-4 leading-7 text-neutral-400">
              AI 路线预览只能提供初步判断。真正有价值的是后续产出成果本体、
              过程证据、方法解释、简历表达和面试防守材料。
            </p>

            <Link
              href={requestAccessHref}
              className="mt-6 inline-flex rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              申请人工 review
            </Link>
          </div>
        </aside>

        <article className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-8">
          <div className="mb-8">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Professional Assessment Memo
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              专业能力证据资产评估备忘录
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-400">
              这份内容是根据学生提交的专业、目标、已有经历和主要问题生成的初步评估。
              它应当被理解为保守的路线参考，而不是录取、就业、实习、奖学金、成绩或面试结果的承诺。
            </p>
          </div>

          <RoadmapResultContent content={preview.ai_result} />
        </article>
      </section>

      <PublicFooter locale="zh" />
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
    return "/request-access?source=techproof-starter-pack&asset=TechProof";
  }

  if (asset === "FinanceProof") {
    return "/request-access?source=financeproof-company-research-valuation-kit&asset=FinanceProof";
  }

  if (asset === "BusinessProof") {
    return "/request-access?source=businessproof-market-entry-strategy-kit&asset=BusinessProof";
  }

  if (asset === "ResearchProof") {
    return "/request-access?source=researchproof-literature-method-kit&asset=ResearchProof";
  }

  return "/request-access";
}
function RoadmapResultContent({ content }: { content: string }) {
  const sections = parseMemoContent(content);

  if (sections.length === 0) {
    return (
      <p className="text-base leading-8 text-neutral-400">
        暂未生成路线内容。
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
        title: "评估说明",
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
    return "未知";
  }

  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}