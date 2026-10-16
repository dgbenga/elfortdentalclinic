import * as React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomText } from '@/components/atoms/AtomText';
import { createWhatsAppUrl } from '@/lib/constants';
import { cn } from '@/lib/utils';

export interface MoleculeServiceCardProps {
  title: string;
  category: string;
  description: string;
  scope: string[];
  whatsappMessage: string;
  ctaText?: string;
  className?: string;
}

export const MoleculeServiceCard: React.FC<MoleculeServiceCardProps> = ({
  title,
  category,
  description,
  scope,
  whatsappMessage,
  ctaText = 'Inquire for Visit →',
  className,
}) => {
  const url = createWhatsAppUrl(whatsappMessage);

  return (
    <div
      className={cn(
        'group flex flex-col justify-between rounded-lg bg-card p-8 border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-hover',
        className
      )}
    >
      <div>
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary-text-safe font-medium">
          {category}
        </span>
        <AtomHeading level="headline-sm" className="mt-2 text-foreground">
          {title}
        </AtomHeading>
        <AtomText variant="body" className="mt-3">
          {description}
        </AtomText>

        <div className="mt-6 pt-6 border-t border-border/60">
          <span className="block font-sans text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
            Clinical Scope Included:
          </span>
          <ul className="space-y-2.5">
            {scope.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-whatsapp hover:text-whatsapp-hover transition-colors group-hover:translate-x-0.5 duration-200"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
