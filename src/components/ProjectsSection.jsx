import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "VisionMATE",
    description: "A comprehensive web application designed to assist visually impaired students with features like object detection, text-to-speech, speech-to-text, and task management using voice commands.",
    image: "/projects/project-1.jpg",
    tags: ["React", "TensorFlow", "Web Speech API", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/vishnujangid88/VisionMATE",
  },
  {
    id: 2,
    title: "Auto-Forest",
    description:
      "Built a preprocessed grayscale leaf image dataset and trained a convolutional autoencoder for image reconstruction, enabling plant identification research.",
    image: "/projects/project-2.jpg",
    tags: ["Python", "TensorFlow", "Deep Learning", "Autoencoder", "Computer Vision", "Image Processing"],
    githubUrl: "https://github.com/vishnujangid88/Auto-Forest",
  },
  {
    id: 3,
    title: "Hand Gesture Dino Game",
    description: "A Python project that lets you play the Chrome Dino game using real-time hand gesture recognition with OpenCV and PyAutoGUI.",
    image: "/projects/project-3.jpg",
    tags: ["Python", "OpenCV", "Computer Vision", "Gesture Recognition", "PyAutoGUI"],
    githubUrl: "https://github.com/vishnujangid88/Hand-Gesture-Dino-Game"
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full text-primary object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl text-primary font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/vishnujangid88"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};