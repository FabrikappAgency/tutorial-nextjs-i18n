Welcome to our new tech post. Today we're ~~delving~~ (naaah, just kidding), we're implementing the most complete and renowned Internationalization library for NextJS 14. This article will be adapted to App Router, but works for Page Router

## Introduction to Internationalization (i18n)

Internationalization (i18n) is a crucial aspect of modern web development that enables websites and applications to cater to a global audience. In today's interconnected world, businesses and organizations need to reach users from various linguistic and cultural backgrounds to maximize their impact and success. By implementing i18n, developers can create inclusive and accessible digital experiences that adapt to the user's preferred language and region.

The importance of i18n in web development cannot be overstated. It allows for:

1. **Global Reach**: With i18n, websites can expand their reach to users worldwide, regardless of their native language or location. This opens up new market opportunities and fosters a diverse user base.

2. **Enhanced User Experience**: Users feel more comfortable and engaged when they can access content in their preferred language. i18n ensures that the user interface, navigation, and content are presented in a language that the user understands, leading to a more satisfying and personalized experience.

3. **Cultural Sensitivity**: i18n goes beyond mere translation; it also considers cultural nuances, local conventions, and regional preferences. By adapting content to specific locales, websites can demonstrate cultural sensitivity and build trust with their target audience.

4. **Competitive Advantage**: In a globalized market, websites that offer multilingual support gain a competitive edge. Users are more likely to engage with and recommend websites that cater to their language preferences, leading to increased traffic, conversions, and customer loyalty.

As web technologies evolve, it is essential for developers to stay up-to-date with the latest tools and best practices for implementing i18n. Next.js, a popular React framework for building server-rendered and statically generated applications, has introduced significant improvements in its version 14 release, particularly with the new App Router stack. This tutorial will guide you through the process of setting up and implementing i18n in a Next.js 14 project using the App Router, enabling you to create scalable and efficient multilingual applications.

## Setting up Internationalization in Next.js 14 with App Router

### Step 1: Create a Next.js Project

To get started, create a new Next.js project using the following command:

```bash
npx create-next-app@latest my-i18n-app
```

When prompted, select the following options:

- Choose a template: Default starter app
- Use TypeScript: Yes
- Use ESLint: Yes
- Use Tailwind CSS: No
- Use `src/` directory: No
- Use App Router: Yes
- Use default import alias: Yes

This will create a new Next.js project with the App Router enabled and TypeScript support.

### Step 2: Install Required Dependencies

Navigate to the project directory and install the necessary dependencies for i18n:

```bash
cd my-i18n-app
npm install next-intl
```

`next-intl` is a powerful library that simplifies the process of internationalizing Next.js applications.

### Step 3.1: Configure i18n in `i18n.ts`

With that setup, you won't edit the `next.config.js` as you're probably used to.

Open the `src/i18n.ts` file in the project root and add the following configuration:

```javascript
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["en", "fr", "es", "de"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../public/locales/${locale}.json`)).default,
  };
});

```
### Step 3.2: Create a middleware to manage localized routing `src/middleware.ts`

```javascript
import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: "en",
  // Used to make the default lang as root
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en)/:path*"],
};


```

In this example, we specify the supported locales (`en`, `fr`, and `es`) and set the default locale to `en`. Adjust these values according to your project's requirements.

### Step 4: Create Translation Files

Create a new directory called `locales` in the project root and add translation files for each supported locale. For example:

- `locales/en.json`:

  ```json
  {
    "hello": "Hello",
    "welcome": "Welcome to my website"
  }
  ```

- `locales/fr.json`:

  ```json
  {
    "hello": "Bonjour",
    "welcome": "Bienvenue sur mon site web"
  }
  ```

- `locales/es.json`:
  ```json
  {
    "hello": "Hola",
    "welcome": "Bienvenido a mi sitio web"
  }
  ```

These JSON files contain key-value pairs representing the translations for each locale.

### Step 5: Implement Internationalization in Pages

Create a new page called `index.tsx` in the `app` directory and add the following code:

```typescript
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div>
      <h1>{t("hello")}</h1>
      <p>{t("welcome")}</p>
    </div>
  );
}
```

In this example, we import the `useTranslations` hook from `next-intl` and use it to access the translations for the current locale. The `t` function is used to retrieve the translated values based on the provided keys.

### Step 6: Run the Development Server

Start the development server by running the following command:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`. You should see the translated content based on the default locale (English).

To test the internationalization, append the locale to the URL. For example:

- `http://localhost:3000/fr`: French version
- `http://localhost:3000/es`: Spanish version

The page content will update accordingly based on the selected locale.

## Real-World Use Cases and Examples

Let's explore some practical examples and real-world use cases to demonstrate how internationalization functions within a full-stack application.

### Example 1: E-commerce Website

Consider an e-commerce website that sells products globally. Implementing i18n allows the website to:

- Display product descriptions, prices, and shipping information in the user's preferred language.
- Adapt the checkout process to include locale-specific payment methods and currency formats.
- Provide localized customer support and FAQs based on the user's language.
- Send order confirmation emails and notifications in the user's language.

By offering a localized experience, the e-commerce website can attract and retain customers from different regions, increasing sales and customer satisfaction.

### Example 2: Travel Booking Platform

A travel booking platform that serves users from various countries can benefit greatly from i18n:

- Present destination descriptions, hotel reviews, and travel guides in multiple languages.
- Allow users to search for and book accommodations, flights, and activities in their preferred language.
- Display prices and booking details in the user's local currency and date format.
- Provide customer support and resolve inquiries in the user's language.

Implementing i18n in a travel booking platform enhances the user experience, builds trust, and encourages bookings from a global customer base.

