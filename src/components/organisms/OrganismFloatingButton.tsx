import * as React from 'react';
import { WhatsAppIcon } from '@/components/atoms/AtomIcon';
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismFloatingButton: React.FC = () => {
  const url = createWhatsAppUrl(WHATSAPP_MESSAGES.hero);

  return (
    <aside
      className="hidden md:flex fixed bottom-8 right-8 z-40 items-center group"
      aria-label="Direct Concierge Chat Trigger"
    >
      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-dark-surface px-3 py-1.5 font-mono text-xs text-dark-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 border border-border/20">
        Direct Concierge Chat
      </span>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Elfort Dental Clinic Concierge on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {/* Pulsing subtle gold ring */}
        <span
          className="absolute -inset-1 rounded-full border-2 border-primary/40 animate-ping opacity-60 pointer-events-none"
          aria-hidden="true"
        />
        <WhatsAppIcon size={26} />
      </a>
    </aside>
  );
};
