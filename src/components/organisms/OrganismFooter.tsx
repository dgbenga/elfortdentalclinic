import * as React from 'react';
import { CLINIC_CONFIG, createWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismFooter: React.FC = () => {
  return (
    <footer className="w-full bg-secondary/80 text-foreground border-t border-border pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-border">
          {/* Col 1 (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-serif text-2xl tracking-[0.05em] text-foreground font-normal">
              ELFORT
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary-text-safe font-medium mt-1 mb-3">
              CONCIERGE DENTISTRY
            </span>
            <p className="font-serif italic text-base text-foreground/90 font-normal mb-3">
              {CLINIC_CONFIG.tagline}
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-sm">
              Thorough, unhurried dental care in the comfort of your own home or office, from one licensed dentist who gives you their full attention.
            </p>
            <span className="mt-4 font-mono text-xs text-muted-foreground">
              {CLINIC_CONFIG.licenseInfo}
            </span>
          </div>

          {/* Col 2 (3 cols) */}
          <div className="md:col-span-3 flex flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary-text-safe font-medium mb-3">
              Operating Hours
            </span>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {CLINIC_CONFIG.operatingHours}
            </p>
            <span className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-primary-text-safe font-medium mb-1">
              Service Area
            </span>
            <p className="font-sans text-sm text-muted-foreground">
              {CLINIC_CONFIG.serviceArea} ({CLINIC_CONFIG.serviceRadius})
            </p>
          </div>

          {/* Col 3 (4 cols) */}
          <div className="md:col-span-4 flex flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary-text-safe font-medium mb-3">
              Direct Contact
            </span>
            <p className="font-sans text-sm text-muted-foreground mb-1.5">
              WhatsApp:{' '}
              <a
                href={createWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-primary transition-colors font-medium"
              >
                Chat on WhatsApp
              </a>
            </p>
            <p className="font-sans text-sm text-muted-foreground mb-1.5">
              Phone:{' '}
              <a
                href={`tel:${CLINIC_CONFIG.whatsappNumber}`}
                className="text-foreground underline hover:text-primary transition-colors font-medium"
              >
                {CLINIC_CONFIG.phoneDisplay}
              </a>
            </p>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Email:{' '}
              <a
                href={`mailto:${CLINIC_CONFIG.email}`}
                className="text-foreground underline hover:text-primary transition-colors font-medium"
              >
                {CLINIC_CONFIG.email}
              </a>
            </p>
            <div className="rounded-xl bg-card border border-border p-3.5 text-xs text-muted-foreground leading-relaxed shadow-soft">
              <strong className="text-foreground font-semibold block mb-0.5">Emergency Notice:</strong>
              If you have trouble breathing, severe swelling or an injury to the face or jaw, contact your local emergency services immediately.
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>
              © {new Date().getFullYear()} {CLINIC_CONFIG.name}. All rights reserved.
            </p>
            <span className="hidden sm:inline text-border">·</span>
            <div className="flex items-center gap-3 text-muted-foreground/80">
              <a href="#privacy" className="hover:text-foreground underline transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#terms" className="hover:text-foreground underline transition-colors">Terms of Service</a>
            </div>
          </div>
          <p className="text-center md:text-right max-w-xl text-[11px] text-muted-foreground/80 leading-relaxed">
            The information on this website is general and is not a substitute for an in-person dental assessment.
          </p>
        </div>
      </div>
    </footer>
  );
};
