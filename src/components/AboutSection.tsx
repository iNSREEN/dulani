const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
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
  );
};

export default AboutSection;