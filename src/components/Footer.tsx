const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Brand - Left Side */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" 
                alt="Dulani Logo" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold">Dulani</span>
            </div>

            {/* Copyright - Right Side */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground/80">
                © 2024 Dulani. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;