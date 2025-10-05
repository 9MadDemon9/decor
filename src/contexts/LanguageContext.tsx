import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Hero Section
    "hero.title.line1": "حول مساحتك إلى",
    "hero.title.line2": "تحفة فنية",
    "hero.description": "خدمات تركيب الديكور الداخلي الاحترافية. من الألواح الجدارية الفاخرة إلى وحدات التلفزيون المخصصة، نحن نحول رؤيتك إلى واقع بدقة وأناقة.",
    "hero.cta.call": "اتصل بنا",
    "hero.cta.whatsapp": "واتساب",
    "hero.features": "استشارة مجانية • تركيب احترافي • جودة مضمونة",
    
    // Services Section
    "services.title": "خدماتنا المتميزة",
    "services.subtitle": "خدمات الديكور الداخلي الشاملة المصممة خصيصاً لأسلوبك واحتياجاتك الفريدة",
    "services.wallPanels.title": "الألواح الجدارية والكسوة",
    "services.wallPanels.desc": "تركيب ألواح جدارية فاخرة بالرخام والخشب والتشطيبات المخصصة للديكورات الداخلية الراقية.",
    "services.tvUnits.title": "وحدات التلفزيون والترفيه",
    "services.tvUnits.desc": "وحدات حائط تلفزيون مخصصة مع إضاءة متكاملة وتخزين وعناصر تصميم عصرية.",
    "services.lighting.title": "الإضاءة الفاخرة",
    "services.lighting.desc": "حلول الإضاءة المحيطة والمميزة بما في ذلك شرائط LED وإضاءة السقف والتركيبات الحديثة.",
    "services.installation.title": "التركيب الكامل",
    "services.installation.desc": "خدمة تركيب كاملة من المفهوم إلى الإنجاز، مع ضمان الإتقان في كل التفاصيل.",
    
    // Portfolio Section
    "portfolio.title": "أعمالنا",
    "portfolio.subtitle": "اكتشف معرض أعمالنا المذهلة في التركيبات الداخلية التي تعرض الحرفية والاهتمام بالتفاصيل",
    "portfolio.item1": "وحدة حائط تلفزيون عصرية",
    "portfolio.item2": "مساحة معيشة معاصرة",
    "portfolio.item3": "مركز ترفيه فاخر",
    "portfolio.item4": "حائط مميز بإضاءة خلفية",
    "portfolio.item5": "تصميم رخام وخشب أنيق",
    "portfolio.item6": "مدفأة عصرية مميزة",
    "portfolio.item7": "فاصل خشبي شرائحي",
    
    // Contact Section
    "contact.title": "دعنا نصنع شيئاً جميلاً",
    "contact.subtitle": "هل أنت مستعد لتحويل مساحتك؟ تواصل معنا اليوم للحصول على استشارة مجانية",
    "contact.phone": "الهاتف",
    "contact.whatsapp": "واتساب",
    "contact.messageUs": "راسلنا",
    "contact.cta.call": "اتصل الآن",
    "contact.cta.whatsapp": "واتساب",
    
    // Footer
    "footer.title": "تركيبات الديكور المتميزة",
    "footer.tagline": "نحول المساحات بأناقة ودقة",
    "footer.contact": "اتصل:",
    "footer.whatsapp": "واتساب",
    "footer.rights": "© {year} تركيبات الديكور المتميزة. جميع الحقوق محفوظة.",
  },
  en: {
    // Hero Section
    "hero.title.line1": "Transform Your Space into a",
    "hero.title.line2": "Masterpiece",
    "hero.description": "Expert interior decor installation services. From luxury wall panels to custom TV units, we bring your vision to life with precision and elegance.",
    "hero.cta.call": "Call",
    "hero.cta.whatsapp": "WhatsApp Us",
    "hero.features": "Free consultation • Expert installation • Quality guaranteed",
    
    // Services Section
    "services.title": "Our Expertise",
    "services.subtitle": "Comprehensive interior decor services tailored to your unique style and needs",
    "services.wallPanels.title": "Wall Panels & Cladding",
    "services.wallPanels.desc": "Premium wall panel installation with marble, wood, and custom finishes for sophisticated interiors.",
    "services.tvUnits.title": "TV Units & Entertainment",
    "services.tvUnits.desc": "Custom TV wall units with integrated lighting, storage, and modern design elements.",
    "services.lighting.title": "Luxury Lighting",
    "services.lighting.desc": "Ambient and accent lighting solutions including LED strips, cove lighting, and modern fixtures.",
    "services.installation.title": "Complete Installation",
    "services.installation.desc": "Full-service installation from concept to completion, ensuring perfection in every detail.",
    
    // Portfolio Section
    "portfolio.title": "Our Work",
    "portfolio.subtitle": "Discover our portfolio of stunning interior installations that showcase craftsmanship and attention to detail",
    "portfolio.item1": "Modern TV Wall Unit",
    "portfolio.item2": "Contemporary Living Space",
    "portfolio.item3": "Luxury Entertainment Center",
    "portfolio.item4": "Backlit Feature Wall",
    "portfolio.item5": "Elegant Marble & Wood Design",
    "portfolio.item6": "Modern Fireplace Feature",
    "portfolio.item7": "Wooden Slat Divider",
    
    // Contact Section
    "contact.title": "Let's Create Something Beautiful",
    "contact.subtitle": "Ready to transform your space? Get in touch with us today for a free consultation",
    "contact.phone": "Phone",
    "contact.whatsapp": "WhatsApp",
    "contact.messageUs": "Message Us",
    "contact.cta.call": "Call Now",
    "contact.cta.whatsapp": "WhatsApp",
    
    // Footer
    "footer.title": "Premium Decor Installations",
    "footer.tagline": "Transforming spaces with elegance and precision",
    "footer.contact": "Contact:",
    "footer.whatsapp": "WhatsApp Us",
    "footer.rights": "© {year} Premium Decor Installations. All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("ar"); // Default to Arabic

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations.ar];
    if (!translation) return key;
    
    // Replace placeholders like {year}
    return translation.replace("{year}", new Date().getFullYear().toString());
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
