type RequestAccessCTAProps = {
  locale: "zh" | "en";
  sourcePage?: string;
  assetIntent?: string;
};

export default function RequestAccessCTA({
  locale,
  sourcePage,
  assetIntent,
}: RequestAccessCTAProps) {
  const isZh = locale === "zh";

  const requestHref = buildRequestHref({
    locale,
    sourcePage: sourcePage || (isZh ? "generic-cta-zh" : "generic-cta-en"),
    assetIntent,
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Early Access
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight">
              {isZh
                ? "告诉我们你最需要哪类专业能力资产"
                : "Tell us which professional asset you need most"}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
              {isZh
                ? "MajorProof 当前正在验证首批资产包方向。你的专业、目标场景和具体困难会影响我们优先开发 TechProof、FinanceProof、BusinessProof 或 ResearchProof。"
                : "MajorProof is validating its first asset packs. Your major, target scenario, and specific pain points will help determine whether TechProof, FinanceProof, BusinessProof, or ResearchProof should be prioritized."}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={requestHref}
              className="rounded-full bg-neutral-100 px-6 py-3 text-center font-medium text-neutral-950 transition hover:bg-white"
            >
              {isZh ? "申请早期访问" : "Request Early Access"}
            </a>

            <a
              href={isZh ? "/assets" : "/en/assets"}
              className="rounded-full border border-neutral-700 px-6 py-3 text-center font-medium text-neutral-200 transition hover:border-neutral-500 hover:text-white"
            >
              {isZh ? "查看资产库" : "View Assets"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function buildRequestHref({
  locale,
  sourcePage,
  assetIntent,
}: {
  locale: "zh" | "en";
  sourcePage?: string;
  assetIntent?: string;
}) {
  const baseHref = locale === "zh" ? "/request-access" : "/en/request-access";
  const params = new URLSearchParams();

  if (sourcePage) {
    params.set("source", sourcePage);
  }

  if (assetIntent) {
    params.set("asset", assetIntent);
  }

  const query = params.toString();

  return query ? `${baseHref}?${query}` : baseHref;
}