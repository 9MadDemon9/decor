import { Sparkles, Hammer, Lightbulb, PaintBucket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: PaintBucket,
      titleKey: "services.wallPanels.title",
      descKey: "services.wallPanels.desc",
    },
    {
      icon: Lightbulb,
      titleKey: "services.tvUnits.title",
      descKey: "services.tvUnits.desc",
    },
    {
      icon: Sparkles,
      titleKey: "services.lighting.title",
      descKey: "services.lighting.desc",
    },
    {
      icon: Hammer,
      titleKey: "services.installation.title",
      descKey: "services.installation.desc",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-[0_10px_40px_-10px_hsl(30,15%,15%/0.15)] hover:shadow-[0_20px_60px_-10px_hsl(30,15%,15%/0.25)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[hsl(45,100%,51%)] to-[hsl(45,90%,65%)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                {t(service.titleKey)}
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
