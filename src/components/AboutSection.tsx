const AboutSection = () => {
  return (
    <>
      {/* Pattern Divider */}
      <div className="w-full h-16 bg-repeat-x opacity-20" 
           style={{ backgroundImage: "url('/lovable-uploads/f4ebc363-1b53-4abb-a3fe-981b9d22df25.png')", backgroundSize: "auto 100%" }}>
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