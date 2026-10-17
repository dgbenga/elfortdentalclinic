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
      tabLabel: 'Busy Professionals',
      icon: Briefcase,
      eyebrow: 'Work & Life Balance',
      headline: 'Get dental care between meetings, not instead of them.',
      story:
        'Skip the traffic, the waiting room and the nerves. Get thorough, unhurried dental care in your own home or office, from one dentist who gives you their full attention.',
      benefits: [
        'Dental care between meetings, not instead of them',
        'No commute and zero lost half-days',
        'Discreet, confidential appointments in your private space',
      ],
      metrics: [
        { label: 'Travel Time Saved', value: '2+ Hours' },
        { label: 'Appointment Pacing', value: 'Unhurried' },
        { label: 'Your Attention', value: '100% Dedicated' },
      ],
      whatsappMessage:
        "Hi, I'd like to book a home dental visit. My area is: ",
      ctaText: 'Book My Home Visit on WhatsApp',
      imageSrc: '/images/executive.jpg',
      imageAlt: 'Comfortable executive office study suite prepared for private home dental care',
      patientQuote: {
        text: 'I used to lose half a day to one appointment. Now it takes an hour and I never leave my house.',
        author: 'Busy Professional, Metropolitan Area',
      },
    },
    {
      id: 'families',
      tabLabel: 'Parents',
      icon: Users,
      eyebrow: 'Whole Household Care',
      headline: 'No juggling kids in a waiting room.',
      story:
        'A calm first dental visit in a place your child already feels safe. One visit covers the whole household, with back-to-back family appointments in one easy afternoon.',
      benefits: [
        'Back-to-back family appointments in one visit',
        'Friendly first visits for children where they feel safe',
        'No crowded waiting rooms or restless car rides',
      ],
      metrics: [
        { label: 'Visits Needed', value: '1 Trip' },
        { label: 'Waiting Stress', value: 'Zero' },
        { label: 'Household Care', value: 'Complete' },
      ],
      whatsappMessage:
        "Hi, I'd like to book home dental visits for my family.",
      ctaText: 'Book for My Family on WhatsApp',
      imageSrc: '/images/hero.jpg',
      imageAlt: 'Calm residential living room prepared for relaxed family dental care',
      patientQuote: {
        text: 'Getting everyone to a clinic was always a battle. Having the dentist visit our home made it gentle and relaxed.',
        author: 'Parent of Two, Metropolitan Area',
      },
    },
    {
      id: 'seniors',
      tabLabel: 'Seniors & Limited Mobility',
      icon: Armchair,
      eyebrow: 'Dignified Comfort',
      headline: 'Skip the transport, the stairs and the stress.',
      story:
        'Comfortable, dignified care for relatives who find travel difficult. We bring gentle treatment right to their favorite armchair or bedside, with zero rush.',
      benefits: [
        'Comfortable, dignified care where they are most at ease',
        'Skip the transport, the stairs and the stress',
        'Gentle care tailored to individual comfort and stamina',
      ],
      metrics: [
        { label: 'Transport Stress', value: 'Zero' },
        { label: 'Comfort Level', value: 'Maximum' },
        { label: 'Care Standard', value: 'Professional' },
      ],
      whatsappMessage:
        "Hi, I'd like to ask about home dental care for an elderly relative.",
      ctaText: 'Ask About Senior Care on WhatsApp',
      imageSrc: '/images/hero.jpg',
      imageAlt: 'Comfortable home setting arranged for senior and limited mobility dental care',
      patientQuote: {
        text: 'Getting my mother to a clinic was a struggle. This made it easy, calm and dignified.',
        author: 'Family Caregiver, Metropolitan Area',
      },
    },
    {
      id: 'anxious',
      tabLabel: 'Dental Anxiety',
      icon: HeartPulse,
      eyebrow: 'Calm & Patient Led',
      headline: 'No clinic sounds, no strangers, no pressure.',
      story:
        'Past bad experiences make dental visits daunting. Here, you set the pace, choose your chair and music, and we stop whenever you ask.',
      benefits: [
        'No clinic smells, sounds, or waiting-room tension',
        'Choose your own chair, your music and your pace',
        'Need a pause? We stop whenever you ask',
      ],
      metrics: [
        { label: 'Pacing Control', value: '100% Yours' },
        { label: 'Waiting Room', value: 'Eliminated' },
        { label: 'Approach', value: 'Gentle & Calm' },
      ],
      whatsappMessage:
        "Hi, I have dental anxiety and would like to ask about a gentle home visit.",
      ctaText: 'Chat With Us on WhatsApp',
      imageSrc: '/images/hero.jpg',
      imageAlt: 'Peaceful, light-filled living room providing calm reassurance for dental phobic patients',
      patientQuote: {
        text: 'I avoided the dentist for years. Being in my own living room changed everything.',
        author: 'Private Patient, Metropolitan Area',
      },
    },
  ];

  const [activePersonaId, setActivePersonaId] = useState<string>('executives');
  const activePersona = personas.find((p) => p.id === activePersonaId) || personas[0];

  return (
    <section id="personas" className="py-24 md:py-32 bg-secondary/20 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="Made for Busy, Private and Nervous People"
          title="Is Home Dentistry Right for You?"
          description="Professional dental care, delivered with the calm and discretion of your own space."
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
