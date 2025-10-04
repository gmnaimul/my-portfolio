import { GraduationCap, Heart, Brain, Sparkles, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";


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
      institution: "Bangladesh Army International University of Science and Technology, Cumilla. (BAIUST)",
      status: "Completed",
      icon: GraduationCap,
    },
  ];

  const strengths = [
    {
      title: "Analytical Mindset",
      description: "Strong foundation in data analysis and statistical thinking",
      icon: Brain,
    },
    {
      title: "Problem Solver",
      description: "Passionate about finding efficient solutions to complex challenges",
      icon: Heart,
    },
    {
      title: "Continuous Learner",
      description: "Always exploring new technologies and methodologies",
      icon: GraduationCap,
    },
  ];

  const [aiInput, setAiInput] = useState('');
  const [aiConversation, setAiConversation] = useState([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const chatContainerRef = useRef(null);
  
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [aiConversation]);

  const handleAiSubmit = async (e) => {
      e.preventDefault();
      if (!aiInput.trim() || isAiLoading) return;

      const newConversation = [...aiConversation, { role: 'user', content: aiInput }];
      setAiConversation(newConversation);
      setAiInput('');
      setIsAiLoading(true);

      const systemInstruction = `You are a helpful AI assistant for G.M. Naimul Quader, a Jr. Data Analyst, DevOps enthusiast, and Cyber Security Researcher. Your goal is to answer questions from visitors to his portfolio website. Be friendly, professional, and concise. Base your answers on the following information about Naimul:\n\n- Education: BSc in CSE (Completed), MBA (Ongoing).\n- Experience: Jr. Data Analyst at LIIA Smart Inc., DevOps Intern at Anwar Group, Cyber Security Intern at Bangladesh Ace Encoders.\n- Skills: DevOps (Linux, Docker, Kubernetes, Jenkins, AWS), Data Analysis (Python, Pandas, NumPy, SQL), Cyber Security (Burp Suite, Wireshark).\n- Projects: ML on Road Accident Data, Automated CI/CD Pipeline, Security Vulnerability Assessment Tool.\n- Strengths: Analytical, Problem Solver, Continuous Learner.\n\nIf a question is outside the scope of Naimul's professional life (e.g., asking for personal opinions on unrelated topics, or to perform unrelated tasks), politely decline and steer the conversation back to his skills and experience.`;
      
      const response = await callGeminiAPI(aiInput, systemInstruction);

      setAiConversation(prev => [...prev, { role: 'assistant', content: response }]);
      setIsAiLoading(false);
  };

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors h-full flex flex-col justify-center">
                        <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                        I am a <span className="text-foreground font-semibold">CSE graduate</span>, 
                        <span className="text-foreground font-semibold"> Jr. Data Analyst</span>, 
                        <span className="text-foreground font-semibold"> DevOps enthusiast</span>, and 
                        <span className="text-foreground font-semibold"> Cyber Security Researcher</span> passionate 
                        about technology, data-driven insights, and secure system design. With a strong analytical 
                        mindset and dedication to continuous learning, I strive to deliver innovative solutions 
                        that bridge the gap between data, operations, and security.
                        </p>
                    </Card>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                   <Card className="p-6 bg-card border-border h-full flex flex-col">
                     <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Sparkles className="text-primary h-5 w-5"/>Ask my AI Assistant</h3>
                      <div ref={chatContainerRef} className="flex-grow h-48 overflow-y-auto p-2 bg-muted/50 rounded-md mb-4 space-y-4">
                          {aiConversation.map((msg, index) => (
                              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                  <div className={cn("max-w-xs md:max-w-md rounded-lg px-4 py-2", msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground')}>
                                     <div className="gemini-response" dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, '<br />') }} />
                                  </div>
                              </div>
                          ))}
                          {isAiLoading && <div className="flex justify-start"><div className="max-w-xs md:max-w-md rounded-lg px-4 py-2 bg-secondary text-secondary-foreground">Thinking...</div></div>}
                      </div>
                      <form onSubmit={handleAiSubmit} className="flex gap-2">
                          <Input 
                            value={aiInput}
                            onChange={(e) => setAiInput(e.target.value)}
                            placeholder="Ask about my skills..."
                            className="bg-muted border-border"
                            disabled={isAiLoading}
                          />
                          <Button type="submit" size="icon" disabled={isAiLoading}><Send className="h-4 w-4" /></Button>
                      </form>
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
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <edu.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Core Strengths</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {strengths.map((strength, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:border-accent/50 transition-all hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                      <strength.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-xl mb-2">{strength.title}</h4>
                    <p className="text-muted-foreground">{strength.description}</p>
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

