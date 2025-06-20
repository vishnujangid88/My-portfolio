export const HomeSection = () => {
    return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="containr mx-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi👋, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Vishnu</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2"> Kumar</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-3"> Jangid</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    Third-year AI & Data Science student skilled in Python, C++, React, Flask, TensorFlow, and PyTorch. Experienced in ML, full-stack development, cloud platforms (Azure, GCP), and data analysis. Actively involved in internships, hackathons, and certifications. Passionate about solving real-world problems with AI.
                </p>
            </div>
        </div>

    </section>
};