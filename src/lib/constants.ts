export const CLINIC_CONFIG = {
  name: "Elfort Dental Clinic",
  tagline: "Private In-Home Concierge Dentistry",
  doctorName: "Dr. Olufemi Adebayo, DDS",
  experienceYears: "12+",
  homeVisitsCount: "1,500+",
  rating: "4.9 / 5.0",
  ratingCount: "200+",
  operatingHours: "Mon–Sat 8:00 AM – 7:00 PM • Sunday Emergency On-Call",
  serviceArea: "Metropolitan Area & Greater Suburbs",
  serviceRadius: "25-mile radius",
  email: "concierge@elfortdentalclinic.com",
  phoneDisplay: "+1 (800) 555-0199",
  whatsappNumber: "18005550199", // Default direct WhatsApp number (E.164 without '+')
  licenseInfo: "State Dental Board License #DEN-482910 Verified",
  accreditation: "Hospital-Grade Autoclave Biological Monitoring Confirmed",
};

export const WHATSAPP_MESSAGES = {
  hero: "Hi Dr. Adebayo, I would like to inquire about scheduling a private home dental visit.",
  preventive: "Hi Dr. Adebayo, I'd like to book a comprehensive home cleaning and oral exam.",
  cosmetic: "Hi Dr. Adebayo, I'd like to inquire about at-home smile brightening and cosmetic consultation.",
  restorative: "Hi Dr. Adebayo, I need a home visit for restorative care or crown maintenance.",
  familySenior: "Hi Dr. Adebayo, I would like to discuss a home visit for my family / elderly relative.",
  custom: "Hi Dr. Adebayo, I'd like to check clinical feasibility for a specific dental inquiry.",
};

export function createWhatsAppUrl(message: string, phone: string = CLINIC_CONFIG.whatsappNumber): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
