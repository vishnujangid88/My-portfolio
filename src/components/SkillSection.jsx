import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Frontend
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },

    // Backend
    { name: "Flask", category: "backend" },
    { name: "Node.js", category: "backend" },

    // Database
    { name: "MySQL", category: "database" },
    { name: "MongoDB", category: "database" },

    // Programming Languages
    { name: "Python", category: "language" },
    { name: "C++", category: "language" },
    { name: "C", category: "language" },

    // Machine Learning / AI
    { name: "TensorFlow", category: "ml" },
    { name: "PyTorch", category: "ml" },
    { name: "Keras", category: "ml" },
    { name: "Scikit-Learn", category: "ml" },
    { name: "OpenCV", category: "ml" },
    { name: "Mediapipe", category: "ml" },
    { name: "LangChain", category: "ml" },
    { name: "LLMs", category: "ml" },
    { name: "Pandas", category: "ml" },
    { name: "NumPy", category: "ml" },
    { name: "Matplotlib", category: "ml" },
    { name: "Seaborn", category: "ml" },
    { name: "PyAutoGUI", category: "ml" },
    { name: "Streamlit", category: "ml" },

    // Tools
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "Git Bash", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "Figma", category: "tools" },
    { name: "Canva", category: "tools" },
    { name: "Visual Studio Code", category: "tools" },
    { name: "PyCharm", category: "tools" },
    { name: "Microsoft Azure", category: "tools" },
    { name: "Google Cloud Platform", category: "tools" },

    // Software Development
    { name: "DSA", category: "software" },
    { name: "OOP", category: "software" },
    { name: "Operating Systems", category: "software" },
    { name: "Computer Networks", category: "software" },
    { name: "Robotics & Embedded Systems", category: "software" },

];

const categories = [
    { key: "all", label: "All" },
    { key: "language", label: "Programming Languages" },
    { key: "ml", label: "Machine Learning / AI" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "tools", label: "Tools" },
    { key: "software", label: "Software Development" },
];

export const SkillSection = () => {
    const [activeTab, setActiveTab] = useState("all");

    const filteredSkills =
        activeTab === "all"
            ? skills
            : skills.filter((skill) => skill.category === activeTab);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveTab(cat.key)}
                            className={cn(
                                "px-4 py-2 rounded-full transition-colors duration-300 capitalize text-l font-medium",
                                activeTab === cat.key
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Skills as Chips */}
                <div className="flex flex-wrap justify-center gap-3">
                    {filteredSkills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="bg-card px-4 py-2 bg-primary/10 shadow-xs text-s font-semibold card-hover transition-all duration-200"
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
