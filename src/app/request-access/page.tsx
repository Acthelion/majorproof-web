import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";
import { submitAccessRequest } from "./actions";

export default function RequestAccessPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Request Access
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight">
          申请早期访问
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          MajorProof 当前处于产品验证阶段。你可以提交专业方向、目标场景和最需要的资产类型。
          我们会根据真实需求决定首批资产包的优先级。
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            action={submitAccessRequest}
            className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6"
          >
            <input type="hidden" name="locale" value="zh" />

            <div className="grid gap-5">
              <Field
                label="称呼 / 昵称"
                name="nameOrAlias"
                placeholder="例如：Kevin"
              />

              <Field
                label="联系方式"
                name="contactMethod"
                placeholder="邮箱、微信或其他可联系渠道"
                required
              />

              <Field
                label="当前专业"
                name="currentMajor"
                placeholder="例如：Finance / EE / Marketing / Economics"
                required
              />

              <Field
                label="当前年级"
                name="currentYear"
                placeholder="例如：大二 / 大三 / Year 3 / Master"
              />

              <SelectField
                label="主要目标"
                name="targetGoal"
                options={[
                  "实习申请",
                  "全职求职",
                  "海外申请",
                  "转专业准备",
                  "作品集建设",
                  "暂不确定",
                ]}
              />

              <AssetCheckboxGroup />

              <TextArea
                label="你目前最需要解决的问题"
                name="primaryNeed"
                placeholder="例如：简历没有项目；不知道金融分析该做什么；想做商科案例但没有结构；面试讲不清楚经历。"
                required
              />

              <SelectField
                label="偏好语言"
                name="languagePreference"
                options={["中文", "英文", "中英双语"]}
              />

              <label className="flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-sm leading-6 text-neutral-300">
                <input
                  type="checkbox"
                  name="willingToTest"
                  className="mt-1 h-4 w-4 accent-neutral-100"
                />
                我愿意参与早期测试，并接受 MajorProof 根据反馈调整产品形式。
              </label>

              <button
                type="submit"
                className="rounded-full bg-neutral-100 px-6 py-3 font-medium text-neutral-950 transition hover:bg-white"
              >
                提交申请
              </button>
            </div>
          </form>

          <aside className="space-y-5">
            <InfoCard
              title="为什么收集这些信息"
              body="MajorProof 需要先判断不同专业方向的真实需求强度，而不是直接建设复杂平台。早期申请信息会帮助确定首批资产包的优先级。"
            />

            <InfoCard
              title="当前不会发生什么"
              body="提交申请不会产生付款义务，也不会自动创建账号。当前阶段主要用于需求验证和早期用户沟通。"
            />

            <InfoCard
              title="我们关注什么"
              body="我们更关注你缺少哪类可展示成果、目标岗位或申请场景是什么、你希望资产包解决哪一类具体问题。"
            />
          </aside>
        </div>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
}

function Field({
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
        {required ? <span className="text-neutral-500"> *</span> : null}
      </span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
      />
    </label>
  );
}

function TextArea({
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
        {required ? <span className="text-neutral-500"> *</span> : null}
      </span>
      <textarea
        name={name}
        required={required}
        rows={6}
        placeholder={placeholder}
        className="w-full resize-none rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-neutral-300">
        {label}
      </span>
      <select
        name={name}
        className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none transition focus:border-neutral-500"
      >
        <option value="">请选择</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function AssetCheckboxGroup() {
  const options = [
    "TechProof",
    "FinanceProof",
    "BusinessProof",
    "ResearchProof",
    "DesignProof",
    "PolicyProof",
    "暂不确定",
  ];

  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium text-neutral-300">
        感兴趣的资产方向
      </legend>

      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-sm text-neutral-300"
          >
            <input
              type="checkbox"
              name="interestedAssets"
              value={option}
              className="mt-0.5 h-4 w-4 accent-neutral-100"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      <p className="leading-7 text-neutral-400">{body}</p>
    </div>
  );
}