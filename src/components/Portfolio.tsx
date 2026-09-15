import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Sparkles, ExternalLink } from "lucide-react";
import { useState } from "react";

const callGeminiAPI = async (
  prompt: string,
  systemInstruction?: string
) => {
  const apiKey = "";

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: systemInstruction
      ? { parts: [{ text: systemInstruction }] }
      : undefined,
  };

  let retries = 3;
  let delay = 1000;

  while (retries > 0) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();

        return (
          result?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I couldn't generate a summary right now."
        );
      }

      throw new Error(
        `API request failed with status ${response.status}`
      );
    } catch (error) {
      console.error("Gemini API call failed:", error);

      retries--;

      if (retries === 0) {
        return "Sorry, I'm having trouble connecting to my AI assistant right now.";
      }

      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }

  return "Sorry, something went wrong.";
};

const Portfolio = () => {
  const projects = [
    {
      title: "Comparative Analysis of ML Algorithms on Road Accident Data",
      description:
        "Research project evaluating five machine learning models to identify key accident risk factors and predict severity using statistical analysis.",
      tags: ["Python", "ML", "Data Analysis", "Research"],
      category: "Data Science",
      color: "cyan",
    },

    {
      title: "Automated CI/CD Pipeline",
      description:
        "Developed and deployed containerized microservices using Docker, Kubernetes, and Jenkins for automated testing and deployment.",
      tags: ["DevOps", "Docker", "Kubernetes", "Jenkins"],
      category: "DevOps",
      color: "purple",
    },

    {
      title: "Security Vulnerability Assessment Tool",
      description:
        "Built a security testing framework for identifying common web application vulnerabilities and generating comprehensive reports.",
      tags: ["Security", "Python", "Burp Suite", "Testing"],
      category: "Cyber Security",
      color: "orange",
    },
  ];

  const [summary, setSummary] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState<Record<number, boolean>>({});

  const getSummary = async (
    projectTitle: string,
    projectDescription: string,
    index: number
  ) => {
    if (summary[index]) {
      setSummary((prev) => {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      });

      return;
    }

    setIsLoading((prev) => ({
      ...prev,
      [index]: true,
    }));

    const prompt = `
Provide a concise and professional summary for this portfolio project.

Project Title:
"${projectTitle}"

Project Description:
"${projectDescription}"

Only use the information provided above.
Do not invent technologies, results, metrics, achievements, or responsibilities.

Keep the summary suitable for a professional technology portfolio.
`;

    const result = await callGeminiAPI(
      prompt,
      "You are a professional technical project summarizer. Be accurate and concise."
    );

    setSummary((prev) => ({
      ...prev,
      [index]: result,
    }));

    setIsLoading((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  return (
    <section id="portfolio" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured{" "}
              <span className="text-gradient">Projects</span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my technical projects, research, and practical
              work across data science, DevOps, and cybersecurity.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in group"
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                }}
              >
                <div>

                  {/* Category */}
                  <div className="mb-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        project.color === "cyan"
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                          : project.color === "purple"
                          ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                          : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* AI Generated Summary */}
                  {summary[index] && (
                    <div className="mb-4 p-4 rounded-lg bg-muted/50 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-primary" />

                        <span className="text-xs font-semibold text-primary">
                          AI Summary
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
                        {summary[index]}
                      </p>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-muted text-xs rounded border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* AI Summary Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    getSummary(
                      project.title,
                      project.description,
                      index
                    )
                  }
                  disabled={isLoading[index]}
                  className="w-full"
                >
                  <Sparkles className="mr-2 h-4 w-4" />

                  {isLoading[index]
                    ? "Summarizing..."
                    : summary[index]
                    ? "Hide Summary"
                    : "✨ Get Project Summary"}
                </Button>

              </Card>
            ))}
          </div>

          {/* GitHub CTA */}
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Card className="p-8 bg-card border-border inline-block">
              <div className="flex flex-col md:flex-row items-center gap-6">

                {/* GitHub Icon */}
                <div className="p-4 bg-primary/10 rounded-full">
                  <Github className="h-12 w-12 text-primary" />
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    View More on GitHub
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    Explore my complete project portfolio and technical
                    contributions.
                  </p>

                  <Button
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href="https://github.com/gmnaimul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Visit GitHub Profile
                      <ExternalLink className="h-4 w-4" />
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