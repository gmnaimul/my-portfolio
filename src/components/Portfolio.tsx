import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useState } from "react";


// We need to define callGeminiAPI in this scope or pass it as a prop
const callGeminiAPI = async (prompt, systemInstruction) => {
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined,
    };
    // Basic exponential backoff
    let retries = 3;
    let delay = 1000;
    while(retries > 0) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                const result = await response.json();
                return result.candidates[0].content.parts[0].text;
            }
            throw new Error(`API request failed with status ${response.status}`);
        } catch (error) {
            console.error("Gemini API call failed:", error);
            retries--;
            if (retries === 0) return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
            await new Promise(res => setTimeout(res, delay));
            delay *= 2;
        }
    }
};

const Portfolio = () => {
  const projects = [
    {
      title: "Comparative Analysis of ML Algorithms on Road Accident Data",
      description: "Research project evaluating five machine learning models to identify key accident risk factors and predict severity using statistical analysis.",
      tags: ["Python", "ML", "Data Analysis", "Research"],
      category: "Data Science",
    },
    {
      title: "Automated CI/CD Pipeline",
      description: "Developed and deployed containerized microservices using Docker, Kubernetes, and Jenkins for automated testing and deployment.",
      tags: ["DevOps", "Docker", "Kubernetes", "Jenkins"],
      category: "DevOps",
    },
    {
      title: "Security Vulnerability Assessment Tool",
      description: "Built a security testing framework for identifying common web application vulnerabilities and generating comprehensive reports.",
      tags: ["Security", "Python", "Burp Suite", "Testing"],
      category: "Cyber Security",
    },
  ];

  const [summary, setSummary] = useState({});
  const [isLoading, setIsLoading] = useState({});

  const getSummary = async (projectTitle, projectDescription, index) => {
      if (summary[index]) { // Don't re-fetch if summary exists
          setSummary(prev => ({...prev, [index]: undefined}));
          return;
      }
      setIsLoading(prev => ({ ...prev, [index]: true }));
      const prompt = `Provide a concise, professional summary for the following project, suitable for a portfolio. Expand on the description with potential impacts or technologies used. Format it nicely with paragraphs or bullet points using markdown. Project Title: "${projectTitle}". Description: "${projectDescription}".`;
      const result = await callGeminiAPI(prompt, "You are a tech project manager summarizing a portfolio piece.");
      setSummary(prev => ({ ...prev, [index]: result }));
      setIsLoading(prev => ({ ...prev, [index]: false }));
  };


  return (
    <section id="portfolio" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">
              A selection of my recent work and research
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border flex flex-col justify-between hover:border-primary/50 transition-all animate-fade-in group"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div>
                    <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {project.category}
                    </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                    </p>
                    {summary[index] && <div className="gemini-response text-sm text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: summary[index].replace(/\n/g, '<br/>') }}></div>}


                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                        <span
                        key={idx}
                        className="px-2 py-1 bg-muted text-xs rounded border border-border"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => getSummary(project.title, project.description, index)} disabled={isLoading[index]}>
                    <Sparkles className="mr-2 h-4 w-4" />
                    {isLoading[index] ? 'Summarizing...' : summary[index] ? 'Hide Summary' : '✨ Get Project Summary'}
                </Button>
              </Card>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Card className="p-8 bg-card border-border inline-block">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Github className="h-12 w-12 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">View More on GitHub</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore my complete project portfolio and contributions
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href="https://github.com/gmnaimul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Visit GitHub Profile
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

