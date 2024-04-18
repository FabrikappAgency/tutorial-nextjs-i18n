import { unstable_setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
// export const dynamic = 'force-dynamic'

interface RootLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale } = { locale: "" },
}: RootLayoutProps) {
  // const messages = require("../../public/locales/" + "en-US/common"  + ".json");
  // unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
