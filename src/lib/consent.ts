export type ConsentChoice = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decision: "accepted" | "rejected" | "custom";
  version: 1;
  updatedAt: string;
};

export const CONSENT_STORAGE_KEY = "madeira-mosaic-consent-v1";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentChoice>;
    if (parsed.version !== 1 || parsed.necessary !== true) return null;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      decision: parsed.decision === "accepted" || parsed.decision === "custom" ? parsed.decision : "rejected",
      version: 1,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

export function saveConsent(input: Pick<ConsentChoice, "analytics" | "marketing" | "decision">) {
  const consent: ConsentChoice = {
    necessary: true,
    analytics: input.analytics,
    marketing: input.marketing,
    decision: input.decision,
    version: 1,
    updatedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("madeira-consent-change", { detail: consent }));
  return consent;
}
