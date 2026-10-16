import * as React from 'react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { MoleculeServiceCard } from '@/components/molecules/MoleculeServiceCard';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismServicesGrid: React.FC = () => {
  const services = [
    {
      title: 'Comprehensive Preventive Suite',
      category: 'Preventive & Wellness',
      description:
        'Thorough routine maintenance designed to protect your natural smile with zero discomfort or hurry.',
      scope: [
        'Ultrasonic plaque & calculus removal',
        'Gentle periodontal assessment & scaling',
        'Comprehensive oral cancer screening',
        'Remineralizing fluoride enamel therapies',
        'Ultra-low-dose digital diagnostic imaging',
      ],
      whatsappMessage: WHATSAPP_MESSAGES.preventive,
      ctaText: 'Inquire for Preventive Visit',
    },
    {
      title: 'Cosmetic Enhancements & Smile Design',
      category: 'Aesthetic Refinement',
      description:
        'Boutique cosmetic enhancements performed in complete residential privacy, without waiting room visibility.',
      scope: [
        'Professional in-home enamel brightening',
        'Cosmetic composite bonding for chips & gaps',
        'Custom-fitted nighttime bruxism guards',
        'Clear aligner orthodontic consultations',
        'Aesthetic smile contouring & shade analysis',
      ],
      whatsappMessage: WHATSAPP_MESSAGES.cosmetic,
      ctaText: 'Inquire for Cosmetic Care',
    },
    {
      title: 'Restorative & Gentle Maintenance',
      category: 'Restorative Precision',
      description:
        'Precise, durable repairs for existing dental work and prompt relief for localized discomfort.',
      scope: [
        'Tooth-colored composite restorations',
        'Crown recementation & bridge maintenance',
        'Urgent chipped tooth stabilization',
        'Desensitizing therapies for temperature sensitivity',
        'At-home bite balancing & occlusion adjustments',
      ],
      whatsappMessage: WHATSAPP_MESSAGES.restorative,
      ctaText: 'Inquire for Restorative Care',
    },
    {
      title: 'Family & Senior Concierge Dental',
      category: 'Dedicated Household Care',
      description:
        'Patient-centered care tailored for busy multi-member households and mobility-challenged elders.',
      scope: [
        'Back-to-back household family checkups',
        'Gentle, tear-free pediatric habituation',
        'Dignified bedside care for aging parents',
        'Full & partial denture adjustments & relining',
        'Zero-transfer mobility accommodation in armchairs',
      ],
      whatsappMessage: WHATSAPP_MESSAGES.familySenior,
      ctaText: 'Inquire for Family / Senior Visit',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="Clinical Offerings"
          title="Clinical Treatments in the Sanctuary of Your Home"
          description="Every appointment includes complete digital diagnostics, sterilized single-use barriers, and unhurried clinical attention."
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
              ctaText={svc.ctaText}
            />
          ))}
        </div>

        {/* Mid-Page Conversion Strip */}
        <div className="mt-14 rounded-2xl bg-card/80 backdrop-blur-xl border border-primary/20 p-8 md:p-10 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-primary-text-safe font-medium">
              Custom Requirements & Clinical Feasibility
            </span>
            <h3 className="font-serif text-2xl text-foreground mt-1.5">
              Need a treatment not listed above?
            </h3>
            <p className="font-sans text-sm text-muted-foreground mt-2 leading-relaxed">
              Send us a brief note on WhatsApp. Dr. Adebayo and the clinical team review every inquiry personally to confirm equipment feasibility and provide upfront fee estimates.
            </p>
          </div>
          <MoleculeWhatsAppCTA
            message={WHATSAPP_MESSAGES.custom}
            variant="whatsapp-forest"
            size="default"
            buttonClassName="h-12 px-7 font-semibold shadow-md whitespace-nowrap"
          >
            Chat Directly with Doctor
          </MoleculeWhatsAppCTA>
        </div>
      </div>
    </section>
  );
};
