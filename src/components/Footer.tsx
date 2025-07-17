const Footer = () => {
  return (
    <>
      {/* Pattern Divider before Footer */}
      <div className="w-full h-16 bg-repeat-x opacity-25" 
           style={{ backgroundImage: "url('/lovable-uploads/f4ebc363-1b53-4abb-a3fe-981b9d22df25.png')", backgroundSize: "auto 100%" }}>
      </div>
      
      <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" 
              alt="Dulani Logo" 
              className="w-8 h-8"
            />
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
    </>
  );
};

export default Footer;