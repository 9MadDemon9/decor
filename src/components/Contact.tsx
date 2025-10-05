import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const phoneNumber = "0556870840";
  const whatsappLink = "https://wa.me/966556870840";
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("contact.title")}
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[hsl(35,30%,94%)] to-[hsl(35,25%,88%)] rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-10px_hsl(30,15%,15%/0.2)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(45,100%,51%)] to-[hsl(45,90%,65%)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-foreground mb-1">{t("contact.phone")}</h3>
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="font-inter text-lg text-muted-foreground hover:text-[hsl(45,100%,51%)] transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(45,100%,51%)] to-[hsl(45,90%,65%)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-foreground mb-1">{t("contact.whatsapp")}</h3>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-lg text-muted-foreground hover:text-[hsl(45,100%,51%)] transition-colors"
                  >
                    {t("contact.messageUs")}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${phoneNumber}`} className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-[hsl(45,100%,51%)] to-[hsl(45,90%,65%)] hover:opacity-90 text-foreground font-semibold px-10 py-6 text-lg shadow-[0_8px_30px_-8px_hsl(45,100%,51%/0.3)] transition-all hover:shadow-[0_8px_40px_-8px_hsl(45,100%,51%/0.5)] hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t("contact.cta.call")}
                </Button>
              </a>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[hsl(45,100%,51%)] text-foreground hover:bg-[hsl(45,100%,51%)] hover:text-foreground font-semibold px-10 py-6 text-lg transition-all hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t("contact.cta.whatsapp")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
