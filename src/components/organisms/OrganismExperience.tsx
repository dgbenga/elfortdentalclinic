import * as React from 'react';
import { Check, ShieldCheck, Home } from 'lucide-react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { AtomHeading } from '@/components/atoms/AtomHeading';

export const OrganismExperience: React.FC = () => {
  const brings = [
    'Whisper-quiet ergonomic mobile treatment unit & self-contained vacuum',
    'Ultra-low-dose handheld digital x-ray sensor with instant tablet imaging',
    'Hospital-grade autoclave sterilized instrument cassettes opened in your presence',
    'Surgical-grade medical surface draping & active HEPA air filtration',
    'Calming ambient noise-dampening audio & optional silk eye pillows',
    'Complete biomedical disposal containment removed immediately post-visit',
  ];

  const provides = [
    'A standard 6 ft × 6 ft space in your living room, study, or bedroom',
    'One standard household electrical wall outlet (110V or 220V)',
    'Access to a standard bathroom or kitchen sink for clinician hand hygiene',
    'Your favorite sofa, recliner, or armchair (our mobile ergonomics adapt to you)',
    'A calm, pet-secured environment during active clinical treatment',
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="Clinical Logistics"
          title="The In-Home Visit: What We Bring & What You Provide"
          description="Dispelling the myth of cumbersome equipment. We transform any quiet corner of your residence into a hospital-grade dental suite in under 10 minutes."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* What We Bring */}
          <div className="rounded-xl bg-card border border-border p-8 md:p-10 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary-text-safe">
                <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-primary-text-safe font-medium">
                  Complete Clinical Rigor
                </span>
                <AtomHeading level="headline-sm" className="text-foreground">
                  What Elfort Brings
                </AtomHeading>
              </div>
            </div>

            <ul className="space-y-4">
              {brings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Provide */}
          <div className="rounded-xl bg-secondary/50 border border-border p-8 md:p-10 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary-text-safe border border-border">
                <Home className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                  Zero Special Renovation
                </span>
                <AtomHeading level="headline-sm" className="text-foreground">
                  What You Provide
                </AtomHeading>
              </div>
            </div>

            <ul className="space-y-4">
              {provides.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
