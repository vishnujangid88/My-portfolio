import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="containr mx-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi👋, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Vishnu
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              {" "}
              Kumar
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-3">
              {" "}
              Jangid
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            AI & Data Science enthusiast skilled in machine learning, full-stack web development, and data analysis, driven by a passion for solving real-world problems with AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a
              href="https://www.linkedin.com/in/vishnujangid88/"
              className="cosmic-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://drive.google.com/file/d/1vUrWWPEtNVIs3xyGPaDqjIEzIwdOSN5u/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Resume/CV
            </a>
          </div>
        </div>
      </div>

      {showArrow && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      )}
    </section>
  );
};