### Example 3: Educational Website

An educational website that offers online courses and learning resources can leverage i18n to:

- Deliver course content, video subtitles, and quizzes in multiple languages.
- Adapt the user interface and navigation to support right-to-left languages for a seamless learning experience.
- Provide localized study materials, such as pdfs and presentations, in the user's language.
- Enable multilingual discussion forums and peer-to-peer interactions.

By offering educational content in various languages, the website can reach learners from different backgrounds, promote inclusivity, and expand its user base.

## Code Snippets and Implementation Details

Here are some code snippets and implementation details to help TypeScript developers understand how to implement i18n in Next.js 14 using the App Router.

### Defining Translation Keys

Create a `types/i18n.ts` file to define the translation keys as TypeScript types:

```typescript
export type TranslationKeys = {
  hello: string;
  welcome: string;
  // Add more translation keys as needed
};
```

This ensures type safety and provides autocompletion when accessing translations in your code.

### Using Translations in Components

To use translations in your components, follow these steps:

1. Import the `useTranslations` hook and the `TranslationKeys` type:

```typescript
import { useTranslations } from "next-intl";
import { TranslationKeys } from "@/types/i18n";
```

2. Use the `useTranslations` hook to access the translations:

```typescript
export default function MyComponent() {
  const t = useTranslations<TranslationKeys>("MyComponent");

  return (
    <div>
      <h1>{t("hello")}</h1>
      <p>{t("welcome")}</p>
    </div>
  );
}
```

The `useTranslations` hook takes a namespace parameter to scope the translations to a specific component or page.

### Handling Dynamic Translations

To handle dynamic translations with interpolation, you can use the `t` function with placeholders:

```typescript
const name = "John";
const translatedMessage = t("greeting", { name });
```

In the corresponding translation file:

```json
{
  "greeting": "Hello, {name}!"
}
```

The placeholders in the translation key will be replaced with the provided values.

### Formatting Dates and Numbers

To format dates and numbers according to the user's locale, you can use the `useFormatter` hook from `next-intl`:

```typescript
import { useTranslations, useFormatter } from "next-intl";

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
```

The `useFormatter` hook provides various formatting methods that automatically adapt to the user's locale.

## Best Practices for Scalable and Efficient i18n

To maintain scalable and efficient internationalization in Next.js projects, consider the following best practices:

1. **Use a Translation Management System (TMS)**: As your application grows, managing translations across multiple files and locales can become challenging. Consider using a TMS like Crowdin, Transifex, or Phrase to streamline the translation process, collaborate with translators, and ensure consistency.

2. **Separate Translations from Code**: Keep your translation files separate from your codebase. This allows for easier maintenance, updates, and collaboration with translators who may not be familiar with the codebase.

3. **Utilize Automatic Language Detection**: Implement automatic language detection based on the user's browser settings or geolocation. This provides a seamless experience for users by displaying content in their preferred language without explicit selection.

4. **Optimize Translation Loading**: Load translations efficiently by splitting them into smaller chunks and loading only the necessary translations for each page or component. This improves performance and reduces the initial bundle size.

5. **Handle Missing Translations**: Implement fallback mechanisms to handle missing translations gracefully. Provide default or fallback values to ensure a consistent user experience even if translations are incomplete or unavailable.

6. **Test Internationalization**: Thoroughly test your application with different locales and languages to ensure proper rendering, formatting, and functionality. Use automated testing tools and engage with native speakers to identify any localization issues.

7. **Consider RTL Support**: If your application supports languages with right-to-left (RTL) scripts, ensure that your UI components and layouts adapt accordingly. Use CSS flexbox or grid to handle RTL layouts and test your application with RTL locales.

8. **Continuously Update Translations**: Keep your translations up to date as your application evolves. Establish a process for updating translations whenever new features or content are added, and regularly review and refine existing translations based on user feedback and analytics.

By following these best practices, you can create a scalable and efficient internationalization setup that accommodates future growth and ensures a positive user experience across different locales.

## Conclusion

Implementing internationalization (i18n) in Next.js 14 using the App Router stack is a powerful way to create multilingual applications that cater to a global audience. By following the step-by-step guide and best practices outlined in this tutorial, developers can set up i18n in their Next.js projects efficiently.

Remember to consider the practical examples and real-world use cases discussed to understand how i18n functions within a full-stack application. The code snippets and implementation details provided will help TypeScript developers implement i18n effectively in their Next.js projects.

As you embark on your internationalization journey, keep in mind the importance of scalability, performance, and user experience. Continuously iterate and improve your i18n setup based on user feedback and evolving requirements.

By embracing internationalization, you open up your application to a wider audience, foster inclusivity, and unlock new opportunities for growth and success in the global market.

**Checkout the repository with example :
[https://github.com/FabrikappAgency/tutorial-nextjs-i18n](https://github.com/FabrikappAgency/tutorial-nextjs-i18n)**

**[Run on Gitpod](https://gitpod.io/start/#fabrikappag-tutorialnex-qr5pdk7iplk)**

## External Sources

1. Next.js Internationalization Documentation: [https://nextjs.org/docs/advanced-features/i18n-routing](https://nextjs.org/docs/advanced-features/i18n-routing)
2. next-intl Library: [https://github.com/amannn/next-intl](https://github.com/amannn/next-intl)
3. React Intl Documentation: [https://formatjs.io/docs/react-intl/](https://formatjs.io/docs/react-intl/)
4. Crowdin: [https://crowdin.com/](https://crowdin.com/)
5. Transifex: [https://www.transifex.com/](https://www.transifex.com/)
6. Phrase: [https://phrase.com/](https://phrase.com/)
