import * as React from 'react';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismMobileBar: React.FC = () => {
  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden h-[68px] bg-background/95 backdrop-blur-md border-t border-border px-4 flex items-center justify-between shadow-lg"
      aria-label="Mobile Quick Booking"
    >
      <div className="flex flex-col">
        <span className="font-serif text-sm font-medium text-foreground leading-none">
          Elfort Concierge
        </span>
        <span className="font-mono text-[10px] text-muted-foreground mt-0.5">
          Replies in minutes
        </span>
      </div>

      <MoleculeWhatsAppCTA
        message={WHATSAPP_MESSAGES.hero}
        size="sm"
        buttonClassName="h-11 px-5 text-xs font-semibold shadow-md min-h-[44px]"
      >
        Book on WhatsApp
      </MoleculeWhatsAppCTA>
    </aside>
  );
};
