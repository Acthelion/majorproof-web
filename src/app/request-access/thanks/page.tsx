import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

export default function RequestAccessThanksPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Request Received
        </p>

        <h1 className="text-5xl font-semibold tracking-tight">
          申请已提交
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          我们已经收到你的 MajorProof 早期访问申请。你的专业方向、目标场景和具体需求会用于判断首批资产包的开发优先级。
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="mb-3 text-2xl font-semibold">接下来会发生什么</h2>
            <p className="leading-7 text-neutral-400">
              我们会根据提交内容判断你更适合 TechProof、FinanceProof、BusinessProof 或 ResearchProof。高匹配需求会优先进入早期沟通和测试名单。
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="mb-3 text-2xl font-semibold">当前不会产生付款</h2>
            <p className="leading-7 text-neutral-400">
              这次提交不会产生付款义务，也不会自动创建账号。当前阶段主要用于产品验证、需求判断和早期用户沟通。
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/assets"
            className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
          >
            查看资产库
          </a>

          <a
            href="/product/techproof-ai-document-review"
            className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
          >
            查看 TechProof 产品页
          </a>

          <a
            href="/"
            className="rounded-full border border-neutral-800 px-6 py-3 text-center font-medium text-neutral-400 transition hover:border-neutral-600 hover:text-neutral-200"
          >
            返回首页
          </a>
        </div>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
}