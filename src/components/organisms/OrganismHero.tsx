import * as React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomTag } from '@/components/atoms/AtomTag';
import { AtomText } from '@/components/atoms/AtomText';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { CLINIC_CONFIG, WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <AtomTag variant="gold" className="mb-4">
              Private Dentistry, at Your Door
            </AtomTag>

            <AtomHeading level="display-lg" as="h1" className="text-balance text-foreground">
              The Dentist Who Comes to Your Door.
            </AtomHeading>

            <AtomText variant="lead" className="mt-6 text-balance text-muted-foreground text-base md:text-lg leading-relaxed">
              Skip the traffic, the waiting room and the nerves. Get thorough, unhurried dental care in your own home or office, from one dentist who gives you their full attention.
            </AtomText>

            {/* CTA Group */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <MoleculeWhatsAppCTA
                message={WHATSAPP_MESSAGES.hero}
                size="lg"
                buttonClassName="w-full sm:w-auto text-base font-semibold px-8 h-14 shadow-lg hover:shadow-glow-whatsapp"
              >
                Book My Home Visit on WhatsApp
              </MoleculeWhatsAppCTA>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full border border-border bg-card text-sm font-sans font-medium text-foreground hover:bg-secondary hover:border-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-soft"
              >
                <span>See What We Treat</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </a>
            </div>

            {/* Micro-Reassurance Line */}
            <p className="mt-3.5 font-mono text-[11px] md:text-xs text-muted-foreground">
              Chat directly with the dentist's team · No forms · No obligation
            </p>

            {/* Trust Bar */}
            <div className="mt-10 pt-8 border-t border-border w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
                <span>Licensed Dentist</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
                <span>Sterile, Sealed Instruments</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
                <span>Private by Design</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-card bg-card aspect-[4/3] group">
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/20 pointer-events-none z-10" />

              <img
                src="/images/hero.jpg"
                alt="A dentist setting up a portable treatment kit in a bright, calm living room"
                width={800}
                height={600}
                {...{ fetchpriority: 'high' }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />

              {/* Image Card Status Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-card/95 backdrop-blur-xl border border-primary/40 rounded-xl py-3 px-4 shadow-card z-20">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <span className="font-mono text-xs text-foreground font-medium">
                    Now booking home visits · {CLINIC_CONFIG.serviceArea} | Next available: This Week
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
