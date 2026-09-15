import { Card } from "@/components/ui/card";
import {
  Bot,
  Workflow,
  BarChart3,
  Server,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "AI Research & Evaluation",
      icon: Bot,
      color: "primary",
      description:
        "Research and evaluate emerging AI tools and technologies to identify practical opportunities for business adoption and productivity improvement.",
      features: [
        "AI tool and technology evaluation",
        "Practical use-case research",
        "AI capability and workflow assessment",
        "Business-focused AI adoption",
      ],
    },

    {
      title: "AI Workflow & Automation",
      icon: Workflow,
      color: "accent",
      description:
        "Design and test AI-assisted workflows using prompt engineering, RAG, AI agents, and automation platforms.",
      features: [
        "Prompt engineering and optimization",
        "RAG-based AI workflows",
        "AI agent workflows",
        "n8n, Make and Zapier automation",
      ],
    },

    {
      title: "Data Analysis",
      icon: BarChart3,
      color: "cyan",
      description:
        "Transform raw data into actionable insights through structured analysis, visualization, and reporting.",
      features: [
        "Statistical analysis and modeling",
        "Data cleaning and preprocessing",
        "Data visualization and reporting",
        "Business-focused data insights",
      ],
    },

    {
      title: "DevOps & Technical Solutions",
      icon: Server,
      color: "purple",
      description:
        "Support reliable and efficient technical environments through modern DevOps practices, automation, and infrastructure technologies.",
      features: [
        "CI/CD pipeline setup and optimization",
        "Docker and Kubernetes environments",
        "Cloud and infrastructure support",
        "Deployment automation and troubleshooting",
      ],
    },
  ];

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="text-gradient">Offer</span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Practical AI, automation, data, and technical solutions focused
              on improving workflows, productivity, and operational efficiency.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in group"
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                }}
              >
                {/* Icon + Title */}
                <div className="text-center mb-6">

                  <div
                    className={`inline-flex p-4 rounded-full mb-4 transition-colors ${
                      service.color === "primary"
                        ? "bg-primary/10 group-hover:bg-primary/20"
                        : service.color === "accent"
                        ? "bg-accent/10 group-hover:bg-accent/20"
                        : service.color === "cyan"
                        ? "bg-cyan-500/10 group-hover:bg-cyan-500/20"
                        : "bg-purple-500/10 group-hover:bg-purple-500/20"
                    }`}
                  >
                    <service.icon
                      className={`h-12 w-12 ${
                        service.color === "primary"
                          ? "text-primary"
                          : service.color === "accent"
                          ? "text-accent"
                          : service.color === "cyan"
                          ? "text-cyan-400"
                          : "text-purple-400"
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span
                        className={
                          service.color === "primary"
                            ? "text-primary mt-0.5"
                            : service.color === "accent"
                            ? "text-accent mt-0.5"
                            : service.color === "cyan"
                            ? "text-cyan-400 mt-0.5"
                            : "text-purple-400 mt-0.5"
                        }
                      >
                        ✓
                      </span>

                      <span className="text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

              </Card>
            ))}
          </div>

          {/* CTA */}
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={scrollToContact}
            >
              Let's Work Together
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;