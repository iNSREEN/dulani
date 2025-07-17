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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your navigation experience? Contact us today
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  className="group p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              variant="demo"
              onClick={() => window.open('mailto:Lujain@dulanii.com', '_blank')}
            >
              Start Your Journey with Dulani
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;