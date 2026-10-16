import * as React from 'react';
import { CLINIC_CONFIG } from '@/lib/constants';

export const OrganismAnnouncementStrip: React.FC = () => {
  return (
    <aside className="w-full bg-secondary border-b border-border/80 py-2.5 px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-mono text-[11px] md:text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
          <span>Now Scheduling Private Home Visits in {CLINIC_CONFIG.serviceArea}</span>
        </span>
        <span className="hidden md:inline text-border" aria-hidden="true">•</span>
        <span className="hidden md:inline">State Dental Board Licensed & Insured</span>
        <span className="hidden lg:inline text-border" aria-hidden="true">•</span>
        <span className="hidden lg:inline">{CLINIC_CONFIG.operatingHours}</span>
      </div>
    </aside>
  );
};
