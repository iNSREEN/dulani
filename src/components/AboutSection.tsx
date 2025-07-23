import patternDivider from "@/assets/pattern-divider.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 -mt-16 relative overflow-hidden">
      {/* Pattern divider at top */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-20">
        <img 
          src={patternDivider} 
          alt="" 
          className="w-full h-full object-cover object-center" 
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-40 left-20 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-32 w-8 h-8 bg-secondary/25 rounded-full animate-pulse delay-300"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
            What is <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Dulani</span>?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in delay-200">
            Dulani is an AI-powered navigation app that transforms visitor experiences. 
            Using augmented reality (AR) and real-time AI analytics, it provides seamless 
            guidance, reduces congestion, and enhances accessibility.
          </p>
        </div>
      </div>

      {/* Pattern divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 rotate-180">
        <img 
          src={patternDivider} 
          alt="" 
          className="w-full h-full object-cover object-center" 
        />
      </div>
    </section>
  );
};

export default AboutSection;