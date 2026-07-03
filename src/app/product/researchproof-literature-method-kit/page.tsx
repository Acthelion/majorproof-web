import Link from "next/link";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

const requestAccessHref =
  "/request-access?source=researchproof-literature-method-kit&asset=ResearchProof";

const deliverables = [
  {
    title: "研究问题界定",
    body: "明确研究主题、问题边界、核心概念、研究对象和可回答范围，避免把项目写成泛泛的兴趣陈述或资料整理。",
  },
  {
    title: "文献综述结构",
    body: "梳理关键文献、理论脉络、已有争论、研究空白和方法差异，说明你的问题如何从已有研究中被提出。",
  },
  {
    title: "方法选择说明",
    body: "解释为什么使用定量、定性、实验、案例、文本分析、建模、仿真或其他方法，并说明方法适用条件和限制。",
  },
  {
    title: "证据与材料清单",
    body: "列出需要收集的数据、文献、案例、变量、材料或实验记录，明确证据如何支撑研究问题，而不是只堆引用。",
  },
  {
    title: "研究边界与局限",
    body: "说明研究不能回答什么、数据或方法有哪些限制、结论适用于什么范围，以及后续可以如何扩展。",
  },
  {
    title: "简历与面试防守",
    body: "把研究过程转化为克制、可验证的简历表达，并准备研究动机、文献选择、方法合理性和局限性相关追问。",
  },
];

const fitItems = [
  "准备科研项目、研究助理、海外申请、论文计划或学术作品集的学生",
  "需要把课程论文、研究兴趣或文献阅读整理成正式研究资产的人",
  "有研究主题，但缺少清晰问题、文献结构和方法说明的人",
  "希望在申请、面试或导师沟通中讲清楚自己研究能力的人",
];

const notFitItems = [
  "想让别人代写论文、课程作业或研究报告的人",
  "想伪造科研经历、论文发表或导师项目的人",
  "不愿意阅读文献、整理材料和解释方法选择的人",
  "只想要一段听起来高级但无法被追问的研究包装话术的人",
];

const methodSections = [
  {
    title: "Research question",
    body: "研究问题是否足够具体，是否能被材料或数据回答，是否避免了过大、过空或不可验证的表达。",
  },
  {
    title: "Literature position",
    body: "已有研究已经说了什么，主要分歧在哪里，你的问题与既有文献之间是什么关系。",
  },
  {
    title: "Method fit",
    body: "方法是否适合问题，材料是否足够支撑分析，研究设计是否能产生有意义但不过度夸大的结论。",
  },
  {
    title: "Boundary and extension",
    body: "结论适用于什么范围，局限在哪里，后续研究可以如何补充数据、扩大样本或改进方法。",
  },
];
export default function ResearchProofLiteratureMethodKitPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            ResearchProof · Literature and Method Kit
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            文献综述与方法说明
            <br />
            研究资产包
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            ResearchProof 帮助学生把研究兴趣、课程论文、文献阅读、方法设计和学术表达整理成可展示、可解释、可用于申请和面试的研究能力证据。
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            这个资产包不代写论文，不编造科研经历，也不包装虚假发表。它关注的是你能否提出清楚的问题、理解已有文献、选择合适方法，并诚实说明研究边界。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={requestAccessHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              申请 ResearchProof 测试
            </Link>

            <Link
              href="/ai-roadmap-preview"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              先生成 AI 路线预览
            </Link>

            <a
              href="#deliverables"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              查看交付内容
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value="ResearchProof"
            label="面向科研项目、研究助理、论文计划、海外申请和学术作品集的研究资产"
          />
          <StatBlock
            value="方法意识"
            label="从研究问题、文献位置、方法适配到研究边界建立完整解释链条"
          />
          <StatBlock
            value="学术可防守"
            label="重点准备文献选择、问题来源、方法合理性、证据限制和后续扩展"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Problem
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            很多研究项目的问题不是没有主题，而是没有可回答的问题。
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            研究兴趣、课程论文和文献阅读如果只停留在主题罗列，很难成为申请或面试中的有效证据。真正有价值的研究资产，需要说明问题从哪里来、已有文献如何讨论、方法为什么适合、证据能支持什么结论，以及研究有哪些边界。
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-400">
            ResearchProof 的目标不是制造学术包装，而是帮助你建立一条从问题到文献、方法和边界的研究解释链。
          </p>
        </div>

        <div className="grid gap-5">
          <InfoCard title="适合谁" items={fitItems} />
          <InfoCard title="不适合谁" items={notFitItems} />
        </div>
      </section>
      <section
        id="deliverables"
        className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Deliverables
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              这个资产包应该帮助你产出什么
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              ResearchProof 的交付重点不是替你写论文，而是帮你建立研究问题、文献结构、方法说明、证据清单、边界意识和面试防守点。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6"
              >
                <p className="mb-5 text-sm text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Method Spine
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            一个研究资产必须有清楚的方法主线
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            研究资产不是文献摘要的堆叠。它需要说明问题如何形成，已有研究如何铺垫，方法为什么适合，以及结论在什么边界内成立。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {methodSections.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-400">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Pricing Test
              </p>

              <h2 className="text-4xl font-semibold tracking-tight">
                当前验证价格
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                当前阶段用于验证学生是否愿意为结构化研究资产付费。提交申请不会自动收费，后续需要人工确认交付范围。
              </p>
            </div>

            <div className="grid gap-5">
              <PriceCard
                title="Roadmap Review"
                price="¥29"
                body="适合先判断研究主题、问题边界、文献结构和方法路径是否成立。"
              />
              <PriceCard
                title="ResearchProof Starter Kit"
                price="¥99"
                body="适合围绕一个研究问题建立文献综述结构、方法说明、证据清单、研究边界和面试防守材料。"
                emphasized
              />
              <PriceCard
                title="Personalized ResearchProof Plan"
                price="¥199+"
                body="适合针对科研项目、研究助理、海外申请、论文计划或导师沟通做更完整的个性化研究资产路径。"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Integrity Boundary
              </p>

              <h2 className="text-4xl font-semibold tracking-tight">
                ResearchProof 是研究训练，不是论文代写
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                这个资产包不会替你写论文、代写课程作业、编造科研经历、伪造论文发表或包装虚假导师项目。它只帮助你基于真实阅读、真实材料和真实方法意识建立可解释的研究资产。
              </p>
            </div>

            <Link
              href="/integrity"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              查看诚信边界
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Start Here
              </p>

              <h2 className="text-4xl font-semibold tracking-tight">
                申请 ResearchProof 测试
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                如果你需要把课程论文、研究兴趣、文献阅读、研究计划或科研项目转化成可展示资产，可以先提交申请。当前阶段以人工验证和早期用户沟通为主。
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={requestAccessHref}
                className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                申请 ResearchProof 测试
              </Link>

              <Link
                href="/ai-roadmap-preview"
                className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
              >
                先生成路线预览
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter locale="zh" />
    </main>
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

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex gap-3 text-sm leading-7 text-neutral-400"
          >
            <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-neutral-500" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceCard({
  title,
  price,
  body,
  emphasized = false,
}: {
  title: string;
  price: string;
  body: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border p-6",
        emphasized
          ? "border-neutral-500 bg-neutral-100 text-neutral-950"
          : "border-neutral-800 bg-neutral-950 text-neutral-100",
      ].join(" ")}
    >
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-4xl font-semibold">{price}</p>
      <p
        className={[
          "leading-7",
          emphasized ? "text-neutral-700" : "text-neutral-400",
        ].join(" ")}
      >
        {body}
      </p>
    </div>
  );
}