import * as React from 'react';
import { Award, ShieldCheck, FileCheck, Stethoscope } from 'lucide-react';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomTag } from '@/components/atoms/AtomTag';
import { AtomText } from '@/components/atoms/AtomText';
import { CLINIC_CONFIG } from '@/lib/constants';

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
                alt="Portrait of Dr. Olufemi Adebayo in a private consultation suite, smiling warmly"
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
              Clinical Leadership
            </AtomTag>

            <AtomHeading level="headline-lg" as="h2" className="text-foreground">
              A Commitment to Uncompromising, Patient-First Dentistry
            </AtomHeading>

            <AtomText variant="body" className="mt-6 text-base text-muted-foreground leading-relaxed">
              Dr. Olufemi Adebayo founded Elfort Dental Clinic with a clear conviction: exceptional clinical dentistry should fit effortlessly into patients' lives, not consume their day. With over {CLINIC_CONFIG.experienceYears} years of private clinical practice and advanced training in anxiety-free restorative protocols, Dr. Adebayo brings the standards of a premier private clinic directly to your residential sanctuary.
            </AtomText>

            <AtomText variant="body" className="mt-4 text-base text-muted-foreground leading-relaxed">
              Every home visit is performed with unhurried care. We never double-book appointments, ensuring complete focus, meticulous sterilization, and immediate answers to all your oral health questions.
            </AtomText>

            {/* Verified Credentials Box */}
            <div className="mt-9 pt-8 border-t border-border w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-md border border-border/80">
                <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <span className="block font-sans text-xs font-semibold text-foreground">
                    Doctor of Dental Surgery (DDS)
                  </span>
                  <span className="block font-mono text-[11px] text-muted-foreground">
                    Honors Graduate & Clinical Fellow
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-md border border-border/80">
                <FileCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <span className="block font-sans text-xs font-semibold text-foreground">
                    State Dental Board Licensed
                  </span>
                  <span className="block font-mono text-[11px] text-muted-foreground">
                    Active & Insured (#DEN-482910)
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
                    Autoclave Biological Spore Monitored
                  </span>
                  <span className="block font-mono text-[11px] text-muted-foreground">
                    Hospital-Grade Standards Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
