import {
  BriefcaseBusiness,
  CalendarDays,
  Circle,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      period: "Sep 2026 – Present",
      role: "AI Development Executive",
      company: "Khulna Technologies LLC",
      type: "Current Role",
      description:
        "Research and evaluate emerging AI tools and technologies for practical business adoption and workflow optimization.",
      details: [
        "Design and test AI-assisted workflows using prompt engineering, RAG, AI agents, and automation to improve productivity.",
        "Support AI adoption across teams through tool evaluation, training, demonstrations, documentation, and reusable AI resources.",
      ],
    },
    {
      period: "Sep 2025 – May 2026",
      role: "Jr. Data Analyst",
      company: "Liia Smart Incorporations",
      type: "Professional Experience",
      description:
        "Analyzed and prepared data to support business reporting and decision-making.",
      details: [
        "Worked with data cleaning, transformation, analysis, and visualization tasks.",
        "Supported reporting workflows and translated data into meaningful business insights.",
      ],
    },
    {
      period: "Apr 2023 – Sep 2023",
      role: "DevOps Intern",
      company: "Anwar Group of Industries",
      type: "Internship",
      description:
        "Assisted in setting up CI/CD pipelines using Jenkins and Docker.",
      details: [
        "Configured and managed Kubernetes environments for containerized applications.",
        "Supported version control workflows and troubleshooting of deployment issues.",
      ],
    },
    {
      period: "Dec 2022 – Mar 2023",
      role: "Cyber Security Intern",
      company: "Bangladesh Ace Endeavors",
      type: "Internship",
      description:
        "Worked with security testing and vulnerability assessment activities.",
      details: [
        "Used security tools and techniques to identify potential application and network vulnerabilities.",
        "Supported cybersecurity research, testing, and documentation activities.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 md:py-28 overflow-hidden bg-transparent"
    >
      {/* Subtle section glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[18%] left-[8%] w-[380px] h-[380px] rounded-full bg-blue-500/[0.025] blur-3xl" />
        <div className="absolute bottom-[12%] right-[8%] w-[380px] h-[380px] rounded-full bg-purple-500/[0.025] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              Career Journey
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Experience
            </h2>

            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Professional experience across AI development, data analysis,
              DevOps, and cybersecurity.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />

            <div className="space-y-10 md:space-y-14">
              {experiences.map((experience, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={`${experience.role}-${experience.company}`}
                    className="relative grid md:grid-cols-2 gap-6 md:gap-16 items-center"
                  >
                    {/* EXPERIENCE CARD */}
                    <div
                      className={
                        isLeft
                          ? "md:col-start-1"
                          : "md:col-start-2"
                      }
                    >
                      <Card
                        className={`relative overflow-hidden bg-card/20 backdrop-blur-xl border-border/50 hover:bg-card/30 hover:border-primary/20 transition-all duration-300 ${
                          isLeft ? "md:mr-0" : "md:ml-0"
                        }`}
                      >
                        {/* Top accent */}
                        <div
                          className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${
                            isLeft
                              ? "from-primary/40 via-primary/10 to-transparent"
                              : "from-transparent via-primary/10 to-primary/40"
                          }`}
                        />

                        <div className="p-6 sm:p-7">
                          {/* Period */}
                          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground mb-4">
                            <CalendarDays className="w-3.5 h-3.5 text-primary" />
                            <span>{experience.period}</span>
                          </div>

                          {/* Role */}
                          <h3 className="text-lg sm:text-xl font-bold text-left">
                            {experience.role}
                          </h3>

                          {/* Company */}
                          <p className="mt-1 text-sm font-medium text-primary text-left">
                            {experience.company}
                          </p>

                          {/* Type */}
                          <span className="inline-flex mt-3 px-2.5 py-1 rounded-md border border-primary/10 bg-primary/[0.05] text-[9px] uppercase tracking-wider text-muted-foreground">
                            {experience.type}
                          </span>

                          {/* Description */}
                          <p className="mt-5 text-sm text-muted-foreground leading-relaxed text-left">
                            {experience.description}
                          </p>

                          {/* Details */}
                          <ul className="mt-4 space-y-2.5">
                            {experience.details.map((detail) => (
                              <li
                                key={detail}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed text-left"
                              >
                                <span className="mt-[7px] w-1 h-1 shrink-0 rounded-full bg-primary/70" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Timeline marker */}
                        <div
                          className={`absolute top-8 hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-background border border-primary/30 z-20 ${
                            isLeft
                              ? "-right-[68px]"
                              : "-left-[68px]"
                          }`}
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.55)]" />
                        </div>
                      </Card>
                    </div>

                    {/* EMPTY OPPOSITE COLUMN */}
                    <div
                      className={
                        isLeft
                          ? "md:col-start-2"
                          : "md:col-start-1 md:row-start-1"
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom summary */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-card/15 backdrop-blur-xl border-border/40">
              <div className="p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                <div className="w-11 h-11 shrink-0 rounded-xl border border-primary/15 bg-primary/[0.06] flex items-center justify-center">
                  <Circle className="w-4 h-4 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    From infrastructure to intelligent systems
                  </p>

                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    My career has evolved from DevOps and cybersecurity toward
                    AI-driven solutions, automation, and practical technology
                    adoption.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;