import * as React from 'react';
import { WhatsAppIcon } from '@/components/atoms/AtomIcon';
import { createWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismFloatingButton: React.FC = () => {
  const url = createWhatsAppUrl(WHATSAPP_MESSAGES.hero);

  return (
    <aside
      className="hidden md:flex fixed bottom-8 right-8 z-40 items-center"
      aria-label="Direct Concierge Chat Trigger"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat With Us on WhatsApp"
        className="group relative flex items-center gap-2.5 h-13 pl-4 pr-5 rounded-full bg-whatsapp text-white shadow-xl transition-all duration-300 hover:scale-103 hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {/* Pulsing subtle ring */}
        <span
          className="absolute -inset-1 rounded-full border-2 border-primary/40 animate-ping opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <WhatsAppIcon size={22} />
        <span className="font-sans text-xs font-semibold tracking-wide">
          Chat With Us
        </span>
      </a>
    </aside>
  );
};
