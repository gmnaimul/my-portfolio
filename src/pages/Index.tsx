import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIBackground from "@/components/AIBackground";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { toast } from "sonner";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Animated AI Background */}
      <AIBackground />

      {/* Website Content */}
      <div className="relative z-10">
        <Navigation />

        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Services />
          <Portfolio />
          <Contact toast={toast} />
        </main>

        <Footer />
        <Sonner />
      </div>
    </div>
  );
};

export default Index;