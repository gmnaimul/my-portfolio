import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  ExternalLink,
  FileText,
  Github,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Comparative Analysis of ML Algorithms on Road Accident Data",
      description:
        "Research project evaluating five machine learning models to identify key accident risk factors and predict severity using statistical analysis.",
      tags: ["Python", "ML", "Data Analysis", "Research"],
      category: "Data Science",
      icon: BarChart3,
      color: "cyan",
    },
    {
      title: "Automated CI/CD Pipeline",
      description:
        "Developed and deployed containerized microservices using Docker, Kubernetes, and Jenkins for automated testing and deployment.",
      tags: ["DevOps", "Docker", "Kubernetes", "Jenkins"],
      category: "DevOps",
      icon: Layers3,
      color: "purple",
    },
    {
      title: "Security Vulnerability Assessment Tool",
      description:
        "Built a security testing framework for identifying common web application vulnerabilities and generating comprehensive reports.",
      tags: ["Security", "Python", "Burp Suite", "Testing"],
      category: "Cyber Security",
      icon: ShieldCheck,
      color: "orange",
    },
  ];

  const [projectSummary, setProjectSummary] = useState("");
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);

  const getProjectSummary = async () => {
    if (isSummaryLoading) return;

    if (projectSummary) {
      setProjectSummary("");
      return;
    }

    setIsSummaryLoading(true);

    try {
      const apiUrl =
        import.meta.env.VITE_API_URL ||
        "https://naimul-ai-backend.onrender.com";

      const prompt = `
You are summarizing the featured projects displayed on a professional portfolio website.

PROJECT 1
Title: Comparative Analysis of ML Algorithms on Road Accident Data
Category: Data Science
Description:
Research project evaluating five machine learning models to identify key accident risk factors and predict severity using statistical analysis.
Technologies: Python, ML, Data Analysis, Research

PROJECT 2
Title: Automated CI/CD Pipeline
Category: DevOps
Description:
Developed and deployed containerized microservices using Docker, Kubernetes, and Jenkins for automated testing and deployment.
Technologies: DevOps, Docker, Kubernetes, Jenkins

PROJECT 3
Title: Security Vulnerability Assessment Tool
Category: Cyber Security
Description:
Built a security testing framework for identifying common web application vulnerabilities and generating comprehensive reports.
Technologies: Security, Python, Burp Suite, Testing

Write a concise and professional overview of these featured projects.

Requirements:
- Mention the technical areas represented by the projects.
- Briefly explain what each project demonstrates.
- Keep the response concise.
- Use only the information provided above.
- Do not invent technologies, metrics, results, achievements, or responsibilities.
- Do not use markdown headings.
- Keep the tone professional and natural.
`;

      const response = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Project summary request failed with status ${response.status}`
        );
      }

      const data = await response.json();

      if (!data?.reply) {
        throw new Error("No summary was returned by the AI backend.");
      }

      setProjectSummary(data.reply);
    } catch (error) {
      console.error("Project summary error:", error);

      setProjectSummary(
        "Sorry, I couldn't generate the project summary right now. Please try again."
      );
    } finally {
      setIsSummaryLoading(false);
    }
  };

  const getCategoryClasses = (color: string) => {
    if (color === "cyan") {
      return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
    }

    if (color === "purple") {
      return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    }

    return "bg-orange-500/10 text-orange-400 border-orange-500/20";
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-28 overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[8%] w-[420px] h-[420px] rounded-full bg-blue-500/[0.025] blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] w-[420px] h-[420px] rounded-full bg-purple-500/[0.025] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* =====================================================
              SECTION HEADER
              ===================================================== */}

          <div
            className="text-center max-w-3xl mx-auto mb-12 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              Selected Work
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Featured{" "}
              <span className="text-gradient">Projects</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A selection of my technical projects, research, and practical
              work across data science, DevOps, cybersecurity, and intelligent
              technology solutions.
            </p>
          </div>

          {/* =====================================================
              PROJECT CARDS
              ===================================================== */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <Card
                  key={project.title}
                  className="group relative overflow-hidden bg-card/25 backdrop-blur-xl border-border/60 hover:bg-card/35 hover:border-primary/20 transition-all duration-300 animate-fade-in"
                  style={{
                    animationDelay: `${0.2 + index * 0.1}s`,
                  }}
                >
                  <div className="p-6 sm:p-7 h-full flex flex-col">

                    {/* Top Row */}
                    <div className="flex items-start justify-between gap-4 mb-7">
                      <span className="text-[10px] font-mono text-muted-foreground/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="w-10 h-10 rounded-xl border border-border/70 bg-background/20 flex items-center justify-center group-hover:border-primary/30 transition-colors duration-300">
                        <Icon className="w-4.5 h-4.5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full border text-[10px] sm:text-xs font-medium ${getCategoryClasses(
                          project.color
                        )}`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold leading-snug group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg border border-border/60 bg-background/20 text-[10px] sm:text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom */}
                    <div className="mt-auto pt-6">
                      <div className="border-t border-border/50 pt-4">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Project Overview</span>

                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* =====================================================
              AI PROJECT SUMMARY
              ===================================================== */}

          <Card
            className="relative overflow-hidden bg-card/25 backdrop-blur-xl border-border/60 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="p-6 sm:p-7 md:p-8">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                {/* Left Side */}
                <div className="flex items-center gap-4 min-w-0">

                  {/* File Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl border border-primary/60 bg-background/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold">
                      AI Project Summary
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Let the portfolio assistant summarize the projects based
                      on the information available on this website.
                    </p>
                  </div>
                </div>

                {/* Generate Button */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={getProjectSummary}
                  disabled={isSummaryLoading}
                  className="shrink-0 border-border/70 bg-background/10 hover:bg-primary/[0.06] hover:border-primary/30"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />

                  {isSummaryLoading
                    ? "Generating..."
                    : projectSummary
                    ? "Hide Summary"
                    : "Generate Summary"}
                </Button>
              </div>

              {/* Generated Summary */}
              {projectSummary && (
                <div className="mt-6 pt-6 border-t border-border/50 animate-fade-in">
                  <div className="rounded-xl border border-border/50 bg-background/20 backdrop-blur-md p-5 sm:p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {projectSummary}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* =====================================================
              GITHUB CTA
              ===================================================== */}

          <div
            className="mt-10 flex justify-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Card className="relative overflow-hidden bg-card/25 backdrop-blur-xl border-border/60">
              <div className="px-6 py-5">
                <div className="flex flex-col sm:flex-row items-center gap-5">

                  {/* GitHub Icon */}
                  <div className="w-11 h-11 rounded-xl border border-border/60 bg-background/20 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5 text-primary" />
                  </div>

                  {/* Text */}
                  <div className="text-center sm:text-left">
                    <h3 className="text-base font-bold">
                      View More on GitHub
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Explore my complete project portfolio and technical
                      contributions.
                    </p>
                  </div>

                  {/* GitHub Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 border-primary/30 hover:bg-primary/[0.06]"
                    asChild
                  >
                    <a
                      href="https://github.com/gmnaimul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Visit GitHub
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;