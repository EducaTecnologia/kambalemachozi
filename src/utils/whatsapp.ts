/**
 * ETS KAMBALE MACHOZI (KM) - WhatsApp & Contact Helpers
 */

export const WHATSAPP_NUMBER = '5591996156672';
export const WHATSAPP_DISPLAY = '+55 91 996156672';
export const EMAIL_DIRECTEUR = 'directeur@kambalemachozi.com';
export const EMAIL_COMMERCIAL = 'contact@kambalemachozi.com';

/**
 * Builds a direct WhatsApp link with encoded text.
 * Uses api.whatsapp.com directly to avoid 302 redirect encoding issues.
 */
export function createWhatsAppUrl(text: string): string {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
}

/**
 * Triggers navigation to WhatsApp URL safely
 */
export function sendToWhatsApp(text: string): void {
  const url = createWhatsAppUrl(text);
  try {
    window.location.assign(url);
  } catch {
    window.location.href = url;
  }
}
