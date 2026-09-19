import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    element?.scrollIntoView({
      behavior: "smooth",
    });

    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-[2px] border-b border-white/[0.04]"
          : "backdrop-blur-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* =====================================================
              BRAND
          ===================================================== */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2.5"
          >
            {/* Terminal-style mark */}
            <div className="w-9 h-9 rounded-xl border border-white/[0.12] bg-white/[0.025] flex items-center justify-center">
              <span className="text-sm sm:text-base font-mono font-semibold text-foreground tracking-tight">
                &gt;_
              </span>
            </div>

            {/* Name */}
            <span className="text-lg sm:text-xl font-bold text-foreground">
              Naimul
            </span>
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  item.name === "Contact"
                    ? "ml-2 bg-foreground text-background hover:bg-foreground/90"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/[0.06] bg-black/20 backdrop-blur-md">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    item.name === "Contact"
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;