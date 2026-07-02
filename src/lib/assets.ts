export type ProofAsset = {
  slug: string;
  category: string;

  zhName: string;
  enName: string;

  zhSubtitle: string;
  enSubtitle: string;

  zhAudience: string;
  enAudience: string;

  zhOutcome: string;
  enOutcome: string;

  zhIncludes: string[];
  enIncludes: string[];

  zhAbilities: string[];
  enAbilities: string[];

  zhWorkflow: string[];
  enWorkflow: string[];

  zhBoundary: string[];
  enBoundary: string[];
};

export const proofAssets: ProofAsset[] = [
  {
    slug: "ai-document-review-platform",
    category: "TechProof",

    zhName: "AI 文档审查系统",
    enName: "AI Document Review Platform",

    zhSubtitle:
      "一个完整的全栈 AI 文档处理项目，用于展示文件上传、后台审查、报告生成、权限链接和部署能力。",
    enSubtitle:
      "A full-stack AI document processing project that demonstrates file upload, admin review, report generation, token-based access, and deployment workflow.",

    zhAudience: "CS / EE / Data Science / Automation 学生",
    enAudience: "Students in CS, EE, Data Science, or Automation",

    zhOutcome:
      "最终成果是一套可运行、可部署、可展示的 AI 文档审查平台。它可以作为 GitHub 项目、作品集项目或技术面试材料。",
    enOutcome:
      "The final deliverable is a runnable and deployable AI document review platform that can be used as a GitHub project, portfolio asset, or technical interview sample.",

    zhIncludes: [
      "Next.js 前端页面与路由结构",
      "Supabase 数据库与文件存储设计",
      "后台管理页面",
      "OpenAI API 报告生成逻辑",
      "token 私密报告链接",
      "Netlify 部署流程",
      "README 与项目说明文档",
      "中英文简历 bullet",
      "技术面试讲解框架",
    ],
    enIncludes: [
      "Next.js frontend pages and routing structure",
      "Supabase database and file storage design",
      "Admin review interface",
      "OpenAI API report generation logic",
      "Token-based private report links",
      "Netlify deployment workflow",
      "README and project documentation",
      "Chinese and English resume bullets",
      "Technical interview explanation framework",
    ],

    zhAbilities: [
      "全栈项目搭建",
      "数据库建模",
      "文件上传与存储",
      "AI API 集成",
      "后台权限边界",
      "部署与环境变量管理",
      "技术文档写作",
    ],
    enAbilities: [
      "Full-stack project development",
      "Database modeling",
      "File upload and storage",
      "AI API integration",
      "Admin access boundary",
      "Deployment and environment variables",
      "Technical documentation",
    ],

    zhWorkflow: [
      "理解系统目标和用户流程",
      "配置 Next.js 项目结构",
      "设计数据表和文件存储路径",
      "完成提交、预览、后台和报告页面",
      "接入 AI 报告生成逻辑",
      "完成本地测试与线上部署",
      "整理 README、架构说明和简历表达",
    ],
    enWorkflow: [
      "Define the system goal and user flow",
      "Set up the Next.js project structure",
      "Design database tables and file storage paths",
      "Build submission, preview, admin, and report pages",
      "Integrate AI report generation logic",
      "Test locally and deploy online",
      "Prepare README, architecture notes, and resume language",
    ],

    zhBoundary: [
      "该项目用于展示工程能力，不应被包装成商业级安全系统。",
      "如果涉及真实用户文件，需要进一步增加权限控制、日志审计和数据删除机制。",
      "OpenAI API、Supabase service role key 等密钥不得出现在前端代码或公开仓库中。",
    ],
    enBoundary: [
      "This project demonstrates engineering ability and should not be presented as a production-grade security system.",
      "If real user files are involved, stronger access control, audit logs, and data deletion workflows are required.",
      "OpenAI API keys, Supabase service role keys, and other secrets must not appear in frontend code or public repositories.",
    ],
  },
  {
    slug: "company-research-valuation-kit",
    category: "FinanceProof",

    zhName: "公司研究与估值资产包",
    enName: "Company Research and Valuation Kit",

    zhSubtitle:
      "面向金融、会计和商科学生的公司研究资产，重点训练财报分析、估值逻辑、行业比较和投资论证表达。",
    enSubtitle:
      "A company research asset for finance, accounting, and business students, focusing on financial analysis, valuation logic, industry comparison, and investment reasoning.",

    zhAudience: "Accounting / Finance / Business 学生",
    enAudience: "Students in Accounting, Finance, or Business",

    zhOutcome:
      "最终成果包括一份公司研究报告、基础估值模型、核心图表和展示稿，可用于投研、财务分析、咨询或商科实习准备。",
    enOutcome:
      "The final deliverable includes a company research report, basic valuation model, key charts, and presentation deck for investment research, financial analysis, consulting, or business internship preparation.",

    zhIncludes: [
      "公司基本面研究框架",
      "财务报表核心指标分析",
      "DCF 估值模型基础版",
      "同业比较分析表",
      "敏感性分析",
      "投资逻辑与风险因素",
      "PPT 展示结构",
      "中英文简历 bullet",
      "金融面试讲解框架",
    ],
    enIncludes: [
      "Company research framework",
      "Financial statement ratio analysis",
      "Basic DCF valuation model",
      "Comparable company analysis table",
      "Sensitivity analysis",
      "Investment thesis and risk factors",
      "Presentation deck structure",
      "Chinese and English resume bullets",
      "Finance interview explanation framework",
    ],

    zhAbilities: [
      "财报阅读",
      "估值建模",
      "行业研究",
      "假设推导",
      "敏感性分析",
      "投资逻辑表达",
      "商业展示",
    ],
    enAbilities: [
      "Financial statement reading",
      "Valuation modeling",
      "Industry research",
      "Assumption reasoning",
      "Sensitivity analysis",
      "Investment thesis communication",
      "Business presentation",
    ],

    zhWorkflow: [
      "选择目标公司和行业范围",
      "整理公司业务模式与收入结构",
      "提取财报核心指标",
      "建立基础 DCF 模型",
      "选择可比公司并进行指标比较",
      "总结估值结果和风险因素",
      "形成报告、PPT 和简历表达",
    ],
    enWorkflow: [
      "Select a target company and industry scope",
      "Summarize the business model and revenue structure",
      "Extract key financial statement metrics",
      "Build a basic DCF model",
      "Select comparable companies and compare metrics",
      "Summarize valuation results and risk factors",
      "Produce the report, deck, and resume language",
    ],

    zhBoundary: [
      "该资产用于学习和求职展示，不构成投资建议。",
      "估值结果依赖假设，必须明确说明收入增长、利润率、折现率和终值假设。",
      "用户不应将模板结果包装成真实机构投研结论。",
    ],
    enBoundary: [
      "This asset is for learning and career presentation, not investment advice.",
      "Valuation outputs depend on assumptions, including revenue growth, margin, discount rate, and terminal value.",
      "Users should not present the template output as an institutional research conclusion.",
    ],
  },
  {
    slug: "market-entry-strategy-kit",
    category: "BusinessProof",

    zhName: "市场进入策略资产包",
    enName: "Market Entry Strategy Kit",

    zhSubtitle:
      "面向市场、管理和商业分析学生的商业案例资产，重点训练市场定义、用户分析、竞品判断、渠道策略和执行路径。",
    enSubtitle:
      "A business case asset for marketing, management, and business analytics students, focusing on market definition, customer analysis, competitor assessment, channel strategy, and execution planning.",

    zhAudience: "Marketing / Management / Business Analytics 学生",
    enAudience: "Students in Marketing, Management, or Business Analytics",

    zhOutcome:
      "最终成果是一份完整的市场进入策略报告和展示稿，可用于商科实习、咨询案例准备、市场岗位申请或作品集展示。",
    enOutcome:
      "The final deliverable is a market entry strategy report and presentation deck for business internships, consulting case preparation, marketing roles, or portfolio presentation.",

    zhIncludes: [
      "市场定义与问题背景",
      "目标用户画像",
      "竞品格局分析",
      "渠道与定价策略",
      "进入路径和阶段计划",
      "关键 KPI 设计",
      "风险与约束条件",
      "PPT 展示结构",
      "中英文简历 bullet",
      "商业案例面试讲解框架",
    ],
    enIncludes: [
      "Market definition and problem background",
      "Target customer persona",
      "Competitive landscape analysis",
      "Channel and pricing strategy",
      "Entry roadmap and staged plan",
      "Key KPI design",
      "Risks and constraints",
      "Presentation deck structure",
      "Chinese and English resume bullets",
      "Business case interview explanation framework",
    ],

    zhAbilities: [
      "商业问题定义",
      "用户研究",
      "竞品分析",
      "市场进入策略",
      "KPI 设计",
      "PPT 结构化表达",
      "执行路径规划",
    ],
    enAbilities: [
      "Business problem framing",
      "Customer research",
      "Competitor analysis",
      "Market entry strategy",
      "KPI design",
      "Structured presentation",
      "Execution planning",
    ],

    zhWorkflow: [
      "定义目标市场和进入问题",
      "分析用户群体和核心需求",
      "梳理主要竞品和差异化空间",
      "设计渠道、定价和推广路径",
      "设置阶段目标和关键指标",
      "分析执行风险和资源约束",
      "形成报告、PPT 和面试叙述",
    ],
    enWorkflow: [
      "Define the target market and entry problem",
      "Analyze user segments and core needs",
      "Map competitors and differentiation opportunities",
      "Design channel, pricing, and promotion approach",
      "Set stage goals and key metrics",
      "Analyze execution risks and resource constraints",
      "Produce the report, deck, and interview narrative",
    ],

    zhBoundary: [
      "该资产用于训练商业分析和展示能力，不代表真实企业咨询建议。",
      "市场规模、用户画像和竞品分析应尽量使用公开数据或明确假设。",
      "用户需要根据自己的行业、品牌或产品选择进行个性化修改。",
    ],
    enBoundary: [
      "This asset is for business analysis and presentation training, not real corporate consulting advice.",
      "Market size, customer personas, and competitor analysis should rely on public data or clearly stated assumptions.",
      "Users need to adapt the asset to their chosen industry, brand, or product.",
    ],
  },
];

export function getProofAsset(slug: string) {
  return proofAssets.find((asset) => asset.slug === slug);
}