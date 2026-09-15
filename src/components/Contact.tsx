import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";

const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 18L18 6" />
    <path d="M6 6l5 5" />
    <path d="M13 13l5 5" />
  </svg>
);

type ContactProps = {
  toast: {
    error: (message: string) => void;
    info: (message: string) => void;
    success: (message: string) => void;
  };
};

const Contact = ({ toast }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:naimulgm.29@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/gmnaimul",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/gmnaimul",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/naimulumian",
    },
    {
      name: "X",
      icon: XLogo,
      url: "https://x.com/naimulumian",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        "service_o9tern9",
        "template_rgx165l",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YcPHVLfqulPEeiufm"
      );

      toast.success(
        "Message sent successfully! I'll get back to you soon."
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      console.error("EmailJS send failed:", error);
      console.error("EmailJS error text:", error?.text);
      console.error("EmailJS error status:", error?.status);

      toast.error(
        error?.text ||
          "Failed to send the message. Please try again or email me directly."
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>

            <div className="w-16 h-0.5 bg-primary mx-auto mb-5"></div>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have an AI idea, automation challenge, technical project, or
              collaboration opportunity? Feel free to reach out.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">

            {/* Contact Form */}
            <Card
              className="p-8 bg-card border-border animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-bold mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>

                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-muted border-border"
                    disabled={isSending}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
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
                    disabled={isSending}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Tell About the Project
                  </label>

                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss an AI automation project..."
                    rows={6}
                    className="bg-muted border-border resize-none"
                    disabled={isSending}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}

                  {!isSending && (
                    <Send className="ml-2 h-4 w-4" />
                  )}
                </Button>

              </form>
            </Card>

            {/* Right Side */}
            <div
              className="space-y-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                  Connect on Social Media
                </h3>

                <Card className="p-6 bg-card border-border">
                  <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">

                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target={
                          link.name === "Email"
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          link.name === "Email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        aria-label={link.name}
                        title={link.name}
                        className="group"
                      >
                        <div className="p-3 bg-card border border-border hover:border-primary/50 rounded-lg group-hover:bg-primary/10 transition-all duration-300">
                          <link.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </a>
                    ))}

                  </div>
                </Card>
              </div>

              {/* Opportunities */}
              <Card className="p-6 bg-card border-border">
                <h4 className="font-semibold mb-2">
                  Open to Opportunities
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Open to meaningful collaborations, AI automation projects,
                  consulting opportunities, and technology-focused work
                  involving AI adoption, workflow optimization, data, DevOps,
                  and related technical areas.
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