const AboutSection = () => {
  return (
    <>
      {/* Elegant Geometric Divider */}
      <div className="w-full h-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-4">
            <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-secondary/40 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
      
      <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              What is <span className="text-primary">Dulani</span>?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Dulani is an AI-powered navigation app that transforms visitor experiences. 
              Using augmented reality (AR) and real-time AI analytics, it provides seamless 
              guidance, reduces congestion, and enhances accessibility.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;