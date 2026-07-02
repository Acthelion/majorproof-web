export type Locale = "zh" | "en";

export const site = {
  name: "MajorProof",
  zhTagline: "专业能力证据资产系统",
  enTagline: "Evidence-based professional assets for students",
};

export const categories = [
  {
    key: "tech",
    name: "TechProof",
    zhAudience: "CS / EE / Data Science / Automation",
    enAudience: "CS / EE / Data Science / Automation",
    zhTitle: "技术与工程能力资产",
    enTitle: "Technical and Engineering Assets",
    zhDescription:
      "面向技术、工程与数据方向学生，构建可运行、可部署、可解释的项目成果，重点呈现系统设计、实现过程、技术取舍与工程边界。",
    enDescription:
      "For students in computing, engineering, and data-related fields. The focus is on runnable and deployable projects with clear system design, implementation evidence, technical trade-offs, and engineering constraints.",
    zhExamples: [
      "AI 文档审查系统",
      "课程 PDF 学习助手",
      "数据结构可视化平台",
      "传感器数据 Dashboard",
    ],
    enExamples: [
      "AI Document Review System",
      "Course PDF Study Assistant",
      "Data Structure Visualization Platform",
      "Sensor Data Dashboard",
    ],
    zhAbilities: [
      "系统设计",
      "API 集成",
      "数据库建模",
      "部署与环境配置",
      "技术文档写作",
    ],
    enAbilities: [
      "System design",
      "API integration",
      "Database modeling",
      "Deployment workflow",
      "Technical documentation",
    ],
  },
  {
    key: "finance",
    name: "FinanceProof",
    zhAudience: "Accounting / Finance / Business",
    enAudience: "Accounting / Finance / Business",
    zhTitle: "金融与财务分析资产",
    enTitle: "Finance and Accounting Analysis Assets",
    zhDescription:
      "面向会计、金融与商科学生，构建公司研究、财务分析、估值模型和行业比较成果，重点呈现假设来源、分析口径、模型逻辑与风险判断。",
    enDescription:
      "For students in accounting, finance, and business. The focus is on company research, financial analysis, valuation models, and industry comparison with explicit assumptions, analytical scope, model logic, and risk discussion.",
    zhExamples: [
      "公司研究报告",
      "DCF 估值模型",
      "同业比较分析",
      "审计异常数据分析",
    ],
    enExamples: [
      "Company Research Report",
      "DCF Valuation Model",
      "Comparable Company Analysis",
      "Audit Anomaly Data Analysis",
    ],
    zhAbilities: [
      "财报解读",
      "估值建模",
      "行业研究",
      "假设敏感性分析",
      "投资逻辑表达",
    ],
    enAbilities: [
      "Financial statement analysis",
      "Valuation modeling",
      "Industry research",
      "Sensitivity analysis",
      "Investment reasoning",
    ],
  },
  {
    key: "business",
    name: "BusinessProof",
    zhAudience: "Marketing / Management / Business Analytics",
    enAudience: "Marketing / Management / Business Analytics",
    zhTitle: "商业案例与市场分析资产",
    enTitle: "Business Case and Market Analysis Assets",
    zhDescription:
      "面向市场、管理与商业分析方向学生，构建市场进入、竞品分析、用户画像和增长策略成果，重点呈现问题定义、数据依据、战略推导与执行路径。",
    enDescription:
      "For students in marketing, management, and business analytics. The focus is on market entry, competitor analysis, customer segmentation, and growth strategy with problem framing, evidence, strategic reasoning, and execution planning.",
    zhExamples: [
      "市场进入方案",
      "竞品分析报告",
      "用户画像研究",
      "品牌增长案例",
    ],
    enExamples: [
      "Market Entry Strategy",
      "Competitor Analysis Report",
      "Customer Segmentation Study",
      "Brand Growth Case",
    ],
    zhAbilities: [
      "商业问题定义",
      "市场研究",
      "竞品分析",
      "策略表达",
      "PPT 结构化展示",
    ],
    enAbilities: [
      "Business problem framing",
      "Market research",
      "Competitor analysis",
      "Strategic communication",
      "Structured presentation",
    ],
  },
  {
    key: "research",
    name: "ResearchProof",
    zhAudience: "Economics / Sociology / Psychology / Public Policy",
    enAudience: "Economics / Sociology / Psychology / Public Policy",
    zhTitle: "研究报告与数据分析资产",
    enTitle: "Research and Data Analysis Assets",
    zhDescription:
      "面向经济、社科、心理、公共政策等方向学生，构建基于公开数据、研究问题、方法说明和图表结论的研究型成果。",
    enDescription:
      "For students in economics, social sciences, psychology, and public policy. The focus is on research outputs based on public datasets, research questions, methodological notes, visual evidence, and defensible conclusions.",
    zhExamples: [
      "公开数据研究报告",
      "回归分析项目",
      "问卷研究设计",
      "政策数据简报",
    ],
    enExamples: [
      "Public Dataset Research Report",
      "Regression Analysis Project",
      "Survey Research Design",
      "Policy Data Brief",
    ],
    zhAbilities: [
      "研究问题设计",
      "数据清洗",
      "方法选择",
      "图表解释",
      "研究结论表达",
    ],
    enAbilities: [
      "Research question design",
      "Data cleaning",
      "Method selection",
      "Chart interpretation",
      "Research communication",
    ],
  },
];

export const proofAssetLayersZh = [
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

export const proofAssetLayersEn = [
  {
    title: "Professional context",
    body: "Clarifies the role, application setting, or competency target so that the work sample is aligned with a concrete purpose.",
  },
  {
    title: "Final deliverable",
    body: "Produces a showable output such as a project, model, report, slide deck, research document, or portfolio page.",
  },
  {
    title: "Process evidence",
    body: "Records data sources, analytical steps, implementation choices, model assumptions, and version changes.",
  },
  {
    title: "Method explanation",
    body: "Explains why a particular technique, model, framework, or research method was selected.",
  },
  {
    title: "Resume language",
    body: "Translates the asset into precise, restrained, and verifiable resume bullets in Chinese and English.",
  },
  {
    title: "Interview defense",
    body: "Prepares background, contribution, limitations, likely follow-up questions, and possible improvements.",
  },
  {
    title: "Extension roadmap",
    body: "Provides a path from reproduction to personal adaptation, so the student can build an individual version.",
  },
];