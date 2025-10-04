import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Facebook, Instagram, Send, Sparkles } from "lucide-react";

// You will need to import the XLogo component if it's in a separate file,
// or define it here as you did in the main HTML file.
const XLogo = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 18L18 6" />
        <path d="M6 6l5 5" />
        <path d="M13 13l5 5" />
    </svg>
);


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


const Contact = ({toast}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const socialLinks = [
    { name: "Email", icon: Mail, url: "mailto:naimulgm.29@gmail.com" }, 
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/gmnaimul" }, 
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/gmnaimul" }, 
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/naimulumian" }, 
    { name: "X", icon: XLogo, url: "https://x.com/naimulumian" }
  ];

  const handleSuggestMessage = async () => {
    setIsSuggesting(true);
    const prompt = `My name is ${formData.name || 'a potential client'} and my email is ${formData.email || 'not provided'}. I am interested in Naimul's work. Write a short, professional message to him expressing interest in one of his key areas: Data Analysis, DevOps, or Cyber Security. Keep it under 50 words.`;
    const suggestion = await callGeminiAPI(prompt, "You are a helpful assistant drafting a message for a portfolio website's contact form.");
    setFormData(prev => ({...prev, message: suggestion}));
    setIsSuggesting(false);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsSending(true);
    toast.info("Sending your message...");

    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
    };

    try {
      // @ts-ignore
      await emailjs.send('service_o9tern9', 'template_rgx165l', templateParams);

      const prompt = `A user named ${formData.name} sent the following message through a portfolio contact form: "${formData.message}". Generate a friendly and professional auto-reply acknowledging receipt and saying that Naimul Quader will get back to them soon. Mention the specific topic they wrote about if it's clear. For example, if they mentioned 'data', say 'Thanks for your interest in my data analysis work'. Keep it to 2 sentences.`;
      const autoReply = await callGeminiAPI(prompt, "You are a professional assistant writing an auto-reply for a contact form.");
      toast.success(`<b>Message sent!</b><br/>${autoReply}`); 
      setFormData({ name: "", email: "", message: "" }); 

    } catch (error) {
        console.error('FAILED...', error);
        toast.error('Failed to send message. Please try again later.');
    } finally {
        setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label htmlFor="message" className="block text-sm font-medium">Tell About the Project</label>
                        <Button type="button" variant="ghost" size="sm" onClick={handleSuggestMessage} disabled={isSuggesting || isSending}>
                            <Sparkles className="mr-2 h-4 w-4" />
                            {isSuggesting ? 'Thinking...' : '✨ Suggest Message'}
                        </Button>
                    </div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss..."
                    rows={6}
                    className="bg-muted border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                  {!isSending && <Send className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </Card>

            {/* Social Links */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Connect on Social Media</h3>
                    <Card className="p-6 bg-card border-border">
                        <div className="flex justify-center lg:justify-start items-center gap-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="group"
                                >
                                    <div className={`p-3 bg-card border-2 border-transparent hover:border-primary/50 rounded-lg group-hover:bg-primary/10 transition-all duration-300 transform group-hover:scale-110`}>
                                        <link.icon className={`h-8 w-8 text-muted-foreground group-hover:text-primary`} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </Card>
                </div>

              {/* Additional info */}
              <Card className="p-6 bg-card border-border">
                <h4 className="font-semibold mb-2">Open to Opportunities</h4>
                <p className="text-muted-foreground text-sm">
                  I'm currently available for freelance projects, consulting, and full-time opportunities 
                  in data analysis, DevOps, and cybersecurity roles.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

