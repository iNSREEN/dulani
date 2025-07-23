const AboutSection = () => {
  return (
    <section id="about" className="py-32 -mt-16 relative overflow-hidden">
      {/* Curved top section that overlaps with hero */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-muted/10 to-muted/30"></div>
      <svg className="absolute top-0 left-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C300,60 600,120 900,80 C1050,50 1150,100 1200,60 L1200,0 Z" 
              fill="currentColor" className="text-muted/20"></path>
      </svg>
      
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
    </section>
  );
};

export default AboutSection;