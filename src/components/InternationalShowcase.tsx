import { useTranslations, useFormatter } from "next-intl";

import { unstable_setRequestLocale } from "next-intl/server";

const InternationalShowcase = () => {

  const t = useTranslations("Common");

  const formattedDate = useFormatter().dateTime(new Date(), {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const formattedNumber = useFormatter().number(123456789, {
    style: "currency",
    currency: "USD",
  });
  
  const name = "John";
  const translatedMessage = t("greeting", { name });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{t("title")}</h1>
      <p>{t("description")}</p>
      <p>{translatedMessage}</p>
      <p>{t("date", { date: formattedDate })}</p>
      <p>{t("number", { number: formattedNumber })}</p>
    </div>
  );
};

export default InternationalShowcase;
