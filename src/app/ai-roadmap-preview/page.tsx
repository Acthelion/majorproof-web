import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AiRoadmapPreviewPage({
  searchParams,
}: PageProps) {
  const resolvedSearchParams = await searchParams;
  const error = getErrorMessage(getSearchParam(resolvedSearchParams, "error"));

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">
            MajorProof · AI 资产路线预览
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            生成你的专业能力
            <br />
            资产路线预览
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-300">
            填写你的专业、年级、目标、已有经历和当前问题，MajorProof 会生成一份结构化的 Proof Asset 路线预览，帮助你判断自己适合从哪个专业资产方向开始。
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            这是受控测试功能，需要访问码。它不会代写作业，不会编造经历，也不会承诺实习、录取、成绩、奖学金或就业结果。
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <StatBlock
            value="路线判断"
            label="判断当前背景适合 TechProof、FinanceProof、BusinessProof 还是 ResearchProof"
          />
          <StatBlock
            value="证据规划"
            label="明确最终成果、过程证据、方法解释、简历表达和面试防守"
          />
          <StatBlock
            value="早期测试"
            label="适合先验证方向，再决定是否提交正式 MajorProof 早期访问申请"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Preview Form
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              填写你的基础信息
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              信息越具体，生成的路线越有参考价值。你不需要有完整项目经历，也可以只填写课程、技能、目标方向和当前卡住的问题。
            </p>
          </div>

          {error ? (
            <div className="mb-8 rounded-3xl border border-red-900/60 bg-red-950/40 p-5 text-sm leading-7 text-red-200">
              {error}
            </div>
          ) : null}

          <form
            method="post"
            action="/ai-roadmap-preview/submit"
            className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 md:p-8"
          >
            <div className="grid gap-5">
              <FormField
                label="访问码"
                name="accessCode"
                placeholder="输入测试访问码"
                required
              />

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
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="当前专业"
                  name="currentMajor"
                  placeholder="例如 Electrical Engineering"
                  required
                />
                <FormField
                  label="当前年级"
                  name="currentYear"
                  placeholder="例如 大二 / Year 2 / Junior"
                />
              </div>

              <FormField
                label="目标"
                name="targetGoal"
                placeholder="例如 申请德国工科硕士 / 找技术实习 / 准备商科实习"
                required
              />

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-neutral-300">
                  感兴趣的资产方向
                </span>
                <select
                  name="interestedAsset"
                  className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
                  defaultValue=""
                >
                  <option value="">暂不确定</option>
                  <option value="TechProof">TechProof</option>
                  <option value="FinanceProof">FinanceProof</option>
                  <option value="BusinessProof">BusinessProof</option>
                  <option value="ResearchProof">ResearchProof</option>
                </select>
              </label>

              <TextAreaField
                label="已有经历"
                name="existingExperience"
                placeholder="可以写课程、项目、竞赛、实习、研究、技能栈。没有也可以留空。"
              />

              <TextAreaField
                label="当前最主要的问题"
                name="primaryNeed"
                placeholder="例如 没有项目经历 / 简历没东西写 / 不知道怎么包装课程经历 / 面试说不清项目"
                required
              />

              <button
                type="submit"
                className="mt-3 rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
              >
                生成 AI 资产路线预览
              </button>
            </div>
          </form>
        </div>

        <aside className="space-y-5">
          <InfoCard
            title="它会生成什么"
            items={[
              "推荐资产方向",
              "适合做的项目",
              "最终成果形态",
              "过程证据清单",
              "简历表达草案",
              "面试防守问题",
              "下一步扩展路线",
            ]}
          />

          <InfoCard
            title="它不会做什么"
            items={[
              "不会代写课程作业",
              "不会编造实习经历",
              "不会承诺录取或就业",
              "不会生成虚假成果",
            ]}
          />

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Formal Request
            </p>

            <h2 className="text-2xl font-semibold">
              已经确定想继续
            </h2>

            <p className="mt-4 leading-7 text-neutral-400">
              如果你已经明确想进入 MajorProof 早期测试，可以直接提交正式申请。
            </p>

            <a
              href="/request-access"
              className="mt-6 inline-flex rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              申请早期访问
            </a>
          </div>
        </aside>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
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

function getErrorMessage(error: string) {
  if (error === "invalid-code") {
    return "访问码不正确，请确认后重试。";
  }

  if (error === "missing-fields") {
    return "请至少填写当前专业、目标和当前最主要的问题。";
  }

  if (error === "missing-openai-key") {
    return "AI 生成失败：服务端缺少 OPENAI_API_KEY。";
  }

  if (error === "daily-limit") {
    return "今天的 AI Preview 生成次数已经达到上限，请稍后再试。";
  }

  if (error === "contact-limit") {
    return "这个联系方式今天的生成次数已经达到上限，请稍后再试。";
  }

  if (error === "save-failed") {
    return "AI 已生成但保存失败，请稍后重试。";
  }

  if (error === "generate-failed") {
    return "AI 生成失败，请稍后重试。";
  }

  return "";
}