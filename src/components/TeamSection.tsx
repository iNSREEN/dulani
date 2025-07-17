const TeamSection = () => {
  const teamMembers = [
    {
      name: "Fatima Aldukkan",
      roles: ["XR developer", "AI specialist", "Innovation Practitioner", "Product Manager"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Nsreen Alfaifi", 
      roles: ["Software developer", "Quality Assurance Engineer", "Researcher", "Technical Manager"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Shekha Alabduslam",
      roles: ["Metaverse developer", "AI specialist", "Digital Solutions Strategist", "Project Manager"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Shaden Almashuq",
      roles: ["XR developer", "AI specialist", "UI/UX designer", "3D Designer"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Lujain Alahrbi",
      roles: ["Metaverse developer", "Project Manager", "Innovation Practitioner", "AI specialist"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
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
              <div className="w-12 h-0.5 bg-primary mx-auto mb-4"></div>

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