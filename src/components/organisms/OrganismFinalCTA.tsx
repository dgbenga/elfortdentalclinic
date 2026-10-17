import * as React from 'react';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomText } from '@/components/atoms/AtomText';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { CLINIC_CONFIG, WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismFinalCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-card/90 backdrop-blur-xl text-foreground p-10 md:p-16 lg:p-20 border border-primary/40 shadow-glow-gold text-center">
          {/* Ambient Lighting Gradients */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 blur-[130px] pointer-events-none rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-whatsapp/10 blur-[120px] pointer-events-none rounded-full"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-text-safe font-medium mb-4">
              Limited Visit Slots Each Week
            </span>

            <AtomHeading
              level="display-lg"
              as="h2"
              className="text-foreground text-balance"
            >
              Ready for Dental Care on Your Terms?
            </AtomHeading>

            <AtomText
              variant="lead"
              className="mt-6 text-muted-foreground text-balance text-base md:text-lg leading-relaxed"
            >
              Message us now. Tell us what you need and we’ll find a time that fits your day.
            </AtomText>

            <div className="mt-10">
              <MoleculeWhatsAppCTA
                message={WHATSAPP_MESSAGES.hero}
                variant="whatsapp-forest"
                size="lg"
                buttonClassName="h-14 px-10 text-base md:text-lg font-semibold shadow-xl hover:shadow-glow-whatsapp"
              >
                Book My Home Visit on WhatsApp
              </MoleculeWhatsAppCTA>
            </div>

            <p className="mt-4 font-mono text-xs text-muted-foreground">
              Prefer to call?{' '}
              <a href={`tel:${CLINIC_CONFIG.whatsappNumber}`} className="text-foreground underline hover:text-primary transition-colors">
                {CLINIC_CONFIG.phoneDisplay}
              </a>
              {' '}·{' '}
              <a href={`mailto:${CLINIC_CONFIG.email}`} className="text-foreground underline hover:text-primary transition-colors">
                {CLINIC_CONFIG.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
