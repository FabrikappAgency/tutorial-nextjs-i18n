import { unstable_setRequestLocale } from "next-intl/server";

function RootPage({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  // const t = useTranslations();
  return (
    <div>
      Hello
      {/* <h1>{t("welcome")}</h1>
      <p>{t("description")}</p> */}
    </div>
  );
}

export default RootPage;
