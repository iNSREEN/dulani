const TeamSection = () => {
  const teamMembers = [
    {
      name: "Fatima Aldukkan",
      roles: ["Co-Founder"],
      image: "/lovable-uploads/553446c0-92b4-48dd-8771-9215f0def097.png"
    },
    {
      name: "Nsreen Alfaifi", 
      roles: ["Co-Founder"],
      image: "/lovable-uploads/abf50def-8340-4f0f-831e-c1e73e5b3ec1.png"
    },
    {
      name: "Shekha Alabduslam",
      roles: ["Co-Founder"],
      image: "/lovable-uploads/41f8fbe8-82c0-42fa-9bf0-4b9b822c384e.png"
    },
    {
      name: "Shaden Almashuq",
      roles: ["Co-Founder"],
      image: "/lovable-uploads/b3dc2372-c162-466a-8fe0-99bb7e11bac4.png"
    },
    {
      name: "Lujain Alahrbi",
      roles: ["Founder"],
      image: "/lovable-uploads/1c1bdd27-1183-47ca-9772-36da77403e04.png"
    }
  ];

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/4 rounded-full blur-3xl"></div>
      <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-primary/2 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">Experts</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            A talented team driving innovation in AI-powered navigation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-border/30 hover:border-primary/20 relative overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Circular Image */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                      <div className="w-full h-full rounded-full bg-background"></div>
                    </div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-bold text-secondary text-center mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Gradient Divider */}
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>

                {/* Roles */}
                <div className="space-y-1">
                  {member.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex items-start">
                      <span className="text-primary mr-2 text-sm group-hover:text-secondary transition-colors duration-300">•</span>
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
      </div>
    </section>
  );
};

export default TeamSection;