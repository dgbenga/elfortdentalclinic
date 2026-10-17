import * as React from 'react';
import { MessageSquare, ClipboardCheck, Sparkles } from 'lucide-react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomText } from '@/components/atoms/AtomText';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismHowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Message Us on WhatsApp',
      tag: 'Takes about 2 minutes',
      description:
        'Tell us what you need and where you are. A real person replies within minutes.',
    },
    {
      number: '02',
      icon: ClipboardCheck,
      title: 'Get Your Plan and Price',
      tag: 'No surprises',
      description:
        'We confirm what can be done at home, share a clear estimate, and agree a time that suits you.',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'We Arrive and Take Care of You',
      tag: 'Back to your day',
      description:
        'Your dentist arrives on time, sets up in a corner of your room, treats you without rushing, and leaves your space tidy.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/20 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="Simple From the Start"
          title="Three Steps to a Dentist at Your Door."
          description="No portals. No paperwork marathon. Just a conversation."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl bg-card/80 backdrop-blur-md p-8 md:p-10 border border-border shadow-soft transition-all duration-300 hover:shadow-hover hover:border-primary/50 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-secondary border border-border/80 flex items-center justify-center text-primary group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-3xl font-light text-primary/60 group-hover:text-primary transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary-text-safe font-medium">
                    {step.tag}
                  </span>

                  <AtomHeading level="headline-sm" className="mt-2 text-foreground font-serif">
                    {step.title}
                  </AtomHeading>

                  <AtomText variant="body" className="mt-4 text-muted-foreground leading-relaxed">
                    {step.description}
                  </AtomText>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <MoleculeWhatsAppCTA
            message={WHATSAPP_MESSAGES.hero}
            variant="whatsapp-forest"
            size="default"
            buttonClassName="h-13 px-8 font-semibold shadow-md"
          >
            Start Step 1 on WhatsApp
          </MoleculeWhatsAppCTA>
        </div>
      </div>
    </section>
  );
};
