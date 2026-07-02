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
            将课程学习与项目训练
            <br />
            转化为可验证的能力证据
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            MajorProof 面向大学生提供专业能力证据资产，帮助学生将课程学习、项目训练、分析能力和表达材料整理为可展示、可解释、可用于简历和面试的成果。
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            每个资产都围绕具体的专业场景构建，包含成果本体、过程证据、方法解释、简历表达、面试防守和扩展路线。
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
    查看专业方向
  </a>
</div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value="能力证据"
            label="把成果、过程、方法和表达组织成可展示的专业资产"
          />
          <StatBlock
            value="中英双语"
            label="适用于国内实习、海外申请、国际岗位和作品集展示"
          />
          <StatBlock
            value="可解释成果"
            label="每个资产都准备贡献说明、方法边界和面试追问"
          />
        </div>
      </section>

      <section id="method" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Asset Method
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            Proof Asset 的七层结构
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            有价值的专业资产不能只停留在一个最终文件。它需要说明使用场景，保留完成过程，解释方法选择，并且能够转化为简历表达和面试叙述。
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
              不同专业需要不同形式的能力证据
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
              title="成果必须可展示"
              body="最终材料需要有明确的展示形态，例如 GitHub 项目、PDF 报告、Excel 模型、PPT、研究文档或作品集页面。"
            />
            <DifferenceItem
              title="过程必须可追溯"
              body="数据来源、实现步骤、模型假设、分析口径和修改记录需要被保留下来。"
            />
            <DifferenceItem
              title="简历表达必须可验证"
              body="简历 bullet 应当准确、克制、可解释，避免夸大个人贡献或使用自己无法防守的专业术语。"
            />
            <DifferenceItem
              title="面试叙述必须可防守"
              body="学生需要能够讲清项目背景、个人贡献、方法选择、局限性和后续改进方向。"
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
              Pricing
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              第一阶段先验证资产包需求
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              当前优先级不是立刻建设复杂平台，而是验证学生是否愿意为结构化专业资产、展示材料和面试解释系统付费。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <PriceCard
              title="单个资产"
              price="¥29–69"
              body="适合完成一个边界清晰的资产，例如技术项目、估值模型或商业案例。"
            />
            <PriceCard
              title="专业方向资产包"
              price="¥99–199"
              body="适合同一专业方向下构建多个互补资产，形成更完整的能力组合。"
            />
            <PriceCard
              title="完整路线"
              price="¥299 起"
              body="适合需要围绕实习、申请或作品集建立完整能力证据路径的学生。"
            />
          </div>
        </div>
      </section>

      <RequestAccessCTA locale="zh" />

      <PublicFooter locale="zh" />
    </main>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-2 text-sm text-neutral-500">{label}</p>
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
}: {
  name: string;
  audience: string;
  title: string;
  description: string;
  examples: string[];
  abilities: string[];
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
        <p className="mb-3 text-sm font-medium text-neutral-300">
          展示能力
        </p>

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
        <p className="mb-3 text-sm font-medium text-neutral-300">
          示例资产
        </p>

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