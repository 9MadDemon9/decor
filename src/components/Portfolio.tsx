import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();
  
  const portfolioItems = [
    { image: portfolio1, titleKey: "portfolio.item1" },
    { image: portfolio2, titleKey: "portfolio.item2" },
    { image: portfolio3, titleKey: "portfolio.item3" },
    { image: portfolio4, titleKey: "portfolio.item4" },
    { image: portfolio5, titleKey: "portfolio.item5" },
    { image: portfolio6, titleKey: "portfolio.item6" },
    { image: portfolio7, titleKey: "portfolio.item7" },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-br from-[hsl(35,30%,94%)] to-[hsl(35,25%,88%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-[0_10px_40px_-10px_hsl(30,15%,15%/0.15)] hover:shadow-[0_20px_60px_-10px_hsl(30,15%,15%/0.3)] transition-all duration-500 aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={t(item.titleKey)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <h3 className="font-playfair text-xl font-semibold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {t(item.titleKey)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
