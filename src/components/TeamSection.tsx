const TeamSection = () => {
  const teamMembers = [
    {
      name: "Fatima Aldukkan",
      roles: ["XR developer", "AI specialist", "Innovation Practitioner", "Product Manager"],
      image: "/lovable-uploads/553446c0-92b4-48dd-8771-9215f0def097.png"
    },
    {
      name: "Nsreen Alfaifi", 
      roles: ["Software developer", "Quality Assurance Engineer", "Researcher", "Technical Manager"],
      image: "/lovable-uploads/abf50def-8340-4f0f-831e-c1e73e5b3ec1.png"
    },
    {
      name: "Shekha Alabduslam",
      roles: ["Metaverse developer", "AI specialist", "Digital Solutions Strategist", "Project Manager"],
      image: "/lovable-uploads/41f8fbe8-82c0-42fa-9bf0-4b9b822c384e.png"
    },
    {
      name: "Shaden Almashuq",
      roles: ["XR developer", "AI specialist", "UI/UX designer", "3D Designer"],
      image: "/lovable-uploads/b3dc2372-c162-466a-8fe0-99bb7e11bac4.png"
    },
    {
      name: "Lujain Alahrbi",
      roles: ["Metaverse developer", "Project Manager", "Innovation Practitioner", "AI specialist"],
      image: "/lovable-uploads/1c1bdd27-1183-47ca-9772-36da77403e04.png"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-t from-background via-muted/10 to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A talented team driving innovation in AI-powered navigation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              {/* Circular Image */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-secondary text-center mb-2">
                {member.name}
              </h3>

              {/* Divider */}
              <div className="w-full h-0.5 bg-primary mx-auto mb-4"></div>

              {/* Roles */}
              <div className="space-y-1">
                {member.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="flex items-start">
                    <span className="text-primary mr-2 text-sm">•</span>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;