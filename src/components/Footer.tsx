import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Brand - Left Side */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/24037984-72d9-41ea-a970-810925759561.png" 
                alt={`${t('brandName')} Logo`}
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold">{t('brandName')}</span>
            </div>

            {/* Copyright - Right Side */}
            <div className="text-center md:text-right">
              <p className="text-secondary-foreground/80">
                {t('copyright')}
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;