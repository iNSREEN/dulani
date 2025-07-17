const Footer = () => {
  return (
    <>
      {/* Pattern Divider before Footer */}
      <div className="w-full h-16 bg-repeat-x opacity-25" 
           style={{ backgroundImage: "url('/lovable-uploads/c4d493aa-cd70-4ceb-9e5f-58f86c912550.png')", backgroundSize: "auto 100%" }}>
      </div>
      
      <footer className="bg-secondary text-secondary-foreground py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Logo and Brand */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" 
                  alt="Dulani Logo" 
                  className="w-8 h-8"
                />
                <span className="text-2xl font-bold">Dulani</span>
              </div>
              <p className="text-secondary-foreground/80 text-center md:text-left">
                AI-powered navigation for smarter experiences
              </p>
            </div>

            {/* Sections Navigation */}
            <div className="text-center">
              <h3 className="text-lg font-bold mb-4">Sections</h3>
              <div className="flex flex-col space-y-3">
                <a href="#hero" className="hover:text-primary transition-colors font-medium">Home</a>
                <a href="#about" className="hover:text-primary transition-colors font-medium">About Dulani</a>
                <a href="#features" className="hover:text-primary transition-colors font-medium">Features</a>
                <a href="#team" className="hover:text-primary transition-colors font-medium">Our Team</a>
                <a href="#contact" className="hover:text-primary transition-colors font-medium">Contact Us</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
              <div className="flex flex-col space-y-2">
                <a href="mailto:Lujain@dulanii.com" className="hover:text-primary transition-colors">
                  Lujain@dulanii.com
                </a>
                <a href="tel:0551201145" className="hover:text-primary transition-colors">
                  0551201145
                </a>
                <a href="https://linkedin.com/company/dulani" className="hover:text-primary transition-colors">
                  LinkedIn: Dulani
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center">
            <p className="text-secondary-foreground/60">
              © 2024 Dulani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;