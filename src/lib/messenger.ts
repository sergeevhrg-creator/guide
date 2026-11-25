import { sameTabForMessengers, trackThen, type TrackEvent } from "@/lib/tracking";

type Params = Record<string, string | number | boolean>;

/**
 * Opens WhatsApp/Telegram after a form and records the event.
 * Phones/tablets: same tab (Back returns to the site); navigation waits for the
 * conversion tag (max ~400 ms). Computers: new tab, opened synchronously so
 * popup blockers allow it.
 */
export function openMessenger(
  url: string,
  event: TrackEvent,
  params: Params,
  afterTrack?: () => void | Promise<unknown>,
) {
  if (sameTabForMessengers()) {
    trackThen(event, params, () => {
      void Promise.resolve()
        .then(() => afterTrack?.())
        .catch(() => undefined)
        .finally(() => window.location.assign(url));
    });
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
  trackThen(event, params, () => void afterTrack?.());
}
