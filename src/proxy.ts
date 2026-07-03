import { NextRequest, NextResponse } from "next/server";

const localeCookieName = "majorproof_locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldSkipProxy(request)) {
    return NextResponse.next();
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  const localePreference = request.cookies.get(localeCookieName)?.value;

  if (localePreference === "zh") {
    return NextResponse.next();
  }

  const englishPath = getEnglishPath(pathname);

  if (!englishPath) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = englishPath;

  return NextResponse.redirect(url);
}

function shouldSkipProxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (request.method !== "GET" && request.method !== "HEAD") {
    return true;
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.includes(".")
  ) {
    return true;
  }

  return false;
}

function getEnglishPath(pathname: string) {
  const path = normalizePath(pathname);

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

  if (path === "/assets") {
    return "/en/assets";
  }

  if (path.startsWith("/assets/")) {
    return `/en${path}`;
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

  if (path.startsWith("/product/")) {
    return `/en${path}`;
  }

  return null;
}

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const normalized = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  return normalized || "/";
}

export const config = {
  matcher: ["/:path*"],
};