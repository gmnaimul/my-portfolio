import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Jr. Data Analyst (Remote)",
      company: "LIIA Smart Incorporation",
      period: "Dec 2024 – Jun 2025",
      responsibilities: [
        "Performed statistical analysis on large datasets using Python (Pandas, NumPy, SciPy)",
        "Automated data-cleaning workflows, reducing processing time by 35%",
        "Created data visualizations and dashboards for business insights",
      ],
      color: "primary",
    },
    {
      title: "DevOps Intern",
      company: "Anwar Group of Industries",
      period: "May 2023 – Jun 2023",
      responsibilities: [
        "Assisted in setting up CI/CD pipelines using Jenkins and Docker",
        "Configured and managed Kubernetes environments for containerized applications",
        "Supported version control workflows and troubleshooting of deployment issues",
      ],
      color: "accent",
    },
    {
      title: "Cyber Security Intern",
      company: "Bangladesh Ace Encoders",
      period: "Dec 2022 – Mar 2023",
      responsibilities: [
        "Identified and documented system vulnerabilities using security testing tools",
        "Contributed to developing and implementing security protocols",
        "Assisted in security audits and compliance assessments",
      ],
      color: "secondary",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all hover:scale-[1.02] animate-fade-in group"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left side - Icon and period */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 md:min-w-[200px]">
                    <div className={`p-4 bg-${exp.color}/10 rounded-lg group-hover:bg-${exp.color}/20 transition-colors`}>
                      <Briefcase className={`h-6 w-6 text-${exp.color}`} />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">▸</span>
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

