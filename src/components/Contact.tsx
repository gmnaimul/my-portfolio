import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Send,
  Share2,
  ArrowUpRight,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactProps = {
  toast: typeof import("sonner").toast;
};

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L.07 24l6.34-1.66a11.87 11.87 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.41ZM12.06 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.66-.23-.38a9.88 9.88 0 1 1 8.39 4.65Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
      fill="currentColor"
    />
  </svg>
);

const TelegramIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21.94 3.16 18.7 20.3c-.24 1.21-.88 1.51-1.78.94l-4.91-3.62-2.37 2.28c-.26.26-.48.48-.98.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.24 13.88l-4.77-1.49c-1.04-.32-1.06-1.04.22-1.54L20.35 3.02c.89-.32 1.67.2 1.59.14Z"
      fill="currentColor"
    />
  </svg>
);

const Contact = ({ toast }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/gmnaimul",
      external: true,
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/gmnaimul",
      external: true,
    },
    {
      name: "X",
      icon: null,
      url: "https://x.com/naimulumian",
      external: true,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/gmnaimul/",
      external: true,
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/naimulumian",
      external: true,
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:naimulgm.29@gmail.com",
      external: false,
    },
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      url: "https://wa.me/8801794795951",
      external: true,
    },
    {
      name: "Telegram",
      icon: TelegramIcon,
      url: "https://t.me/tgmgmn",
      external: true,
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
    <section
      id="contact"
      className="relative py-24 md:py-28 overflow-hidden bg-transparent"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] left-[8%] w-[420px] h-[420px] rounded-full bg-blue-500/[0.025] blur-3xl" />
        <div className="absolute bottom-[10%] right-[8%] w-[420px] h-[420px] rounded-full bg-purple-500/[0.025] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              Get In Touch
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Let's Connect
            </h2>

            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Have a project, collaboration, or opportunity in mind? Feel free
              to reach out and let's discuss how I can help.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">

            {/* Send a Message */}
            <Card className="relative overflow-hidden bg-card/25 backdrop-blur-xl border-border/60">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <div className="p-6 sm:p-7">

                {/* Card Header */}
                <div className="flex items-start gap-4 mb-7">
                  <div className="w-11 h-11 shrink-0 rounded-xl border border-border/60 bg-background/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      Send a Message
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      I'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium mb-2"
                    >
                      Your Name
                    </label>

                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="bg-background/20 border-border/60"
                      disabled={isSending}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium mb-2"
                    >
                      Email Address
                    </label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="bg-background/20 border-border/60"
                      disabled={isSending}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium mb-2"
                    >
                      Message
                    </label>

                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a little about your project or idea..."
                      rows={6}
                      className="bg-background/20 border-border/60 resize-none"
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
              </div>
            </Card>

            {/* Right Side */}
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Social Connect */}
              <Card className="relative overflow-hidden bg-card/25 backdrop-blur-xl border-border/60">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                <div className="p-6">

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 shrink-0 rounded-xl border border-primary/60 bg-primary/[0.05] flex items-center justify-center">
                      <Share2 className="w-5 h-5 text-muted-foreground" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">
                        Social Connect
                      </h3>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Find me across the web.
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-2.5">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;

                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target={
                            link.external ? "_blank" : undefined
                          }
                          rel={
                            link.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          aria-label={link.name}
                          className="group block"
                        >
                          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-background/15 px-3 py-2.5 hover:border-primary/25 hover:bg-primary/[0.04] transition-all duration-300">

                            <div className="flex items-center gap-2.5">
                              {link.name === "X" ? (
                                <span className="text-sm leading-none text-muted-foreground group-hover:text-primary transition-colors">
                                  𝕏
                                </span>
                              ) : (
                                Icon && (
                                  <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                )
                              )}

                              <span className="text-[11px] text-muted-foreground group-hover:text-foreground transition-colors">
                                {link.name}
                              </span>
                            </div>

                            <ArrowUpRight className="w-3 h-3 text-muted-foreground/60 group-hover:text-primary transition-colors" />

                          </div>
                        </a>
                      );
                    })}
                  </div>

                </div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;