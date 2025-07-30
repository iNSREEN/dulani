import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    dulani: "Dulani",
    about: "About",
    features: "Features",
    team: "Team",
    contact: "Contact",
    
    // Hero Section
    heroTitle: "Dulani Your Next Guide – Smarter, Faster, and More Interactive!",
    heroDescription: "Transform visitor experiences and avoid crowds with Augmented Reality guidance and AI-powered navigation",
    joinInterestList: "Join Us",
    
    // About Section
    whatIsDulani: "What is Dulani?",
    aboutDescription: "Dulani is a solution that transforms visitor experiences. Using augmented reality (AR) and real-time AI analytics, it provides seamless guidance, reduces congestion, and enhances accessibility.",
    
    // Features Section
    dulaniFeatures: "Dulani's Features",
    cuttingEdgeTech: "Cutting-edge technology for seamless navigation experiences",
    arVisualGuidance: "AR Visual Guidance",
    arVisualDesc: "Interactive directions overlaid on your surroundings",
    aiPoweredNav: "AI-Powered Navigation",
    aiPoweredDesc: "Delivers seamless and efficient guidance to help users reach their destinations with ease",
    crowdManagement: "Crowd Management",
    crowdManagementDesc: "Enhance visitor experience and avoid crowds using AI and AR to reach destinations faster and smoother",
    
    // Contact Section
    getInTouch: "Get in Touch",
    improveNavigation: "Let's Improve Your Navigation!",
    
    // Team Section
    teamHeading: "Team",
    teamSubtitle: "A Talented Team Driving Innovation in AR Navigation Powered by AI"
  },
  ar: {
    // Header
    dulani: "دلني",
    about: "عن دلني",
    features: "مميزاتنا",
    team: "الفريق",
    contact: "تواصل معنا",
    
    // Hero Section
    heroTitle: "دلني مرشدك القادم – أذكى، أسرع، وأكثر تفاعلاً",
    heroDescription: "حوّل تجارب الزوار وتجنب الزحام باستخدام إرشادات الواقع المعزز والتنقل المدعوم بالذكاء الاصطناعي",
    joinInterestList: "انضم إلينا",
    
    // About Section
    whatIsDulani: "ما هو دلني؟",
    aboutDescription: "دلني هو حل مبتكر يثري تجربة الزوار بشكل رائع. من خلال استخدام الواقع المعزز والتحليلات الذكية في الوقت الفعلي، يقدم إرشادات سلسة تسهل التنقل، وتساهم في تقليل الازدحام، وتعزز إمكانية الوصول للجميع",
    
    // Features Section
    dulaniFeatures: "مميزات دلني",
    cuttingEdgeTech: "تكنولوجيا متطورة لتجارب تنقل سلسة",
    arVisualGuidance: "إرشادات بصرية بالواقع المعزز",
    arVisualDesc: "اتجاهات تفاعلية مبنية على محيطك",
    aiPoweredNav: "التنقل المعتمد على الذكاء الاصطناعي",
    aiPoweredDesc: "يوفر إرشادات سلسة وفعالة لمساعدة المستخدمين على الوصول إلى وجهاتهم بسهولة",
    crowdManagement: "إدارة الحشود",
    crowdManagementDesc: "تعزيز تجربة الزوار وتجنب الازدحام باستخدام الذكاء الاصطناعي والواقع المعزز للوصول إلى الوجهات بشكل أسرع وأكثر سلاسة",
    
    // Contact Section
    getInTouch: "تواصل معنا",
    improveNavigation: "دعنا نحسن تجربتك في التنقل!",
    
    // Team Section
    teamHeading: "الفريق",
    teamSubtitle: "فريق موهوب يقود الابتكار في التنقل بالواقع المعزز المدعوم بالذكاء الاصطناعي"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};