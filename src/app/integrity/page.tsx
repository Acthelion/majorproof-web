import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

export default function IntegrityPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Academic Integrity
        </p>

        <h1 className="mb-6 text-5xl font-semibold tracking-tight">
          诚信规范
        </h1>

        <p className="mb-10 text-lg leading-8 text-neutral-300">
          MajorProof 的目标是帮助学生形成真实、可解释、可展示的专业能力证据。
          资产包可以用于学习、训练、作品集构建、实习准备和申请材料整理。任何使用方式都应以真实贡献、独立理解和诚实表达为前提。
        </p>

        <div className="space-y-5">
          <PolicyBlock
            title="MajorProof 提供的内容"
            items={[
              "专业成果的选题框架与结构设计",
              "项目、模型、报告、案例和研究资产的示范材料",
              "完成资产所需的过程说明、方法解释和质量标准",
              "中英双语简历表达和面试叙述框架",
              "从示范版本到个人化版本的扩展路线",
            ]}
          />

          <PolicyBlock
            title="MajorProof 明确不提供的内容"
            items={[
              "课程作业、课程项目或考试任务的代做服务",
              "论文、报告、反思文档或申请文书的代写服务",
              "伪造实习、科研、竞赛、项目或社会实践经历",
              "用于规避学校、雇主、考试机构或平台规则的材料",
              "任何关于录用、录取、面试通过或投资收益的保证性承诺",
            ]}
          />

          <PolicyBlock
            title="用户的使用责任"
            items={[
              "将资产包作为学习材料、训练框架和作品构建参考",
              "基于个人真实背景、数据、理解和贡献完成修改",
              "在简历、作品集和面试中准确说明个人完成的部分",
              "不得将示范材料原封不动提交为课程作业或个人原创成果",
              "不得利用本服务制造无法解释或无法验证的经历描述",
            ]}
          />

          <PolicyBlock
            title="为什么需要这些边界"
            items={[
              "能力证据的价值来自真实理解，而不是表面包装",
              "面试和申请过程中的追问会检验个人贡献和方法理解",
              "长期职业发展依赖可信记录，虚假材料会造成持续风险",
              "清晰边界有助于保护用户、学校、雇主和 MajorProof 本身",
            ]}
          />
        </div>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
}

function PolicyBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-5 text-2xl font-semibold">{title}</h2>
      <ul className="list-disc space-y-3 pl-6 leading-7 text-neutral-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}