import {
  GraduationCap,
  Brain,
  Workflow,
  BookOpen,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import AIAssistant from "@/components/AIAssistant";

const About = () => {
  const education = [
    {
      degree: "MBA (Master of Business Administration)",
      institution: "Jahangirnagar University (JU)",
      status: "Ongoing",
      icon: GraduationCap,
    },
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution:
        "Bangladesh Army International University of Science and Technology, Cumilla. (BAIUST)",
      status: "Completed",
      icon: GraduationCap,
    },
  ];

  const strengths = [
    {
      title: "Analytical Mindset",
      description:
        "Strong foundation in data analysis, research, evaluation, and structured problem solving.",
      icon: Brain,
    },
    {
      title: "AI & Automation",
      description:
        "Focused on practical AI adoption, prompt engineering, intelligent workflows, agents, RAG, and automation.",
      icon: Workflow,
    },
    {
      title: "Continuous Learner",
      description:
        "Constantly exploring emerging AI tools, technologies, and methodologies to improve productivity.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          {/* About + AI Assistant */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">

            {/* About Description */}
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors h-full flex flex-col justify-center">

                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                  I am a{" "}
                  <span className="text-foreground font-semibold">
                    CSE graduate
                  </span>{" "}
                  and currently working as an{" "}
                  <span className="text-foreground font-semibold">
                    AI Development Executive
                  </span>{" "}
                  at{" "}
                  <span className="text-foreground font-semibold">
                    Khulna Technologies LLC
                  </span>
                  . My work focuses on researching and evaluating emerging AI
                  technologies and turning them into practical solutions for
                  business adoption, workflow optimization, and productivity.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed text-justify mt-5">
                  I work with{" "}
                  <span className="text-foreground font-semibold">
                    prompt engineering, RAG, AI agents, and workflow
                    automation
                  </span>
                  , while exploring and evaluating modern AI platforms such as
                  ChatGPT, Gemini, Claude, Perplexity, and NotebookLM.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed text-justify mt-5">
                  Alongside AI, I have a background in{" "}
                  <span className="text-foreground font-semibold">
                    data analysis, DevOps, and cybersecurity
                  </span>
                  . I enjoy connecting these areas to build efficient,
                  practical, and technology-driven solutions.
                </p>

              </Card>
            </div>

            {/* AI Assistant */}
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <AIAssistant />
            </div>

          </div>

          {/* AI Focus */}
          <div className="mb-16">

            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="inline-flex items-center">
                <Brain className="mr-2 h-8 w-8 text-primary" />
                AI & Automation Focus
              </span>
            </h3>

            <div className="grid md:grid-cols-3 gap-6">

              {/* AI Research & Evaluation */}
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in">
                <div className="text-center">

                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>

                  <h4 className="font-semibold text-xl mb-2">
                    AI Research & Evaluation
                  </h4>

                  <p className="text-muted-foreground">
                    Exploring and evaluating emerging AI tools and technologies
                    for practical business use.
                  </p>

                </div>
              </Card>

              {/* AI Workflows & Automation */}
              <Card
                className="p-6 bg-card border-border hover:border-accent/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="text-center">

                  <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                    <Workflow className="h-8 w-8 text-accent" />
                  </div>

                  <h4 className="font-semibold text-xl mb-2">
                    AI Workflows & Automation
                  </h4>

                  <p className="text-muted-foreground">
                    Designing AI-assisted workflows with agents, RAG, prompt
                    engineering, and automation platforms.
                  </p>

                </div>
              </Card>

              {/* AI Adoption & Enablement */}
              <Card
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-center">

                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>

                  <h4 className="font-semibold text-xl mb-2">
                    AI Adoption & Enablement
                  </h4>

                  <p className="text-muted-foreground">
                    Supporting AI adoption through training, demonstrations,
                    documentation, and reusable AI resources.
                  </p>

                </div>
              </Card>

            </div>
          </div>

          {/* Education */}
          <div className="mb-16">

            <h3 className="text-3xl font-bold mb-8 text-center">
              <GraduationCap className="inline-block mr-2 h-8 w-8 text-primary" />
              Education
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                  style={{
                    animationDelay: `${0.3 + index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start gap-4">

                    <div className="p-3 bg-primary/10 rounded-lg">
                      <edu.icon className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex-1">

                      <div className="flex items-start justify-between mb-2 gap-3">

                        <h4 className="font-semibold text-lg">
                          {edu.degree}
                        </h4>

                        <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full whitespace-nowrap">
                          {edu.status}
                        </span>

                      </div>

                      <p className="text-muted-foreground">
                        {edu.institution}
                      </p>

                    </div>
                  </div>
                </Card>
              ))}

            </div>
          </div>

          {/* Core Strengths */}
          <div>

            <h3 className="text-3xl font-bold mb-8 text-center">
              Core Strengths
            </h3>

            <div className="grid md:grid-cols-3 gap-6">

              {strengths.map((strength, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-accent/50 transition-all hover:scale-105 animate-fade-in group"
                  style={{
                    animationDelay: `${0.5 + index * 0.1}s`,
                  }}
                >
                  <div className="text-center">

                    <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                      <strength.icon className="h-8 w-8 text-accent" />
                    </div>

                    <h4 className="font-semibold text-xl mb-2">
                      {strength.title}
                    </h4>

                    <p className="text-muted-foreground">
                      {strength.description}
                    </p>

                  </div>
                </Card>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;