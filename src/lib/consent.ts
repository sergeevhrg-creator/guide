export type ConsentChoice = {
  necessary: true;
  analytics: false;
  marketing: false;
  decision: "necessary";
  version: 2;
};

export const CONSENT_STORAGE_KEY = "madeira-mosaic-consent-v2";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentChoice>;
    if (parsed.version !== 2 || parsed.necessary !== true) return null;
    return {
      necessary: true,
      analytics: false,
      marketing: false,
      decision: "necessary",
      version: 2,
    };
  } catch {
    return null;
  }
}

export function saveConsent() {
  const consent: ConsentChoice = {
    necessary: true,
    analytics: false,
    marketing: false,
    decision: "necessary",
    version: 2,
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("madeira-consent-change", { detail: consent }));
  return consent;
}
