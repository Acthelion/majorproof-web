const categories = [
  {
    name: "TechProof",
    audience: "CS / EE / Data Science / Automation",
    title: "技术与工程能力资产",
    description:
      "面向技术、工程与数据方向学生，构建可运行、可部署、可解释的项目成果，重点呈现系统设计、实现过程、技术取舍与工程边界。",
    abilities: ["系统设计", "API 集成", "数据库建模", "部署流程", "技术文档"],
    examples: ["AI 文档审查系统", "课程 PDF 学习助手", "数据结构可视化平台"],
  },
  {
    name: "FinanceProof",
    audience: "Accounting / Finance / Business",
    title: "金融与财务分析资产",
    description:
      "面向会计、金融与商科学生，构建公司研究、财务分析、估值模型和行业比较成果，重点呈现假设来源、分析口径、模型逻辑与风险判断。",
    abilities: ["财报解读", "估值建模", "行业研究", "敏感性分析", "投资逻辑"],
    examples: ["公司研究报告", "DCF 估值模型", "同业比较分析"],
  },
  {
    name: "BusinessProof",
    audience: "Marketing / Management / Business Analytics",
    title: "商业案例与市场分析资产",
    description:
      "面向市场、管理与商业分析方向学生，构建市场进入、竞品分析、用户画像和增长策略成果，重点呈现问题定义、数据依据、战略推导与执行路径。",
    abilities: ["商业问题定义", "市场研究", "竞品分析", "策略表达", "结构化展示"],
    examples: ["市场进入方案", "竞品分析报告", "用户画像研究"],
  },
  {
    name: "ResearchProof",
    audience: "Economics / Sociology / Psychology / Public Policy",
    title: "研究报告与数据分析资产",
    description:
      "面向经济、社科、心理、公共政策等方向学生，构建基于公开数据、研究问题、方法说明和图表结论的研究型成果。",
    abilities: ["研究问题设计", "数据清洗", "方法选择", "图表解释", "结论表达"],
    examples: ["公开数据研究报告", "回归分析项目", "政策数据简报"],
  },
];

