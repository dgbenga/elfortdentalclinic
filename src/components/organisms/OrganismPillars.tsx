import * as React from 'react';
import { ShieldCheck, HeartHandshake, EyeOff } from 'lucide-react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomText } from '@/components/atoms/AtomText';

export const OrganismPillars: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Hospital-Grade Precision',
      subtitle: 'Clinical Authority',
      body: 'We transport complete clinical capabilities into your home—from ultra-low-radiation digital sensors to biological autoclave monitored instruments. Zero compromises on clinical rigor.',
    },
    {
      icon: HeartHandshake,
      title: 'Calm, Unhurried Appointments',
      subtitle: 'Zero Anxiety',
      body: 'Never feel rushed, judged, or trapped in a noisy waiting room. You control the pace of every treatment in your own living room, armchair, or bedroom.',
    },
    {
      icon: EyeOff,
      title: 'Absolute Privacy & Convenience',
      subtitle: 'Boutique Discretion',
      body: 'Unmarked arrivals, confidential treatment, and flexible scheduling designed around demanding executive and family itineraries.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="The Concierge Standard"
          title="Dentistry Reimagined Around Your Life"
          description="Combining the clinical rigor of an elite private practice with the serene comfort and discretion of high-touch hospitality."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex flex-col rounded-lg bg-card p-8 border border-border shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-hover"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary-text-safe mb-6">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary-text-safe font-medium">
                  {pillar.subtitle}
                </span>
                <AtomHeading level="headline-sm" className="mt-2 text-foreground">
                  {pillar.title}
                </AtomHeading>
                <AtomText variant="body" className="mt-3.5">
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
