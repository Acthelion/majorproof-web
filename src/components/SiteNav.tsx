import LanguageSwitcher from "./LanguageSwitcher";

type SiteNavProps = {
  locale: "zh" | "en";
};

export default function SiteNav({ locale }: SiteNavProps) {
  const isZh = locale === "zh";

  const homeHref = isZh ? "/" : "/en";
  const assetsHref = isZh ? "/assets" : "/en/assets";
  const integrityHref = isZh ? "/integrity" : "/en/integrity";
  const requestHref = isZh ? "/request-access" : "/en/request-access";

  return (
    <nav className="border-b border-neutral-800 bg-neutral-950/90 px-6 py-5 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href={homeHref} className="group">
          <div className="text-lg font-semibold tracking-tight text-neutral-100">
            MajorProof
          </div>
          <div className="text-xs text-neutral-500">
            {isZh
              ? "专业能力证据资产系统"
              : "Evidence-based professional assets"}
          </div>
        </a>

        <div className="hidden items-center gap-6 text-sm text-neutral-400 md:flex">
          <a href={`${homeHref}#method`} className="hover:text-neutral-100">
            {isZh ? "资产方法" : "Asset Method"}
          </a>
          <a href={`${homeHref}#categories`} className="hover:text-neutral-100">
            {isZh ? "专业方向" : "Categories"}
          </a>
          <a href={assetsHref} className="hover:text-neutral-100">
            {isZh ? "资产库" : "Assets"}
          </a>
          <a href={integrityHref} className="hover:text-neutral-100">
            {isZh ? "诚信规范" : "Integrity"}
          </a>
          <a href={requestHref} className="hover:text-neutral-100">
            {isZh ? "早期访问" : "Request Access"}
          </a>
        </div>

        <LanguageSwitcher locale={locale} />
      </div>
    </nav>
  );
}