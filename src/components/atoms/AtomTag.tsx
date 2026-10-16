import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AtomTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'muted' | 'obsidian';
}

/**
 * AtomTag: Strict Anti-Pill Law compliant metadata label.
 * Never renders rounded pill capsules or emoji chips.
 * Uses refined uppercase Geist Mono tracking.
 */
export const AtomTag = React.forwardRef<HTMLSpanElement, AtomTagProps>(
  ({ className, variant = 'gold', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.15em] font-medium',
          variant === 'gold' && 'text-primary-text-safe',
          variant === 'muted' && 'text-muted-foreground',
          variant === 'obsidian' && 'text-foreground',
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
AtomTag.displayName = 'AtomTag';
