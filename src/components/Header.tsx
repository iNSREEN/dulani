import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60; // Reduced offset for better positioning
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (item: { label: string; id: string; isPage?: boolean }) => {
    if (item.isPage) {
      navigate(`/${item.id}`);
    } else {
      // If we're not on the home page, navigate there first
      if (window.location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => scrollToSection(item.id), 100);
      } else {
        scrollToSection(item.id);
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: t('about'), id: 'about' },
    { label: t('features'), id: 'features' },
    { label: t('team'), id: 'team', isPage: true },
    { label: t('contact'), id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" style={{ width: '100vw' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-3 rtl:space-x-reverse rtl:space-x-5 hover:opacity-80 transition-opacity duration-200"
          >
            <img 
              src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" 
              alt="Dulani Logo" 
              className="w-10 h-10"
            />
            <span className={`font-bold text-primary ${language === 'ar' ? 'text-3xl' : 'text-2xl'}`}>{t('dulani')}</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse rtl:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`relative text-foreground hover:text-primary transition-colors duration-200 group ${language === 'ar' ? 'font-black' : 'font-bold'}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-3 rtl:space-x-reverse px-3 py-2 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'ع' : 'EN'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`text-left text-foreground hover:text-primary transition-colors duration-200 ${language === 'ar' ? 'font-black' : 'font-bold'}`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-3 rtl:space-x-reverse px-3 py-2 rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200 w-fit"
                title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'en' ? 'ع' : 'EN'}</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;