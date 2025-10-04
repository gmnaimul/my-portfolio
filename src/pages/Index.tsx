import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useToast } from "@/components/ui/use-toast"


const Index = () => {
    const { toast } = useToast();
  return (
    <div className="min-h-screen">
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
  );
};

export default Index;
