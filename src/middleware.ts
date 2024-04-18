import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr", "es", "de"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix:"as-needed"
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(en|de)/:path*"],
  matcher: ["/", "/(en)/:path*"],
  // matcher: ["/", "/(de|en|fr|es)/:path*"],
};
