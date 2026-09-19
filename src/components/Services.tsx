import {
  Search,
  CheckCircle2,
  SlidersHorizontal,
  GitBranch,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const approachSteps = [
    {
      number: "01",
      icon: Search,
      title: "Research",
      description:
        "Understand the problem, tools, and available technologies.",
    },
    {
      number: "02",
      icon: CheckCircle2,
      title: "Evaluate",
      description:
        "Test capabilities and identify the most practical approach.",
    },
    {
      number: "03",
      icon: SlidersHorizontal,
      title: "Design",
      description:
        "Create a workflow or solution around the selected approach.",
    },
    {
      number: "04",
      icon: GitBranch,
      title: "Implement",
      description:
        "Deploy, document, and continuously improve the solution.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 md:py-28 overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[420px] h-[420px] rounded-full bg-blue-500/[0.025] blur-3xl" />
        <div className="absolute top-[15%] right-[5%] w-[420px] h-[420px] rounded-full bg-purple-500/[0.025] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              Approach
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              From Research to Implementation
            </h2>
          </div>

          {/* Approach Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approachSteps.map((step) => {
              const Icon = step.icon;

              return (
                <Card
                  key={step.number}
                  className="group relative h-full overflow-hidden bg-card/25 backdrop-blur-xl border-border/60 hover:border-primary/30 hover:bg-card/35 transition-all duration-300"
                >
                  {/* Top Accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-6 sm:p-7 h-full min-h-[210px] flex flex-col">
                    {/* Number + Icon */}
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-mono text-muted-foreground/50">
                        {step.number}
                      </span>

                      <div className="w-11 h-11 rounded-xl border border-primary/15 bg-primary/[0.06] flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/[0.10] transition-all duration-300">
                        <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-7">
                      <h3 className="text-xl font-bold">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;