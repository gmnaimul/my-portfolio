import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Lightbulb,
  Network,
  Search,
  Workflow,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import AIAssistant from "@/components/AIAssistant";

const About = () => {
  const highlights = [
    {
      icon: Workflow,
      title: "AI & Automation",
      description:
        "Researching AI tools, prompt engineering, RAG, AI agents, and practical automation workflows.",
    },
    {
      icon: Code2,
      title: "Technical Foundation",
      description:
        "Strong foundation in Python, data analysis, DevOps, cloud technologies, and cybersecurity.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "Continuously exploring emerging technologies and turning research into practical solutions.",
    },
  ];

  const education = [
    {
      degree: "MBA",
      institution: "Jahangirnagar University",
      status: "ONGOING",
      description:
        "Business and management studies covering analytics, economics, finance, marketing, operations, and management.",
    },
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "Computer Science & Engineering",
      status: "COMPLETED",
      description:
        "Technical foundation in software, programming, databases, networking, systems, and computing.",
    },
  ];

  const strengths = [
    { icon: Search, title: "AI Research" },
    { icon: Network, title: "Systems Thinking" },
    { icon: Lightbulb, title: "Problem Solving" },
    { icon: Code2, title: "Technical Execution" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-28 overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[420px] h-[420px] rounded-full bg-blue-500/[0.025] blur-3xl" />
        <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-purple-500/[0.025] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              About Me
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Building with AI & Technology
            </h2>

            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              A technology-focused professional combining AI, automation,
              data, DevOps, and cybersecurity with a business-oriented
              approach to solving practical problems.
            </p>
          </div>

          {/* About + AI Assistant */}
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-6 items-stretch">

            {/* About Card */}
            <Card className="relative overflow-hidden bg-card/25 backdrop-blur-xl border-border/60">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="p-6 sm:p-8">

                {/* Current Role */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl border border-primary/15 bg-primary/[0.07] flex items-center justify-center">
                    <BriefcaseBusiness className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Current Role
                    </p>

                    <h3 className="mt-1 text-lg sm:text-xl font-bold">
                      AI Development Executive
                    </h3>

                    <p className="mt-1 text-sm text-primary">
                      Khulna Technologies LLC
                    </p>
                  </div>
                </div>

                {/* About Description */}
                <div className="mt-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    I am a Computer Science & Engineering graduate currently
                    working as an AI Development Executive at Khulna
                    Technologies LLC, where I focus on researching and
                    applying emerging AI technologies for practical business
                    use.
                  </p>

                  <p>
                    My work involves prompt engineering, RAG, AI agents,
                    automation, AI tool evaluation, training, documentation,
                    and workflow improvement.
                  </p>

                  <p>
                    Alongside AI, I bring experience in data analysis,
                    DevOps, infrastructure, and cybersecurity, allowing me
                    to approach technology problems from multiple
                    perspectives.
                  </p>
                </div>

                {/* Current Focus */}
                <div className="mt-8 pt-6 border-t border-border/40">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs uppercase tracking-[0.18em] font-semibold text-foreground">
                      Current Focus
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI Research",
                      "Prompt Engineering",
                      "RAG",
                      "AI Agents",
                      "Automation",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1.5 rounded-md border border-primary/10 bg-primary/[0.045] text-[10px] sm:text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-3 mt-8">
                  <div className="rounded-xl border border-border/50 bg-background/15 p-4 text-center">
                    <p className="text-lg font-bold text-primary">AI</p>
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      Development
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-background/15 p-4 text-center">
                    <p className="text-lg font-bold text-primary">Data</p>
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      Analytics
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-background/15 p-4 text-center">
                    <p className="text-lg font-bold text-primary">DevOps</p>
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      Infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* AI Assistant */}
            <div className="min-h-[500px]">
              <AIAssistant />
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="group bg-card/20 backdrop-blur-xl border-border/50 hover:bg-card/32 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-xl border border-primary/15 bg-primary/[0.07] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <h3 className="mt-5 text-base font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Education */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-3">
                Academic Background
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold">
                Education
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {education.map((item) => (
                <Card
                  key={item.degree}
                  className="group relative bg-card/20 backdrop-blur-xl border-border/50 hover:bg-card/32 hover:border-primary/20 transition-all duration-300"
                >
                  {/* Status Badge */}
                  <span
                    className={`absolute top-5 right-5 px-2.5 py-1 rounded-md border text-[9px] font-semibold tracking-wider ${
                      item.status === "ONGOING"
                        ? "border-primary/20 bg-primary/[0.07] text-primary"
                        : "border-border/50 bg-background/20 text-muted-foreground"
                    }`}
                  >
                    {item.status}
                  </span>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-start gap-4 pr-20">
                      <div className="w-11 h-11 shrink-0 rounded-xl border border-primary/15 bg-primary/[0.07] flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      <div>
                        <h4 className="text-lg font-bold">
                          {item.degree}
                        </h4>

                        <p className="mt-1 text-sm font-medium text-primary">
                          {item.institution}
                        </p>

                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Strengths */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-3">
                What I Bring
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold">
                Core Strengths
              </h3>
            </div>

            <Card className="bg-card/20 backdrop-blur-xl border-border/50">
              <div className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {strengths.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="group flex items-center gap-3 rounded-xl border border-border/50 bg-background/15 backdrop-blur-md p-4 hover:bg-primary/[0.045] hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="w-9 h-9 shrink-0 rounded-lg border border-primary/10 bg-primary/[0.06] flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                        </div>

                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <button
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/20 bg-primary/[0.06] backdrop-blur-md text-sm font-medium hover:bg-primary/[0.10] hover:border-primary/30 transition-all duration-300"
            >
              Explore My Experience
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;