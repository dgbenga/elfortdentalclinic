import * as React from 'react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { MoleculeServiceCard } from '@/components/molecules/MoleculeServiceCard';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismServicesGrid: React.FC = () => {
  const services = [
    {
      title: 'Check-Ups and Cleanings',
      category: 'Preventive Care',
      description:
        'Stay ahead of problems with a thorough exam and a professional clean, done gently and without rushing.',
      scope: [
        'Complete tooth and gum check',
        'Professional scale and polish',
        'Clear advice on what you actually need',
      ],
      whatsappMessage: WHATSAPP_MESSAGES.checkup,
      ctaText: 'Book a check-up',
    },
    {
      title: 'Smile Brightening and Cosmetic Care',
      category: 'Cosmetic Care',
      description:
        'Look as good as you feel. Safe, professional whitening and honest advice on improving your smile.',
      scope: [
        'Professional teeth whitening',
        'Smile consultation',
        'Guidance on stains and sensitivity',
      ],
      whatsappMessage: WHATSAPP_MESSAGES.whitening,
      ctaText: 'Ask about whitening',
    },
    {
      title: 'Repairs and Restorative Care',
      category: 'Restorative Care',
      description:
        'Fix what’s bothering you. Fillings, sealants, adjustments and follow-up care, handled where you’re comfortable.',
      scope: [
        'Fillings and tooth repairs',
        'Sealants and adjustments',
        'Post-treatment check-ups',
      ],
      whatsappMessage: WHATSAPP_MESSAGES.repairs,
      ctaText: 'Ask about a repair',
    },
    {
      title: 'Family and Senior Care',
      category: 'Household & Senior Care',
      description:
        'One visit for the whole household, plus dignified, comfortable care for relatives who find travel difficult.',
      scope: [
        'Back-to-back family appointments',
        'Gentle care for seniors',
        'Friendly first visits for children',
      ],
      whatsappMessage: WHATSAPP_MESSAGES.family,
      ctaText: 'Book for my family',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="What We Treat at Home"
          title="Complete Dental Care, Brought to Your Door."
          description="From routine check-ups to a brighter smile, much of what you need can be done in the comfort of your home."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => (
            <MoleculeServiceCard
              key={idx}
              title={svc.title}
              category={svc.category}
              description={svc.description}
              scope={svc.scope}
              whatsappMessage={svc.whatsappMessage}
              ctaText={`${svc.ctaText} →`}
            />
          ))}
        </div>

        {/* Honesty Line */}
        <div className="mt-8 text-center">
          <p className="font-serif italic text-base md:text-lg text-foreground/80">
            "If something needs a clinic, we’ll tell you straight and help you arrange it."
          </p>
        </div>

        {/* Mid-Page Conversion Strip */}
        <div className="mt-12 rounded-2xl bg-card/90 backdrop-blur-xl border border-primary/20 p-8 md:p-10 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-primary-text-safe font-medium">
              Direct Clinical Consultation
            </span>
            <h3 className="font-serif text-2xl text-foreground mt-1.5">
              Not sure what you need?
            </h3>
            <p className="font-sans text-sm text-muted-foreground mt-2 leading-relaxed">
              Tell us what’s bothering you on WhatsApp. We’ll tell you honestly whether it can be treated at home.
            </p>
          </div>
          <MoleculeWhatsAppCTA
            message={WHATSAPP_MESSAGES.hero}
            variant="whatsapp-forest"
            size="default"
            buttonClassName="h-12 px-7 font-semibold shadow-md whitespace-nowrap"
          >
            Ask on WhatsApp
          </MoleculeWhatsAppCTA>
        </div>
      </div>
    </section>
  );
};
