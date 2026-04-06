import { Footer } from "@/components/layout/Footer";
import { BuildExcellence } from "@/components/layout/BuildExcellence";
import { LogoMarquee } from "@/components/layout/LogoMarquee";
import { Header } from "@/components/layout/Header";
import { SimpleHero } from "@/components/layout/SimpleHero";
import { WorkExpertise } from "@/components/layout/WorkExpertise";
import { AwardsSection } from "@/components/layout/AwardsSection";
import { AdBanner } from "@/components/layout/AdBanner";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black uppercase flex flex-col">
            <Header />
            <SimpleHero title="ABOUT US" currentPage="ABOUT US" />
            <WorkExpertise />
            <AdBanner />
            <AwardsSection />
            <BuildExcellence />
            <LogoMarquee />
            <Footer />
        </main>
    );
}
