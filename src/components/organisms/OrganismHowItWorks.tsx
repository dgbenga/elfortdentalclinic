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
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/20 border-t border-border relative">
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
                className="group relative flex flex-col rounded-2xl bg-card/60 backdrop-blur-md p-8 md:p-10 border border-border shadow-soft transition-all duration-300 hover:shadow-hover hover:border-primary/50 hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-13 h-13 rounded-2xl bg-secondary border border-border/80 flex items-center justify-center text-primary group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-3xl font-light text-primary/60 group-hover:text-primary transition-colors">
                    {step.number}
                  </span>
                </div>

                <AtomHeading level="headline-sm" className="text-foreground font-serif">
                  {step.title}
                </AtomHeading>

                <AtomText variant="body" className="mt-4 text-muted-foreground leading-relaxed">
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
