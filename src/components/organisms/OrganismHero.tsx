import * as React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomTag } from '@/components/atoms/AtomTag';
import { AtomText } from '@/components/atoms/AtomText';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32">
      {/* Ambient Lighting Gradients */}
      <div
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-whatsapp/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <AtomTag variant="gold">
                Private In-Home Dental Care
              </AtomTag>
            </div>

            <AtomHeading level="display-lg" as="h1" className="text-balance text-foreground">
              Exceptional Dental Care, <span className="italic font-light text-primary">Delivered</span> to Your Doorstep.
            </AtomHeading>

            <AtomText variant="lead" className="mt-6 text-balance text-muted-foreground text-base md:text-lg leading-relaxed">
              Experience unhurried, hospital-grade dental treatments in the quiet comfort of your residence or private office. Tailored for busy executives, families, and patients seeking calm, anxiety-free care.
            </AtomText>

            {/* CTA Group */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <MoleculeWhatsAppCTA
                message={WHATSAPP_MESSAGES.hero}
                size="lg"
                buttonClassName="w-full sm:w-auto text-base font-semibold px-8 h-14 shadow-lg hover:shadow-glow-whatsapp"
              >
                Request a Home Visit on WhatsApp
              </MoleculeWhatsAppCTA>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-full border border-border/80 bg-secondary/50 backdrop-blur-sm text-sm font-sans font-medium text-foreground hover:bg-secondary hover:border-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Explore Treatments & Pricing</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </a>
            </div>

            {/* Micro-Reassurance Line */}
            <p className="mt-3.5 font-mono text-[11px] md:text-xs text-muted-foreground">
              Direct response from our clinical team • Replies within minutes • No obligation
            </p>

            {/* Trust Micro-Bar */}
            <div className="mt-10 pt-8 border-t border-border/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
                <span>Hospital-Grade Sterilization</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
                <span>Board-Certified Clinicians</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
                <span>Zero Waiting Room Anxiety</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-border/90 shadow-2xl bg-card aspect-[4/3] group">
              {/* Subtle gold border glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/20 pointer-events-none z-10" />

              <img
                src="/images/hero.jpg"
                alt="Quiet luxury in-home dental suite with compact medical unit beside a comfortable armchair in a sunlit residence"
                width={800}
                height={600}
                {...{ fetchpriority: 'high' }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />

              {/* Glassmorphism Live Booking Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-card/95 backdrop-blur-xl border border-primary/40 rounded-xl py-3 px-4 shadow-card z-20">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <span className="font-mono text-xs text-foreground font-medium">
                    Now Booking • 4 Home Slots Available This Week
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
