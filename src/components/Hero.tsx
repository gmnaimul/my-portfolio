import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Code2,
  Shield,
  Workflow,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const profileImage =
    "https://github.com/gmnaimul/my-portfolio/blob/main/src/assets/naimul-profile.jpg?raw=true";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const techStack = [
    {
      name: "AI Development",
      icon: Bot,
    },
    {
      name: "Python",
      icon: Code2,
    },
    {
      name: "AI Automation",
      icon: Workflow,
    },
    {
      name: "Cyber Security",
      icon: Shield,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Subtle professional background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left side */}
            <div className="space-y-7 animate-slide-in-left">

              {/* Main heading */}
              <div className="space-y-5">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                  G.M. Naimul
                  <br />
                  <span className="text-gradient inline-block mt-2">
                    Quader
                  </span>
                </h1>

                {/* Current role */}
                <div className="space-y-1">
                  <p className="text-xl md:text-2xl font-semibold text-foreground">
                    AI Development Executive
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground">
                    Khulna Technologies LLC
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground">
                    Raju Law - US Immigration & Investment Attorneys
                  </p>
                </div>

                {/* Professional focus */}
                <p className="text-sm md:text-base text-primary font-medium">
                  AI Development • Automation • Data • DevOps
                </p>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Researching and applying emerging AI technologies to build
                practical workflows, automation, and intelligent solutions
                while leveraging data analytics, DevOps, and cybersecurity.
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors"
                  >
                    <tech.icon className="w-4 h-4 text-primary" />

                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/10 group text-base px-7"
                  onClick={() => scrollToSection("portfolio")}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted hover:border-primary/40 text-base px-7"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Right side - Profile */}
            <div
              className="flex justify-center lg:justify-end animate-fade-in"
              style={{
                animationDelay: "0.2s",
              }}
            >
              <div className="relative">

                {/* Main profile card */}
                <Card className="relative p-4 md:p-5 bg-card border border-border shadow-2xl">
                  <div className="relative">

                    {/* Profile image */}
                    <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden border border-border">
                      <img
                        src={profileImage}
                        alt="G.M. Naimul Quader"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Experience stat */}
                    <Card className="absolute -top-4 -right-4 bg-card border border-border px-4 py-3 shadow-xl">
                      <p className="text-2xl font-bold text-primary">
                        1+
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Years Experience
                      </p>
                    </Card>

                    {/* Projects stat */}
                    <Card className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-3 shadow-xl">
                      <p className="text-2xl font-bold text-primary">
                        20+
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Projects Completed
                      </p>
                    </Card>
                  </div>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;