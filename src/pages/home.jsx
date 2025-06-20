import { ThemeToggle } from "../components/themetoggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";

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
            </main>

            {/* footer */}
        </div>
    );
};