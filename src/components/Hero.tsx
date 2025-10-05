import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const phoneNumber = "0556870840";
  const whatsappLink = "https://wa.me/966556870840";
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Luxury Interior Design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(45,100%,51%)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(45,90%,65%)] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            {t("hero.title.line1")}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(45,100%,51%)] to-[hsl(45,90%,65%)]">
              {t("hero.title.line2")}
            </span>
          </h1>
          
          <p className="font-inter text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href={`tel:${phoneNumber}`} className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-[hsl(45,100%,51%)] to-[hsl(45,90%,65%)] hover:opacity-90 text-foreground font-semibold px-8 py-6 text-lg shadow-[0_8px_30px_-8px_hsl(45,100%,51%/0.3)] transition-all hover:shadow-[0_8px_40px_-8px_hsl(45,100%,51%/0.5)] hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t("hero.cta.call")} {phoneNumber}
              </Button>
            </a>
            
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-[hsl(45,100%,51%)] bg-white/10 backdrop-blur-sm text-white hover:bg-[hsl(45,100%,51%)] hover:text-foreground font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("hero.cta.whatsapp")}
              </Button>
            </a>
          </div>

          <p className="font-inter text-sm text-white/80 drop-shadow-md">
            {t("hero.features")}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[hsl(45,100%,51%)] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[hsl(45,100%,51%)] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
