import Link from "next/link";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

const requestAccessHref =
  "/request-access?source=financeproof-company-research-valuation-kit&asset=FinanceProof";

const deliverables = [
  {
    title: "公司研究框架",
    body: "明确研究对象、商业模式、收入结构、成本结构、竞争位置和核心变量，避免停留在公司介绍或新闻摘要。",
  },
  {
    title: "行业与竞争分析",
    body: "梳理行业空间、增长驱动、竞争格局、替代品、客户议价能力和监管约束，形成能支撑估值假设的背景判断。",
  },
  {
    title: "关键经营指标",
    body: "拆解收入、毛利率、费用率、资本开支、周转效率、现金流和债务结构，找出真正影响公司价值的变量。",
  },
  {
    title: "估值模型结构",
    body: "建立 DCF、可比公司或分部估值的基础结构，记录关键假设、计算逻辑、敏感性区间和模型限制。",
  },
  {
    title: "投资观点表达",
    body: "形成克制的研究结论，说明核心判断、上行因素、下行风险和需要进一步验证的数据，而不是给出夸张的买卖建议。",
  },
  {
    title: "简历与面试防守",
    body: "把研究过程转化为可验证的简历表达，并准备估值假设、数据来源、模型选择和风险判断相关的追问。",
  },
];

const fitItems = [
  "金融、经济、会计、商科、数据分析方向学生",
  "准备投研、行研、券商、基金、咨询或商业分析相关实习",
  "做过课程报告，但缺少专业化研究结构和估值逻辑",
  "想把一个公司研究项目转化成简历和面试可解释资产",
];

const notFitItems = [
  "想要直接获得股票买卖建议的人",
  "想伪造投研实习或研究经历的人",
  "不愿意查数据、读财报、验证假设的人",
  "只想要一份看起来漂亮但自己讲不清的报告",
];

const modelSections = [
  {
    title: "Business model",
    body: "公司如何赚钱，收入来自哪里，利润率为什么高或低，增长是否依赖外部周期或内部效率。",
  },
  {
    title: "Financial drivers",
    body: "收入增速、毛利率、费用率、现金流、资本开支、债务和周转效率如何影响估值。",
  },
  {
    title: "Valuation logic",
    body: "为什么选择 DCF、可比公司、分部估值或其他方法，核心假设是否能被财务数据支持。",
  },
  {
    title: "Risk and sensitivity",
    body: "哪些假设最脆弱，哪些变量一变会明显影响结论，以及研究结论在什么条件下会失效。",
  },
];
export default function FinanceProofValuationKitPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            FinanceProof · Company Research and Valuation Kit
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            公司研究与估值
            <br />
            金融资产包
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            FinanceProof 帮助学生把公司研究、行业分析、财务拆解和估值模型整理成可展示、可解释、可用于简历和面试的金融能力证据。
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            这个资产包不提供投资建议，也不替你编造投研经历。它关注的是你能否基于真实数据、清晰假设和可追溯分析，完成一份能被追问的公司研究资产。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={requestAccessHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              申请 FinanceProof 测试
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
            value="FinanceProof"
            label="面向金融、经济、商科、会计、数据分析方向的研究与估值资产"
          />
          <StatBlock
            value="研究逻辑"
            label="从公司业务、行业背景、财务驱动和估值假设建立完整分析链条"
          />
          <StatBlock
            value="面试可防守"
            label="重点准备数据来源、模型选择、关键假设、风险判断和结论边界"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Problem
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            很多金融项目的问题不是没有结论，而是结论没有证据链。
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            普通课程报告往往停留在公司介绍、行业新闻和简单财务比率。真正能用于简历和面试的研究资产，需要说明数据从哪里来、假设如何形成、模型为什么这样搭、风险在哪里，以及结论在什么条件下成立。
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-400">
            FinanceProof 的目标不是包装一份华丽报告，而是建立一条可追溯的研究路径，让你能解释每一个关键判断。
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
              FinanceProof 的交付重点不是替你完成一份最终报告，而是帮你确定研究结构、证据清单、模型框架、表达边界和面试防守点。
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
            Analysis Spine
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            一份金融资产必须有清楚的分析主线
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            公司研究不是材料堆叠。它需要从商业模式出发，经过财务驱动和估值逻辑，最后落到风险与敏感性分析。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {modelSections.map((item) => (
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
                当前阶段用于验证学生是否愿意为结构化金融研究资产付费。提交申请不会自动收费，后续需要人工确认交付范围。
              </p>
            </div>

            <div className="grid gap-5">
              <PriceCard
                title="Roadmap Review"
                price="¥29"
                body="适合先判断公司研究方向、估值方法和资产结构是否成立。"
              />
              <PriceCard
                title="FinanceProof Starter Kit"
                price="¥99"
                body="适合围绕一家公司建立研究框架、财务驱动、估值结构、证据清单和面试防守材料。"
                emphasized
              />
              <PriceCard
                title="Personalized FinanceProof Plan"
                price="¥199+"
                body="适合针对投研、行研、金融实习、商赛或申请场景做更完整的个性化资产路径。"
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
                FinanceProof 是研究训练，不是投资建议
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                这个资产包不会提供买卖建议，不会替你编造投研经历，不会保证实习结果。它只帮助你基于真实数据建立可解释的研究资产。
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
                申请 FinanceProof 测试
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                如果你需要把公司研究、估值模型或金融分析项目转化成可展示资产，可以先提交申请。当前阶段以人工验证和早期用户沟通为主。
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={requestAccessHref}
                className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                申请 FinanceProof 测试
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