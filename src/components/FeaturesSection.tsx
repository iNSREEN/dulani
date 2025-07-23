import { Bot, ScanLine, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Navigation",
      description: "Advanced AI algorithms analyze real-time data to calculate optimal paths",
      gradient: "from-primary/20 to-primary/10"
    },
    {
      icon: ScanLine,
      title: "AR Visual Guidance", 
      description: "Interactive directions overlaid on your surroundings.",
      gradient: "from-secondary/20 to-secondary/10"
    },
    {
      icon: Users,
      title: "Crowd Management",
      description: "Dynamic routes adapt to crowd movements in real time",
      gradient: "from-primary/20 to-secondary/20"
    }
  ];

  return (
    <>
      {/* Pattern Divider */}
      <div className="w-full h-16 bg-repeat-x opacity-20" 
           style={{ backgroundImage: "url('/lovable-uploads/c4d493aa-cd70-4ceb-9e5f-58f86c912550.png')", backgroundSize: "auto 100%" }}>
      </div>
      
      <section id="features" className="py-20 relative overflow-hidden">
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
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-primary" />
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
    </>
  );
};

export default FeaturesSection;