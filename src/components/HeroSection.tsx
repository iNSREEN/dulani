import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Top Pattern */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-repeat-x opacity-10" 
           style={{ backgroundImage: "url('/lovable-uploads/c4d493aa-cd70-4ceb-9e5f-58f86c912550.png')", backgroundSize: "auto 100%" }}>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">
          {/* Left Side - Text + CTA */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-primary">Dulani</span>{" "}
                <span className="text-foreground">Your Next Guide – Smarter, Faster, and More Interactive!</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full lg:max-w-lg mx-auto lg:mx-0">
                Transform visitor experiences with AI-powered navigation, augmented reality guidance, and real-time analytics.
              </p>
            </div>
            <Button 
              variant="demo" 
              className="text-base sm:text-lg w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Demo
            </Button>
          </div>

          {/* Right Side - Mobile Screenshots */}
          <div className="relative order-1 lg:order-2">
            <div className="flex justify-center items-center space-x-1 sm:space-x-2 md:space-x-3 scale-75 sm:scale-90 md:scale-100">
              {/* Mobile Frame 1 */}
              <div className="relative transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="w-32 h-64 sm:w-36 sm:h-72 md:w-40 md:h-80 lg:w-44 lg:h-88 xl:w-48 xl:h-96 bg-black rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] p-1 sm:p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[26px] overflow-hidden relative">
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
                <div className="w-32 h-64 sm:w-36 sm:h-72 md:w-40 md:h-80 lg:w-44 lg:h-88 xl:w-48 xl:h-96 bg-black rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] p-1 sm:p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[26px] overflow-hidden relative">
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
                <div className="w-32 h-64 sm:w-36 sm:h-72 md:w-40 md:h-80 lg:w-44 lg:h-88 xl:w-48 xl:h-96 bg-black rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] p-1 sm:p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[26px] overflow-hidden relative">
                    {/* App Content - AR Navigation Screenshot */}
                    <img 
                      src="/lovable-uploads/bfcd5964-9fc8-4d43-9ba8-a777f2afc8b7.png" 
                      alt="Dulani AR Navigation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl"></div>
            
            {/* Pattern overlay for mobile frames area */}
            <div className="absolute -z-5 bottom-0 left-0 right-0 h-12 sm:h-16 md:h-20 bg-repeat-x opacity-5" 
                 style={{ backgroundImage: "url('/lovable-uploads/c4d493aa-cd70-4ceb-9e5f-58f86c912550.png')", backgroundSize: "auto 100%" }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;