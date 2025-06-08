import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "./i18n-config";

function getLocale(request: NextRequest): string | undefined {
  // Transform headers for Negotiator
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use Negotiator and intl-localematcher to get the best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip processing if the request is for the `/image` folder or other ignored paths
  if (pathname.startsWith("/image")) {
    return NextResponse.next(); // Allow access without redirecting
  }

  // Check if the requested URL is missing a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Rewrite the URL if no locale is present
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Rewrite the URL to include the locale without redirecting
    return NextResponse.rewrite(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }

  // If the request matches a valid locale, proceed normally
  return NextResponse.next();
}

export const config = {
  // Matcher to exclude specific paths such as `/_next/`, `/api/`, etc.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|image/|robots.txt).*)"],
};
