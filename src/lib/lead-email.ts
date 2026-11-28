/**
 * Sends a copy of every filled request form to Pavel's inbox through Web3Forms,
 * so a lead is not lost when the visitor leaves the messenger without tapping Send.
 *
 * The access key is a public form identifier (Web3Forms is designed for client-side
 * use), not a secret: the inbox address itself never appears in the site code.
 * While the key is empty, email delivery stays off and the forms behave as before.
 */
export const LEAD_EMAIL_ACCESS_KEY = "";
export const LEAD_EMAIL_ENDPOINT = "https://api.web3forms.com/submit";

export function leadEmailEnabled(key: string = LEAD_EMAIL_ACCESS_KEY): boolean {
  return key.trim().length > 0;
}

export type LeadEmail = {
  /** Visitor's name. */
  name: string;
  /** Phone, @username or email the visitor gave for the reply. */
  contact: string;
  /** How the visitor wants to be contacted: WhatsApp, Telegram or Email. */
  channel: string;
  /** Tour or programme. */
  product: string;
  /** Full request text, the same as the messenger message. */
  message: string;
  lang: string;
};

export function leadEmailPayload(lead: LeadEmail, key: string = LEAD_EMAIL_ACCESS_KEY) {
  const contact = lead.contact.trim();
  const payload: Record<string, string | boolean> = {
    access_key: key,
    subject: `Новая заявка с сайта: ${lead.product} — ${lead.name}`,
    from_name: "Madeira Mosaic — сайт",
    name: lead.name,
    contact,
    channel: lead.channel,
    product: lead.product,
    language: lead.lang.toUpperCase(),
    message: lead.message,
    botcheck: false,
  };
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) payload["replyto"] = contact;
  return payload;
}

/** Resolves to true when the email service accepted the request. Never throws. */
export async function sendLeadEmail(
  lead: LeadEmail,
  key: string = LEAD_EMAIL_ACCESS_KEY,
  fetchImpl: typeof fetch = fetch,
): Promise<boolean> {
  if (!leadEmailEnabled(key)) return false;
  try {
    const response = await fetchImpl(LEAD_EMAIL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(leadEmailPayload(lead, key)),
      // Lets the request finish when the page navigates to WhatsApp or Telegram.
      keepalive: true,
    });
    if (!response.ok) return false;
    const data = (await response.json().catch(() => null)) as { success?: boolean } | null;
    return data?.success !== false;
  } catch {
    return false;
  }
}
