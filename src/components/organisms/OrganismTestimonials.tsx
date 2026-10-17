import * as React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MoleculeSectionHeader } from '@/components/molecules/MoleculeSectionHeader';
import { MoleculeTestimonial } from '@/components/molecules/MoleculeTestimonial';

export const OrganismTestimonials: React.FC = () => {
  const stories = [
    {
      quote:
        'I used to lose half a day to one appointment. Now it takes an hour and I never leave my house.',
      author: 'Marcus V.',
      role: 'Time-Poor Professional',
      location: 'Metropolitan Area',
    },
    {
      quote:
        'I avoided the dentist for years because of clinic anxiety. Being in my own living room changed everything. Calm, unhurried, and completely gentle.',
      author: 'Eleanor M.',
      role: 'Anxious Patient',
      location: 'Metropolitan Area',
    },
    {
      quote:
        'Getting my mother to a clinic was always a struggle with mobility. Having the dentist come directly to her armchair made it easy and dignified.',
      author: 'Sarah K.',
      role: 'Family Caregiver',
      location: 'Metropolitan Area',
    },
  ];

  const promises = [
    'A clear price before we start. Always.',
    'No pressure, no upselling. We recommend only what you need.',
    'If something needs a clinic, we’ll say so and help you get there.',
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary/20 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MoleculeSectionHeader
          eyebrow="Patient Voices"
          title="What Our Patients Say."
          description="Real words from real patients, shared with permission."
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
              className="bg-card/70 backdrop-blur-md border-border/80 hover:border-primary/50 shadow-soft"
            />
          ))}
        </div>

        {/* Our Promise Section */}
        <div className="mt-16 rounded-2xl bg-card border border-primary/20 p-8 md:p-10 shadow-soft">
          <div className="text-center mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-text-safe font-medium">
              Our Patient Guarantee
            </span>
            <h3 className="font-serif text-2xl text-foreground mt-1">
              Our Clinical Promise to Every Patient
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promises.map((promise, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                <span className="font-sans text-sm md:text-base text-foreground/90 font-medium">
                  {promise}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
