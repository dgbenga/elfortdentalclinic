import { OrganismStickyHeader } from '@/components/organisms/OrganismStickyHeader';
import { OrganismAnnouncementStrip } from '@/components/organisms/OrganismAnnouncementStrip';
import { OrganismHero } from '@/components/organisms/OrganismHero';
import { OrganismTrustStrip } from '@/components/organisms/OrganismTrustStrip';
import { OrganismPillars } from '@/components/organisms/OrganismPillars';
import { OrganismServicesGrid } from '@/components/organisms/OrganismServicesGrid';
import { OrganismWhoWeServe } from '@/components/organisms/OrganismWhoWeServe';
import { OrganismHowItWorks } from '@/components/organisms/OrganismHowItWorks';
import { OrganismExperience } from '@/components/organisms/OrganismExperience';
import { OrganismTestimonials } from '@/components/organisms/OrganismTestimonials';
import { OrganismAboutDoctor } from '@/components/organisms/OrganismAboutDoctor';
import { OrganismFAQ } from '@/components/organisms/OrganismFAQ';
import { OrganismFinalCTA } from '@/components/organisms/OrganismFinalCTA';
import { OrganismFooter } from '@/components/organisms/OrganismFooter';
import { OrganismMobileBar } from '@/components/organisms/OrganismMobileBar';
import { OrganismFloatingButton } from '@/components/organisms/OrganismFloatingButton';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top Fixed Header */}
      <OrganismStickyHeader />

      {/* Top Announcement Strip */}
      <OrganismAnnouncementStrip />

      {/* Main Semantic Page Content */}
      <main id="main-content" className="flex-1">
        <OrganismHero />
        <OrganismTrustStrip />
        <OrganismPillars />
        <OrganismServicesGrid />
        <OrganismWhoWeServe />
        <OrganismHowItWorks />
        <OrganismExperience />
        <OrganismTestimonials />
        <OrganismAboutDoctor />
        <OrganismFAQ />
        <OrganismFinalCTA />
      </main>

      {/* Practice Details & Legal Footer */}
      <OrganismFooter />

      {/* Mobile Persistent Conversion Bar (< md) */}
      <OrganismMobileBar />

      {/* Desktop Floating WhatsApp Trigger (md+) */}
      <OrganismFloatingButton />
    </div>
  );
}

export default App;
