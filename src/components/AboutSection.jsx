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
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold space-y-2">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              I'm a driven web developer with a strong interest in building engaging digital experiences. I love coding, solving real-world problems, and exploring new technologies.
            </p>
            <p className="text-muted-foreground">
              Currently pursuing a B.Tech in Mechanical Engineering, I actively apply my analytical skills to software development. I aim to bridge the gap between engineering and technology through continuous learning and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
