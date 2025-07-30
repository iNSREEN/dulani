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
      roles: ["AI Specialist", "UI/UX Designer", "Project Manager", "Business Developer"],
      image: "/lovable-uploads/b3dc2372-c162-466a-8fe0-99bb7e11bac4.png"
    },
    {
      name: "Lujain Alahrbi",
      roles: ["AI Specialist", "UI/UX Designer", "Project Manager", "Business Developer"],
      image: "/lovable-uploads/1c1bdd27-1183-47ca-9772-36da77403e04.png"
    }
  ];

  return (
    <section id="team" className="py-12 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          Meet Our <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">Team</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          A talented team of experts driving innovation in AI-powered navigation and augmented reality solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group bg-card/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/30 hover:border-primary/30 relative overflow-hidden"
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Circular Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-background"></div>
                  </div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 lg:w-32 lg:h-32 rounded-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg lg:text-xl font-bold text-secondary text-center mb-3 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>

              {/* Gradient Divider */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>

              {/* Roles */}
              <div className="space-y-2">
                {member.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="flex items-start">
                    <span className="text-primary mr-2 text-sm group-hover:text-secondary transition-colors duration-300 mt-1">•</span>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;