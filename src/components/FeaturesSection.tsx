import { Cpu, ScanLine, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: ScanLine,
      title: "AR Visual Guidance", 
      description: "Interactive directions overlaid on your surroundings."
    },
    {
      icon: Cpu,
      title: "AI-Powered Navigation",
      description: "Delivers seamless and efficient guidance to help users reach their destinations with ease."
    },
    {
      icon: Users,
      title: "Crowd Management",
      description: "Enhance visitor experience and avoid crowds using AI and AR to reach destinations faster and smoother"
    }
  ];

  return (
    <section id="features" className="py-20 -mt-10 relative overflow-hidden">
      {/* Diagonal background transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-primary/10 transform -skew-y-1 origin-top-left"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-16 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Dulani's</span> Features
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Cutting-edge technology for seamless navigation experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-4 sm:p-6 md:p-8 bg-card/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-border/50 hover:border-primary/30"
              >
                {/* Card background effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;