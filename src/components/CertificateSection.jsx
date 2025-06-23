import { Award } from "lucide-react";

export const CertificateSection = () => {
  const certificates = [
    {
      title: "AWS Solutions Architecture Job Simulation",
      issuer: "Forage",
      date: "June 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_pEFx6NDveC8QLWQZJ_1749403874909_completion_certificate.pdf",
    },
    {
      title: "Microsoft Azure AI Essentials Professional Certificate by Microsoft",
      issuer: "Microsoft",
      date: "May 2025",
      link: "https://www.linkedin.com/learning/certificates/9912a397c7db765dd1be7ccc4498b9784668ae255511b29cf86c618b47ffa905",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Coursera",
      date: "March 2024",
      link: "https://coursera.org/share/1154f6060698995437b810ec0fcd72ed",
    },
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "LinkedIn Learning",
      date: "May 2025",
      link: "https://www.linkedin.com/learning/certificates/e912d7fe86981dadf062e9c4f8fe793819dedc87e108d7cf86a43fec862368ba",
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation By TATA",
      issuer: "Forage",
      date: "June 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_pEFx6NDveC8QLWQZJ_1749405979185_completion_certificate.pdf",
    },
    {
      title: "WorldQuant International Quant Championship 2025 - Round 1",
      issuer: "WorldQuant",
      date: "June 2025",
      link: "https://drive.google.com/file/d/1gg9otH-ZGfJMzDMoh3OvlT7GGr2_Eqtu/view?usp=sharing",
    },
    // ...add more as needed
  ];

  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certifications</span>
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