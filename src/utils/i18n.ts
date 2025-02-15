import i18next from "i18next";
import Backend from "i18next-fs-backend";
import { t } from "i18next";
import type { Translations, TranslationKeys } from "~/types/i18n";

// ✅ Initialize i18next
i18next.use(Backend).init({
  lng: "en", // Default language
  fallbackLng: "en",
  debug: true,
  backend: {
    loadPath: "./src/locales/{{lng}}/{{ns}}.json",
  },
});

// ✅ **Fix: Correctly infer array types**
type DeepValue<T, K extends string> = K extends keyof T
  ? T[K]
  : K extends `${infer A}.${infer B}`
  ? A extends keyof T
    ? B extends keyof T[A]
      ? T[A][B]
      : B extends `${infer C}.${infer D}`
      ? C extends keyof T[A]
        ? D extends keyof T[A][C]
          ? T[A][C][D]
          : never
        : never
      : never
    : never
  : never;

type TranslationReturnType<K extends TranslationKeys> = DeepValue<Translations, K>;

/**
 * Type-safe translation function that dynamically returns the correct type.
 */
export function translate<K extends TranslationKeys>(
  key: K,
  ns: string = "index"
): TranslationReturnType<K> {
  const result = t(key, { ns, returnObjects: true });

  return result as TranslationReturnType<K>;
}
