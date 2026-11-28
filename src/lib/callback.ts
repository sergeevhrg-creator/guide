/** Callback banner: phone number check and when the banner may appear. */

/** Keeps the leading "+" and digits; returns null unless it is +, then 8–15 digits. */
export function normalizePhone(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed.startsWith("+")) return null;
  const digits = trimmed.slice(1).replace(/[\s().-]/g, "");
  if (!/^\d{8,15}$/.test(digits)) return null;
  return `+${digits}`;
}

export const CALLBACK_DELAY_MS = 5_000;
export const CALLBACK_DISMISSED_KEY = "mosaic-callback-dismissed";
export const CALLBACK_DISMISS_DAYS = 3;
export const CALLBACK_SENT_KEY = "mosaic-callback-sent";

/** Pages where the visitor is already filling in a request. */
export function callbackAllowedOnPath(pathname: string): boolean {
  return (
    !pathname.startsWith("/request") &&
    !pathname.startsWith("/privacy") &&
    !pathname.startsWith("/cookies")
  );
}

/** True while a dismissal made at `dismissedAt` (ms) still hides the banner. */
export function callbackDismissed(dismissedAt: number | null, now: number): boolean {
  if (!dismissedAt) return false;
  return now - dismissedAt < CALLBACK_DISMISS_DAYS * 24 * 60 * 60 * 1000;
}
