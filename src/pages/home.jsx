import { ThemeToggle } from "../components/themetoggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => {
    return (
        <div className="min-ht-screen bg-background text-foreground overflow-x-hidden">
            {/* theme-toggle */}
            <ThemeToggle />
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
            </main>

            {/* footer */}
        </div>
    );
};