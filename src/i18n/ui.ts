import indexEn from "./locales/en/index";
import indexJa from "./locales/ja/index";
import contactEn from "./locales/en/contact";
import contactJa from "./locales/ja/contact";

export const languages = {
  en: "English",
  ja: "日本語",
};

export const defaultLang = "en";

export const ui = {
  en: {
    ...indexEn,
    ...contactEn
  },
  ja: {
    ...indexJa,
    ...contactJa
  }
} as const;
