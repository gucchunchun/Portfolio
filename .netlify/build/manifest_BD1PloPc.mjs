import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/shared_DHpMvM64.mjs';
import 'es-module-lexer';
import { v as NOOP_MIDDLEWARE_HEADER, w as decodeKey } from './chunks/astro/server_CVunz-pw.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/yuna/Documents/GitHub/Portfolio/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.md","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"terms/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.md","pathname":"/terms","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/privacy.8rt_1nTU.css"}],"routeData":{"route":"/[locale]/contact","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/contact$","segments":[[{"content":"locale","dynamic":true,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":["locale"],"component":"src/pages/[locale]/contact.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://astrowind.vercel.app","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/yuna/Documents/GitHub/Portfolio/src/utils/blog.ts",{"propagation":"in-tree","containsHead":false}],["/Users/yuna/Documents/GitHub/Portfolio/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/yuna/Documents/GitHub/Portfolio/src/pages/privacy.md",{"propagation":"none","containsHead":true}],["/Users/yuna/Documents/GitHub/Portfolio/src/pages/terms.md",{"propagation":"none","containsHead":true}],["/Users/yuna/Documents/GitHub/Portfolio/src/pages/[locale]/contact.astro",{"propagation":"none","containsHead":true}],["/Users/yuna/Documents/GitHub/Portfolio/src/pages/[locale]/index.astro",{"propagation":"none","containsHead":true}],["/Users/yuna/Documents/GitHub/Portfolio/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/privacy@_@md":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/terms@_@md":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/[locale]/contact@_@astro":"pages/_locale_/contact.astro.mjs","\u0000@astro-page:src/pages/[locale]/index@_@astro":"pages/_locale_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BD1PloPc.mjs","\u0000astro:internal-actions":"chunks/_astro_internal-actions_DQZ7TgdB.mjs","/Users/yuna/Documents/GitHub/Portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DoEJJz9s.mjs","/Users/yuna/Documents/GitHub/Portfolio/src/assets/images/app-store.png":"chunks/app-store_DtwQxYF4.mjs","/Users/yuna/Documents/GitHub/Portfolio/src/assets/images/avatar.jpg":"chunks/avatar_BAThQ4uI.mjs","/Users/yuna/Documents/GitHub/Portfolio/src/assets/images/default.png":"chunks/default_DCWglkQW.mjs","/Users/yuna/Documents/GitHub/Portfolio/src/assets/images/google-play.png":"chunks/google-play_CTHFFbIc.mjs","/Users/yuna/Documents/GitHub/Portfolio/src/assets/images/hero-image.png":"chunks/hero-image_N0BpoBU5.mjs","/Users/yuna/Documents/GitHub/Portfolio/src/assets/images/pc.jpg":"chunks/pc_Ck3iC9Vj.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_C-h20YLa.mjs","/Users/yuna/Documents/GitHub/Portfolio/node_modules/astro/dist/actions/runtime/virtual/get-action.js":"chunks/get-action_DYor9KZl.mjs","@astrojs/react/client.js":"_astro/client.BNC2RHkt.js","/Users/yuna/Documents/GitHub/Portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/Users/yuna/Documents/GitHub/Portfolio/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro?astro&type=script&index=0&lang.ts":"_astro/Vimeo.astro_astro_type_script_index_0_lang.CgRsrQuG.js","/Users/yuna/Documents/GitHub/Portfolio/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts":"_astro/YouTube.astro_astro_type_script_index_0_lang.Dkyb9mLy.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/yuna/Documents/GitHub/Portfolio/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro?astro&type=script&index=0&lang.ts","class t extends HTMLElement{constructor(){super(...arguments),this.videoId=encodeURIComponent(this.dataset.id)}static{this.preconnected=!1}connectedCallback(){this.addEventListener(\"pointerover\",t.warmConnections,{once:!0}),this.addEventListener(\"click\",e=>this.addIframe(e));const c=this.querySelector(\"a\");if(c){const e=document.createElement(\"button\");e.classList.add(...c.classList.values()),e.setAttribute(\"aria-label\",c.getAttribute(\"aria-label\")),c.replaceWith(e)}}static addPrefetch(c,e){const a=document.createElement(\"link\");a.rel=c,a.href=e,document.head.append(a)}static warmConnections(){t.preconnected||(t.addPrefetch(\"preconnect\",\"https://player.vimeo.com\"),t.addPrefetch(\"preconnect\",\"https://i.vimeocdn.com\"),t.addPrefetch(\"preconnect\",\"https://f.vimeocdn.com\"),t.addPrefetch(\"preconnect\",\"https://fresnel.vimeocdn.com\"),t.preconnected=!0)}addIframe(c){if(this.classList.contains(\"ltv-activated\"))return;c.preventDefault(),this.classList.add(\"ltv-activated\");const e=encodeURIComponent(this.dataset.t||\"0m\"),a=new URLSearchParams(this.dataset.params||[]),n=document.createElement(\"iframe\");n.width=\"640\",n.height=\"360\",n.allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\",n.allowFullscreen=!0,n.src=`https://player.vimeo.com/video/${this.videoId}?${a.toString()}#t=${e}`,this.append(n)}}customElements.get(\"lite-vimeo\")||customElements.define(\"lite-vimeo\",t);"],["/Users/yuna/Documents/GitHub/Portfolio/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts","class i extends HTMLElement{connectedCallback(){this.videoId=this.getAttribute(\"videoid\");let e=this.querySelector(\".lty-playbtn\");if(this.playLabel=e&&e.textContent.trim()||this.getAttribute(\"playlabel\")||\"Play\",this.dataset.title=this.getAttribute(\"title\")||\"\",this.style.backgroundImage||(this.style.backgroundImage=`url(\"https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg\")`,this.upgradePosterImage()),e||(e=document.createElement(\"button\"),e.type=\"button\",e.classList.add(\"lty-playbtn\"),this.append(e)),!e.textContent){const t=document.createElement(\"span\");t.className=\"lyt-visually-hidden\",t.textContent=this.playLabel,e.append(t)}this.addNoscriptIframe(),e.nodeName===\"A\"&&(e.removeAttribute(\"href\"),e.setAttribute(\"tabindex\",\"0\"),e.setAttribute(\"role\",\"button\"),e.addEventListener(\"keydown\",t=>{(t.key===\"Enter\"||t.key===\" \")&&(t.preventDefault(),this.activate())})),this.addEventListener(\"pointerover\",i.warmConnections,{once:!0}),this.addEventListener(\"focusin\",i.warmConnections,{once:!0}),this.addEventListener(\"click\",this.activate),this.needsYTApi=this.hasAttribute(\"js-api\")||navigator.vendor.includes(\"Apple\")||navigator.userAgent.includes(\"Mobi\")}static addPrefetch(e,t,a){const r=document.createElement(\"link\");r.rel=e,r.href=t,a&&(r.as=a),document.head.append(r)}static warmConnections(){i.preconnected||(i.addPrefetch(\"preconnect\",\"https://www.youtube-nocookie.com\"),i.addPrefetch(\"preconnect\",\"https://www.google.com\"),i.addPrefetch(\"preconnect\",\"https://googleads.g.doubleclick.net\"),i.addPrefetch(\"preconnect\",\"https://static.doubleclick.net\"),i.preconnected=!0)}fetchYTPlayerApi(){window.YT||window.YT&&window.YT.Player||(this.ytApiPromise=new Promise((e,t)=>{var a=document.createElement(\"script\");a.src=\"https://www.youtube.com/iframe_api\",a.async=!0,a.onload=r=>{YT.ready(e)},a.onerror=t,this.append(a)}))}async getYTPlayer(){return this.playerPromise||await this.activate(),this.playerPromise}async addYTPlayerIframe(){this.fetchYTPlayerApi(),await this.ytApiPromise;const e=document.createElement(\"div\");this.append(e);const t=Object.fromEntries(this.getParams().entries());this.playerPromise=new Promise(a=>{let r=new YT.Player(e,{width:\"100%\",videoId:this.videoId,playerVars:t,events:{onReady:n=>{n.target.playVideo(),a(r)}}})})}addNoscriptIframe(){const e=this.createBasicIframe(),t=document.createElement(\"noscript\");t.innerHTML=e.outerHTML,this.append(t)}getParams(){const e=new URLSearchParams(this.getAttribute(\"params\")||[]);return e.append(\"autoplay\",\"1\"),e.append(\"playsinline\",\"1\"),e}async activate(){if(this.classList.contains(\"lyt-activated\"))return;if(this.classList.add(\"lyt-activated\"),this.needsYTApi)return this.addYTPlayerIframe(this.getParams());const e=this.createBasicIframe();this.append(e),e.focus()}createBasicIframe(){const e=document.createElement(\"iframe\");return e.width=560,e.height=315,e.title=this.playLabel,e.allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\",e.allowFullscreen=!0,e.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${this.getParams().toString()}`,e}upgradePosterImage(){setTimeout(()=>{const e=`https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,t=new Image;t.fetchPriority=\"low\",t.referrerpolicy=\"origin\",t.src=e,t.onload=a=>{a.target.naturalHeight==90&&a.target.naturalWidth==120||(this.style.backgroundImage=`url(\"${e}\")`)}},100)}}customElements.define(\"lite-youtube\",i);"]],"assets":["/_astro/pc.92lhdMUO.jpg","/_astro/avatar.Ubab6vCJ.jpg","/_astro/inter-greek-wght-normal.CaVNZxsx.woff2","/_astro/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2","/_astro/inter-greek-ext-wght-normal.CGAr0uHJ.woff2","/_astro/inter-latin-ext-wght-normal.CFHvXkgd.woff2","/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2","/_astro/inter-cyrillic-wght-normal.CMZtQduZ.woff2","/_astro/inter-latin-wght-normal.C2S99t-D.woff2","/_astro/app-store.t3tG4Jz3.png","/_astro/google-play.ISTMcpLO.png","/_astro/default.CZ816Hke.png","/_astro/hero-image.DwIC_L_T.png","/_astro/chrome.f1eQSm4k.svg","/_astro/edge.B7O1xshw.svg","/_astro/firefox.CMmddY9p.svg","/_astro/safari.CdqjFDzc.svg","/_astro/privacy.8rt_1nTU.css","/_headers","/robots.txt","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/_astro/client.BNC2RHkt.js","/decapcms/config.yml","/decapcms/index.html","/404.html","/privacy/index.html","/rss.xml","/terms/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"OsSO3eimOMCYnPFaKoR3mbFvP34h91UVoYodolQd9ck="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
