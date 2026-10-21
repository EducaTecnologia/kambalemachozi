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
 * Triggers opening WhatsApp in a new tab/window safely without
 * violating iframe CSP frame-ancestors or unloading the web application.
 */
export function sendToWhatsApp(text: string): boolean {
  const url = createWhatsAppUrl(text);

  // 1. Try window.open first (standard for user-initiated clicks/submits)
  try {
    const newWin = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWin) {
      return true;
    }
  } catch (err) {
    console.warn('window.open was restricted by browser:', err);
  }

  // 2. Programmatic click on an anchor element targeting _blank
  try {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      try {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      } catch {
        // ignore
      }
    }, 500);
    return true;
  } catch (err) {
    console.warn('Programmatic link click failed:', err);
  }

  return false;
}
