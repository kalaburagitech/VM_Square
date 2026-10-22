// Shared enquiry rules used by the Contact / Request a Quote forms and /api/send-enquiry,
// so browser checks and server checks always agree. This file is bundled into client
// code: never put secrets or server-only configuration here.

export const ENQUIRY_LIMITS = {
  name: { min: 2, max: 100 },
  phone: { min: 10, max: 20 },
  email: { max: 100 },
  subject: { max: 150 },
  company: { max: 150 },
  service: { min: 2, max: 100 },
  location: { min: 2, max: 150 },
  personnelCount: { min: 1, max: 100 },
  contactMessage: { min: 5, max: 3000 },
  quoteMessage: { max: 3000 },
} as const;

// HTML `pattern` attribute for phone inputs: optional leading +, then digits, spaces, brackets or dashes
export const PHONE_INPUT_PATTERN = "\\+?[0-9 \\(\\)\\-]{10,20}";

export const PHONE_ERROR = "Please enter a valid phone number (10 to 15 digits, e.g. +91 98765 43210).";

export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!/^\+?[0-9 ()-]{10,20}$/.test(trimmed)) return false;
  const digitCount = trimmed.replace(/\D/g, "").length;
  return digitCount >= 10 && digitCount <= 15;
}

// Applies trim-aware checks that the native `required` / `minLength` attributes miss
// (e.g. a field containing only spaces), then shows the browser's validation bubble.
export function checkFormFields(form: HTMLFormElement, fieldErrors: Record<string, string | null>): boolean {
  for (const [field, message] of Object.entries(fieldErrors)) {
    const element = form.elements.namedItem(field);
    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLTextAreaElement ||
      element instanceof HTMLSelectElement
    ) {
      element.setCustomValidity(message ?? "");
    }
  }
  return form.reportValidity();
}

export function buildWhatsAppUrl(whatsappNumber: string, lines: string[]): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}
