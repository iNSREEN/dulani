import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PageBorders from '@/components/PageBorders';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageBorders />
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
