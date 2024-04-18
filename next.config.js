const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
const nextConfig = {
  reactStrictMode: true,
  
  // i18n: {
  //   locales: ["en-US", "es-ES", "fr-FR"],
  //   defaultLocale: "en-US",
  //   domains: [
  //     { domain: "example.com", defaultLocale: "en-US" },
  //     { domain: "example.es", defaultLocale: "es-ES" },
  //     { domain: "example.fr", defaultLocale: "fr-FR" },
  //   ],
  // },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
};

module.exports = withNextIntl(nextConfig);