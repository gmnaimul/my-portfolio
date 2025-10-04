import { Card } from "@/components/ui/card";
import { Code, Server, Shield, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Infrastructure",
      icon: Server,
      color: "primary",
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
      title: "Data Analysis",
      icon: Code,
      color: "accent",
      skills: [
        { name: "Python", level: 85 },
        { name: "Pandas & NumPy", level: 80 },
        { name: "MS Excel", level: 90 },
        { name: "MySQL", level: 75 },
        { name: "Data Visualization", level: 80 },
      ],
    },
    {
      title: "Cyber Security",
      icon: Shield,
      color: "secondary",
      skills: [
        { name: "Burp Suite", level: 70 },
        { name: "Wireshark", level: 75 },
        { name: "Vulnerability Assessment", level: 70 },
        { name: "Security Protocols", level: 75 },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "accent",
      skills: [
        { name: "Analytical Thinking", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Teamwork", level: 85 },
        { name: "Adaptability", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-${category.color}/10 rounded-lg`}>
                    <category.icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/70 rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${0.3 + categoryIndex * 0.1 + skillIndex * 0.05}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional tech stack */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold mb-4 text-center">Additional Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Bash", "VirtualBox", "VMWare", "C++", "SciPy", "CI/CD"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full text-sm transition-all cursor-default"
                  >
                    {tech}
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

