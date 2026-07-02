type PublicFooterProps = {
  locale: "zh" | "en";
};

const contactEmail = "obbo199924@gmail.com";

export default function PublicFooter({ locale }: PublicFooterProps) {
  const isZh = locale === "zh";

  const footerCopy = isZh
    ? {
        brandLine: "MajorProof · 专业能力证据资产系统",
        description:
          "帮助大学生将课程学习、项目训练、分析能力和表达材料整理为可展示、可解释、可用于简历和面试的专业能力证据。",
        productTitle: "产品",
        legalTitle: "规则",
        contactTitle: "联系",
        home: "首页",
        assets: "资产库",
        requestAccess: "申请早期访问",
        integrity: "诚信边界",
        privacy: "隐私政策",
        terms: "服务条款",
        contactText: "如需测试、合作或反馈，可以通过邮箱联系。",
        copyright: "保留所有权利",
      }
    : {
        brandLine: "MajorProof · Evidence-based professional assets",
        description:
          "MajorProof helps students turn coursework, projects, analytical work, and professional preparation into evidence-based assets for resumes, interviews, applications, and portfolios.",
        productTitle: "Product",
        legalTitle: "Rules",
        contactTitle: "Contact",
        home: "Home",
        assets: "Assets",
        requestAccess: "Request access",
        integrity: "Integrity",
        privacy: "Privacy",
        terms: "Terms",
        contactText:
          "For testing, collaboration, or feedback, contact MajorProof by email.",
        copyright: "All rights reserved",
      };

  const homeHref = isZh ? "/" : "/en";
  const assetsHref = isZh ? "/assets" : "/en/assets";
  const requestHref = isZh ? "/request-access" : "/en/request-access";
  const integrityHref = isZh ? "/integrity" : "/en/integrity";
  const privacyHref = isZh ? "/privacy" : "/en/privacy";
  const termsHref = isZh ? "/terms" : "/en/terms";

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 px-6 py-12 text-neutral-400">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            MajorProof
          </p>

          <h2 className="mt-4 text-xl font-semibold text-neutral-100">
            {footerCopy.brandLine}
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7">
            {footerCopy.description}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {footerCopy.productTitle}
          </h2>

          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a
              href={homeHref}
              className="transition hover:text-neutral-100"
            >
              {footerCopy.home}
            </a>

            <a
              href={assetsHref}
              className="transition hover:text-neutral-100"
            >
              {footerCopy.assets}
            </a>

            <a
              href={requestHref}
              className="transition hover:text-neutral-100"
            >
              {footerCopy.requestAccess}
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {footerCopy.legalTitle}
          </h2>

          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a
              href={integrityHref}
              className="transition hover:text-neutral-100"
            >
              {footerCopy.integrity}
            </a>

            <a
              href={privacyHref}
              className="transition hover:text-neutral-100"
            >
              {footerCopy.privacy}
            </a>

            <a
              href={termsHref}
              className="transition hover:text-neutral-100"
            >
              {footerCopy.terms}
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {footerCopy.contactTitle}
          </h2>

          <p className="mt-4 text-sm leading-7">
            {footerCopy.contactText}
          </p>

          <a
            href={`mailto:${contactEmail}`}
            className="mt-3 block break-all text-sm leading-7 text-neutral-200 transition hover:text-white"
          >
            {contactEmail}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-neutral-800 pt-6 text-xs text-neutral-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MajorProof</p>
        <p>{footerCopy.copyright}</p>
      </div>
    </footer>
  );
}