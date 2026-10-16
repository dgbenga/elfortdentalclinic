import * as React from 'react';
import { useState } from 'react';
import { Briefcase, Users, HeartPulse, Armchair, CheckCircle2 } from 'lucide-react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomText } from '@/components/atoms/AtomText';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { cn } from '@/lib/utils';

interface PersonaData {
  id: string;
  tabLabel: string;
  icon: React.ElementType;
  eyebrow: string;
  headline: string;
  story: string;
  benefits: string[];
  metrics: { label: string; value: string }[];
  whatsappMessage: string;
  ctaText: string;
  imageSrc: string;
  imageAlt: string;
  patientQuote: {
    text: string;
    author: string;
  };
}

export const OrganismWhoWeServe: React.FC = () => {
  const personas: PersonaData[] = [
    {
      id: 'executives',
      tabLabel: 'Founders & Executives',
      icon: Briefcase,
      eyebrow: 'Executive Itinerary Concierge',
      headline: 'Zero Billable Hours Lost. Care Conducted in Your Private Office.',
      story:
        'Eliminate the 2.5-hour clinic disruption of traffic, parking decks, and waiting rooms. Our clinical team sets up in your private office or penthouse study in under 10 minutes, allowing you to complete your routine dental hygiene between meetings or while reviewing briefs.',
      benefits: [
        'Unmarked executive arrival with discreet equipment cases',
        'Direct scheduling matching demanding corporate calendars',
        'Ultra-quiet mobile instruments causing zero acoustic disruption',
      ],
      metrics: [
        { label: 'Travel Time Saved', value: '2.5 Hours' },
        { label: 'Room Setup Time', value: '8 Minutes' },
        { label: 'Pacing Control', value: '100% Flexible' },
      ],
      whatsappMessage:
        "Hi Dr. Adebayo, I would like to inquire about an executive concierge home/office dental visit.",
      ctaText: 'Request Executive Visit on WhatsApp',
      imageSrc: '/images/executive.jpg',
      imageAlt: 'Sophisticated executive study suite with leather lounge chair and discreet medical flight case',
      patientQuote: {
        text: 'A routine cleaning used to cost half my working morning. Having Dr. Adebayo arrive at my office study was seamless. Total privacy, zero wasted time.',
        author: 'Marcus V., Managing Partner',
      },
    },
    {
      id: 'families',
      tabLabel: 'Parents & Young Families',
      icon: Users,
      eyebrow: 'Family Household Concierge',
      headline: 'The Entire Household Cleaned in One Relaxed Afternoon.',
      story:
        'No car seat struggles, stressful parking decks, or pediatric waiting room meltdowns. Children are treated gently in their familiar home surroundings—often while wearing their pajamas—while parents answer emails in the adjoining room.',
      benefits: [
        'Sequential family checkups in a single convenient visit',
        'Gentle, tear-free pediatric habituation without clinical intimidation',
        'Both parents and children completed without leaving home',
      ],
      metrics: [
        { label: 'Clinic Trips Saved', value: '3 Separate Trips' },
        { label: 'Child Waiting Stress', value: 'Zero Tears' },
        { label: 'Family Convenience', value: 'Single Afternoon' },
      ],
      whatsappMessage:
        "Hi Dr. Adebayo, I'd like to book a sequential concierge home dental visit for my family.",
      ctaText: 'Request Family Visit on WhatsApp',
      imageSrc: '/images/hero.jpg',
      imageAlt: 'Quiet residential living room with comfortable seating adapted for family dental care',
      patientQuote: {
        text: 'Both kids had their teeth cleaned in their pajamas without a single tear. We will never drag our children to a crowded clinic waiting room again.',
        author: 'Eleanor M., Mother of Two',
      },
    },
    {
      id: 'anxious',
      tabLabel: 'Anxious & Phobic Patients',
      icon: HeartPulse,
      eyebrow: 'Trauma-Informed Zero-Anxiety Care',
      headline: 'Unhurried Gentleness in Your Favorite Armchair.',
      story:
        'Past dental trauma can make entering a cold, sterile dental clinic terrifying. At Elfort Dental Clinic, you remain in total control. There are no clinical smells, no loud drills, and no judgmental lectures. We advance only when you signal readiness.',
      benefits: [
        'You choose your favorite chair, ambient music, and room lighting',
        'Immediate break whenever you raise a hand—zero pressure or rushing',
        'Compassionate, gentle communication with zero judgment of past neglect',
      ],
      metrics: [
        { label: 'Appointment Pacing', value: 'Patient Led' },
        { label: 'Waiting Room Anxiety', value: 'Eliminated' },
        { label: 'Judgment Level', value: '100% Compassionate' },
      ],
      whatsappMessage:
        "Hi Dr. Adebayo, I experience dental anxiety and would like to discuss a gentle home visit.",
      ctaText: 'Discuss Gentle Care on WhatsApp',
      imageSrc: '/images/hero.jpg',
      imageAlt: 'Calm, sunlit living room with natural lighting and serene environment for anxious patients',
      patientQuote: {
        text: 'I avoided dental care for six years due to extreme phobia. Dr. Adebayo was so kind, patient, and gentle. Being in my own home made all the difference.',
        author: 'David L., Residential Patient',
      },
    },
    {
      id: 'seniors',
      tabLabel: 'Seniors & Bedside Care',
      icon: Armchair,
      eyebrow: 'Dignified Residential & Bedside Care',
      headline: 'Dignified Oral Health for Loved Ones with Limited Mobility.',
      story:
        'Transporting an aging parent or relative with mobility challenges, severe arthritis, or cognitive fatigue to a dental office can be physically exhausting. Our mobile equipment is ergonomically engineered to adapt to recliners, sofas, or bedside positions.',
      benefits: [
        'Complete oral hygiene and denture adjustments right at the bedside',
        'Zero physical transfer trauma into rigid, uncomfortable dental chairs',
        'Compassionate clinician pacing tailored to physical comfort',
      ],
      metrics: [
        { label: 'Transport Trauma', value: 'Zero Strain' },
        { label: 'Bedside Adaptability', value: '100% Mobile' },
        { label: 'Dignity Standard', value: 'Hospital Grade' },
      ],
      whatsappMessage:
        "Hi Dr. Adebayo, I would like to discuss bedside or mobile dental care for an elderly relative.",
      ctaText: 'Request Bedside Care on WhatsApp',
      imageSrc: '/images/hero.jpg',
      imageAlt: 'Dignified comfortable home seating setting for bedside and senior dental care',
      patientQuote: {
        text: 'My mother has severe arthritis. Elfort provided dignified, comfortable care right at her bedside. Indispensable for elderly family members.',
        author: 'Sarah K., Family Caregiver',
      },
    },
  ];

  const [activePersonaId, setActivePersonaId] = useState<string>('executives');
  const activePersona = personas.find((p) => p.id === activePersonaId) || personas[0];

  return (
    <section id="personas" className="py-24 md:py-32 bg-secondary/20 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="Interactive Patient Profiles"
          title="Tailored Care for Discerning Lifestyles"
          description="Select your patient profile below to preview how our concierge team personalizes the in-home experience for your exact routine."
          align="center"
        />

        {/* Interactive Tab Switcher */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {personas.map((persona) => {
            const Icon = persona.icon;
            const isActive = persona.id === activePersonaId;
            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => setActivePersonaId(persona.id)}
                className={cn(
                  'flex items-center gap-3 p-4 md:p-5 rounded-xl border text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[56px]',
                  isActive
                    ? 'bg-card border-primary/70 shadow-glow-gold'
                    : 'bg-card/40 border-border hover:bg-card/70 hover:border-border/80'
                )}
              >
                <div
                  className={cn(
                    'w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors',
                    isActive ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                  )}
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span
                    className={cn(
                      'font-sans text-xs md:text-sm font-semibold transition-colors',
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {persona.tabLabel}
                  </span>
                  <span className="font-mono text-[10px] text-primary-text-safe">
                    {isActive ? '● Active Profile' : 'Select to view'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Persona Showcase Panel */}
        <div className="rounded-2xl bg-card/80 backdrop-blur-xl border border-primary/20 p-8 md:p-12 shadow-card transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-text-safe font-medium mb-3">
                {activePersona.eyebrow}
              </span>

              <AtomHeading level="headline-lg" as="h3" className="text-foreground text-balance">
                {activePersona.headline}
              </AtomHeading>

              <AtomText variant="body" className="mt-5 text-muted-foreground leading-relaxed text-base">
                {activePersona.story}
              </AtomText>

              {/* Specific Benefits Checklist */}
              <div className="mt-6 space-y-3 w-full">
                {activePersona.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Quantified Metric Strip */}
              <div className="mt-8 pt-6 border-t border-border/80 w-full grid grid-cols-3 gap-4">
                {activePersona.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-serif text-xl md:text-2xl text-foreground font-normal">
                      {m.value}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct Tailored CTA */}
              <div className="mt-9">
                <MoleculeWhatsAppCTA
                  message={activePersona.whatsappMessage}
                  size="default"
                  buttonClassName="h-12 px-7 text-sm font-semibold shadow-lg"
                >
                  {activePersona.ctaText}
                </MoleculeWhatsAppCTA>
              </div>
            </div>

            {/* Right Visual Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative rounded-xl overflow-hidden border border-border shadow-xl bg-card aspect-[4/3] group">
                <img
                  src={activePersona.imageSrc}
                  alt={activePersona.imageAlt}
                  width={600}
                  height={450}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              {/* Verified Quote Highlight */}
              <div className="p-6 rounded-xl bg-secondary/50 border border-border/60">
                <p className="font-serif italic text-sm md:text-base text-foreground leading-relaxed">
                  "{activePersona.patientQuote.text}"
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-sans text-xs font-semibold text-primary">
                    {activePersona.patientQuote.author}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                    Verified Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
