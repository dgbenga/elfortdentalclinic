import * as React from 'react';
import { MoleculeTrustMetric } from '@/components/molecules/MoleculeTrustMetric';
import { CLINIC_CONFIG } from '@/lib/constants';

export const OrganismTrustStrip: React.FC = () => {
  return (
    <section className="w-full bg-card border-y border-border py-8 md:py-10 shadow-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
          <MoleculeTrustMetric
            value={CLINIC_CONFIG.experienceYears}
            label="Years of Experience"
            sublabel="Licensed Dentist Care"
            className="pt-4 md:pt-0"
          />
          <MoleculeTrustMetric
            value={CLINIC_CONFIG.homeVisitsCount}
            label="Home Visits Completed"
            sublabel="Private Residences & Offices"
            className="pt-4 md:pt-0 md:pl-8"
          />
          <MoleculeTrustMetric
            value="100%"
            label="Sterile, Sealed Instruments"
            sublabel="Opened in Front of You"
            className="pt-4 md:pt-0 md:pl-8"
          />
          <MoleculeTrustMetric
            value={CLINIC_CONFIG.rating}
            label="Patient Satisfaction"
            sublabel={`From ${CLINIC_CONFIG.ratingCount} Patient Reviews`}
            className="pt-4 md:pt-0 md:pl-8"
          />
        </div>
      </div>
    </section>
  );
};
