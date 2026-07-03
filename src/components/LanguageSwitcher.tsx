"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageSwitcherProps = {
  locale: "zh" | "en";
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";

  const zhHref = getChineseHref(pathname);
  const enHref = getEnglishHref(pathname);

  return (
    <div className="flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-950 p-1 text-sm">
      <Link
        href={zhHref}
        className={[
          "rounded-full px-3 py-1.5 transition",
          locale === "zh"
            ? "bg-neutral-100 text-neutral-950"
            : "text-neutral-400 hover:text-neutral-100",
        ].join(" ")}
      >
        中文
      </Link>

      <Link
        href={enHref}
        className={[
          "rounded-full px-3 py-1.5 transition",
          locale === "en"
            ? "bg-neutral-100 text-neutral-950"
            : "text-neutral-400 hover:text-neutral-100",
        ].join(" ")}
      >
        EN
      </Link>
    </div>
  );
}

function getEnglishHref(pathname: string) {
  const path = normalizePath(pathname);

  if (path === "/en" || path.startsWith("/en/")) {
    return path;
  }

  if (path === "/") {
    return "/en";
  }

  if (path === "/ai-roadmap-preview") {
    return "/en/ai-roadmap-preview";
  }

  if (path.startsWith("/ai-roadmap-preview/result/")) {
    return path.replace(
      "/ai-roadmap-preview/result/",
      "/en/ai-roadmap-preview/result/"
    );
  }

  if (path === "/request-access") {
    return "/en/request-access";
  }

  if (path === "/request-access/thanks") {
    return "/en/request-access/thanks";
  }

  if (path === "/integrity") {
    return "/en/integrity";
  }

  if (path === "/privacy") {
    return "/en/privacy";
  }

  if (path === "/terms") {
    return "/en/terms";
  }

  if (path === "/assets") {
    return "/en/assets";
  }

  if (path.startsWith("/assets/")) {
    return `/en${path}`;
  }

  if (path === "/product/techproof-ai-document-review") {
    return "/en/product/techproof-ai-document-review";
  }

  if (path === "/product/techproof-ai-document-review/starter-pack") {
    return "/en/product/techproof-ai-document-review/starter-pack";
  }

  if (path.startsWith("/product/")) {
    return "/en#categories";
  }

  return "/en";
}

function getChineseHref(pathname: string) {
  const path = normalizePath(pathname);

  if (path === "/en") {
    return "/";
  }

  if (path === "/en/ai-roadmap-preview") {
    return "/ai-roadmap-preview";
  }

  if (path.startsWith("/en/ai-roadmap-preview/result/")) {
    return path.replace(
      "/en/ai-roadmap-preview/result/",
      "/ai-roadmap-preview/result/"
    );
  }

  if (path === "/en/request-access") {
    return "/request-access";
  }

  if (path === "/en/request-access/thanks") {
    return "/request-access/thanks";
  }

  if (path === "/en/integrity") {
    return "/integrity";
  }

  if (path === "/en/privacy") {
    return "/privacy";
  }

  if (path === "/en/terms") {
    return "/terms";
  }

  if (path === "/en/assets") {
    return "/assets";
  }

  if (path.startsWith("/en/assets/")) {
    return path.replace(/^\/en/, "");
  }

  if (path === "/en/product/techproof-ai-document-review") {
    return "/product/techproof-ai-document-review";
  }

  if (path === "/en/product/techproof-ai-document-review/starter-pack") {
    return "/product/techproof-ai-document-review/starter-pack";
  }

  if (path.startsWith("/en/")) {
    return path.replace(/^\/en/, "") || "/";
  }

  return path;
}

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const normalized = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  return normalized || "/";
}