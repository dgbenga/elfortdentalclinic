import * as React from 'react';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismStickyHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full h-20 bg-background/90 backdrop-blur-md border-b border-border/80 transition-all">
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
          <span className="font-serif text-2xl md:text-[26px] tracking-[0.05em] text-foreground font-normal leading-none group-hover:text-primary-text-safe transition-colors">
            ELFORT
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-medium mt-1">
            DENTAL CLINIC • CONCIERGE
          </span>
        </a>

        {/* Desktop Anchor Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          <a
            href="#services"
            className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1 py-0.5"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1 py-0.5"
          >
            How It Works
          </a>
          <a
            href="#experience"
            className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1 py-0.5"
          >
            The Visit
          </a>
          <a
            href="#about"
            className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1 py-0.5"
          >
            About
          </a>
          <a
            href="#faq"
            className="text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1 py-0.5"
          >
            FAQ
          </a>
        </nav>

        {/* Top CTA */}
        <div className="flex items-center gap-3">
          <MoleculeWhatsAppCTA
            message={WHATSAPP_MESSAGES.hero}
            size="sm"
            buttonClassName="h-9 px-4 text-xs font-semibold"
          >
            <span className="hidden sm:inline">Inquire on WhatsApp</span>
            <span className="sm:hidden">Inquire</span>
          </MoleculeWhatsAppCTA>
        </div>
      </div>
    </header>
  );
};
