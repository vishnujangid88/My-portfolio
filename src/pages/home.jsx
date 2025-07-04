import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { CertificateSection } from "../components/CertificateSection";

export const Home = () => {
    return (
        <div className="min-ht-screen bg-background text-foreground overflow-x-hidden">
            {/* background-effect */}
            <StarBackground />
            {/* navbar */}
            <Navbar />
            {/* main-content */}
            <main>
                <HomeSection />
                <AboutSection />
                <ExperienceSection />
                <SkillSection />
                <ProjectsSection />
                <CertificateSection />
                <ContactSection />
            </main>
            {/* footer */}
                <Footer />
        </div>
    );
};