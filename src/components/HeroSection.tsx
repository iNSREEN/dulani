import { Button } from '@/components/ui/button';
import { InterestForm } from '@/components/InterestForm';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="pt-16 sm:pt-20 md:pt-24 pb-0 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/15 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary/20 rounded-full blur-md animate-pulse delay-500"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">
          {/* Left Side - Text + CTA */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left rtl:lg:text-right order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">Dulani</span>{' '}
                {t('heroTitle').replace('Dulani', '').trim()}
              </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full lg:max-w-lg mx-auto lg:mx-0">
                 {t('heroDescription')}
                </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <InterestForm>
                <Button 
                  variant="demo" 
                  className="text-base sm:text-lg w-full sm:w-auto"
                >
                  {t('joinInterestList')}
                </Button>
              </InterestForm>
            </div>
          </div>

          {/* Right Side - Mobile Screenshots */}
          <div className="relative order-1 lg:order-2">
            <div className="flex justify-center items-center space-x-1 sm:space-x-2 md:space-x-3 rtl:space-x-reverse scale-75 sm:scale-90 md:scale-100">
              {/* Mobile Frame 1 */}
              <div className="relative transform -rotate-12 rtl:rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="w-[112px] h-[242px] sm:w-[128px] sm:h-[277px] md:w-[144px] md:h-[312px] lg:w-[160px] lg:h-[346px] xl:w-[176px] xl:h-[381px] bg-black rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[28px] p-1 sm:p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[26px] overflow-hidden relative">
                    {/* App Content */}
                    <img 
                      src="/lovable-uploads/e92855f0-03d5-410f-8aba-ab63957392be.png" 
                      alt="Dulani Splash Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Frame 2 - Center */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="w-[112px] h-[242px] sm:w-[128px] sm:h-[277px] md:w-[144px] md:h-[312px] lg:w-[160px] lg:h-[346px] xl:w-[176px] xl:h-[381px] bg-black rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[28px] p-1 sm:p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[22px] overflow-hidden relative">
                    {/* App Content */}
                    <img 
                      src="/lovable-uploads/499054ec-64a7-4823-95ab-3728f92dd311.png" 
                      alt="Dulani Main Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Frame 3 */}
              <div className="relative transform rotate-12 rtl:-rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="w-[112px] h-[242px] sm:w-[128px] sm:h-[277px] md:w-[144px] md:h-[312px] lg:w-[160px] lg:h-[346px] xl:w-[176px] xl:h-[381px] bg-black rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[28px] p-1 sm:p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[22px] overflow-hidden relative">
                    {/* App Content - AR Navigation Screenshot */}
                    <img 
                      src="/lovable-uploads/f42455af-fb6f-4a55-9f04-a67f92fb397c.png" 
                      alt="Dulani AR Navigation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;