import { Award } from "lucide-react";

export const CertificateSection = () => {
  const certificates = [
    {
      title: "Full‑Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "March 2024",
      link: "https://example.com/certificate1",
    },
    {
      title: "React & Redux",
      issuer: "Coursera",
      date: "June 2023",
      link: "https://example.com/certificate2",
    },
    {
      title: "UI/UX Design Essentials",
      issuer: "Udemy",
      date: "September 2022",
      link: "https://example.com/certificate3",
    },
    // ...add more as needed
  ];

  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border p-6 card-hover h-full flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
              <p className="mt-auto text-sm text-primary font-medium">
                View Certificate →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};