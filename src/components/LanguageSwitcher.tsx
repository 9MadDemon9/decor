import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
        className="bg-background/80 backdrop-blur-sm border-2 border-[hsl(45,100%,51%)] text-foreground hover:bg-[hsl(45,100%,51%)] hover:text-foreground font-semibold transition-all hover:scale-105 shadow-lg"
      >
        <Languages className="h-4 w-4 mr-2" />
        {language === "ar" ? "English" : "عربي"}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
