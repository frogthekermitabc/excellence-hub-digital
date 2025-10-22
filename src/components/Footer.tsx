import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import qaiLogo from "@/assets/qai-logo.png";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={qaiLogo} 
              alt="QAI Logo" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.description")}
            </p>
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
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">{t("nav.services")}</Link></li>
              <li><Link to="/consultants" className="text-muted-foreground hover:text-primary transition-colors">{t("nav.consultants")}</Link></li>
              <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">{t("nav.courses")}</Link></li>
            </ul>
          </div>

          {/* ISO Standards */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.isoStandards")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/iso-9001" className="text-muted-foreground hover:text-primary transition-colors">ISO 9001:2015</Link></li>
              <li><Link to="/iso-14001" className="text-muted-foreground hover:text-primary transition-colors">ISO 14001:2015</Link></li>
              <li><Link to="/iso-45001" className="text-muted-foreground hover:text-primary transition-colors">ISO 45001:2018</Link></li>
              <li><Link to="/iso-27001" className="text-muted-foreground hover:text-primary transition-colors">ISO 27001:2022</Link></li>
              <li><Link to="/iso-37001" className="text-muted-foreground hover:text-primary transition-colors">ISO 37001:2018</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.contactUs")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">No.11-3A, Jalan Bandar 12, Pusat Bandar Puchong, 47160 Puchong</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+6012-469 1606</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@qaims.com.my</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Quality Assurance International. {t("footer.allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
