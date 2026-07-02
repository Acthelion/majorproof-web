import Link from "next/link";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

const requestAccessHref =
  "/request-access?source=techproof-starter-pack&asset=TechProof";

const deliverables = [
  {
    title: "项目背景与专业场景",
    body: "说明为什么 AI Document Review Platform 是一个合理的技术项目，而不是一个空泛的 AI demo。",
  },
  {
    title: "功能结构与模块拆分",
    body: "把项目拆成用户输入、文档处理、模型调用、结果展示、日志记录、边界控制等模块。",
  },
  {
    title: "技术栈建议",
    body: "根据学生背景给出前端、后端、数据库、AI API、部署方式和可替代方案。",
  },
  {
    title: "最终成果清单",
    body: "明确最后应该交付什么，例如 GitHub 仓库、项目说明、功能截图、README、演示页面和简历材料。",
  },
  {
    title: "过程证据清单",
    body: "告诉学生在开发过程中需要保留哪些截图、提交记录、设计说明、测试记录和问题解决过程。",
  },
  {
    title: "简历表达草案",
    body: "给出克制、可验证、能被面试追问防守的 resume bullets，而不是夸张包装。",
  },
  {
    title: "面试防守问题",
    body: "准备面试官可能追问的技术选择、项目边界、个人贡献、模型限制和后续优化。",
  },
];

const suitableUsers = [
  "工科、CS、EE、AI、数据方向学生",
  "有课程基础，但缺少能写进简历的独立项目",
  "想申请实习、海外硕士、研究项目或作品集",
  "不知道如何把课程和技能转成可展示成果",
  "需要一个能被面试追问时讲清楚的技术项目",
];

const unsuitableUsers = [
  "想找人代写课程作业",
  "想编造不存在的实习或项目经历",
  "只想要一个复制粘贴就能交的代码仓库",
  "完全不愿意自己理解项目逻辑",
  "期待保证实习、录取、成绩或就业结果",
];

const pricingOptions = [
  {
    name: "Roadmap Review",
    price: "¥29",
    tag: "低门槛验证",
    body: "适合只想先判断方向的人。包含 AI Roadmap 结果复核、一个项目方向建议和 2 条简历 bullet 初版。",
  },
  {
    name: "TechProof Starter Pack",
    price: "¥99",
    tag: "主推验证档",
    body: "适合想正式做一个技术项目资产的人。包含项目背景、模块结构、技术栈、成果清单、过程证据、简历表达和面试防守。",
  },
  {
    name: "Personalized TechProof Plan",
    price: "¥199 起",
    tag: "深度个性化",
    body: "适合目标更明确的人。在 Starter Pack 基础上，结合专业、申请方向、课程背景和已有技能做个性化扩展。",
  },
];

export default function TechProofStarterPackPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            TechProof · Starter Pack
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            AI Document Review Platform
            <br />
            技术项目资产包
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            面向工科、CS、EE、AI 和数据方向学生，帮助你把一个技术项目从模糊想法整理成可展示、可解释、可写进简历、可在面试中防守的 Proof Asset。
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            它不是代写项目，也不是虚构经历，而是一套围绕真实技术项目建立成果、证据、表达和面试解释的结构化资产包。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={requestAccessHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              申请付费测试
            </Link>

            <Link
              href="/ai-roadmap-preview"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              先生成 AI 路线预览
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value="技术项目"
            label="围绕 AI 文档审查平台构建一个具体、可展示、可解释的技术资产"
          />
          <StatBlock
            value="证据资产"
            label="不只给项目想法，还包括成果、过程、方法、简历表达和面试防守"
          />
          <StatBlock
            value="付费验证"
            label="当前处于早期测试阶段，用低价格验证真实学生是否需要这种资产"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Problem
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            很多学生不是没有能力，而是没有可展示的能力证据
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            课程成绩、编程语言、课堂实验和零散技能很难直接变成简历竞争力。TechProof Starter Pack 的目标，是把这些基础转化成一个边界清晰、能讲清楚、能展示成果、能保留过程证据的技术项目资产。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <AudienceCard title="适合谁" items={suitableUsers} />
          <AudienceCard title="不适合谁" items={unsuitableUsers} />
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Deliverables
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              你会得到什么
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              这个资产包重点不是给你一个看起来复杂的项目名，而是把项目从专业场景、成果形态、开发过程、简历表达和面试解释上完整搭起来。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {deliverables.map((item) => (
              <DeliverableCard
                key={item.title}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Pricing Test
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            第一阶段用低价格验证真实需求
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            当前不是正式规模化产品，而是早期付费验证。价格会低于成熟咨询或完整平台产品，目的是确认学生是否真的愿意为专业能力证据资产付费。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pricingOptions.map((option) => (
            <PriceCard
              key={option.name}
              name={option.name}
              price={option.price}
              tag={option.tag}
              body={option.body}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Integrity Boundary
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              MajorProof 不做虚假包装
            </h2>
          </div>

          <div className="space-y-4">
            <BoundaryItem
              title="不代写课程作业"
              body="可以帮助你规划项目、组织成果和解释方法，但不会替你完成需要独立提交的课程作业。"
            />
            <BoundaryItem
              title="不编造经历"
              body="所有简历表达都必须建立在你真实完成或真实参与的内容上。"
            />
            <BoundaryItem
              title="不承诺结果"
              body="不会承诺实习、录取、成绩、奖学金或就业结果，只帮助你提升展示和解释能力。"
            />
            <BoundaryItem
              title="不鼓励无法防守的术语"
              body="简历表达会尽量克制，避免使用你在面试中解释不清的技术词。"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Start
              </p>

              <h2 className="text-4xl font-semibold tracking-tight">
                先测试路线，再决定是否付费
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                如果你还不确定自己适不适合 TechProof，可以先用 AI Roadmap Preview 生成一份路线预览。若结果符合你的方向，再提交付费测试申请。
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/ai-roadmap-preview"
                className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                生成 AI 路线预览
              </Link>

              <Link
                href={requestAccessHref}
                className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
              >
                申请付费测试
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

function AudienceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function DeliverableCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 leading-7 text-neutral-400">{body}</p>
    </div>
  );
}

function PriceCard({
  name,
  price,
  tag,
  body,
}: {
  name: string;
  price: string;
  tag: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="mb-4 inline-flex rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-500">
        {tag}
      </p>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-4 text-4xl font-semibold">{price}</p>
      <p className="mt-5 leading-7 text-neutral-400">{body}</p>
    </div>
  );
}

function BoundaryItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}