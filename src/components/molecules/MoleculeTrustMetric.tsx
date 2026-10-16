import * as React from 'react';
import { cn } from '@/lib/utils';

export interface MoleculeTrustMetricProps {
  value: string;
  label: string;
  sublabel?: string;
  className?: string;
}

export const MoleculeTrustMetric: React.FC<MoleculeTrustMetricProps> = ({
  value,
  label,
  sublabel,
  className,
}) => {
  return (
    <div className={cn('flex flex-col py-2 px-3', className)}>
      <span className="font-serif text-3xl md:text-4xl text-foreground tracking-tight font-normal">
        {value}
      </span>
      <span className="mt-1 font-sans text-sm font-medium text-foreground">
        {label}
      </span>
      {sublabel && (
        <span className="mt-0.5 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
          {sublabel}
        </span>
      )}
    </div>
  );
};
