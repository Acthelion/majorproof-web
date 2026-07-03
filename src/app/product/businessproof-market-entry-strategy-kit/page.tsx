import Link from "next/link";
import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

const requestAccessHref =
  "/request-access?source=businessproof-market-entry-strategy-kit&asset=BusinessProof";

const deliverables = [
  {
    title: "市场进入问题定义",
    body: "明确目标市场、目标用户、进入场景、核心问题和商业约束，避免把项目写成泛泛的行业介绍或营销方案。",
  },
  {
    title: "市场规模与细分",
    body: "拆分 TAM、SAM、SOM 或更适合该项目的市场口径，说明数据来源、估算方法、用户分层和优先进入人群。",
  },
  {
    title: "竞争格局分析",
    body: "梳理直接竞争者、替代方案、渠道壁垒、价格区间、差异化空间和进入难点，形成可被追问的竞争判断。",
  },
  {
    title: "进入策略设计",
    body: "设计目标客群、价值主张、渠道选择、定价逻辑、获客路径和初期验证方式，而不是只写抽象的品牌定位。",
  },
  {
    title: "执行路线与指标",
    body: "把策略拆成阶段计划、关键动作、资源需求、验证指标和失败条件，说明什么结果代表策略有效或无效。",
  },
  {
    title: "简历与面试防守",
    body: "把商业分析过程转化成可解释的简历表达，并准备市场假设、数据来源、策略选择、竞争判断和执行风险相关追问。",
  },
];

const fitItems = [
  "商科、市场营销、管理、经济、咨询、产品方向学生",
  "准备咨询、商业分析、产品、市场、运营或战略相关实习",
  "做过商业案例或课程项目，但缺少清晰的问题定义和策略链条",
  "想把一个商业分析项目转化成简历、面试或作品集资产",
];

const notFitItems = [
  "只想要一份空泛商业计划书的人",
  "想伪造咨询、创业或商业分析经历的人",
  "不愿意做市场资料收集、用户判断和竞争分析的人",
  "只追求漂亮排版，但无法解释策略为什么成立的人",
];

const strategySections = [
  {
    title: "Market choice",
    body: "为什么选择这个市场，市场是否足够具体，目标用户是否清楚，进入机会是否有现实基础。",
  },
  {
    title: "Customer and problem",
    body: "用户是谁，痛点是否真实，当前替代方案是什么，用户为什么可能接受一个新方案。",
  },
  {
    title: "Competitive position",
    body: "现有竞争者和替代方案有什么优势，进入者可以在哪些维度形成差异，而不是简单声称市场有机会。",
  },
  {
    title: "Go-to-market logic",
    body: "如何触达第一批用户，初期渠道如何选择，定价如何验证，哪些指标说明策略需要调整。",
  },
];
export default function BusinessProofMarketEntryStrategyKitPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            BusinessProof · Market Entry Strategy Kit
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            市场进入策略
            <br />
            商业分析资产包
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            BusinessProof 帮助学生把商业案例、市场分析、用户判断和策略推导整理成可展示、可解释、可用于简历和面试的商业能力证据。
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            这个资产包不替你编造咨询、创业或商业实习经历。它关注的是你能否基于真实市场信息、清晰问题定义和可追溯推理，提出一套能被追问的市场进入策略。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={requestAccessHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              申请 BusinessProof 测试
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
            value="BusinessProof"
            label="面向商科、市场、管理、咨询、产品和运营方向的商业分析资产"
          />
          <StatBlock
            value="策略链条"
            label="从市场选择、用户问题、竞争判断到进入路径建立完整推导"
          />
          <StatBlock
            value="面试可解释"
            label="重点准备数据来源、假设边界、策略取舍、执行风险和验证指标"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Problem
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            很多商业项目的问题不是没有想法，而是没有可验证的策略逻辑。
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            常见商业案例很容易写成行业背景、目标用户、竞品分析和营销建议的拼接。但真正能用于简历和面试的商业资产，需要解释为什么选择这个市场、用户问题是否真实、竞争壁垒在哪里、进入路径如何验证，以及策略在什么条件下会失败。
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-400">
            BusinessProof 的目标不是制造一份漂亮商业计划书，而是建立一条从问题定义到执行验证的策略推理链。
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
              BusinessProof 的交付重点不是替你写一份完整商业计划书，而是帮你建立市场进入分析的结构、证据、推理链条、表达边界和面试防守点。
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
            Strategy Spine
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            一个商业资产必须有清楚的策略主线
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-300">
            市场进入策略不是把市场规模、用户画像、竞品分析和营销建议并排放在一起。它需要说明为什么这个市场值得进入，用户问题是否成立，竞争位置在哪里，以及第一步如何验证。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {strategySections.map((item) => (
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
                当前阶段用于验证学生是否愿意为结构化商业分析资产付费。提交申请不会自动收费，后续需要人工确认交付范围。
              </p>
            </div>

            <div className="grid gap-5">
              <PriceCard
                title="Roadmap Review"
                price="¥29"
                body="适合先判断市场进入方向、问题定义和策略结构是否成立。"
              />
              <PriceCard
                title="BusinessProof Starter Kit"
                price="¥99"
                body="适合围绕一个市场进入问题建立用户分析、竞争判断、进入策略、执行指标和面试防守材料。"
                emphasized
              />
              <PriceCard
                title="Personalized BusinessProof Plan"
                price="¥199+"
                body="适合针对咨询、商业分析、产品、市场、运营、商赛或申请场景做更完整的个性化资产路径。"
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
                BusinessProof 是商业分析训练，不是经历包装
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                这个资产包不会替你编造咨询、创业、产品或商业实习经历，不会承诺实习结果，也不会帮你写无法解释的商业计划书。它只帮助你基于真实市场信息建立可解释的策略资产。
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
                申请 BusinessProof 测试
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
                如果你需要把商业案例、市场分析、产品策略或咨询类项目转化成可展示资产，可以先提交申请。当前阶段以人工验证和早期用户沟通为主。
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={requestAccessHref}
                className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                申请 BusinessProof 测试
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