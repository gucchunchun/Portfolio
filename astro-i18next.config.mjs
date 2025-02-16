import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",

    routing: {
      prefixDefaultLocale: false,
    },
  },
});