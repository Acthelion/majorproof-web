import PublicFooter from "@/components/PublicFooter";
import RequestAccessCTA from "@/components/RequestAccessCTA";
import SiteNav from "@/components/SiteNav";

const requestHref =
  "/request-access?asset=TechProof&source=techproof-starter-pack";

export default function TechProofStarterPackPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            TechProof Starter Pack
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            AI 文档审查系统 Starter Asset Pack
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            这是 MajorProof 的第一个 TechProof 资产包原型，面向需要补充工程项目、作品集和技术面试材料的学生。它不是一段孤立代码，而是一套从项目复现、文档整理、简历表达到面试防守的能力证据资产结构。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={requestHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              申请 TechProof 早期访问
            </a>

            <a
              href="/product/techproof-ai-document-review"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              返回产品页
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <MetricCard
            title="资产包定位"
            value="项目证据资产"
            body="围绕一个 AI 文档审查系统，构建可展示、可解释、可写入简历的工程项目材料"
          />

          <MetricCard
            title="目标用户"
            value="技术方向学生"
            body="适合 CS、EE、Data Science、Automation 以及缺少工程项目证据的学生"
          />

          <MetricCard
            title="验证价格"
            value="¥29–69"
            body="当前用于早期购买意向验证，正式价格会根据内容深度和用户反馈调整"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Pack Structure
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            资产包包含哪些模块
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            Starter Asset Pack 的目标是帮助学生完成一个可以理解、可以展示、可以继续扩展的项目版本，而不是机械复制一个无法解释的模板。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <ModuleCard
            number="01"
            title="项目场景说明"
            body="说明这个 AI 文档审查系统模拟什么真实场景，用户是谁，输入是什么，输出是什么，以及为什么它能作为技术项目证据。"
          />

          <ModuleCard
            number="02"
            title="系统结构路线"
            body="拆解前端页面、表单提交、数据库记录、后台查看、AI 报告生成和私密访问链接之间的关系。"
          />

          <ModuleCard
            number="03"
            title="实现步骤清单"
            body="把项目拆成可执行步骤，包括页面搭建、数据表设计、环境变量、服务端逻辑、错误处理和部署验证。"
          />

          <ModuleCard
            number="04"
            title="数据库设计说明"
            body="解释为什么需要请求表、报告表、状态字段、来源字段和管理员备注字段，以及这些字段如何支撑真实产品流程。"
          />

          <ModuleCard
            number="05"
            title="README 模板"
            body="提供 GitHub README 的结构，包括项目背景、功能列表、技术栈、安装步骤、环境变量、系统流程和改进方向。"
          />

          <ModuleCard
            number="06"
            title="简历表达模板"
            body="提供中英文简历 bullet 的写法，把项目转化为系统设计、API 集成、数据库建模、部署和文档能力。"
          />

          <ModuleCard
            number="07"
            title="面试防守问题"
            body="整理常见追问，例如为什么这样设计数据库、如何处理权限、项目有哪些安全边界、AI 输出如何验证。"
          />

          <ModuleCard
            number="08"
            title="扩展路线"
            body="提供进一步改造方向，例如 PDF 解析、多文件比较、评分维度、报告导出、管理员筛选和权限控制。"
          />
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Final Outputs
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              学生最终应该产出什么
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              一个合格的 TechProof 项目资产，必须同时包含成果本体、过程证据、解释材料和职业表达。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            <OutputCard
              title="可运行项目"
              body="本地可运行，线上可访问，基本流程完整，不只是截图或概念说明。"
            />

            <OutputCard
              title="GitHub README"
              body="说明项目目标、技术栈、功能流程、运行方式、环境变量和后续改进。"
            />

            <OutputCard
              title="简历条目"
              body="将项目写成可验证、克制、专业的中英文简历 bullet。"
            />

            <OutputCard
              title="面试讲稿"
              body="准备项目背景、个人贡献、技术取舍、局限性和可能追问。"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Boundary
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              这个资产包不解决什么
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              MajorProof 的核心是能力证据，不是包装虚假经历。Starter Pack 只提供项目结构、学习路径、文档框架和表达模板，最终成果必须由学生理解、改造和解释。
            </p>
          </div>

          <div className="space-y-4">
            <BoundaryItem body="不代做课程作业、课程项目、考试任务或学校要求提交的正式作业" />
            <BoundaryItem body="不承诺实习、面试、录用、保研、留学申请或奖学金结果" />
            <BoundaryItem body="不建议学生把示例版本原封不动放进简历" />
            <BoundaryItem body="不帮助伪造经历、虚构用户数据或包装不存在的个人贡献" />
            <BoundaryItem body="不鼓励使用自己无法解释的技术术语" />
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950 p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Pricing Test
                </p>

                <h2 className="text-4xl font-semibold tracking-tight">
                  当前阶段验证购买意向
                </h2>

                <p className="mt-5 text-lg leading-8 text-neutral-300">
                  这个 Starter Pack 目前用于验证真实需求。我们会根据申请数量、用户专业、购买意向和反馈，决定是否制作完整版本。
                </p>
              </div>

              <div className="space-y-4">
                <PriceCard
                  title="Starter Asset Pack"
                  price="¥29–69"
                  body="适合需要一个清晰项目方向和展示结构的学生。"
                />

                <PriceCard
                  title="Full TechProof Pack"
                  price="¥99–199"
                  body="包含更完整的实现路线、文档模板、简历表达和面试防守。"
                />

                <PriceCard
                  title="Personalized Roadmap"
                  price="¥299 起"
                  body="根据学生专业、目标岗位和已有经历生成个性化项目路线。"
                />

                <a
                  href={requestHref}
                  className="block rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
                >
                  提交 TechProof 需求
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RequestAccessCTA
        locale="zh"
        sourcePage="techproof-starter-pack-bottom"
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

function ModuleCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <p className="mb-4 text-sm text-neutral-500">{number}</p>
      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}

function OutputCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}

function BoundaryItem({ body }: { body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <p className="leading-7 text-neutral-300">{body}</p>
    </div>
  );
}

function PriceCard({
  title,
  price,
  body,
}: {
  title: string;
  price: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
      <div className="flex items-start justify-between gap-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="shrink-0 text-xl font-semibold">{price}</p>
      </div>
      <p className="mt-3 leading-7 text-neutral-400">{body}</p>
    </div>
  );
}