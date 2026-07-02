import PublicFooter from "@/components/PublicFooter";
import RequestAccessCTA from "@/components/RequestAccessCTA";
import SiteNav from "@/components/SiteNav";

const requestHref =
  "/request-access?asset=TechProof&source=techproof-product";

const starterPackHref =
  "/product/techproof-ai-document-review/starter-pack";

export default function TechProofProductPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            TechProof · Product Page
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            AI 文档审查系统资产包
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            面向 CS、EE、Data Science 和 Automation 学生的工程型项目资产包。它帮助学生从一个可运行的 AI 文档处理系统出发，建立项目成果、技术文档、部署流程、简历表达和面试防守材料。
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            这个资产包适合需要补充简历项目、准备技术面试、建设 GitHub 作品集，或者想把课程学习转化为可展示工程成果的学生。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={requestHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              申请 TechProof 早期访问
            </a>

            <a
              href={starterPackHref}
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              查看 Starter Pack
            </a>

            <a
              href="/assets/ai-document-review-platform"
              className="rounded-full border border-neutral-800 px-6 py-3 text-center font-medium text-neutral-400 transition hover:border-neutral-600 hover:text-neutral-200"
            >
              查看资产结构
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <MetricCard
            title="项目形态"
            value="全栈 AI 应用"
            body="包含前端页面、文件上传、后台审查、AI 报告生成、私密报告链接和部署流程"
          />
          <MetricCard
            title="适用对象"
            value="技术方向学生"
            body="适合 CS、EE、Data Science、Automation 以及希望补强工程项目证据的学生"
          />
          <MetricCard
            title="核心目标"
            value="可展示与可解释"
            body="最终成果不仅要能打开和运行，还要能写进简历，并在面试中讲清楚"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Problem
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            很多学生缺少的不是项目名称，而是可验证的项目证据
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            技术简历里的项目如果只有几行描述，很容易显得空。面试官真正会追问的是系统怎么设计、数据怎么流动、接口怎么处理、部署怎么完成、个人贡献在哪里，以及这个项目有哪些边界和改进空间。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <ProblemCard
            title="项目看起来像课程练习"
            body="很多项目停留在本地 demo，没有清晰用户流程、系统边界、部署说明和可展示入口。"
          />
          <ProblemCard
            title="README 和文档过于薄弱"
            body="即使项目能运行，也缺少安装步骤、架构说明、功能边界、技术选择理由和后续改进计划。"
          />
          <ProblemCard
            title="简历表达不够专业"
            body="项目经历容易写成工具堆砌，无法体现系统设计、工程实现、API 集成、数据库建模和部署能力。"
          />
          <ProblemCard
            title="面试讲不清个人贡献"
            body="如果学生不能解释关键决策、错误处理、安全边界和局限性，项目很难转化为可信的能力证据。"
          />
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Deliverables
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              这个资产包最终交付什么
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              TechProof AI Document Review Platform 的目标不是给学生一个孤立代码片段，而是提供一套可以学习、复现、改造、展示和解释的项目资产结构。
            </p>

            <div className="mt-8">
              <a
                href={starterPackHref}
                className="inline-flex rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
              >
                查看 Starter Pack 交付结构
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <DeliverableCard
              title="可运行项目"
              items={[
                "Next.js 页面与路由结构",
                "文件提交与预览流程",
                "后台审查页面",
                "AI 报告生成逻辑",
                "私密报告访问链接",
              ]}
            />

            <DeliverableCard
              title="工程文档"
              items={[
                "README 结构",
                "系统架构说明",
                "数据库与存储设计",
                "环境变量说明",
                "部署与测试步骤",
              ]}
            />

            <DeliverableCard
              title="展示材料"
              items={[
                "中英文简历 bullet",
                "项目讲解框架",
                "面试追问准备",
                "项目边界说明",
                "后续扩展路线",
              ]}
            />
          </div>
        </div>
      </section>
            <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Workflow
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              从项目复现到个人化作品
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              资产包的价值不在于让学生机械复制，而是提供一条从基础版本到个人化改造的路径。学生需要理解系统结构，并根据自己的方向补充功能、数据、界面或文档。
            </p>

            <div className="mt-8">
              <a
                href={starterPackHref}
                className="inline-flex rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
              >
                查看 Starter Pack 路线
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <StepCard
              step="01"
              title="理解系统目标"
              body="明确这个项目模拟的真实场景：用户上传文档，系统生成审查结果，管理员管理请求，用户通过私密链接查看报告。"
            />
            <StepCard
              step="02"
              title="完成基础复现"
              body="按照资产包说明完成本地运行、页面结构、数据库表、文件存储和 AI 报告生成流程。"
            />
            <StepCard
              step="03"
              title="整理过程证据"
              body="保留实现步骤、错误记录、关键配置、数据结构和技术选择，避免最终成果变成无法解释的黑箱。"
            />
            <StepCard
              step="04"
              title="进行个人化改造"
              body="根据目标方向增加功能，例如多文件比较、评分维度、PDF 摘要、管理员筛选、报告导出或更严格的权限控制。"
            />
            <StepCard
              step="05"
              title="转化为求职材料"
              body="将项目整理为 GitHub README、作品集页面、简历 bullet 和面试叙述，而不是只保留一份代码。"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Boundary
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              这个资产包明确不提供什么
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              MajorProof 的核心是能力证据，不是替学生伪造经历或代做课程任务。资产包可以作为学习材料、项目框架和展示系统，但最终版本必须体现学生自己的理解和贡献。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <BoundaryCard body="不提供课程作业、课程项目或考试任务的代做服务" />
            <BoundaryCard body="不承诺实习、录用、面试或申请结果" />
            <BoundaryCard body="不建议将示范版本原封不动放入简历或作品集" />
            <BoundaryCard body="不把示例项目包装成商业级安全系统或生产级 SaaS" />
            <BoundaryCard body="不提供伪造项目经历、虚构用户数据或虚假实习描述" />
            <BoundaryCard body="不鼓励学生使用自己无法解释的技术术语和项目描述" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Pricing Validation
              </p>

              <h2 className="text-4xl font-semibold tracking-tight">
                第一阶段用于验证购买意向
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                这个资产包目前处于早期验证阶段。MajorProof 会根据申请人数、专业分布和用户需求，决定首批交付内容、价格和更新频率。
              </p>
            </div>

            <div className="space-y-4">
              <PriceRow title="早期单资产包" price="¥29–69" />
              <PriceRow title="TechProof 方向组合包" price="¥99–199" />
              <PriceRow title="完整项目路线与面试防守" price="¥299 起" />

              <a
                href={starterPackHref}
                className="block rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
              >
                查看 Starter Pack
              </a>

              <a
                href={requestHref}
                className="block rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                申请 TechProof 早期访问
              </a>
            </div>
          </div>
        </div>
      </section>

      <RequestAccessCTA
        locale="zh"
        sourcePage="techproof-product-bottom"
        assetIntent="TechProof"
      />

      <PublicFooter locale="zh" />
    </main>
  );
}

function MetricCard({
  title,
  value,
  body,
}: {
  title: string;
  value: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="mb-3 text-sm text-neutral-500">{title}</p>
      <h2 className="text-2xl font-semibold">{value}</h2>
      <p className="mt-3 leading-7 text-neutral-400">{body}</p>
    </div>
  );
}

function ProblemCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}

function DeliverableCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <h3 className="mb-5 text-2xl font-semibold">{title}</h3>
      <ul className="list-disc space-y-3 pl-6 leading-7 text-neutral-400">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <p className="mb-3 text-sm text-neutral-500">{step}</p>
      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}

function BoundaryCard({ body }: { body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="leading-7 text-neutral-300">{body}</p>
    </div>
  );
}

function PriceRow({ title, price }: { title: string; price: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
      <p className="text-neutral-300">{title}</p>
      <p className="text-xl font-semibold text-neutral-100">{price}</p>
    </div>
  );
}