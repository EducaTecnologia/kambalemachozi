/**
 * ETS KAMBALE MACHOZI (KM) - WhatsApp & Contact Helpers
 *
 * Implements intelligent routing:
 * - Desktop: Opens WhatsApp Web (web.whatsapp.com) directly
 * - Mobile / Tablet: Opens native WhatsApp App directly (whatsapp://send) with wa.me fallback
 * - Eliminates all api.whatsapp.com links to prevent ERR_CONNECTION_REFUSED
 */

export const WHATSAPP_NUMBER = '5591996156672';
export const WHATSAPP_DISPLAY = '+55 91 996156672';
export const EMAIL_DIRECTEUR = 'directeur@kambalemachozi.com';
export const EMAIL_COMMERCIAL = 'contact@kambalemachozi.com';

/**
 * Detects whether the current device is a mobile phone or tablet.
 * Evaluates user agent, touch capabilities, and screen boundaries.
 */
export function isMobileOrTablet(): boolean {
  if (typeof window === 'undefined') return false;

  const nav = window.navigator;
  const userAgent = nav.userAgent || nav.vendor || (window as unknown as { opera?: string }).opera || '';

  // 1. Common mobile & tablet user agent strings
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i;
  if (mobileRegex.test(userAgent)) {
    return true;
  }

  // 2. Modern iPadOS 13+ detection (reports platform 'MacIntel' with touch points)
  if (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) {
    return true;
  }

  // 3. Screen size + touch input fallback (screen width <= 1024px with touch points)
  const hasTouch = 'ontouchstart' in window || nav.maxTouchPoints > 0;
  if (hasTouch && window.innerWidth <= 1024) {
    return true;
  }

  return false;
}

/**
 * Generates WhatsApp Web URL for Desktop users.
 */
export function getWhatsAppWebUrl(text?: string): string {
  const encoded = text ? encodeURIComponent(text) : '';
  return encoded
    ? `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;
}

/**
 * Generates native WhatsApp App protocol URL for Mobile / Tablet users.
 */
export function getWhatsAppAppUrl(text?: string): string {
  const encoded = text ? encodeURIComponent(text) : '';
  return encoded
    ? `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encoded}`
    : `whatsapp://send?phone=${WHATSAPP_NUMBER}`;
}

/**
 * Generates universal wa.me URL as safe fallback.
 */
export function getWaMeUrl(text?: string): string {
  const encoded = text ? encodeURIComponent(text) : '';
  return encoded
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;
}

/**
 * Dynamically resolves the best WhatsApp link based on the user's current device:
 * - Desktop -> WhatsApp Web
 * - Mobile / Tablet -> Native WhatsApp App
 */
export function createWhatsAppUrl(text?: string): string {
  if (isMobileOrTablet()) {
    return getWhatsAppAppUrl(text);
  }
  return getWhatsAppWebUrl(text);
}

/**
 * Triggers WhatsApp dispatch:
 * - On Desktop: opens WhatsApp Web in a new tab.
 * - On Mobile / Tablet: triggers native WhatsApp application (whatsapp://send)
 *   with fallback to universal wa.me if needed.
 */
export function sendToWhatsApp(text: string): boolean {
  if (typeof window === 'undefined') return false;

  const isMobile = isMobileOrTablet();

  if (isMobile) {
    // Mobile / Tablet: Launch native WhatsApp App
    const appUrl = getWhatsAppAppUrl(text);
    const waMeUrl = getWaMeUrl(text);

    try {
      // Create programmatic anchor with native protocol
      const link = document.createElement('a');
      link.href = appUrl;
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
          // ignore cleanup errors
        }
      }, 500);

      return true;
    } catch (err) {
      console.warn('Native WhatsApp app protocol dispatch failed, falling back to wa.me:', err);
      try {
        window.open(waMeUrl, '_blank', 'noopener,noreferrer');
        return true;
      } catch {
        return false;
      }
    }
  } else {
    // Desktop: Open WhatsApp Web in a new browser tab
    const webUrl = getWhatsAppWebUrl(text);

    try {
      const newWin = window.open(webUrl, '_blank', 'noopener,noreferrer');
      if (newWin) {
        return true;
      }
    } catch (err) {
      console.warn('window.open blocked for WhatsApp Web, using anchor click:', err);
    }

    // Programmatic anchor click fallback
    try {
      const link = document.createElement('a');
      link.href = webUrl;
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
          // ignore cleanup errors
        }
      }, 500);

      return true;
    } catch (err) {
      console.warn('Anchor click failed for WhatsApp Web:', err);
      return false;
    }
  }
}
