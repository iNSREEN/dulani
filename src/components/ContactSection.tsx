import { Mail, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Lujain@dulanii.com",
      href: "mailto:Lujain@dulanii.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "0551201145",
      href: "tel:0551201145"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Dulani",
      href: "https://linkedin.com/company/dulani"
    }
  ];

  return (
    <section id="contact" className="py-20 -mt-6 relative overflow-hidden">
      {/* Curved organic transition */}
      <svg className="absolute top-0 left-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,80 C200,20 400,100 600,60 C800,20 1000,80 1200,40 L1200,120 L0,120 Z" 
              fill="currentColor" className="text-secondary/10"></path>
      </svg>
      
      {/* Flowing background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/10"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-primary/15 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Ready to transform your navigation experience? Contact us today
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  className="group relative p-4 sm:p-6 md:p-8 bg-card/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-border/50 hover:border-primary/30 text-center overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {contact.label}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground group-hover:text-secondary transition-colors duration-300 break-words">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;