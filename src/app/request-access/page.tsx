import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";
import { submitAccessRequest } from "./actions";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

type AssetKitConfig = {
  asset: string;
  source: string;
  titleLineOne: string;
  titleLineTwo: string;
  description: string;
  subDescription: string;
  statOneValue: string;
  statOneLabel: string;
  statTwoValue: string;
  statTwoLabel: string;
  statThreeValue: string;
  statThreeLabel: string;
  sideCardOneTitle: string;
  sideCardOneItems: string[];
  submitLabel: string;
  starterPackLabel: string;
  personalizedPlanLabel: string;
};

const assetOptions = [
  {
    value: "TechProof",
    label: "TechProof",
    body: "技术项目、AI 工具、数据项目、工程作品集和面试可解释项目",
  },
  {
    value: "FinanceProof",
    label: "FinanceProof",
    body: "估值模型、公司研究、行业分析、投资逻辑和金融实习材料",
  },
  {
    value: "BusinessProof",
    label: "BusinessProof",
    body: "商业分析、市场进入、产品策略、咨询案例和战略推理材料",
  },
  {
    value: "ResearchProof",
    label: "ResearchProof",
    body: "研究计划、文献综述、方法解释、学术项目和研究能力材料",
  },
];

const yearOptions = [
  "大一 / Year 1",
  "大二 / Year 2",
  "大三 / Year 3",
  "大四 / Year 4",
  "硕士 / Master",
  "其他",
];

