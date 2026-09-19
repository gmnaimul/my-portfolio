import {
  Activity,
  BarChart3,
  Bot,
  Braces,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Gauge,
  Layers3,
  LockKeyhole,
  Settings,
  Settings2,
  Terminal,
  Workflow,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const aiSkills = [
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
  ];

  const technicalGroups = [
    {
      title: "Data Analysis",
      icon: BarChart3,
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
      icon: Cloud,
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
      icon: LockKeyhole,
      skills: [
        { name: "Burp Suite", level: 70 },
        { name: "Wireshark", level: 75 },
        { name: "Vulnerability Assessment", level: 70 },
        { name: "Security Protocols", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Settings2,
      skills: [
        { name: "VS Code", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Git", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Jupyter Notebook", level: 85 },
        { name: "Figma", level: 70 },
        { name: "Render", level: 75 },
        { name: "Netlify", level: 75 },
      ],
    },
  ];

  const workflowSkills = [
    {
      icon: Settings,
      title: "Prompt Engineering",
      description:
        "Designing structured prompts and reusable prompt patterns for practical AI workflows.",
    },
    {
      icon: Database,
      title: "RAG",
      description:
        "Building knowledge-grounded AI workflows using retrieval and contextual information.",
    },
    {
      icon: Bot,
      title: "AI Agents",
      description:
        "Exploring agent-based workflows, tool usage, reasoning, and task automation.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Connecting AI, APIs, and business processes using modern automation platforms.",
    },
    {
      icon: Braces,
      title: "MCP",
      description:
        "Working with Model Context Protocol concepts for connecting AI systems with tools and data.",
    },
    {
      icon: GitBranch,
      title: "API Integration",
      description:
        "Integrating AI services, REST APIs, webhooks, and external systems into workflows.",
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

  const strengths = [
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
    <section
      id="skills"
      className="relative py-24 md:py-28 overflow-hidden bg-transparent"
    >
      {/* =====================================================
          SECTION ATMOSPHERE
         ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] left-[10%] w-[420px] h-[420px] rounded-full bg-blue-500/[0.025] blur-3xl" />

        <div className="absolute bottom-[10%] right-[8%] w-[420px] h-[420px] rounded-full bg-purple-500/[0.025] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* =================================================
              HEADER
             ================================================= */}

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              Technical Toolkit
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Skills & Expertise
            </h2>

            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              A multidisciplinary technical toolkit spanning AI development,
              automation, data analysis, DevOps, infrastructure, and
              cybersecurity.
            </p>
          </div>

          {/* =================================================
              AI & AUTOMATION
             ================================================= */}

          <Card className="relative overflow-hidden bg-card/25 backdrop-blur-xl border-border/60">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="p-6 sm:p-8">

              <div className="flex items-start gap-4 mb-7">
                <div className="w-11 h-11 shrink-0 rounded-xl border border-primary/15 bg-primary/[0.07] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    AI & Automation
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Current focus and emerging AI technologies.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {aiSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg border border-primary/10 bg-primary/[0.045] text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:border-primary/25 hover:bg-primary/[0.08] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </Card>

          {/* =================================================
              TECHNICAL SKILL GROUPS
             ================================================= */}

          <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-6">

            {technicalGroups.map((group) => {
              const Icon = group.icon;

              return (
                <Card
                  key={group.title}
                  className="group relative overflow-hidden bg-card/25 backdrop-blur-xl border-border/60 hover:bg-card/35 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="p-6 sm:p-7">

                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-10 h-10 rounded-xl border border-primary/15 bg-primary/[0.07] flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      <h3 className="text-lg font-bold">
                        {group.title}
                      </h3>
                    </div>

                    <div className="space-y-5">
                      {group.skills.map((skill) => (
                        <div key={skill.name}>

                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs sm:text-sm text-muted-foreground">
                              {skill.name}
                            </span>

                            <span className="text-[10px] font-mono text-muted-foreground/60">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="h-1.5 rounded-full bg-white/[0.045] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500/70 via-primary/80 to-purple-400/70 transition-all duration-1000"
                              style={{
                                width: `${skill.level}%`,
                              }}
                            />
                          </div>

                        </div>
                      ))}
                    </div>

                  </div>
                </Card>
              );
            })}

          </div>

          {/* =================================================
              AI WORKFLOW & INTEGRATION
             ================================================= */}

          <Card className="mt-6 relative overflow-hidden bg-card/25 backdrop-blur-xl border-border/60">
            <div className="p-6 sm:p-8">

              <div className="flex items-start gap-4 mb-8">
                <div className="w-11 h-11 shrink-0 rounded-xl border border-primary/15 bg-primary/[0.07] flex items-center justify-center">
                  <Workflow className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    AI Workflow & Integration
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Practical capabilities for building AI-powered workflows.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {workflowSkills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.title}
                      className="group rounded-xl border border-border/50 bg-background/20 backdrop-blur-md p-5 hover:bg-primary/[0.045] hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg border border-primary/10 bg-primary/[0.06] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      <h4 className="mt-4 text-sm font-semibold">
                        {skill.title}
                      </h4>

                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </Card>

          {/* =================================================
              ADDITIONAL TECHNOLOGIES + STRENGTHS
             ================================================= */}

          <div className="grid lg:grid-cols-2 gap-6 mt-6">

            {/* Additional Technologies */}
            <Card className="bg-card/25 backdrop-blur-xl border-border/60">
              <div className="p-6 sm:p-7">

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl border border-primary/15 bg-primary/[0.07] flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">
                      Additional Technologies
                    </h3>

                    <p className="text-xs text-muted-foreground mt-1">
                      Supporting technical knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {additionalTechnologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-2 rounded-lg border border-border/60 bg-background/20 text-xs text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all duration-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </Card>

            {/* Professional Strengths */}
            <Card className="bg-card/25 backdrop-blur-xl border-border/60">
              <div className="p-6 sm:p-7">

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl border border-primary/15 bg-primary/[0.07] flex items-center justify-center">
                    <Gauge className="w-4 h-4 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">
                      Professional Strengths
                    </h3>

                    <p className="text-xs text-muted-foreground mt-1">
                      Capabilities that support my technical work.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {strengths.map((strength) => (
                    <div
                      key={strength}
                      className="flex items-center gap-2.5 rounded-lg border border-border/50 bg-background/15 px-3 py-2.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />

                      <span className="text-xs text-muted-foreground">
                        {strength}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </Card>

          </div>

          {/* =================================================
              TECHNICAL SUMMARY
             ================================================= */}

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/20 backdrop-blur-md px-4 py-2">
              <Terminal className="w-3.5 h-3.5 text-primary" />

              <span className="text-xs text-muted-foreground">
                Engineering
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/20 backdrop-blur-md px-4 py-2">
              <Activity className="w-3.5 h-3.5 text-primary" />

              <span className="text-xs text-muted-foreground">
                Analytics
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/20 backdrop-blur-md px-4 py-2">
              <Layers3 className="w-3.5 h-3.5 text-primary" />

              <span className="text-xs text-muted-foreground">
                Infrastructure
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/20 backdrop-blur-md px-4 py-2">
              <Bot className="w-3.5 h-3.5 text-primary" />

              <span className="text-xs text-muted-foreground">
                AI Systems
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;