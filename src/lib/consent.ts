export type ConsentDecision = "all" | "necessary" | "custom";

export type ConsentChoice = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decision: ConsentDecision;
  version: 3;
};

// v3 introduces optional analytics and marketing (Google Tag Manager with Consent Mode v2).
// Older v2 decisions (necessary-only, no trackers existed) are not reused, so visitors are asked again.
export const CONSENT_STORAGE_KEY = "madeira-mosaic-consent-v3";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentChoice>;
    if (parsed.version !== 3 || parsed.necessary !== true) return null;
    const analytics = parsed.analytics === true;
    const marketing = parsed.marketing === true;
    return {
      necessary: true,
      analytics,
      marketing,
      decision: decisionFor(analytics, marketing),
      version: 3,
    };
  } catch {
    return null;
  }
}

function decisionFor(analytics: boolean, marketing: boolean): ConsentDecision {
  if (analytics && marketing) return "all";
  if (!analytics && !marketing) return "necessary";
  return "custom";
}

export function saveConsent(
  choice: { analytics: boolean; marketing: boolean } = {
    analytics: false,
    marketing: false,
  },
) {
  const consent: ConsentChoice = {
    necessary: true,
    analytics: choice.analytics,
    marketing: choice.marketing,
    decision: decisionFor(choice.analytics, choice.marketing),
    version: 3,
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("madeira-consent-change", { detail: consent }));
  return consent;
}
