import { Card } from "@/components/ui/card";
import {
  Code,
  Server,
  Shield,
  Users,
  Bot,
  Workflow,
  Sparkles,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Automation",
      icon: Bot,
      type: "tags",
      skills: [
        "ChatGPT",
        "Gemini",
        "Claude",
        "Perplexity",
        "NotebookLM",
        "Prompt Engineering",
        "AI Agents",
        "RAG",
        "n8n",
        "Make",
        "Zapier",
        "MCP",
        "APIs",
      ],
    },

    {
      title: "Data Analysis",
      icon: Code,
      type: "progress",
      skills: [
        { name: "Python", level: 85 },
        { name: "Pandas & NumPy", level: 80 },
        { name: "MS Excel", level: 90 },
        { name: "MySQL", level: 75 },
        { name: "Data Visualization", level: 80 },
      ],
    },

    {
      title: "DevOps & Infrastructure",
      icon: Server,
      type: "progress",
      skills: [
        { name: "Linux", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "AWS (EC2, S3)", level: 75 },
        { name: "Git & GitHub", level: 90 },
      ],
    },

    {
      title: "Cyber Security",
      icon: Shield,
      type: "progress",
      skills: [
        { name: "Burp Suite", level: 70 },
        { name: "Wireshark", level: 75 },
        { name: "Vulnerability Assessment", level: 70 },
        { name: "Security Protocols", level: 75 },
      ],
    },
  ];

  const additionalTechnologies = [
    "Bash",
    "VirtualBox",
    "VMware",
    "C++",
    "SciPy",
    "CI/CD",
  ];

  const professionalStrengths = [
    "Analytical Thinking",
    "Problem Solving",
    "Teamwork",
    "Adaptability",
    "Continuous Learning",
    "Research & Evaluation",
    "AI Adoption",
    "Technical Documentation",
  ];

  return (
    <section id="skills" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills &{" "}
              <span className="text-gradient">Expertise</span>
            </h2>

            <div className="w-16 h-0.5 bg-primary mx-auto"></div>

            <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
              A multidisciplinary technical stack combining AI, automation,
              data analysis, DevOps, and cybersecurity.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className={`p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 animate-fade-in ${
                  category.title === "AI & Automation"
                    ? "md:col-span-2"
                    : ""
                }`}
                style={{
                  animationDelay: `${0.2 + categoryIndex * 0.1}s`,
                }}
              >

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">

                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold">
                    {category.title}
                  </h3>

                  {category.title === "AI & Automation" && (
                    <span className="ml-auto text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full">
                      Current Focus
                    </span>
                  )}
                </div>

                {/* AI & Automation Tags */}
                {category.type === "tags" ? (
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-muted/70 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full text-sm font-medium transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (

                  /* Progress Skills */
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>

                        {/* Skill Name + Percentage */}
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>

                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Track */}
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">

                          {/* Professional single-color progress */}
                          <div
                            className="h-full rounded-full bg-primary/80 transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${
                                0.3 +
                                categoryIndex * 0.1 +
                                skillIndex * 0.05
                              }s`,
                            }}
                          />

                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* AI Workflow & Integration */}
          <div
            className="mt-10 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Card className="p-6 bg-card border-border hover:border-primary/30 transition-colors">

              <div className="flex items-center justify-center gap-2 mb-5">
                <Workflow className="h-5 w-5 text-primary" />

                <h3 className="text-lg font-semibold">
                  AI Workflow & Integration
                </h3>

                <Sparkles className="h-4 w-4 text-primary" />
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Prompt Engineering",
                  "RAG",
                  "AI Agents",
                  "Workflow Automation",
                  "MCP",
                  "API Integration",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted/70 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full text-sm transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </Card>
          </div>

          {/* Additional Technologies */}
          <div
            className="mt-6 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <Card className="p-6 bg-card border-border">

              <h3 className="text-lg font-semibold mb-4 text-center">
                Additional Technologies
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {additionalTechnologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted/70 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full text-sm transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </Card>
          </div>

          {/* Professional Strengths */}
          <div
            className="mt-6 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Card className="p-6 bg-card border-border">

              <div className="flex items-center justify-center gap-2 mb-5">
                <Users className="h-5 w-5 text-primary" />

                <h3 className="text-lg font-semibold">
                  Professional Strengths
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {professionalStrengths.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted/70 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full text-sm transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;