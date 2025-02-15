/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "ja"], // ✅ Ensure all supported languages are listed
  namespaces: ["index"], // ✅ Ensure "index" is included
  defaultNamespace: "index",
  loadPath: "./src/locales/{{lng}}/{{ns}}.json", // ✅ Ensure the path is correct
  debug: true // ✅ Enable debugging to see loading issues in the console
};
