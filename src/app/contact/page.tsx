import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SimpleHero } from "@/components/layout/SimpleHero";
import { ContactForm } from "@/components/layout/ContactForm";
import { SupportGrid } from "@/components/layout/SupportGrid";
import { FaqSection } from "@/components/layout/FaqSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black uppercase flex flex-col">
            <Header />
            <SimpleHero title="CONTACT US" currentPage="CONTACT US" />
            <ContactForm />
            <SupportGrid />
            <FaqSection />
            <Footer />
        </main>
    );
}
