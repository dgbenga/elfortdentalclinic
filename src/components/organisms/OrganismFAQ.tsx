import * as React from 'react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/molecules/MoleculeFAQAccordionItem';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { CLINIC_CONFIG, WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismFAQ: React.FC = () => {
  const faqs = [
    {
      q: 'Is home dental care as safe and clean as a clinic?',
      a: 'Yes. Instruments are sterilised and arrive sealed, and we open them in front of you. Surfaces are protected and cleaned, and we follow the infection-control standards required of any dental practice.',
    },
    {
      q: 'What equipment do you bring?',
      a: 'Everything needed for your treatment: portable treatment equipment, lighting, sterile instruments and protective supplies. All we need from you is a comfortable chair and a power outlet.',
    },
    {
      q: 'How much does it cost, and how do I pay?',
      a: 'You get a clear estimate before anything starts, so there are no surprises. We provide upfront, transparent pricing tailored to your requested care. You can pay by card, transfer, or cash. If you have insurance, we’ll provide an itemised receipt you can use to claim.',
    },
    {
      q: 'I’m very nervous about dentists. Is this for me?',
      a: 'It’s exactly who this is for. You choose where you sit, what you listen to and how fast we go. Tell us your worries first and we’ll plan around them. We stop whenever you ask.',
    },
    {
      q: 'What can’t be treated at home?',
      a: 'Most check-ups, cleanings and many repairs can be done at home. If you need something that requires a clinic or specialist equipment, we’ll tell you honestly and help you arrange it.',
    },
    {
      q: 'Where do you travel, and how soon can I book?',
      a: `We visit homes and offices across ${CLINIC_CONFIG.serviceArea}. Message us for the next available slot. Most visits can be booked within 2 to 4 days.`,
    },
    {
      q: 'What if I have a dental emergency?',
      a: 'Message us right away if you have pain, a broken tooth or a lost filling. We’ll do our best to see you quickly. If you have swelling that affects breathing or swallowing, or an injury to the face or jaw, go to the nearest emergency service immediately.',
    },
    {
      q: 'Do I need to prepare my home?',
      a: 'No special setup. Pick a well-lit room with a comfortable chair and a nearby power outlet. We handle the rest and tidy up afterwards.',
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/20 border-t border-border relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="Questions, Answered"
          title="Everything You’re Wondering Before You Book."
          description="Straightforward answers about our home visits, sterilisation, equipment, and appointment pacing."
          align="center"
        />

        <Accordion
          type="single"
          collapsible
          className="w-full bg-card/80 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-primary/20 shadow-card"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-border/80">
              <AccordionTrigger className="text-foreground hover:text-primary font-serif text-base md:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Soft CTA */}
        <div className="mt-10 rounded-2xl bg-card border border-border p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-soft">
          <div>
            <p className="font-serif text-lg text-foreground font-normal">
              Still wondering?
            </p>
            <p className="font-sans text-sm text-muted-foreground mt-0.5">
              Ask us anything on WhatsApp. No pressure.
            </p>
          </div>
          <MoleculeWhatsAppCTA
            message={WHATSAPP_MESSAGES.faqQuestion}
            variant="whatsapp-forest"
            size="default"
            buttonClassName="h-11 px-6 font-semibold shadow-md shrink-0"
          >
            Ask on WhatsApp
          </MoleculeWhatsAppCTA>
        </div>
      </div>
    </section>
  );
};
