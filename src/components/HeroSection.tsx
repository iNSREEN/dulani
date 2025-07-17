import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-24 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Top Pattern */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-repeat-x opacity-10" 
           style={{ backgroundImage: "url('/lovable-uploads/6595d837-f4e6-4e69-a33d-27ea2e60c761.png')", backgroundSize: "auto 100%" }}>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text + CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Dulani</span>{" "}
                <span className="text-foreground">Your Next Guide – Smarter, Faster, and More Interactive!</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Transform visitor experiences with AI-powered navigation, augmented reality guidance, and real-time analytics.
              </p>
            </div>
            <Button 
              variant="demo" 
              className="text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Demo
            </Button>
          </div>

          {/* Right Side - Mobile Screenshots */}
          <div className="relative">
            <div className="flex justify-center items-center space-x-3">
              {/* Mobile Frame 1 */}
              <div className="relative transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="w-48 h-96 bg-black rounded-[32px] p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[26px] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-white flex items-center justify-between px-4 text-xs font-medium z-10">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                        <div className="w-6 h-2 bg-black rounded-sm"></div>
                        <div className="w-6 h-2 bg-black rounded-sm"></div>
                      </div>
                    </div>
                    {/* App Content */}
                    <img 
                      src="/lovable-uploads/e92855f0-03d5-410f-8aba-ab63957392be.png" 
                      alt="Dulani Splash Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Frame 2 - Center */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="w-48 h-96 bg-black rounded-[32px] p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[26px] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-white flex items-center justify-between px-4 text-xs font-medium z-10">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-1.5 bg-black rounded-sm"></div>
                        <div className="w-4 h-1.5 bg-black rounded-sm"></div>
                        <div className="w-4 h-1.5 bg-black rounded-sm"></div>
                      </div>
                    </div>
                    {/* App Content */}
                    <img 
                      src="/lovable-uploads/499054ec-64a7-4823-95ab-3728f92dd311.png" 
                      alt="Dulani Main Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Frame 3 */}
              <div className="relative transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="w-48 h-96 bg-black rounded-[32px] p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[26px] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-white flex items-center justify-between px-4 text-xs font-medium">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-1.5 bg-black rounded-sm"></div>
                        <div className="w-4 h-1.5 bg-black rounded-sm"></div>
                        <div className="w-4 h-1.5 bg-black rounded-sm"></div>
                      </div>
                    </div>
                    {/* App Content - Using a placeholder for the third screen */}
                    <div className="w-full h-full bg-gradient-to-b from-primary/10 to-primary/20 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-primary-foreground text-xl font-bold">AR</span>
                        </div>
                        <h3 className="text-primary font-bold text-base mb-2">AR Navigation</h3>
                        <p className="text-muted-foreground text-xs">Interactive directions overlaid on your surroundings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            
            {/* Pattern overlay for mobile frames area */}
            <div className="absolute -z-5 bottom-0 left-0 right-0 h-20 bg-repeat-x opacity-5" 
                 style={{ backgroundImage: "url('/lovable-uploads/f4ebc363-1b53-4abb-a3fe-981b9d22df25.png')", backgroundSize: "auto 100%" }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;