const layers = [
  {
    title: "专业场景",
    body: "明确资产面向的岗位、申请场景或能力要求，避免成果与目标脱节。",
  },
  {
    title: "成果本体",
    body: "形成可展示的最终材料，例如项目、模型、报告、PPT、研究文档或作品集页面。",
  },
  {
    title: "过程证据",
    body: "保留数据来源、分析步骤、技术实现、模型假设和版本迭代，使成果具有可追溯性。",
  },
  {
    title: "方法解释",
    body: "说明采用某种技术、模型、框架或研究方法的理由，呈现专业判断过程。",
  },
  {
    title: "简历表达",
    body: "将成果转化为准确、克制、可验证的中英文简历条目。",
  },
  {
    title: "面试防守",
    body: "准备项目背景、个人贡献、方法局限、潜在追问和进一步改进方向。",
  },
  {
    title: "扩展路线",
    body: "提供从基础复现到个性化改造的路径，帮助学生形成属于自己的版本。",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <nav className="border-b border-neutral-800 bg-neutral-950 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href="/" className="block">
            <div className="text-lg font-semibold tracking-tight text-neutral-100">
              MajorProof
            </div>
            <div className="text-xs text-neutral-500">
              专业能力证据资产系统
            </div>
          </a>

          <div className="hidden items-center gap-6 text-sm text-neutral-400 md:flex">
            <a href="#method" className="hover:text-neutral-100">
              资产方法
            </a>
            <a href="#categories" className="hover:text-neutral-100">
              专业方向
            </a>
            <a href="#pricing" className="hover:text-neutral-100">
              价格结构
            </a>
            <a href="/integrity" className="hover:text-neutral-100">
              诚信规范
            </a>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 p-1 text-sm">
            <a className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-950" href="/">
              CN
            </a>
            <a className="rounded-full px-3 py-1 text-neutral-500 hover:text-neutral-100" href="/en">
              EN
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            MajorProof · Evidence-based professional assets
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            将专业学习整理为
            <br />
            可验证的能力证据。
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            MajorProof 面向大学生构建专业能力证据资产。它关注一项成果如何产生、体现何种能力、能否被展示、能否在简历和面试中经受追问。
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            每一项资产都围绕具体专业场景展开，包含成果本体、过程证据、方法解释、简历表达、面试防守和扩展路线，帮助学生把课程知识、项目训练和分析能力转化为更清晰的职业材料。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#categories"
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              查看专业方向
            </a>
            <a
              href="/integrity"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              阅读诚信规范
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value="能力证据"
            label="强调成果、过程、方法和表达的对应关系"
          />
          <StatBlock
            value="双语表达"
            label="服务国内实习、外企岗位和海外申请场景"
          />
          <StatBlock
            value="可经追问"
            label="每项资产都需要说明贡献、边界和改进方向"
          />
        </div>
      </section>

      <section id="method" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Asset Method
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Proof Asset 的七层结构。
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-300">
            一项可用的专业能力资产不能只停留在成品层面。它必须说明目标场景、形成过程、方法选择和展示方式，并能够转化为简历条目与面试叙述。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5"
            >
              <p className="mb-5 text-sm text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-lg font-medium text-neutral-100">
                {layer.title}
              </h3>
              <p className="text-sm leading-6 text-neutral-500">{layer.body}</p>
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
              不同专业需要不同形式的能力证据。
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              技术方向通常通过可运行项目呈现能力；金融方向更依赖模型、报告和假设推导；商科方向强调问题定义、市场判断和展示结构；研究型方向重视数据、方法和结论边界。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
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
              MajorProof 的资产标准。
            </h2>
          </div>

          <div className="space-y-4">
            <DifferenceItem
              title="成果必须可以展示"
              body="最终材料需要具备可见形态，例如 GitHub 项目、PDF 报告、Excel 模型、PPT 展示稿、研究文档或作品集页面。"
            />
            <DifferenceItem
              title="过程必须可以追溯"
              body="数据来源、实现步骤、模型假设、分析口径和修改过程需要被记录，避免成果只剩表面结论。"
            />
            <DifferenceItem
              title="表达必须可以核查"
              body="简历条目应当克制、具体、可验证，避免夸大能力、虚构贡献或使用无法解释的术语。"
            />
            <DifferenceItem
              title="面试必须可以防守"
              body="学生需要能够说明项目背景、个人贡献、方法选择、局限性和进一步改进方案。"
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
              第一阶段采用资产包验证。
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              当前阶段不建设复杂平台，优先验证学生是否愿意为专业能力资产、展示材料和面试解释体系付费。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <PriceCard
              title="单个资产包"
              price="29–69 元"
              body="适合先完成一个明确方向的成果资产，例如一个技术项目、一份估值模型或一个商业案例。"
            />
            <PriceCard
              title="专业三件套"
              price="99–199 元"
              body="适合同一专业方向下构建多个可互补的成果，例如项目、报告和展示稿。"
            />
            <PriceCard
              title="完整路线包"
              price="299 元起"
              body="适合围绕实习、申请或作品集建立较完整的能力证明路径。"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-800 bg-neutral-950 px-6 py-12 text-neutral-400">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-neutral-100">
              MajorProof
            </h2>
            <p className="max-w-md text-sm leading-7">
              MajorProof 面向大学生提供专业能力证据资产，帮助学生将课程学习、项目训练和分析能力整理为可展示、可解释、可用于简历和面试的成果。
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              产品
            </h3>
            <div className="space-y-2 text-sm">
              <a href="#categories" className="block hover:text-neutral-100">
                专业方向
              </a>
              <a href="#method" className="block hover:text-neutral-100">
                资产方法
              </a>
              <a href="#pricing" className="block hover:text-neutral-100">
                价格结构
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              政策
            </h3>
            <div className="space-y-2 text-sm">
              <a href="/integrity" className="block hover:text-neutral-100">
                诚信规范
              </a>
              <a href="/privacy" className="block hover:text-neutral-100">
                隐私说明
              </a>
              <a href="/terms" className="block hover:text-neutral-100">
                服务条款
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </h3>
            <p className="break-all text-sm leading-7">majorproof@example.com</p>
            <p className="mt-3 text-xs leading-6 text-neutral-500">
              当前版本用于产品验证和样例展示。
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-neutral-800 pt-6 text-xs leading-6 text-neutral-500">
          © {new Date().getFullYear()} MajorProof. 本服务不提供作业代写、论文代写、考试辅助作弊、经历伪造或录用结果保证。
        </div>
      </footer>
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
  category,
}: {
  category: {
    name: string;
    audience: string;
    title: string;
    description: string;
    abilities: string[];
    examples: string[];
  };
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-neutral-600">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            {category.name}
          </p>
          <h3 className="mt-3 text-2xl font-semibold">{category.title}</h3>
        </div>
        <span className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-500">
          Asset
        </span>
      </div>

      <p className="mb-4 text-sm text-neutral-500">{category.audience}</p>
      <p className="mb-6 leading-7 text-neutral-300">
        {category.description}
      </p>

      <div className="mb-6">
        <p className="mb-3 text-sm font-medium text-neutral-300">可证明能力</p>
        <div className="flex flex-wrap gap-2">
          {category.abilities.map((ability) => (
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
        <p className="mb-3 text-sm font-medium text-neutral-300">样例资产</p>
        <div className="flex flex-wrap gap-2">
          {category.examples.map((example) => (
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