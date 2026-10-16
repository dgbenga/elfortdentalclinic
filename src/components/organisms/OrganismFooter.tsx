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
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary-text-safe font-medium mt-1 mb-4">
              DENTAL CLINIC • CONCIERGE
            </span>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-sm">
              Delivering unhurried, hospital-grade dental treatments directly to private residences, executive offices, and bedsides. Clinical excellence with absolute discretion.
            </p>
            <span className="mt-4 font-mono text-xs text-muted-foreground">
              {CLINIC_CONFIG.licenseInfo}
            </span>
          </div>

          {/* Col 2 (3 cols) */}
          <div className="md:col-span-3 flex flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary-text-safe font-medium mb-3">
              Operating Schedule
            </span>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {CLINIC_CONFIG.operatingHours}
            </p>
            <span className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-primary-text-safe font-medium mb-1">
              Coverage Radius
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
            <p className="font-sans text-sm text-muted-foreground mb-2">
              Concierge Desk:{' '}
              <a
                href={createWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-primary transition-colors font-medium"
              >
                Chat on WhatsApp
              </a>
            </p>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Direct Email:{' '}
              <a
                href={`mailto:${CLINIC_CONFIG.email}`}
                className="text-foreground underline hover:text-primary transition-colors font-medium"
              >
                {CLINIC_CONFIG.email}
              </a>
            </p>
            <div className="rounded-xl bg-card border border-border p-3.5 text-xs text-muted-foreground leading-relaxed shadow-soft">
              <strong className="text-foreground font-semibold block mb-0.5">Emergency Notice:</strong>
              For severe facial trauma, uncontrollable hemorrhaging, or respiratory distress, call 911 or proceed to the nearest emergency room immediately.
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Elfort Dental Clinic. All rights reserved.
          </p>
          <p className="text-center md:text-right max-w-xl text-[11px] text-muted-foreground/80">
            The clinical information on this website is for educational purposes and does not constitute a doctor-patient relationship until an in-person clinical examination is conducted.
          </p>
        </div>
      </div>
    </footer>
  );
};
