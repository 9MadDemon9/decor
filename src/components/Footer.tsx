import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const phoneNumber = "0556870840";
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(30,15%,20%)] text-[hsl(35,20%,90%)] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-playfair text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(45,100%,51%)] to-[hsl(45,90%,65%)]">
            {t("footer.title")}
          </h3>
          <p className="font-inter text-[hsl(35,15%,70%)] mb-6">
            {t("footer.tagline")}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center text-sm">
            <span className="font-inter">{t("footer.contact")} {phoneNumber}</span>
            <span className="hidden sm:inline">•</span>
            <a 
              href="https://wa.me/966556870840" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[hsl(45,100%,51%)] transition-colors"
            >
              {t("footer.whatsapp")}
            </a>
          </div>
          <p className="font-inter text-xs text-[hsl(35,15%,60%)] mt-8">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
