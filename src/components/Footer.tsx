import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-card/20 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Compact Footer */}
          <div className="py-5 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

              {/* Copyright */}
              <p className="text-[11px] sm:text-xs text-muted-foreground text-center sm:text-left">
                © {currentYear}{" "}
                <span className="text-foreground font-medium">
                  G.M. Naimul Quader
                </span>{" "}
                — All Rights Reserved.
              </p>

              {/* Built With + Back To Top */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs text-muted-foreground">
                  Built with purpose & continuous learning.
                </span>

                <button
                  type="button"
                  onClick={scrollToTop}
                  aria-label="Back to top"
                  className="w-7 h-7 rounded-md border border-border/60 bg-background/20 flex items-center justify-center hover:border-primary/30 hover:bg-primary/[0.06] transition-all duration-300 group"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;