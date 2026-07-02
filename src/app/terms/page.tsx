import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Terms
        </p>

        <h1 className="mb-6 text-5xl font-semibold tracking-tight">
          服务条款
        </h1>

        <p className="mb-10 text-lg leading-8 text-neutral-300">
          本服务条款用于说明 MajorProof 当前阶段的服务性质、使用边界、用户责任和数字产品交付原则。
          使用 MajorProof 相关页面或购买相关资产包，即表示用户理解并接受以下基本规则。
        </p>

        <div className="space-y-8 leading-8 text-neutral-300">
          <Section title="1. 服务性质">
            <p>
              MajorProof 提供面向大学生的专业能力证据资产，包括项目框架、案例结构、模型示范、报告模板、展示材料、简历表达和面试讲解框架。
              相关内容用于学习、训练、作品集构建、求职准备和申请材料整理。
            </p>
          </Section>

          <Section title="2. 非保证性结果">
            <p>
              MajorProof 不承诺用户一定获得实习、录用、录取、面试机会、奖学金或其他特定结果。
              最终结果取决于用户个人背景、实际能力、材料质量、市场环境和招聘或录取方判断。
            </p>
          </Section>

          <Section title="3. 学术与职业诚信">
            <p>
              用户不得将 MajorProof 资产包用于课程作业代做、论文代写、考试作弊、经历伪造、虚假申请或其他违反学校、雇主、考试机构和平台规则的用途。
            </p>
          </Section>

          <Section title="4. 用户责任">
            <p>
              用户应基于自己的真实背景、数据、理解和贡献使用资产包。
              在简历、作品集、申请材料和面试中，用户应准确说明个人完成的内容和参考材料的作用。
            </p>
          </Section>

          <Section title="5. 数字产品交付">
            <p>
              数字资产包交付后，通常不支持因主观不满意、方向选择变化或个人使用不充分而退款。
              如出现重复付款、文件损坏、内容缺失或明显交付错误，将根据实际情况处理。
            </p>
          </Section>

          <Section title="6. 内容更新">
            <p>
              MajorProof 可能根据用户反馈、市场需求和专业标准变化更新产品内容、页面文案、价格结构和交付方式。
              已购买用户是否获得后续更新，将以具体产品说明为准。
            </p>
          </Section>

          <Section title="7. 责任限制">
            <p>
              MajorProof 提供的是学习与能力展示材料，不构成法律、财务、投资、职业录用或录取结果方面的保证性意见。
              用户应自行判断相关材料是否适合具体场景。
            </p>
          </Section>
        </div>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-3 text-2xl font-semibold text-neutral-100">{title}</h2>
      {children}
    </section>
  );
}