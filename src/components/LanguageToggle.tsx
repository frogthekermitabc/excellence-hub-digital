import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ms" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">{language === "en" ? "BM" : "EN"}</span>
    </Button>
  );
};

export default LanguageToggle;
