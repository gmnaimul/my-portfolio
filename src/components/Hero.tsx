import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  Code2,
  Shield,
  Workflow,
} from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft ambient glow */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[650px] h-[450px] rounded-full bg-white/[0.025] blur-3xl" />

        {/* Abstract technical lines */}
        <div className="absolute -top-20 left-[12%] w-px h-[700px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent rotate-[18deg]" />

        <div className="absolute -top-10 left-[24%] w-px h-[850px] bg-gradient-to-b from-transparent via-blue-400/10 to-transparent rotate-[8deg]" />

        <div className="absolute -top-32 right-[20%] w-px h-[800px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent -rotate-[14deg]" />

        <div className="absolute top-[25%] right-[8%] w-px h-[700px] bg-gradient-to-b from-transparent via-purple-400/10 to-transparent rotate-[12deg]" />

        <div className="absolute bottom-[-20%] left-[42%] w-px h-[700px] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent rotate-[22deg]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
            maskImage:
              "radial-gradient(ellipse 75% 70% at center, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 70% at center, black, transparent)",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">

          {/* =====================================================
              NAME
          ===================================================== */}
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.95]">
              <span className="text-gradient">
                G.M. Naimul Quader
              </span>
            </h1>
          </div>

          {/* =====================================================
              CURRENT ROLE
          ===================================================== */}
          <div
            className="mt-6 space-y-2 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              AI Development Executive
            </h2>

            <p className="text-sm md:text-base text-muted-foreground">
              Khulna Technologies LLC
            </p>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Raju Law - US Immigration & Investment Attorneys
            </p>

            <p className="pt-2 text-sm md:text-base text-primary font-medium tracking-wide">
              AI Development • Automation • Data • DevOps
            </p>
          </div>

          {/* =====================================================
              TECH HIGHLIGHTS
          ===================================================== */}
          <div
            className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-5 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-border/80 bg-card/60 backdrop-blur-md hover:bg-card hover:border-primary/40 transition-all duration-300"
              >
                <tech.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />

                <span className="text-xs sm:text-sm font-medium text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* =====================================================
              PROFILE IMAGE + STATS
          ===================================================== */}
          <div
            className="relative flex justify-center mt-9 sm:mt-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Outer decorative rings */}
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-blue-400/10" />

            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-purple-400/10" />

            {/* Small orbit accent */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute top-[12%] right-[12%] w-1.5 h-1.5 rounded-full bg-blue-400/60 shadow-[0_0_12px_rgba(96,165,250,0.5)]" />

              <div className="absolute bottom-[18%] left-[12%] w-1 h-1 rounded-full bg-purple-400/50" />
            </div>

            {/* Main profile */}
            <div className="relative z-10">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full p-[3px] bg-gradient-to-br from-blue-400/80 via-purple-400/60 to-pink-400/70 shadow-[0_0_45px_rgba(96,165,250,0.12)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-card border-4 border-background">
                  <img
                    src={profileImage}
                    alt="G.M. Naimul Quader"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* =================================================
                  EXPERIENCE STAT
              ================================================= */}
              <Card className="absolute top-0 -right-16 sm:-right-24 md:-right-28 bg-card/90 backdrop-blur-xl border border-border/80 px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-xl">
                <p className="text-xl sm:text-2xl font-bold text-primary">
                  1+
                </p>

                <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                  Years Experience
                </p>
              </Card>

              {/* =================================================
                  PROJECT STAT
              ================================================= */}
              <Card className="absolute bottom-0 -left-16 sm:-left-24 md:-left-28 bg-card/90 backdrop-blur-xl border border-border/80 px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-xl">
                <p className="text-xl sm:text-2xl font-bold text-primary">
                  20+
                </p>

                <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                  Projects Completed
                </p>
              </Card>
            </div>
          </div>

          {/* =====================================================
              CTA
          ===================================================== */}
          <div
            className="flex flex-wrap justify-center gap-3.5 sm:gap-4 mt-9 animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/10 group text-sm sm:text-base px-6 sm:px-7"
              onClick={() => scrollToSection("portfolio")}
            >
              View My Work

              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted hover:border-primary/40 text-sm sm:text-base px-6 sm:px-7"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;