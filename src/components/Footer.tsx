const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {currentYear} <span className="text-foreground font-semibold">G.M. Naimul Quader</span> – All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion and precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

