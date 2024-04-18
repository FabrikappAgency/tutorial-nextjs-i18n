import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

// Components that use next-intl would use dynamic rendering
// export const dynamic = 'force-dynamic'

interface RootLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function RootLocaleLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = require("../../../public/locales/" + locale + ".json");
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
