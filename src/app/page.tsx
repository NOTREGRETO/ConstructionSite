import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/layout/ContactSection";

import { CtaSection } from "@/components/layout/CtaSection";
import { Testimonials } from "@/components/layout/Testimonials";
import { GuidingValues } from "@/components/layout/GuidingValues";
import { ServicesSection } from "@/components/layout/ServicesSection";
import { FeaturedProjects } from "@/components/layout/FeaturedProjects";
import { AboutCompany } from "@/components/layout/AboutCompany";
import { LogoMarquee } from "@/components/layout/LogoMarquee";
import { QualitySolutions } from "@/components/layout/QualitySolutions";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { StatsBar } from "@/components/layout/StatsBar";
import { WhoWeAre } from "@/components/layout/WhoWeAre";
import { IndustrialHero } from "@/components/layout/IndustrialHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <IndustrialHero />
      <WhoWeAre />
      <StatsBar />
      <HeroBanner />
      <QualitySolutions />
      <LogoMarquee />
      <AboutCompany />
      <FeaturedProjects />
      <ServicesSection />
      <GuidingValues />
      <Testimonials />
      <CtaSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
