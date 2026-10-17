import * as React from 'react';
import { ShieldCheck, HeartHandshake, EyeOff } from 'lucide-react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomText } from '@/components/atoms/AtomText';

export const OrganismPillars: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'A Real Dentist. Real Standards.',
      subtitle: 'Clinical Authority',
      body: 'You are treated by a licensed dentist from start to finish, never passed between staff. Instruments arrive sterile and sealed, and every visit follows strict infection-control protocols.',
    },
    {
      icon: HeartHandshake,
      title: 'Calm From the First Minute.',
      subtitle: 'Zero Anxiety',
      body: 'No waiting-room tension, no clinic smells, no clock-watching. Choose your chair, your music and your pace. Need a pause? You get one.',
    },
    {
      icon: EyeOff,
      title: 'Private by Design.',
      subtitle: 'Boutique Discretion',
      body: 'Discreet scheduling, one-to-one appointments and careful handling of your information. Made for busy professionals, families and anyone who values privacy.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="Why Patients Switch"
          title="Everything Good About a Clinic. None of the Hassle."
          description="Professional standards, delivered with the calm of your own space."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col rounded-2xl bg-card/60 backdrop-blur-md p-8 md:p-10 border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/80 border border-border/60 flex items-center justify-center text-primary mb-7 transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-text-safe font-medium">
                  {pillar.subtitle}
                </span>
                <AtomHeading level="headline-sm" className="mt-2 text-foreground font-serif">
                  {pillar.title}
                </AtomHeading>
                <AtomText variant="body" className="mt-4 text-muted-foreground leading-relaxed">
                  {pillar.body}
                </AtomText>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
