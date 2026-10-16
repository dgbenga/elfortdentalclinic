import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomText } from '@/components/atoms/AtomText';
import { cn } from '@/lib/utils';

export interface MoleculePersonaCardProps {
  icon: LucideIcon;
  targetRole: string;
  tagline: string;
  description: string;
  benefit: string;
  className?: string;
}

export const MoleculePersonaCard: React.FC<MoleculePersonaCardProps> = ({
  icon: Icon,
  targetRole,
  tagline,
  description,
  benefit,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-between rounded-lg bg-card p-7 border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-card',
        className
      )}
    >
      <div>
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary-text-safe mb-5">
          <Icon className="w-5 h-5" strokeWidth={1.75} />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary-text-safe font-medium">
          {targetRole}
        </span>
        <AtomHeading level="headline-sm" className="mt-1 text-foreground">
          {tagline}
        </AtomHeading>
        <AtomText variant="body" className="mt-3">
          {description}
        </AtomText>
      </div>

      <div className="mt-6 pt-5 border-t border-border/70">
        <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80 mb-1">
          Direct Advantage
        </span>
        <span className="font-sans text-xs font-semibold text-foreground">
          {benefit}
        </span>
      </div>
    </div>
  );
};
