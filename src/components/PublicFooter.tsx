type PublicFooterProps = {
  locale: "zh" | "en";
};

export default function PublicFooter({ locale }: PublicFooterProps) {
  const isZh = locale === "zh";

  const homeHref = isZh ? "/" : "/en";
  const assetsHref = isZh ? "/assets" : "/en/assets";
  const integrityHref = isZh ? "/integrity" : "/en/integrity";
  const privacyHref = isZh ? "/privacy" : "/en/privacy";
  const termsHref = isZh ? "/terms" : "/en/terms";

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 px-6 py-12 text-neutral-400">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-neutral-100">
            MajorProof
          </h2>
          <p className="max-w-md text-sm leading-7">
            {isZh
              ? "MajorProof 面向大学生提供专业能力证据资产，帮助学生将课程学习、项目训练和分析能力整理为可展示、可解释、可用于简历和面试的成果。"
              : "MajorProof develops evidence-based professional assets for students, helping them convert coursework, project practice, and analytical skills into work samples that can be presented, explained, and used in resumes or interviews."}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            {isZh ? "产品" : "Product"}
          </h3>
          <div className="space-y-2 text-sm">
            <a
              href={`${homeHref}#categories`}
              className="block hover:text-neutral-100"
            >
              {isZh ? "专业方向" : "Categories"}
            </a>
            <a
              href={`${homeHref}#method`}
              className="block hover:text-neutral-100"
            >
              {isZh ? "资产方法" : "Asset Method"}
            </a>
            <a href={assetsHref} className="block hover:text-neutral-100">
              {isZh ? "资产库" : "Assets"}
            </a>
            <a
              href={`${homeHref}#pricing`}
              className="block hover:text-neutral-100"
            >
              {isZh ? "价格结构" : "Pricing"}
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            {isZh ? "政策" : "Policy"}
          </h3>
          <div className="space-y-2 text-sm">
            <a href={integrityHref} className="block hover:text-neutral-100">
              {isZh ? "诚信规范" : "Academic Integrity"}
            </a>
            <a href={privacyHref} className="block hover:text-neutral-100">
              {isZh ? "隐私说明" : "Privacy"}
            </a>
            <a href={termsHref} className="block hover:text-neutral-100">
              {isZh ? "服务条款" : "Terms"}
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Contact
          </h3>
          <p className="break-all text-sm leading-7">majorproof@example.com</p>
          <p className="mt-3 text-xs leading-6 text-neutral-500">
            {isZh
              ? "当前版本用于产品验证和样例展示，后续将根据真实需求开放首批资产包。"
              : "The current version is for product validation and sample presentation. Initial asset packs will be released after demand validation."}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-neutral-800 pt-6 text-xs leading-6 text-neutral-500">
        © {new Date().getFullYear()} MajorProof.{" "}
        {isZh
          ? "本服务不提供作业代写、论文代写、考试辅助作弊、经历伪造或录用结果保证。"
          : "This service does not provide assignment completion, essay ghostwriting, exam misconduct assistance, fake experience fabrication, or guaranteed employment outcomes."}
      </div>
    </footer>
  );
}