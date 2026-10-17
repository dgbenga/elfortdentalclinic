import * as React from 'react';
import { Award, ShieldCheck, FileCheck, Stethoscope } from 'lucide-react';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomTag } from '@/components/atoms/AtomTag';
import { AtomText } from '@/components/atoms/AtomText';
import { MoleculeWhatsAppCTA } from '@/components/molecules/MoleculeWhatsAppCTA';
import { CLINIC_CONFIG, WHATSAPP_MESSAGES } from '@/lib/constants';

export const OrganismAboutDoctor: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Doctor Portrait Left (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card aspect-[4/3] group">
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/20 pointer-events-none z-10" />

              <img
                src="/images/doctor.jpg"
                alt="Dr. Olufemi Adebayo, a licensed home-visit dentist, smiling in a clean white coat"
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-xl border border-primary/30 rounded-xl p-3.5 shadow-card z-20">
                <span className="block font-sans text-sm font-semibold text-foreground">
                  {CLINIC_CONFIG.doctorName}
                </span>
                <span className="block font-mono text-[11px] text-primary-text-safe uppercase tracking-wider mt-0.5">
                  Lead Clinician & Founder
                </span>
              </div>
            </div>
          </div>

          {/* Bio & Credentials Right (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <AtomTag variant="gold" className="mb-4">
              Meet Your Dentist
            </AtomTag>

            <AtomHeading level="headline-lg" as="h2" className="text-foreground">
              {CLINIC_CONFIG.doctorName}
            </AtomHeading>

            <p className="mt-2 font-mono text-xs md:text-sm text-primary-text-safe font-medium">
              {CLINIC_CONFIG.experienceYears} years caring for patients · Licence #DEN-482910
            </p>

            {/* Doctor Quote */}
            <blockquote className="mt-6 pl-4 border-l-2 border-primary italic font-serif text-lg md:text-xl text-foreground/90 leading-relaxed">
              “Good dentistry shouldn’t mean sitting in traffic, then in a waiting room, then being rushed through. At home, I can give you what a busy clinic can’t: time, calm and my full attention.”
            </blockquote>

            <AtomText variant="body" className="mt-6 text-base text-muted-foreground leading-relaxed">
              Trained at top clinical dental schools with extensive experience in preventive care and gentle restorative dentistry, Dr. Adebayo moved to private home visits to eliminate the rush and anxiety of high-volume clinics. Every patient gets one dentist, one appointment at a time, and no overlapping bookings.
            </AtomText>

            {/* Verified Credentials Box */}
            <div className="mt-8 pt-6 border-t border-border w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-md border border-border/80">
                <FileCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <span className="block font-sans text-xs font-semibold text-foreground">
                    Licensed Dentist
                  </span>
                  <span className="block font-mono text-[11px] text-muted-foreground">
                    State Dental Board Verified
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-md border border-border/80">
                <Stethoscope className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <span className="block font-sans text-xs font-semibold text-foreground">
                    Academy of General Dentistry
                  </span>
                  <span className="block font-mono text-[11px] text-muted-foreground">
                    Active Professional Member
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-md border border-border/80">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <span className="block font-sans text-xs font-semibold text-foreground">
                    Infection-Control Training
                  </span>
                  <span className="block font-mono text-[11px] text-muted-foreground">
                    Sterile, Sealed Protocols
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-md border border-border/80">
                <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <span className="block font-sans text-xs font-semibold text-foreground">
                    12+ Years Clinical Care
                  </span>
                  <span className="block font-mono text-[11px] text-muted-foreground">
                    Over 1,500 Home Visits
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="mt-8">
              <MoleculeWhatsAppCTA
                message={WHATSAPP_MESSAGES.hero}
                variant="whatsapp-forest"
                size="default"
                buttonClassName="h-12 px-7 font-semibold shadow-md"
              >
                Chat With Dr. {CLINIC_CONFIG.doctorLastName}
              </MoleculeWhatsAppCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
