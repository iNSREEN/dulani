import { Cpu, ScanLine, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Navigation",
      description: "Advanced AI algorithms analyze real-time data to calculate optimal paths"
    },
    {
      icon: ScanLine,
      title: "AR Visual Guidance", 
      description: "Interactive directions overlaid on your surroundings."
    },
    {
      icon: Users,
      title: "Crowd Management",
      description: "Enhance visitor experience and avoid crowds using AI and AR to reach destinations faster and smoother"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Dulani's</span> Features
          </h2>
          <p className="text-xl text-muted-foreground">
            Cutting-edge technology for seamless navigation experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;