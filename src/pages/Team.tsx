import Header from '@/components/Header';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Team = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default Team;