import PublicFooter from "@/components/PublicFooter";
import SiteNav from "@/components/SiteNav";

export default function RequestAccessThanksPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <SiteNav locale="zh" />

      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Submitted
        </p>

        <h1 className="text-5xl font-semibold tracking-tight">
          已收到你的申请
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-300">
          感谢你提交 MajorProof 早期访问申请。我们会根据不同专业方向的真实需求，
          决定首批资产包的优先级和交付形式。
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/assets"
            className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
          >
            查看资产库
          </a>

          <a
            href="/"
            className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
          >
            返回首页
          </a>
        </div>
      </section>

      <PublicFooter locale="zh" />
    </main>
  );
}