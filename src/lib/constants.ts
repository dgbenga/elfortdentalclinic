export const CLINIC_CONFIG = {
  name: "Elfort Dental Clinic",
  tagline: "Private, unhurried dental care at your door.",
  doctorName: "Dr. Olufemi Adebayo, BDS",
  doctorLastName: "Adebayo",
  experienceYears: "12+",
  homeVisitsCount: "1,500+",
  rating: "4.9★",
  ratingCount: "200+",
  operatingHours: "Mon–Sat 8:00 AM – 7:00 PM",
  serviceArea: "Metropolitan Area",
  serviceRadius: "25-mile radius",
  email: "concierge@elfortdentalclinic.com",
  phoneDisplay: "+1 (800) 555-0199",
  whatsappNumber: "18005550199", // Default direct WhatsApp number (E.164 digits only, no plus)
  licenseInfo: "Licensed dentist · #DEN-482910 · State Dental Board Verified",
};

export const WHATSAPP_MESSAGES = {
  // Exact messages from Conversion Copy Deck (Section 14)
  hero: "Hi, I'd like to book a home dental visit. My area is: ",
  checkup: "Hi, I'd like to book a check-up and cleaning at home.",
  whitening: "Hi, I'd like to ask about teeth whitening at home.",
  repairs: "Hi, I have a tooth that needs repairing. Can you help at home?",
  family: "Hi, I'd like to book home dental visits for my family.",
  faqQuestion: "Hi, I have a question about your home dental visits.",
};

export function createWhatsAppUrl(message: string, phone: string = CLINIC_CONFIG.whatsappNumber): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
