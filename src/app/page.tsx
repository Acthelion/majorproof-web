import PublicFooter from "@/components/PublicFooter";
import RequestAccessCTA from "@/components/RequestAccessCTA";
import SiteNav from "@/components/SiteNav";
import { categories, proofAssetLayersZh } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            MajorProof · 专业能力证据资产系统
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            把课程、项目和经历
            <br />
            变成可验证的专业证据
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            MajorProof 帮助大学生把课程学习、项目训练、分析能力和职业准备，整理成可展示、可解释、可用于简历和面试的专业能力证据资产。
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            每个资产都围绕真实专业场景展开，包含最终成果、过程证据、方法解释、简历表达、面试防守和后续扩展路线。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/ai-roadmap-preview"
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              生成 AI 资产路线预览
            </a>

            <a
              href="/request-access"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              申请早期访问
            </a>

            <a
              href="#categories"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              查看资产方向
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value="证据资产"
            label="把成果、过程、方法和表达整理成可以被展示和追问的专业证据"
          />
          <StatBlock
            value="中英双线"
            label="适用于国内实习、海外申请、国际岗位、作品集和面试准备"
          />
          <StatBlock
            value="可防守结果"
            label="每个资产都需要准备贡献边界、方法解释和面试追问"
          />
        </div>
      </section>

      <section id="method" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Asset Method
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            七层 Proof Asset 结构
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            一个有价值的专业资产不能只停留在最终文件。它需要说明场景、过程、方法、表达和防守逻辑，让学生能解释自己做了什么、为什么这样做、成果有什么边界，以及后续如何扩展。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          {proofAssetLayersZh.map((layer, index) => (
            <div
              key={layer.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5"
            >
              <p className="mb-5 text-sm text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-lg font-medium">{layer.title}</h3>
              <p className="text-sm leading-6 text-neutral-500">
                {layer.body}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        id="categories"
        className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Categories
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              不同专业需要不同形式的证据资产
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              技术方向通常依赖可运行项目，金融方向依赖模型、假设和分析报告，商科方向强调问题定义和策略推导，研究方向需要数据、方法和边界清晰的结论。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard
                key={category.key}
                name={category.name}
                audience={category.zhAudience}
                title={category.zhTitle}
                description={category.zhDescription}
                examples={category.zhExamples}
                abilities={category.zhAbilities}
                href={getCategoryHref(category.name)}
                actionLabel={getCategoryActionLabel(category.name)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Standard
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              MajorProof 的资产标准
            </h2>
          </div>

          <div className="space-y-4">
            <DifferenceItem
              title="成果必须能展示"
              body="最终资产需要有清晰的展示形式，例如 GitHub 项目、PDF 报告、Excel 模型、展示文档、研究材料或作品集页面。"
            />

            <DifferenceItem
              title="过程必须可追溯"
              body="数据来源、实现步骤、假设形成、分析逻辑、版本修改和关键决策都应该被保留下来。"
            />

            <DifferenceItem
              title="简历表达必须可验证"
              body="简历 bullet 应该准确、克制、可解释，不能夸大贡献，也不能使用自己无法防守的专业词。"
            />

            <DifferenceItem
              title="面试故事必须可防守"
              body="学生应该能说明项目背景、个人贡献、方法选择、限制条件和下一步改进，而不是只背一段包装话术。"
            />
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="border-y border-neutral-800 bg-neutral-900/30 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Pricing Test
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              第一阶段重点是验证真实需求
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              当前阶段不是立刻搭建复杂平台，而是验证学生是否愿意为结构化专业资产、展示材料和面试解释系统付费。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <PriceCard
              title="Roadmap Review"
              price="¥29"
              body="适合先低成本判断方向是否成立，再决定是否进入完整资产包。"
            />
            <PriceCard
              title="Starter Pack"
              price="¥99"
              body="适合围绕一个具体资产方向建立结构、成果、证据、简历表达和面试防守。"
            />
            <PriceCard
              title="Personalized Plan"
              price="¥199+"
              body="适合针对申请、实习、作品集或研究目标，定制更完整的专业资产路径。"
            />
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
                还不确定自己适合哪个资产方向
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                可以先生成 AI 资产路线预览。如果结果与你的目标匹配，再提交正式早期访问申请，进入更完整的 Proof Asset 流程。
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="/ai-roadmap-preview"
                className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                生成 AI 路线预览
              </a>

              <a
                href="/request-access"
                className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
              >
                申请早期访问
              </a>
            </div>
          </div>
        </div>
      </section>

      <RequestAccessCTA locale="zh" />

      <PublicFooter locale="zh" />
    </main>
  );
}
function getCategoryHref(name: string) {
  if (name === "TechProof") {
    return "/product/techproof-ai-document-review/starter-pack";
  }

  if (name === "FinanceProof") {
    return "/product/financeproof-company-research-valuation-kit";
  }

  if (name === "BusinessProof") {
    return "/request-access?source=zh-home-category&asset=BusinessProof";
  }

  if (name === "ResearchProof") {
    return "/request-access?source=zh-home-category&asset=ResearchProof";
  }

  return "/request-access";
}

function getCategoryActionLabel(name: string) {
  if (name === "TechProof") {
    return "查看 TechProof Starter Pack";
  }

  if (name === "FinanceProof") {
    return "查看 FinanceProof 估值资产包";
  }

  return "申请该资产方向";
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-2 text-sm leading-6 text-neutral-500">{label}</p>
    </div>
  );
}

function CategoryCard({
  name,
  audience,
  title,
  description,
  examples,
  abilities,
  href,
  actionLabel,
}: {
  name: string;
  audience: string;
  title: string;
  description: string;
  examples: string[];
  abilities: string[];
  href: string;
  actionLabel: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-neutral-600">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            {name}
          </p>
          <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
        </div>

        <span className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-500">
          Asset
        </span>
      </div>

      <p className="mb-4 text-sm text-neutral-500">{audience}</p>
      <p className="mb-6 leading-7 text-neutral-300">{description}</p>

      <div className="mb-6">
        <p className="mb-3 text-sm font-medium text-neutral-300">展示能力</p>

        <div className="flex flex-wrap gap-2">
          {abilities.map((ability) => (
            <span
              key={ability}
              className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-400"
            >
              {ability}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-neutral-300">示例资产</p>

        <div className="flex flex-wrap gap-2">
          {examples.map((example) => (
            <span
              key={example}
              className="rounded-full bg-neutral-900 px-3 py-1 text-sm text-neutral-400"
            >
              {example}
            </span>
          ))}
        </div>
      </div>

      <a
        href={href}
        className="mt-8 inline-flex rounded-full border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
      >
        {actionLabel}
      </a>
    </div>
  );
}

function DifferenceItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="leading-7 text-neutral-400">{body}</p>
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
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-4xl font-semibold">{price}</p>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}