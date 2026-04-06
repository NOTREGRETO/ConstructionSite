import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SimpleHero } from "@/components/layout/SimpleHero";
import { ProjectGrid } from "@/components/layout/ProjectGrid";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-black uppercase flex flex-col">
            <Header />
            <SimpleHero title="PROJECTS" currentPage="PROJECTS" />
            <ProjectGrid />
            <Footer />
        </main>
    );
}
