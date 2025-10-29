import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import qaiLogo from "@/assets/qai-logo.png";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const Footer = () => {
  const { t } = useLanguage();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const linkClasses = "text-muted-foreground relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-primary transition-colors";

  return (
    <footer className="mt-20 bg-gradient-to-b from-muted/50 via-muted to-muted">
      <div className="container mx-auto px-4 py-12">
        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={qaiLogo} alt="QAI Logo" className="h-20 md:h-24 w-auto mb-6" />
            <p className="text-sm text-muted-foreground mb-4">{t("footer.description")}</p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="font-semibold">{t("footer.mofRegistered")}</span>
              <span>•</span>
              <span className="font-semibold">{t("footer.hrdCorp")}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link to="/consultants" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                  {t("nav.consultants")}
                </Link>
              </li>
              <li>
                <Link to="/courses" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                  {t("nav.courses")}
                </Link>
              </li>
            </ul>
          </div>

          {/* ISO Standards */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.isoStandards")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/iso-9001" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                  ISO 9001:2015
                </Link>
              </li>
              <li>
                <Link to="/iso-14001" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                  ISO 14001:2015
                </Link>
              </li>
              <li>
                <Link to="/iso-45001" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                  ISO 45001:2018
                </Link>
              </li>
              <li>
                <Link to="/iso-27001" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                  ISO 27001:2022
                </Link>
              </li>
              <li>
                <Link to="/iso-37001" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                  ISO 37001:2018
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.contactUs")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  No.11-3A, Jalan Bandar 12, Pusat Bandar Puchong, 47160 Puchong
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+60 12-469 1606</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@qaims.com.my</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile View with Accordions */}
        <div className="md:hidden space-y-4">
          {/* Company Info - Always Visible */}
          <div>
            <img src={qaiLogo} alt="QAI Logo" className="h-20 w-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-4">{t("footer.description")}</p>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-6">
              <span className="font-semibold">{t("footer.mofRegistered")}</span>
              <span className="font-semibold">{t("footer.hrdCorp")}</span>
            </div>
          </div>

          {/* Quick Links Accordion */}
          <Collapsible open={openSections.includes("quickLinks")} onOpenChange={() => toggleSection("quickLinks")}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b">
              <h3 className="font-semibold">{t("footer.quickLinks")}</h3>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSections.includes("quickLinks") ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-3 pb-2">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                    {t("nav.services")}
                  </Link>
                </li>
                <li>
                  <Link to="/consultants" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                    {t("nav.consultants")}
                  </Link>
                </li>
                <li>
                  <Link to="/courses" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                    {t("nav.courses")}
                  </Link>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          {/* ISO Standards Accordion */}
          <Collapsible open={openSections.includes("iso")} onOpenChange={() => toggleSection("iso")}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b">
              <h3 className="font-semibold">{t("footer.isoStandards")}</h3>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSections.includes("iso") ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-3 pb-2">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/iso-9001" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                    ISO 9001:2015
                  </Link>
                </li>
                <li>
                  <Link to="/iso-14001" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                    ISO 14001:2015
                  </Link>
                </li>
                <li>
                  <Link to="/iso-45001" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                    ISO 45001:2018
                  </Link>
                </li>
                <li>
                  <Link to="/iso-27001" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                    ISO 27001:2022
                  </Link>
                </li>
                <li>
                  <Link to="/iso-37001" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={linkClasses}>
                    ISO 37001:2018
                  </Link>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          {/* Contact Accordion */}
          <Collapsible open={openSections.includes("contact")} onOpenChange={() => toggleSection("contact")}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b">
              <h3 className="font-semibold">{t("footer.contactUs")}</h3>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSections.includes("contact") ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-3 pb-2">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    No.11-3A, Jalan Bandar 12, Pusat Bandar Puchong, 47160 Puchong
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+60 12-469 1606</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">info@qaims.com.my</span>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Quality Assurance International. {t("footer.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
