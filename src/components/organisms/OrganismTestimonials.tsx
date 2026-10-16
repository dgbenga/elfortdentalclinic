import * as React from 'react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { MoleculeTestimonial } from '@/components/molecules/MoleculeTestimonial';

export const OrganismTestimonials: React.FC = () => {
  const stories = [
    {
      quote:
        'Having Dr. Adebayo come to our residence was life-changing for our family. Both children had their cleanings in their pajamas without a single tear, and I answered work emails in the adjoining room. We will never return to a clinic waiting room.',
      author: 'Eleanor M.',
      role: 'Mother of Two',
      location: 'Oakridge Estates',
    },
    {
      quote:
        'As someone who avoided the dentist for six years due to acute dental panic, the unhurried gentleness of this visit was remarkable. Dr. Adebayo was completely patient, explained every step, and treated me in my favorite living room armchair.',
      author: 'Marcus V.',
      role: 'Managing Partner',
      location: 'Financial District',
    },
    {
      quote:
        'My mother has severe arthritis and getting her in and out of traditional clinic chairs was traumatic. Elfort provided dignified, meticulous oral hygiene right at her bedside. Indispensable for elderly family members.',
      author: 'Sarah K.',
      role: 'Family Caregiver',
      location: 'West End',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary/20 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="Consented Patient Accounts"
          title="Private Care, Praised by Patients"
          description="Read authentic experiences from patients who transitioned their preventive and restorative dental care to the comfort of their residences."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <MoleculeTestimonial
              key={idx}
              quote={story.quote}
              author={story.author}
              role={story.role}
              location={story.location}
              className="bg-card/70 backdrop-blur-md border-border/80 hover:border-primary/50"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
