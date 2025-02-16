import '../../chunks/Layout_CHzoCu-P.mjs';
import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, u as unescapeHTML, g as Fragment } from '../../chunks/astro/server_CVunz-pw.mjs';
import 'kleur/colors';
import { a as actions } from '../../chunks/_astro_actions_DHUXuPxj.mjs';
import { $ as $$Button, g as getLangFromUrl, a as $$WidgetWrapper, u as useTranslations } from '../../chunks/utils_BKDvWs5m.mjs';
import 'clsx';
import { $ as $$PageLayout } from '../../chunks/PageLayout_Oc52fRcJ.mjs';
import { i as isInputError } from '../../chunks/shared_DHpMvM64.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$5 = createAstro("https://astrowind.vercel.app");
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    type = "text",
    name,
    label,
    required = false,
    errors,
    autocomplete,
    placeholder
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-6"> ${label && renderTemplate`<label${addAttribute(name, "for")} class="block text-sm font-medium"> ${label} </label>`} <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(required, "required")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> ${errors && renderTemplate`<div${addAttribute(`${name}-error`, "id")}> ${errors.map((error) => renderTemplate`<p>${error}</p>`)} </div>`} </div>`;
}, "/Users/yuna/Documents/GitHub/Portfolio/src/components/ui/form/Input.astro", undefined);

const $$Astro$4 = createAstro("https://astrowind.vercel.app");
const $$Textarea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Textarea;
  const {
    name = "message",
    label,
    required = false,
    errors,
    placeholder,
    rows = 4
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(name, "for")} class="block text-sm font-medium"> ${label} </label> <textarea${addAttribute(name, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")}${addAttribute(rows, "rows")}${addAttribute(placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"></textarea> ${errors && renderTemplate`<div${addAttribute(`${name}-error`, "id")}> ${errors.map((error) => renderTemplate`<p>${error}</p>`)} </div>`} </div>`;
}, "/Users/yuna/Documents/GitHub/Portfolio/src/components/ui/form/Textarea.astro", undefined);

const $$Astro$3 = createAstro("https://astrowind.vercel.app");
const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Disclaimer;
  const {
    label,
    name = "disclaimer",
    required = false,
    errors
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-3 flex items-start"> <div class="flex mt-0.5"> <input${addAttribute(name, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")} type="checkbox" class="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div> <div class="ml-3"> <label${addAttribute(name, "for")} class="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400"> ${label} </label> </div> ${errors && renderTemplate`<div${addAttribute(`${name}-error`, "id")}> ${errors.map((error) => renderTemplate`<p>${error}</p>`)} </div>`} </div>`;
}, "/Users/yuna/Documents/GitHub/Portfolio/src/components/ui/form/Disclaimer.astro", undefined);

const $$Astro$2 = createAstro("https://astrowind.vercel.app");
const $$SubmitButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SubmitButton;
  const {
    label = "Submit"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-10 grid"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "type": "submit" }, { "default": ($$result2) => renderTemplate`${label}` })} </div>`;
}, "/Users/yuna/Documents/GitHub/Portfolio/src/components/ui/form/SubmitButton.astro", undefined);

const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$HeroText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroText;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction = await Astro2.slots.render("callToAction"),
    callToAction2 = await Astro2.slots.render("callToAction2")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-12 md:py-20 pb-8 md:pb-8"> <div class="text-center max-w-5xl mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto"> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${unescapeHTML(subtitle)}</p>`} <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"> ${callToAction && renderTemplate`<div class="flex w-full sm:w-auto"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(callToAction)}` })}` : renderTemplate`${renderComponent($$result, "Button", $$Button, { "variant": "primary", ...callToAction })}`} </div>`} ${callToAction2 && renderTemplate`<div class="flex w-full sm:w-auto"> ${typeof callToAction2 === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(callToAction2)}` })}` : renderTemplate`${renderComponent($$result, "Button", $$Button, { ...callToAction2 })}`} </div>`} </div> </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> </div> </div> </section>`;
}, "/Users/yuna/Documents/GitHub/Portfolio/src/components/widgets/HeroText.astro", undefined);

const $$Astro = createAstro("https://astrowind.vercel.app");
const prerender = false;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const lang = getLangFromUrl(Astro2.url);
  const translate = useTranslations(lang);
  const metadata = {
    title: "Contact"
  };
  const result = Astro2.getActionResult(actions.sendEmail);
  const inputErrors = isInputError(result?.error) ? result.error.fields : {};
  console.log("lang", lang);
  if (result && !result?.error) {
    return Astro2.redirect(`/${lang}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata, "lang": lang }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "HeroText", $$HeroText, { "title": translate("contact.title") })} ${renderComponent($$result2, "WidgetWrapper", $$WidgetWrapper, { "containerClass": "max-w-7xl mx-auto" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center"> <form${addAttribute(actions.sendEmail, "action")} method="post" class="w-full max-w-3xl"> ${renderComponent($$result3, "Input", $$Input, { "type": "text", "name": "name", "label": translate("contact.form.label.name"), "required": true, "errors": inputErrors.name })} ${renderComponent($$result3, "Input", $$Input, { "type": "email", "name": "email", "label": translate("contact.form.label.email"), "required": true, "errors": inputErrors.email })} ${renderComponent($$result3, "Textarea", $$Textarea, { "name": "message", "label": translate("contact.form.label.message"), "errors": inputErrors.message })} ${renderComponent($$result3, "Disclaimer", $$Disclaimer, { "name": "disclaimer", "required": true, "errors": inputErrors.disclaimer, "label": translate("contact.form.label.disclaimer") })} ${renderComponent($$result3, "SubmitButton", $$SubmitButton, { "label": "Send" })} </form> </div> ` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" })}` })}`;
}, "/Users/yuna/Documents/GitHub/Portfolio/src/pages/[locale]/contact.astro", undefined);

const $$file = "/Users/yuna/Documents/GitHub/Portfolio/src/pages/[locale]/contact.astro";
const $$url = "/[locale]/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
