import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Shield, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const profileImage = "https://raw.githubusercontent.com/gmnaimul/quader-folio-glow/main/src/assets/naimul-profile.jpg";
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const techStack = [{
    name: "Python",
    icon: Code2,
    color: "primary"
  }, {
    name: "Docker",
    icon: Database,
    color: "accent"
  }, {
    name: "Security",
    icon: Shield,
    color: "secondary"
  }];
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background with geometric patterns */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
        
        {/* Animated orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl animate-float" style={{
          animationDelay: "2s"
        }}></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float" style={{
          animationDelay: "4s"
        }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Enhanced text content */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Badge with icon */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-primary text-sm font-medium">Available for opportunities</span>
              </div>
              
              {/* Main heading with enhanced typography */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
                  G.M. Naimul
                  <br />
                  <span className="text-gradient inline-block mt-2">Quader</span>
                </h1>
                
                {/* Role tags */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="px-4 py-2 bg-card border border-primary/30 rounded-lg backdrop-blur-sm">
                    <p className="text-lg font-semibold text-primary">Jr. Data Analyst</p>
                  </div>
                  <div className="px-4 py-2 bg-card border border-accent/30 rounded-lg backdrop-blur-sm">
                    <p className="text-lg font-semibold text-accent">DevOps Enthusiast</p>
                  </div>
                  <div className="px-4 py-2 bg-card border border-secondary/30 rounded-lg backdrop-blur-sm">
                    <p className="text-lg font-semibold text-secondary">Security Researcher</p>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Transforming complex data into actionable insights while securing 
                and optimizing systems through innovative DevOps practices.
              </p>

              {/* Tech stack showcase */}
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => <div key={index} className="flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-lg backdrop-blur-sm hover:border-primary/30 transition-all group">
                    <tech.icon className={`w-5 h-5 text-${tech.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>)}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 group text-base px-8" onClick={() => scrollToSection("portfolio")}>
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-base px-8" onClick={() => scrollToSection("contact")}>
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Right side - Enhanced profile section */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-3xl animate-glow"></div>
                
                {/* Main profile card */}
                <Card className="relative p-6 bg-card/50 backdrop-blur-md border-2 border-border hover:border-primary/30 transition-all">
                  <div className="relative">
                    {/* Profile image */}
                    <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                      <img src={profileImage} alt="G.M. Naimul Quader" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    
                    {/* Floating stat cards */}
                    <Card className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-md border-2 border-primary/30 px-4 py-3 shadow-lg animate-float">
                      <p className="text-3xl font-bold text-primary">1+</p>
                      <p className="text-xs text-muted-foreground">Years Experience</p>
                    </Card>
                    
                    <Card className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-md border-2 border-accent/30 px-4 py-3 shadow-lg animate-float" style={{
                    animationDelay: "1s"
                  }}>
                      <p className="text-3xl font-bold text-accent">20+</p>
                      <p className="text-xs text-muted-foreground">Projects Completed</p>
                    </Card>
                  </div>
                </Card>

                {/* Decorative elements */}
                <div className="absolute top-1/2 -right-12 w-24 h-24 border-4 border-primary/20 rounded-full animate-float" style={{
                animationDelay: "2s"
              }}></div>
                <div className="absolute -bottom-8 left-1/2 w-16 h-16 bg-secondary/20 rounded-lg rotate-45 animate-float" style={{
                animationDelay: "3s"
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
        </div>
      </div>
    </section>;
};
export default Hero;

