import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Privacy
        </p>

        <h1 className="mb-6 text-5xl font-semibold tracking-tight">
          隐私说明
        </h1>

        <p className="mb-10 text-lg leading-8 text-neutral-300">
          当前版本的 MajorProof 主要用于产品展示、需求验证和早期用户沟通。
          本页面说明可能涉及的信息类型、使用目的和基本处理原则。
        </p>

        <div className="space-y-8 leading-8 text-neutral-300">
          <Section title="1. 当前版本范围">
            <p>
              MajorProof 第一版暂不开放自动账号系统、在线支付系统或用户材料上传系统。
              页面内容主要用于展示产品概念、专业方向、诚信规范和后续资产包计划。
            </p>
          </Section>

          <Section title="2. 可能接收的信息">
            <p>
              如果用户通过邮箱、表单、私信或其他方式主动联系 MajorProof，我们可能接收用户提供的联系方式、专业方向、目标岗位、目标申请场景、需求描述和反馈意见。
            </p>
          </Section>

          <Section title="3. 信息使用目的">
            <p>
              用户信息仅用于理解需求、回复咨询、交付已购买内容、改进资产包结构和判断后续产品方向。
              MajorProof 不会将用户主动提供的信息出售给第三方。
            </p>
          </Section>

          <Section title="4. 不建议提交的信息">
            <p>
              用户不应提交身份证件、银行卡信息、家庭住址、学校账号密码、未打码成绩单、护照扫描件或与产品购买和需求沟通无关的敏感信息。
            </p>
          </Section>

          <Section title="5. 第三方工具">
            <p>
              在后续版本中，MajorProof 可能使用托管、数据库、邮件、支付或文件分发服务。
              如果启用相关功能，页面将更新相应的数据处理说明。
            </p>
          </Section>

          <Section title="6. 删除与更正">
            <p>
              如用户希望删除、修改或停止使用其主动提供的信息，可以通过联系邮箱提出请求。
              MajorProof 将在合理时间内处理可确认的请求。
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