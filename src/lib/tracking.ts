import type { Lang } from "@/lib/i18n/lang";
import type { ConsentChoice } from "@/lib/consent";

// Mirrors CONSENT_STORAGE_KEY in consent.ts (kept as a literal so this module stays dependency-free; a test checks they match).
export const CONSENT_KEY_FOR_BOOTSTRAP = "madeira-mosaic-consent-v3";

/** Single Google Tag Manager container (account "Mosaic Guide"); GA4 and Google Ads tags live inside it. */
export const GTM_IDS = ["GTM-TFQC4VTX"] as const;

/**
 * Inline bootstrap placed first in <head>, before the Google tag.
 * Consent Mode v2: everything optional is denied by default and only granted
 * after the visitor's choice in the cookie banner (restored from localStorage on later visits).
 */
export const trackingBootstrapScript = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);
try{var c=JSON.parse(localStorage.getItem('${CONSENT_KEY_FOR_BOOTSTRAP}')||'null');if(c&&c.version===3){gtag('consent','update',{analytics_storage:c.analytics?'granted':'denied',ad_storage:c.marketing?'granted':'denied',ad_user_data:c.marketing?'granted':'denied',ad_personalization:c.marketing?'granted':'denied'});}}catch(e){}
gtag('js',new Date());
dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
${JSON.stringify(GTM_IDS)}.forEach(function(i){var j=document.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;document.head.appendChild(j);});`;

type DataLayerWindow = Window & { dataLayer?: unknown[] };

function dataLayer(): unknown[] | null {
  if (typeof window === "undefined") return null;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  return w.dataLayer;
}

// gtag must push the Arguments object itself; GTM's consent API expects that shape.
function gtag(..._args: unknown[]) {
  // eslint-disable-next-line prefer-rest-params
  dataLayer()?.push(arguments);
}

export function applyConsent(consent: Pick<ConsentChoice, "analytics" | "marketing">) {
  const ads = consent.marketing ? "granted" : "denied";
  gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  });
  track("consent_update", {
    consent_analytics: consent.analytics,
    consent_marketing: consent.marketing,
  });
}

export type TrackEvent =
  | "cta_click"
  | "form_start"
  | "generate_lead"
  | "contact_click"
  | "consent_update"
  | "quick_panel_open"
  | "quick_panel_close";

export function track(event: TrackEvent, params: Record<string, string | number | boolean> = {}) {
  dataLayer()?.push({ event, ...params });
}

/**
 * Pushes the event and calls `done` once GTM has fired its tags for it,
 * or after `timeoutMs` if GTM is blocked or slow — whichever comes first, exactly once.
 * Use before leaving the page, so the Ads conversion is sent before navigation.
 */
export function trackThen(
  event: TrackEvent,
  params: Record<string, string | number | boolean>,
  done: () => void,
  timeoutMs = 400,
) {
  let called = false;
  const finish = () => {
    if (called) return;
    called = true;
    done();
  };
  const layer = dataLayer();
  if (!layer) return finish();
  layer.push({ event, ...params, eventCallback: finish, eventTimeout: timeoutMs });
  window.setTimeout(finish, timeoutMs + 50);
}

/* ---------- Ad attribution: kept for this browser session only ---------- */

export const ATTRIBUTION_KEY = "madeira-mosaic-attribution";
const PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
] as const;
export type Attribution = Partial<Record<(typeof PARAMS)[number] | "referrer" | "landing", string>>;

export function attributionFromUrl(
  search: string,
  referrer: string,
  landing: string,
): Attribution | null {
  const params = new URLSearchParams(search);
  const found: Attribution = {};
  for (const key of PARAMS) {
    const value = params.get(key);
    if (value) found[key] = value.slice(0, 120);
  }
  let refHost = "";
  try {
    refHost = referrer ? new URL(referrer).hostname : "";
  } catch {
    refHost = "";
  }
  const external = refHost && !refHost.endsWith("orthodoxmadeira.com") ? refHost : "";
  if (Object.keys(found).length === 0 && !external) return null;
  if (external) found.referrer = external;
  found.landing = landing.slice(0, 120);
  return found;
}

/** Last non-direct touch wins within the session; direct navigation keeps the earlier source. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    const next = attributionFromUrl(
      window.location.search,
      document.referrer,
      window.location.pathname,
    );
    if (next) window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable */
  }
}

export function readAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

/** Short human-readable source, e.g. "google / cpc / shrines-ru" or "Google Ads". */
export function sourceSummary(a: Attribution | null): string {
  if (!a) return "";
  if (a.utm_source || a.utm_medium || a.utm_campaign) {
    return [a.utm_source, a.utm_medium, a.utm_campaign].filter(Boolean).join(" / ");
  }
  if (a.gclid || a.gbraid || a.wbraid) return "Google Ads";
  if (a.fbclid) return "Facebook / Instagram";
  return a.referrer ?? "";
}

const sourceLabel: Record<Lang, string> = {
  ru: "Источник",
  en: "Source",
  be: "Крыніца",
  uk: "Джерело",
};

export function sourceLine(lang: Lang, a: Attribution | null = readAttribution()): string {
  const summary = sourceSummary(a);
  return summary ? `${sourceLabel[lang]}: ${summary}` : "";
}

/* ---------- Thank-you page hand-off ---------- */

export const LAST_LEAD_KEY = "madeira-mosaic-last-lead";
export type LastLead = {
  url: string;
  channel: "whatsapp" | "telegram" | "email";
  product: string;
};

export function rememberLead(lead: LastLead) {
  try {
    window.sessionStorage.setItem(LAST_LEAD_KEY, JSON.stringify(lead));
  } catch {
    /* storage unavailable */
  }
}

export function readLastLead(): LastLead | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(LAST_LEAD_KEY);
    return raw ? (JSON.parse(raw) as LastLead) : null;
  } catch {
    return null;
  }
}

/* ---------- Contact link clicks (WhatsApp, Telegram, phone) anywhere on the site ---------- */

export function contactChannelForHref(href: string): "whatsapp" | "telegram" | "phone" | null {
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) return "whatsapp";
  if (/^https?:\/\/t\.me\//i.test(href)) return "telegram";
  if (/^tel:/i.test(href)) return "phone";
  return null;
}

export function installContactClickTracking() {
  if (typeof document === "undefined") return () => {};
  const onClick = (event: MouseEvent) => {
    const target = event.target as Element | null;
    const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!link) return;
    const href = link.getAttribute("href") ?? "";
    const channel = contactChannelForHref(href);
    if (!channel) return;
    const section = link.closest("[data-track-location], section[id], header, footer");
    const location =
      section?.getAttribute("data-track-location") ||
      section?.id ||
      section?.tagName.toLowerCase() ||
      "page";
    const params = { channel, location, page: window.location.pathname };

    const plainClick =
      event.button === 0 &&
      !event.defaultPrevented &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey;
    // Messengers on phones/tablets open in the same tab (Back returns to the site);
    // wait for the conversion tag before leaving. Phone calls and computers keep the default.
    if (channel !== "phone" && plainClick && sameTabForMessengers()) {
      event.preventDefault();
      trackThen("contact_click", params, () => window.location.assign(link.href));
      return;
    }
    if (channel !== "phone" && plainClick && link.target !== "_blank") {
      event.preventDefault();
      window.open(link.href, "_blank", "noopener,noreferrer");
    }
    track("contact_click", params);
  };
  document.addEventListener("click", onClick, { capture: true });
  return () => document.removeEventListener("click", onClick, { capture: true });
}

/** Touch-only devices (phones, tablets); computers with a mouse or trackpad return false. */
export function sameTabForMessengers(
  matchMedia: ((query: string) => { matches: boolean }) | undefined = typeof window === "undefined"
    ? undefined
    : window.matchMedia?.bind(window),
): boolean {
  if (!matchMedia) return false;
  return matchMedia("(pointer: coarse)").matches && !matchMedia("(hover: hover)").matches;
}
