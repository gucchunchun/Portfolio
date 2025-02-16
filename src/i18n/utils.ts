import { ui, defaultLang } from '~/i18n/ui';
import type { TranslationKeys } from "~/i18n/types";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/'); // Extract the first path segment
  if (lang in ui) return lang as keyof typeof ui; // Return only '/en' or similar
  return defaultLang; // Ensure the default language follows the same format
}

type DeepValue<T, K extends string> = 
  K extends keyof T 
    ? T[K] 
    : K extends `${infer A}.${infer B}` 
      ? A extends keyof T 
        ? DeepValue<T[A], B> 
        : never 
      : never;


/**
 * Type-safe translation function with fallback
 */
export function translate<K extends TranslationKeys>(
  key: K,
  lang: keyof typeof ui = defaultLang
): DeepValue<typeof ui["en"], K> {
  const keys = key.split(".");
  let value: any = ui[lang];

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      // ✅ Fallback to default language if key is missing
      console.warn(`⚠️ Translation key '${key}' not found in '${lang}', using '${defaultLang}'`);
      return translate(key, defaultLang);
    }
  }

  return value;
}

/**
 * Hook-like function to get a `translate` function for a specific language.
 * 
 * @param lang - The selected language (e.g., "en", "ja").
 * @returns A translation function scoped to the given language.
 */
export function useTranslations(lang: keyof typeof ui) {
  return function <K extends TranslationKeys>(key: K): DeepValue<typeof ui["en"], K> {
    return translate(key, lang);
  };
}
