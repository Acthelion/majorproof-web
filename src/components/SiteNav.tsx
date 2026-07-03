import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

type SiteNavProps = {
  locale: "zh" | "en";
};

export default function SiteNav({ locale }: SiteNavProps) {
  const isEnglish = locale === "en";

  const homeHref = isEnglish ? "/en" : "/";
  const methodHref = isEnglish ? "/en#method" : "/#method";
  const categoriesHref = isEnglish ? "/en#categories" : "/#categories";
  const previewHref = isEnglish
    ? "/en/ai-roadmap-preview"
    : "/ai-roadmap-preview";
  const requestHref = isEnglish ? "/en/request-access" : "/request-access";

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={homeHref}
          className="text-sm font-semibold tracking-[0.25em] text-neutral-100"
        >
          MAJORPROOF
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-neutral-400 md:flex">
          <a
            href={methodHref}
            className="transition hover:text-neutral-100"
          >
            {isEnglish ? "Method" : "方法"}
          </a>

          <a
            href={categoriesHref}
            className="transition hover:text-neutral-100"
          >
            {isEnglish ? "Assets" : "资产方向"}
          </a>

          <Link
            href={previewHref}
            className="transition hover:text-neutral-100"
          >
            {isEnglish ? "AI Preview" : "AI 路线预览"}
          </Link>

          <Link
            href={requestHref}
            className="transition hover:text-neutral-100"
          >
            {isEnglish ? "Request Access" : "申请访问"}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />

          <Link
            href={requestHref}
            className="hidden rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-white sm:inline-flex"
          >
            {isEnglish ? "Start" : "开始"}
          </Link>
        </div>
      </div>
    </header>
  );
}