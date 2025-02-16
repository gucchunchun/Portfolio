import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderSlot, b as renderComponent, g as Fragment, u as unescapeHTML, s as spreadAttributes } from './astro/server_CVunz-pw.mjs';
import 'kleur/colors';
import { twMerge } from 'tailwind-merge';
import 'clsx';
import { a as $$Icon, u as ui, d as defaultLang } from './PageLayout_Oc52fRcJ.mjs';

const $$Astro$2 = createAstro("https://astrowind.vercel.app");
const $$Background = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/yuna/Documents/GitHub/Portfolio/src/components/ui/Background.astro", undefined);

const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$WidgetWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div${addAttribute([
    twMerge(
      "relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default intersect-once intersect-quarter intercept-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade",
      containerClass
    ),
    { dark: isDark }
  ], "class:list")}> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/Users/yuna/Documents/GitHub/Portfolio/src/components/ui/WidgetWrapper.astro", undefined);

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    type,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn btn-tertiary",
    link: "cursor-pointer hover:text-primary"
  };
  return renderTemplate`${type === "button" || type === "submit" || type === "reset" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</button>` : renderTemplate`<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</a>`}`;
}, "/Users/yuna/Documents/GitHub/Portfolio/src/components/ui/Button.astro", undefined);

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function translate(key, lang = defaultLang) {
  const keys = key.split(".");
  let value = ui[lang];
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      console.warn(`⚠️ Translation key '${key}' not found in '${lang}', using '${defaultLang}'`);
      return translate(key, defaultLang);
    }
  }
  return value;
}
function useTranslations(lang) {
  return function(key) {
    return translate(key, lang);
  };
}

export { $$Button as $, $$WidgetWrapper as a, getLangFromUrl as g, useTranslations as u };
