const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-primary-foreground rounded-md flex items-center justify-center">
              <span className="text-primary font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold">Dulani</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#hero" className="hover:text-primary-foreground/80 transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-foreground/80 transition-colors">About</a>
            <a href="#features" className="hover:text-primary-foreground/80 transition-colors">Features</a>
            <a href="#team" className="hover:text-primary-foreground/80 transition-colors">Team</a>
            <a href="#contact" className="hover:text-primary-foreground/80 transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80">
              © 2024 Dulani. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;