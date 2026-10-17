import * as React from 'react';
import { Check, ShieldCheck, Home } from 'lucide-react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { AtomHeading } from '@/components/atoms/AtomHeading';

export const OrganismExperience: React.FC = () => {
  const brings = [
    'Portable treatment equipment for professional-grade care',
    'Sterile, sealed instruments, opened in front of you',
    'Protective barriers and full infection-control supplies',
    'Lighting and tools for a thorough exam',
  ];

  const provides = [
    'A comfortable chair in a well-lit room',
    'A standard power outlet nearby',
    'A little time. We never rush.',
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="What to Expect"
          title="We Bring the Clinic. You Bring the Chair."
          description="Everything needed for safe, professional care arrives with your dentist."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* What We Bring */}
          <div className="rounded-2xl bg-card/70 backdrop-blur-md border border-primary/20 p-8 md:p-12 shadow-card hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-primary-text-safe font-medium">
                  Professional Setup
                </span>
                <AtomHeading level="headline-sm" className="text-foreground">
                  What We Bring
                </AtomHeading>
              </div>
            </div>

            <ul className="space-y-4">
              {brings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Provide */}
          <div className="rounded-2xl bg-secondary/40 backdrop-blur-md border border-border p-8 md:p-12 shadow-card hover:border-border/80 transition-colors">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary">
                <Home className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                  Simple Comfort
                </span>
                <AtomHeading level="headline-sm" className="text-foreground">
                  What You Provide
                </AtomHeading>
              </div>
            </div>

            <ul className="space-y-4">
              {provides.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing Line & Patient Quote */}
        <div className="mt-12 text-center max-w-3xl mx-auto space-y-4">
          <p className="font-sans text-sm md:text-base text-foreground/90 font-medium">
            When we’re done, we pack up and leave your space exactly as we found it.
          </p>
          <div className="pt-4 border-t border-border/80">
            <p className="font-serif italic text-base md:text-lg text-muted-foreground">
              “The setup took ten minutes in my dining room, completely spotless before and after.”
            </p>
            <span className="mt-1 block font-mono text-xs text-primary-text-safe">
              — James T., Metropolitan Area
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
