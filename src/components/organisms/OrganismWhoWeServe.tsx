import * as React from 'react';
import { Briefcase, Users, HeartPulse, Armchair } from 'lucide-react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { MoleculePersonaCard } from '@/components/molecules/MoleculePersonaCard';

export const OrganismWhoWeServe: React.FC = () => {
  const personas = [
    {
      icon: Briefcase,
      targetRole: 'Founders & Executives',
      tagline: 'Zero Billable Time Lost',
      description:
        'Eliminate the 2.5-hour clinic disruption. We set up in your private study or executive office so you can maintain oral health between calls without leaving your desk.',
      benefit: 'Save 2+ hours of travel, parking, and waiting room downtime per visit.',
    },
    {
      icon: Users,
      targetRole: 'Parents & Young Children',
      tagline: 'The Entire Household in One Afternoon',
      description:
        'No car seat struggles, stressful parking decks, or pediatric waiting room meltdowns. Children are treated gently in their familiar home surroundings in pajamas.',
      benefit: 'Sequential family appointments without juggling multiple trips.',
    },
    {
      icon: HeartPulse,
      targetRole: 'Anxious & Dental-Phobic Patients',
      tagline: 'Complete Autonomy & Zero Judgment',
      description:
        'Forget the clinical smells and sound of drills. You control the pace, take breaks whenever you signal, and enjoy calming ambient audio in your favorite armchair.',
      benefit: 'Unhurried, trauma-informed care with no scolding or rushed pacing.',
    },
    {
      icon: Armchair,
      targetRole: 'Seniors & Bedside Care',
      tagline: 'Dignified Comfort Without Transport Trauma',
      description:
        'For aging parents and individuals with limited physical mobility. Our portable ergonomics adapt completely to recliners, sofas, or bedside positions.',
      benefit: 'Comprehensive hygiene and denture care with zero transfer strain.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="Tailored Patient Profiles"
          title="Tailored Care for Discerning Lifestyles"
          description="Designed specifically for individuals and families whose standards demand time efficiency, compassionate gentleness, or complete privacy."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, idx) => (
            <MoleculePersonaCard
              key={idx}
              icon={persona.icon}
              targetRole={persona.targetRole}
              tagline={persona.tagline}
              description={persona.description}
              benefit={persona.benefit}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
