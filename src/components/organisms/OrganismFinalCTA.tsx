import * as React from 'react';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomText } from '@/components/atoms/AtomText';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismFinalCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-dark-surface text-dark-foreground p-10 md:p-16 lg:p-20 border border-primary/20 shadow-2xl text-center">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 blur-[100px] pointer-events-none rounded-full"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
              Private Concierge Reservation
            </span>

            <AtomHeading
              level="display-lg"
              as="h2"
              className="text-dark-foreground text-balance"
            >
              Experience Dental Care on Your Terms.
            </AtomHeading>

            <AtomText
              variant="lead"
              className="mt-6 text-dark-muted text-balance text-base md:text-lg"
            >
              Limited in-home appointments scheduled each week to guarantee unhurried, private clinical care for every individual and family.
            </AtomText>

            <div className="mt-10">
              <MoleculeWhatsAppCTA
                message={WHATSAPP_MESSAGES.hero}
                variant="whatsapp-forest"
                size="lg"
                buttonClassName="h-14 px-10 text-base md:text-lg font-semibold shadow-xl"
              >
                Inquire & Reserve Your Visit on WhatsApp
              </MoleculeWhatsAppCTA>
            </div>

            <p className="mt-4 font-mono text-xs text-dark-muted">
              Direct WhatsApp chat with our dental concierge • No cumbersome forms • Response in minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
