export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Header
    about: 'About',
    features: 'Features',
    team: 'Team',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Navigate Smarter with',
    heroSubtitle: 'AI-Powered AR Navigation for Modern Spaces',
    heroDescription: 'Transform visitor experiences with intelligent wayfinding, reduce congestion, and enhance accessibility through cutting-edge augmented reality technology.',
    bookDemo: 'Book a Demo',
    
    // About Section
    aboutTitle: 'What is',
    aboutDescription: 'Dulani is an AI-powered navigation app that transforms visitor experiences. Using augmented reality (AR) and real-time AI analytics, it provides seamless guidance, reduces congestion, and enhances accessibility.',
    
    // Features Section
    featuresTitle: 'Key Features',
    aiNavigationTitle: 'AI-Powered Navigation',
    aiNavigationDesc: 'Smart routing algorithms that adapt to real-time conditions and user preferences.',
    arExperienceTitle: 'Augmented Reality Experience',
    arExperienceDesc: 'Immersive AR overlays that guide users through complex spaces with visual indicators.',
    realTimeAnalyticsTitle: 'Real-Time Analytics',
    realTimeAnalyticsDesc: 'Advanced insights into visitor patterns and space utilization for optimal management.',
    
    // Team Section
    teamTitle: 'Meet Our Team',
    
    // Contact Section
    contactTitle: 'Get in Touch',
    contactDescription: 'Ready to transform your space with intelligent navigation? Contact us to learn more about Dulani.',
    email: 'Email',
    phone: 'Phone',
    linkedin: 'LinkedIn',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
    
    // Interest Form
    interestTitle: 'Book a Demo',
    interestDescription: 'Leave your contact information and we\'ll get back to you to schedule a demonstration.',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    organization: 'Organization',
    message: 'Message (Optional)',
    submit: 'Submit',
    submitting: 'Submitting...',
    successMessage: 'Thank you for your interest! We\'ll be in touch soon.',
    errorMessage: 'Something went wrong. Please try again.',
  },
  ar: {
    // Header
    about: 'حول',
    features: 'المميزات',
    team: 'الفريق',
    contact: 'تواصل',
    
    // Hero Section
    heroTitle: 'تنقل أذكى مع',
    heroSubtitle: 'تنقل الواقع المعزز المدعوم بالذكاء الاصطناعي للمساحات الحديثة',
    heroDescription: 'حوّل تجارب الزوار مع تنقل ذكي، قلل الازدحام، وعزز إمكانية الوصول من خلال تقنية الواقع المعزز المتطورة.',
    bookDemo: 'احجز عرض توضيحي',
    
    // About Section
    aboutTitle: 'ما هو',
    aboutDescription: 'دولاني هو تطبيق تنقل مدعوم بالذكاء الاصطناعي يحول تجارب الزوار. باستخدام الواقع المعزز وتحليلات الذكاء الاصطناعي في الوقت الفعلي، يوفر إرشادات سلسة ويقلل الازدحام ويعزز إمكانية الوصول.',
    
    // Features Section
    featuresTitle: 'المميزات الرئيسية',
    aiNavigationTitle: 'تنقل مدعوم بالذكاء الاصطناعي',
    aiNavigationDesc: 'خوارزميات توجيه ذكية تتكيف مع الظروف الفورية وتفضيلات المستخدم.',
    arExperienceTitle: 'تجربة الواقع المعزز',
    arExperienceDesc: 'طبقات واقع معزز غامرة توجه المستخدمين عبر المساحات المعقدة بمؤشرات بصرية.',
    realTimeAnalyticsTitle: 'تحليلات في الوقت الفعلي',
    realTimeAnalyticsDesc: 'رؤى متقدمة حول أنماط الزوار واستخدام المساحة للإدارة المثلى.',
    
    // Team Section
    teamTitle: 'تعرف على فريقنا',
    
    // Contact Section
    contactTitle: 'تواصل معنا',
    contactDescription: 'مستعد لتحويل مساحتك بتنقل ذكي؟ تواصل معنا لتعرف المزيد عن دولاني.',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    linkedin: 'لينكد إن',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة.',
    
    // Interest Form
    interestTitle: 'احجز عرض توضيحي',
    interestDescription: 'اترك معلومات الاتصال الخاصة بك وسنتواصل معك لجدولة عرض توضيحي.',
    fullName: 'الاسم الكامل',
    emailAddress: 'عنوان البريد الإلكتروني',
    organization: 'المؤسسة',
    message: 'رسالة (اختيارية)',
    submit: 'إرسال',
    submitting: 'جاري الإرسال...',
    successMessage: 'شكراً لاهتمامك! سنتواصل معك قريباً.',
    errorMessage: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
  }
};

export const getTranslation = (language: Language, key: keyof typeof translations.en) => {
  return translations[language][key];
};