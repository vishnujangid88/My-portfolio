import { GraduationCap, School } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column – Educational Background */}
          <div className="space-y-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">College</h4>
                  <p className="text-muted-foreground">
                    B.E. in Artificial Intelligence & Data Science Engineering, MBM University, Jodhpur, Rajasthan <br />
                    Batch: 2022 - 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <School className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">School</h4>
                  <p className="text-muted-foreground">
                    Completed Senior Secondary from LBS Science Classes, Kuchaman City, Rajasthan <br />
                    Year: 2021   
                    Result: 96.2%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column – Bio */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold space-y-2">
              AI & Data Science Enthusiast | Innovator in Intelligent Technologies
            </h3>
            <p className="text-muted-foreground">
              With a strong foundation in programming, machine learning, and full-stack development, I specialize in building intelligent solutions using Python, C++, React, and leading AI frameworks. My hands-on experience extends to cloud computing with Microsoft Azure and Google Cloud Platform.
            </p>
            <p className="text-muted-foreground">
              As a current member of Google Developers Group (GDG) in Intelligence Technologies at MBM University, I am passionate about applying AI to solve real-world challenges. I thrive in collaborative environments, continuously learning and leveraging emerging technologies through internships, hackathons, and impactful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
