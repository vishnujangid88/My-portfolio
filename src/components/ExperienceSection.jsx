import { Briefcase, Code, User } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Industry <span className="text-primary"> Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Intern at DreamTeam Technologies Pvt. Ltd. (June-July 2024)
            </h3>

            <p className="text-muted-foreground">
              During my internship, I developed a Face Recognition-Based Attendance System using Python, OpenCV, and Firebase. I designed and implemented real-time face detection and recognition pipelines, integrated cloud-based data storage, and optimized the system for high accuracy and efficiency. This experience strengthened my skills in computer vision, machine learning, and cloud technologies, and gave me hands-on exposure to building scalable, real-world AI solutions.
            </p>

            <p className="text-muted-foreground">
              Key achievements include automating attendance marking, achieving ~95% recognition accuracy in optimal conditions, and ensuring real-time data synchronization with Firebase. I also gained valuable experience in debugging, performance optimization, and collaborative software development.
            </p>

            <div className="pt-4">
              <a
                href="https://github.com/vishnujangid88/Face-Recognition-Attendance"
                className="cosmic-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Computer Vision & AI</h4>
                  <p className="text-muted-foreground">
                    Built real-time face detection and recognition pipelines using OpenCV and deep learning models.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud Integration</h4>
                  <p className="text-muted-foreground">
                    Integrated Firebase Realtime Database and Cloud Storage for instant, scalable attendance management.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Real-World Impact</h4>
                  <p className="text-muted-foreground">
                    Delivered a robust, automated attendance system, reducing manual effort and improving accuracy for organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