const assetKitConfigs: AssetKitConfig[] = [
  {
    asset: "TechProof",
    source: "techproof-starter-pack",
    titleLineOne: "申请 TechProof",
    titleLineTwo: "Starter Pack 付费测试",
    description:
      "你正在申请 TechProof AI Document Review Platform Starter Pack 的早期付费测试。这个申请会帮助我们判断你的背景、目标和当前问题是否适合进入第一批交付。",
    subDescription:
      "当前阶段不自动收费，也不承诺结果。我们会根据你的申请内容判断是否适合继续沟通，并确认你是否愿意测试 ¥29、¥99 或更高阶的个性化方案。",
    statOneValue: "付费验证",
    statOneLabel: "验证学生是否愿意为结构化技术项目资产包付费",
    statTwoValue: "TechProof",
    statTwoLabel: "聚焦工科、CS、EE、AI 和数据方向的技术项目资产",
    statThreeValue: "人工确认",
    statThreeLabel: "提交后不会自动扣费，需要后续沟通确认交付范围",
    sideCardOneTitle: "TechProof Starter Pack 包含什么",
    sideCardOneItems: [
      "项目背景与专业场景",
      "功能结构与模块拆分",
      "技术栈建议",
      "最终成果清单",
      "过程证据清单",
      "简历表达草案",
      "面试防守问题",
    ],
    submitLabel: "提交 TechProof 测试申请",
    starterPackLabel: "¥99 TechProof Starter Pack",
    personalizedPlanLabel: "¥199 起 Personalized TechProof Plan",
  },
  {
    asset: "FinanceProof",
    source: "financeproof-company-research-valuation-kit",
    titleLineOne: "申请 FinanceProof",
    titleLineTwo: "公司研究与估值测试",
    description:
      "你正在申请 FinanceProof Company Research and Valuation Kit 的早期测试。这个申请会帮助我们判断你的金融研究目标、数据基础和估值需求是否适合进入第一批验证。",
    subDescription:
      "当前阶段不提供投资建议，也不自动收费。我们会根据你的申请内容判断是否适合继续沟通，并确认你是否需要路线评估、Starter Kit 或个性化金融资产方案。",
    statOneValue: "研究验证",
    statOneLabel: "验证学生是否愿意为结构化公司研究与估值资产付费",
    statTwoValue: "FinanceProof",
    statTwoLabel: "聚焦公司研究、财务拆解、估值框架和面试防守",
    statThreeValue: "非投资建议",
    statThreeLabel: "资产包用于研究训练和能力展示，不提供买卖建议",
    sideCardOneTitle: "FinanceProof Starter Kit 包含什么",
    sideCardOneItems: [
      "公司研究框架",
      "行业与竞争分析",
      "关键经营指标",
      "估值模型结构",
      "投资观点表达边界",
      "简历表达草案",
      "面试防守问题",
    ],
    submitLabel: "提交 FinanceProof 测试申请",
    starterPackLabel: "¥99 FinanceProof Starter Kit",
    personalizedPlanLabel: "¥199 起 Personalized FinanceProof Plan",
  },
  {
    asset: "BusinessProof",
    source: "businessproof-market-entry-strategy-kit",
    titleLineOne: "申请 BusinessProof",
    titleLineTwo: "市场进入策略测试",
    description:
      "你正在申请 BusinessProof Market Entry Strategy Kit 的早期测试。这个申请会帮助我们判断你的商业分析目标、市场问题和策略需求是否适合进入第一批验证。",
    subDescription:
      "当前阶段不替你编造咨询、创业或商业实习经历，也不自动收费。我们会根据你的申请内容判断是否适合继续沟通，并确认你需要哪种商业分析资产方案。",
    statOneValue: "策略验证",
    statOneLabel: "验证学生是否愿意为结构化商业分析与市场进入资产付费",
    statTwoValue: "BusinessProof",
    statTwoLabel: "聚焦市场选择、用户问题、竞争判断和进入路径",
    statThreeValue: "真实分析",
    statThreeLabel: "资产包用于商业分析训练，不包装虚假经历",
    sideCardOneTitle: "BusinessProof Starter Kit 包含什么",
    sideCardOneItems: [
      "市场进入问题定义",
      "市场规模与细分",
      "竞争格局分析",
      "进入策略设计",
      "执行路线与指标",
      "简历表达草案",
      "面试防守问题",
    ],
    submitLabel: "提交 BusinessProof 测试申请",
    starterPackLabel: "¥99 BusinessProof Starter Kit",
    personalizedPlanLabel: "¥199 起 Personalized BusinessProof Plan",
  },
  {
    asset: "ResearchProof",
    source: "researchproof-literature-method-kit",
    titleLineOne: "申请 ResearchProof",
    titleLineTwo: "文献与方法测试",
    description:
      "你正在申请 ResearchProof Literature and Method Kit 的早期测试。这个申请会帮助我们判断你的研究主题、文献基础和方法需求是否适合进入第一批验证。",
    subDescription:
      "当前阶段不代写论文，不编造科研经历，也不自动收费。我们会根据你的申请内容判断是否适合继续沟通，并确认你需要路线评估、Starter Kit 或个性化研究资产方案。",
    statOneValue: "研究资产",
    statOneLabel: "验证学生是否愿意为结构化文献综述与方法说明资产付费",
    statTwoValue: "ResearchProof",
    statTwoLabel: "聚焦研究问题、文献位置、方法适配和研究边界",
    statThreeValue: "学术诚信",
    statThreeLabel: "资产包用于研究训练，不代写论文或伪造科研经历",
    sideCardOneTitle: "ResearchProof Starter Kit 包含什么",
    sideCardOneItems: [
      "研究问题界定",
      "文献综述结构",
      "方法选择说明",
      "证据与材料清单",
      "研究边界与局限",
      "简历表达草案",
      "面试防守问题",
    ],
    submitLabel: "提交 ResearchProof 测试申请",
    starterPackLabel: "¥99 ResearchProof Starter Kit",
    personalizedPlanLabel: "¥199 起 Personalized ResearchProof Plan",
  },
];
export default async function RequestAccessPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;

  const sourcePage = normalizeTrackingValue(
    getSearchParam(resolvedSearchParams, "source")
  );
  const assetIntent = normalizeTrackingValue(
    getSearchParam(resolvedSearchParams, "asset")
  );
  const error = getErrorMessage(getSearchParam(resolvedSearchParams, "error"));

  const activeKit = getActiveAssetKit(sourcePage, assetIntent);
  const pageCopy = activeKit || defaultPageCopy;
  const priceOptions = getPriceOptions(activeKit);
  const defaultPurchaseIntent = activeKit
    ? `interested-in-paid-${activeKit.asset.toLowerCase()}-test`
    : "";
  const defaultPriceRange = activeKit ? "99-starter-pack" : "";

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            MajorProof · Request Access
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            {pageCopy.titleLineOne}
            <br />
            {pageCopy.titleLineTwo}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            {pageCopy.description}
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            {pageCopy.subDescription}
          </p>

          {sourcePage || assetIntent ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {sourcePage ? (
                <span className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-400">
                  当前来源：{sourcePage}
                </span>
              ) : null}

              {assetIntent ? (
                <span className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-400">
                  当前意向资产：{assetIntent}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value={pageCopy.statOneValue}
            label={pageCopy.statOneLabel}
          />
          <StatBlock
            value={pageCopy.statTwoValue}
            label={pageCopy.statTwoLabel}
          />
          <StatBlock
            value={pageCopy.statThreeValue}
            label={pageCopy.statThreeLabel}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Application Form
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              填写申请信息
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              我们更关注你缺少哪类可展示成果、目标岗位或申请场景是什么、你是否愿意为可执行的资产包付费。
            </p>
          </div>

          {error ? (
            <div className="mb-8 rounded-3xl border border-red-900/60 bg-red-950/40 p-5 text-sm leading-7 text-red-200">
              {error}
            </div>
          ) : null}

          <form
            action={submitAccessRequest}
            className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-8"
          >
            <input type="hidden" name="sourcePage" value={sourcePage} />
            <input type="hidden" name="assetIntent" value={assetIntent} />

            <div className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="称呼"
                  name="nameOrAlias"
                  placeholder="例如 Kevin"
                />

                <FormField
                  label="联系方式"
                  name="contactMethod"
                  placeholder="邮箱 / 微信 / Telegram"
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="当前专业"
                  name="currentMajor"
                  placeholder="例如 Electrical Engineering"
                  required
                />

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-neutral-300">
                    当前年级
                  </span>
                  <select
                    name="currentYear"
                    className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
                    defaultValue=""
                  >
                    <option value="">请选择</option>
                    {yearOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <TextAreaField
                label="目标"
                name="targetGoal"
                placeholder="例如 申请德国工科硕士 / 找技术实习 / 准备简历项目 / 申请研究项目"
              />

              <div>
                <p className="mb-3 text-sm font-medium text-neutral-300">
                  感兴趣的资产方向
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {assetOptions.map((option) => (
                    <AssetCheckbox
                      key={option.value}
                      option={option}
                      defaultChecked={assetIntent === option.value}
                    />
                  ))}
                </div>
              </div>
              <TextAreaField
                label="当前最主要的问题"
                name="primaryNeed"
                placeholder="例如 没有项目经历 / 简历缺少可展示成果 / 不知道做什么项目 / 面试讲不清项目 / 缺少申请材料"
                required
              />

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-neutral-300">
                    付费测试意向
                  </span>
                  <select
                    name="purchaseIntent"
                    className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
                    defaultValue={defaultPurchaseIntent}
                  >
                    <option value="">暂不确定</option>
                    {activeKit ? (
                      <option value={defaultPurchaseIntent}>
                        我对 {activeKit.asset} 付费测试感兴趣
                      </option>
                    ) : (
                      <option value="interested-in-paid-asset-test">
                        我对付费测试感兴趣
                      </option>
                    )}
                    <option value="need-free-preview-first">
                      我想先看免费路线预览
                    </option>
                    <option value="only-exploring">
                      目前只是了解
                    </option>
                    <option value="ready-to-pay-if-useful">
                      如果有用可以付费
                    </option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-neutral-300">
                    可接受价格区间
                  </span>
                  <select
                    name="expectedPriceRange"
                    className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
                    defaultValue={defaultPriceRange}
                  >
                    {priceOptions.map((option) => (
                      <option key={option.value || "empty"} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <input
                  type="checkbox"
                  name="willingToTest"
                  value="true"
                  defaultChecked={Boolean(activeKit)}
                  className="mt-1"
                />
                <span className="text-sm leading-7 text-neutral-400">
                  我愿意作为早期测试用户，接受后续沟通或反馈访谈。
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-neutral-300">
                  语言偏好
                </span>
                <select
                  name="languagePreference"
                  className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
                  defaultValue="中文"
                >
                  <option value="中文">中文</option>
                  <option value="English">English</option>
                  <option value="中英双语">中英双语</option>
                </select>
              </label>

              <button
                type="submit"
                className="mt-3 rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                {pageCopy.submitLabel}
              </button>

              <p className="text-sm leading-7 text-neutral-500">
                提交申请不会产生付款义务，也不会自动创建账号。当前阶段主要用于产品验证、需求判断和早期用户沟通。
              </p>
            </div>
          </form>
        </div>

        <aside className="space-y-5">
          <InfoCard
            title={pageCopy.sideCardOneTitle}
            items={pageCopy.sideCardOneItems}
          />

          <InfoCard
            title="MajorProof 不做什么"
            items={[
              "不代写课程作业",
              "不编造实习经历",
              "不承诺录取或就业",
              "不生成虚假成果",
            ]}
          />

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Before Applying
            </p>

            <h2 className="text-2xl font-semibold">还不确定方向</h2>

            <p className="mt-4 leading-7 text-neutral-400">
              如果你还不确定自己适合哪个资产方向，可以先生成 AI Roadmap Preview。
            </p>

            <a
              href="/ai-roadmap-preview"
              className="mt-6 inline-flex rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              先生成 AI 路线预览
            </a>
          </div>
        </aside>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
}
const defaultPageCopy = {
  titleLineOne: "申请 MajorProof",
  titleLineTwo: "早期访问",
  description:
    "填写你的专业、年级、目标和当前问题，帮助我们判断你适合哪类 Proof Asset，以及是否适合进入早期测试名单。",
  subDescription:
    "当前阶段主要用于产品验证、需求判断和早期用户沟通。提交申请不会产生付款义务，也不会自动创建账号。",
  statOneValue: "需求判断",
  statOneLabel: "判断你最需要的是技术、金融、商业还是研究类资产",
  statTwoValue: "早期用户",
  statTwoLabel: "优先邀请目标明确、问题清晰、愿意反馈的学生",
  statThreeValue: "可验证成果",
  statThreeLabel: "关注你缺少哪类可展示成果和可解释材料",
  sideCardOneTitle: "我们会关注什么",
  sideCardOneItems: [
    "你的专业背景",
    "你的目标方向",
    "你缺少的成果类型",
    "你是否有明确痛点",
    "你是否愿意测试资产包",
    "你是否可能成为付费用户",
  ],
  submitLabel: "提交申请",
};

function getActiveAssetKit(sourcePage: string, assetIntent: string) {
  return (
    assetKitConfigs.find(
      (config) => config.source === sourcePage && config.asset === assetIntent
    ) || null
  );
}

function getPriceOptions(activeKit: AssetKitConfig | null) {
  if (!activeKit) {
    return [
      {
        value: "",
        label: "暂不确定",
      },
      {
        value: "29-roadmap-review",
        label: "¥29 Roadmap Review",
      },
      {
        value: "99-starter-pack",
        label: "¥99 Starter Pack",
      },
      {
        value: "199-personalized-plan",
        label: "¥199 起 Personalized Plan",
      },
      {
        value: "need-discussion",
        label: "需要先沟通",
      },
    ];
  }

  return [
    {
      value: "",
      label: "暂不确定",
    },
    {
      value: "29-roadmap-review",
      label: "¥29 Roadmap Review",
    },
    {
      value: "99-starter-pack",
      label: activeKit.starterPackLabel,
    },
    {
      value: "199-personalized-plan",
      label: activeKit.personalizedPlanLabel,
    },
    {
      value: "need-discussion",
      label: "需要先沟通",
    },
  ];
}

function FormField({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-neutral-300">
        {label}
        {required ? <span className="text-neutral-100"> *</span> : null}
      </span>
      <input
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
      />
    </label>
  );
}

function TextAreaField({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-neutral-300">
        {label}
        {required ? <span className="text-neutral-100"> *</span> : null}
      </span>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="w-full resize-y rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm leading-7 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
      />
    </label>
  );
}
function AssetCheckbox({
  option,
  defaultChecked,
}: {
  option: {
    value: string;
    label: string;
    body: string;
  };
  defaultChecked: boolean;
}) {
  return (
    <label className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="interestedAssets"
          value={option.value}
          defaultChecked={defaultChecked}
          className="mt-1"
        />
        <div>
          <p className="font-medium text-neutral-100">{option.label}</p>
          <p className="mt-2 text-sm leading-6 text-neutral-500">
            {option.body}
          </p>
        </div>
      </div>
    </label>
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

function getSearchParam(
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string
) {
  const value = searchParams?.[key];

  if (Array.isArray(value)) {
    return value[0] || "";
  }

  return value || "";
}

function normalizeTrackingValue(value: string) {
  return value.trim().slice(0, 120);
}

function getErrorMessage(error: string) {
  if (error === "missing-contact") {
    return "请填写联系方式。";
  }

  if (error === "missing-major") {
    return "请填写当前专业。";
  }

  if (error === "missing-need") {
    return "请填写当前最主要的问题。";
  }

  if (error === "submit-failed") {
    return "提交失败，请稍后再试。";
  }

  return "";
}