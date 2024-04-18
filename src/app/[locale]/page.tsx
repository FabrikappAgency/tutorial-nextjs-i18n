import InternationalShowcase from "@/components/InternationalShowcase";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

function RootLocalePage({ params: { locale } }: any) {
    // This method is suggested by the next intl docs
  unstable_setRequestLocale(locale);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/fr">
              <span>FR</span>
            </Link>
          </li>
          <li>
            <Link href="/es">
              <span>ES</span>
            </Link>
          </li>
          <li>
            <Link href="/de">
              <span>DE</span>
            </Link>
          </li>
          <li>
            <Link href="/en">
              <span>EN (will redirect to root)</span>
            </Link>
          </li>
        </ul>
      </nav>

      <InternationalShowcase />
    </div>
  );
}

export default RootLocalePage;
