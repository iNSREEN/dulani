const Footer = () => {
  return (
    <>
      {/* Pattern Divider before Footer */}
      <div className="w-full h-16 bg-repeat-x opacity-25" 
           style={{ backgroundImage: "url('/lovable-uploads/c4d493aa-cd70-4ceb-9e5f-58f86c912550.png')", backgroundSize: "auto 100%" }}>
      </div>
      
      <footer className="bg-secondary text-secondary-foreground py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" 
                alt="Dulani Logo" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold">Dulani</span>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-secondary-foreground/80">
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