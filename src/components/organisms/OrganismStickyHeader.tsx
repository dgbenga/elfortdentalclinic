import * as React from 'react';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismStickyHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full h-20 bg-background/85 backdrop-blur-xl border-b border-border/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm py-1"
          aria-label="Elfort Dental Clinic Concierge Home"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="font-serif text-2xl md:text-[26px] tracking-[0.06em] text-foreground font-normal leading-none group-hover:text-primary transition-colors">
              ELFORT
            </span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground font-medium mt-1 pl-3.5">
            DENTAL CLINIC • CONCIERGE
          </span>
        </a>

        {/* Desktop Anchor Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          <a
            href="#services"
            className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1.5 py-1"
          >
            Services
          </a>
          <a
            href="#personas"
            className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1.5 py-1"
          >
            Who We Serve
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1.5 py-1"
          >
            The Protocol
          </a>
          <a
            href="#experience"
            className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1.5 py-1"
          >
            The Suite
          </a>
          <a
            href="#about"
            className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1.5 py-1"
          >
            Clinician
          </a>
          <a
            href="#faq"
            className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1.5 py-1"
          >
            FAQ
          </a>
        </nav>

        {/* Top CTA */}
        <div className="flex items-center gap-3">
          <MoleculeWhatsAppCTA
            message={WHATSAPP_MESSAGES.hero}
            size="sm"
            buttonClassName="h-10 px-5 text-xs font-semibold tracking-wide shadow-md"
          >
            <span className="hidden sm:inline">Inquire on WhatsApp</span>
            <span className="sm:hidden">Inquire</span>
          </MoleculeWhatsAppCTA>
        </div>
      </div>
    </header>
  );
};
