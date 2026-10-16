import * as React from 'react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/molecules/MoleculeFAQAccordionItem';
import { CLINIC_CONFIG } from '@/lib/constants';

export const OrganismFAQ: React.FC = () => {
  const faqs = [
    {
      q: 'Is mobile dentistry as clean and sterile as a traditional dental clinic?',
      a: 'Absolutely. We adhere strictly to hospital-grade infection control standards. All clinical instruments arrive in hermetically sealed, autoclave-sterilized cassettes that are unsealed exclusively in front of you. We employ single-use disposable barriers wherever appropriate and protect your residence surfaces with sterile medical draping.',
    },
    {
      q: 'How much space is needed for the appointment in our home?',
      a: 'Very little. A space approximately 6 by 6 feet in a living room, dining area, private study, or bedroom is ideal. All we require is one standard household electrical outlet and access to a nearby sink for clinical hand washing. Our whisper-quiet equipment is completely self-contained.',
    },
    {
      q: 'What are your fees, and do you accept dental insurance?',
      a: 'We operate on a transparent, upfront fee model with zero surprise bills. We provide detailed itemized superbills featuring standard dental procedure codes (CDT) that you can easily submit to your PPO dental insurer for direct out-of-network reimbursement. Exact visit fee estimates are provided via WhatsApp before confirming your reservation.',
    },
    {
      q: 'I experience severe dental phobia. How do you handle anxious patients?',
      a: 'Anxiety-free, trauma-informed care is a foundational pillar of Elfort Dental Clinic. You remain entirely in control: you decide when we begin, when to pause, and what ambient audio you prefer. There are no clinical smells, no cold waiting rooms, and zero judgment regarding past dental lapses.',
    },
    {
      q: 'What geographic areas do you serve, and what is your advance booking time?',
      a: `We provide private home visits throughout ${CLINIC_CONFIG.serviceArea} within a ${CLINIC_CONFIG.serviceRadius}. We generally schedule visits 2 to 5 days in advance, while maintaining limited same-day and next-day reservations for urgent maintenance and acute discomfort.`,
    },
    {
      q: 'How do you handle severe dental emergencies?',
      a: 'For active localized pain, broken restorations, or chipped teeth, we offer expedited priority visits whenever our clinical schedule allows. However, for severe facial trauma, uncontrolled bleeding, or respiratory difficulty, please contact emergency services (911) or visit the nearest emergency medical department immediately.',
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/20 border-t border-border relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="Common Inquiries"
          title="Frequently Asked Questions"
          description="Clear, transparent answers about our clinical sterilization, space requirements, insurance reimbursement, and appointment pacing."
          align="center"
        />

        <Accordion
          type="single"
          collapsible
          className="w-full bg-card/70 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-primary/20 shadow-card"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-border/80">
              <AccordionTrigger className="text-foreground hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
