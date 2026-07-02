type LanguageSwitcherProps = {
  locale: "zh" | "en";
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 p-1 text-sm">
      <a
        href="/"
        className={`rounded-full px-3 py-1 transition ${
          locale === "zh"
            ? "bg-neutral-100 text-neutral-950"
            : "text-neutral-500 hover:text-neutral-100"
        }`}
      >
        CN
      </a>

      <a
        href="/en"
        className={`rounded-full px-3 py-1 transition ${
          locale === "en"
            ? "bg-neutral-100 text-neutral-950"
            : "text-neutral-500 hover:text-neutral-100"
        }`}
      >
        EN
      </a>
    </div>
  );
}