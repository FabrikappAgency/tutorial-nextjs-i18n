# Internationalization in Next.js Application

## Overview
This application supports multiple languages using the next-intl library.

## Adding New Locales
1. Add the new locale in `next.config.js` under the `i18n.locales` array.
2. Create corresponding translation JSON files in `/public/locales/{new-locale}/`.

## Switching Locales
Users can switch locales by visiting the appropriate domain associated with each locale as configured in `next.config.js`.