import * as React from 'react';
import { MessageSquare, ClipboardCheck, Sparkles } from 'lucide-react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomText } from '@/components/atoms/AtomText';

export const OrganismHowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Direct WhatsApp Connection',
      description:
        'Send a brief message with your neighborhood and care needs. Our clinical team confirms scheduling availability and provides transparent, upfront fee estimates in minutes.',
    },
    {
      number: '02',
      icon: ClipboardCheck,
      title: 'Concierge Virtual Screening',
      description:
        'Share previous records or specific concerns securely. Dr. Adebayo personally reviews your history and curates the exact sterilized mobile instrument suite for your residence.',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Unhurried Home Arrival',
      description:
        'We arrive in an unmarked vehicle, set up our whisper-quiet medical suite in 10 minutes, and deliver meticulous, comfortable dental care at your personal pace.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="The Experience Protocol"
          title="From First Message to Treatment in Three Simple Steps"
          description="Zero tedious intake paperwork or rigid booking engines. Just direct, personalized coordination with your doctor."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col rounded-lg bg-card p-8 border border-border shadow-soft transition-all duration-300 hover:shadow-card hover:border-primary/40"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary-text-safe">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-2xl font-light text-primary/60">
                    {step.number}
                  </span>
                </div>

                <AtomHeading level="headline-sm" className="text-foreground">
                  {step.title}
                </AtomHeading>

                <AtomText variant="body" className="mt-3">
                  {step.description}
                </AtomText>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
