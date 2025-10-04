import { Card } from "@/components/ui/card";
import { BarChart3, Server, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Data Analysis",
      icon: BarChart3,
      color: "primary",
      description: "Transform raw data into actionable insights with comprehensive analysis and visualization.",
      features: [
        "Statistical analysis and modeling",
        "Data cleaning and preprocessing",
        "Interactive dashboards and reports",
        "Business intelligence solutions",
      ],
    },
    {
      title: "DevOps Solutions",
      icon: Server,
      color: "accent",
      description: "Streamline your development pipeline with modern DevOps practices and automation.",
      features: [
        "CI/CD pipeline setup and optimization",
        "Container orchestration with Kubernetes",
        "Infrastructure as Code (IaC)",
        "Deployment automation and monitoring",
      ],
    },
    {
      title: "Cyber Security",
      icon: Shield,
      color: "secondary",
      description: "Protect your systems with thorough security assessments and robust protection strategies.",
      features: [
        "Vulnerability assessment and testing",
        "Security protocol development",
        "Penetration testing",
        "Security compliance consulting",
      ],
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I <span className="text-gradient">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs in data, operations, and security
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 bg-${service.color}/10 rounded-full mb-4 group-hover:bg-${service.color}/20 transition-colors`}>
                    <service.icon className={`h-12 w-12 text-${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className={`text-${service.color} mt-0.5`}>✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
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

