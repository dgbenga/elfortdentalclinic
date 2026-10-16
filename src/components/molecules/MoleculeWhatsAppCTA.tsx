import * as React from 'react';
import { AtomButton } from '@/components/atoms/AtomButton';
import { WhatsAppIcon } from '@/components/atoms/AtomIcon';
import { createWhatsAppUrl } from '@/lib/constants';
import { cn } from '@/lib/utils';

export interface MoleculeWhatsAppCTAProps {
  message: string;
  children?: React.ReactNode;
  variant?: 'whatsapp-forest' | 'whatsapp-bright';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  showSubtext?: boolean;
  subtext?: string;
  className?: string;
  buttonClassName?: string;
  ariaLabel?: string;
}

export const MoleculeWhatsAppCTA: React.FC<MoleculeWhatsAppCTAProps> = ({
  message,
  children = 'Request a Home Visit on WhatsApp',
  variant = 'whatsapp-forest',
  size = 'default',
  showSubtext = false,
  subtext = 'Direct reply • Usually in minutes',
  className,
  buttonClassName,
  ariaLabel = 'Contact Elfort Dental Clinic on WhatsApp',
}) => {
  const url = createWhatsAppUrl(message);

  return (
    <div className={cn('inline-flex flex-col items-center gap-1.5', className)}>
      <AtomButton
        asChild
        variant={variant}
        size={size}
        className={cn('gap-2.5 shadow-md hover:shadow-lg', buttonClassName)}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          <WhatsAppIcon size={size === 'lg' ? 22 : 18} />
          <span>{children}</span>
        </a>
      </AtomButton>
      {showSubtext && (
        <span className="font-mono text-[11px] text-muted-foreground tracking-tight">
          {subtext}
        </span>
      )}
    </div>
  );
};
