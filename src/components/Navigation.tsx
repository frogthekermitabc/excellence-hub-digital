import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import LanguageToggle from "@/components/LanguageToggle";
import qaiLogo from "@/assets/qai-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin } = useAuth();
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const managementSystems = [
    { title: "ISO 9001:2015", description: t("iso.qualityManagement"), path: "/iso-9001" },
    { title: "ISO 14001:2015", description: t("iso.environmentalManagement"), path: "/iso-14001" },
    { title: "ISO 45001:2018", description: t("iso.occupationalHealthSafety"), path: "/iso-45001" },
    { title: "ISO 27001:2022", description: t("iso.informationSecurity"), path: "/iso-27001" },
    { title: "ISO 37001:2018", description: t("iso.antiBribery"), path: "/iso-37001" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/70 backdrop-blur-lg border-b border-white/20 shadow-[0_8px_32px_0_rgba(138,86,226,0.1)] dark:bg-card/60 dark:border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={qaiLogo} alt="QAI - Quality Assurance International" className="h-12 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/">
              <Button variant={isActive("/") ? "default" : "ghost"}>{t("nav.home")}</Button>
            </Link>

            {/* Company Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">{t("nav.company")}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{t("nav.about")}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/consultants"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{t("nav.consultants")}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/services">
              <Button variant={isActive("/services") ? "default" : "ghost"}>{t("nav.services")}</Button>
            </Link>

            {/* Management Systems Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">{t("nav.managementSystems")}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {managementSystems.map((system) => (
                        <li key={system.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={system.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{system.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {system.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/courses">
              <Button variant={isActive("/courses") ? "default" : "ghost"}>{t("nav.courses")}</Button>
            </Link>
            <Link to="/contact">
              <Button variant={isActive("/contact") ? "default" : "ghost"}>{t("nav.contact")}</Button>
            </Link>
            {isAdmin && (
              <Link to="/admin">
                <Button variant={isActive("/admin") ? "default" : "ghost"}>
                  <Shield className="h-4 w-4 mr-2" />
                  Admin
                </Button>
              </Link>
            )}
            <LanguageToggle />
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-primary to-secondary">{t("nav.getQuote")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageToggle />
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Button variant={isActive("/") ? "default" : "ghost"} className="w-full justify-start">
                {t("nav.home")}
              </Button>
            </Link>
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-semibold">{t("nav.company")}</div>
              <div className="pl-4 space-y-1">
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    {t("nav.about")}
                  </Button>
                </Link>
                <Link to="/consultants" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    {t("nav.consultants")}
                  </Button>
                </Link>
              </div>
            </div>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              <Button variant={isActive("/services") ? "default" : "ghost"} className="w-full justify-start">
                {t("nav.services")}
              </Button>
            </Link>
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-semibold">{t("nav.managementSystems")}</div>
              <div className="pl-4 space-y-1">
                {managementSystems.map((system) => (
                  <Link key={system.path} to={system.path} onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-sm">
                      {system.title}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/courses" onClick={() => setIsOpen(false)}>
              <Button variant={isActive("/courses") ? "default" : "ghost"} className="w-full justify-start">
                {t("nav.courses")}
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant={isActive("/contact") ? "default" : "ghost"} className="w-full justify-start">
                {t("nav.contact")}
              </Button>
            </Link>
            {isAdmin && (
              <Link to="/admin" onClick={() => setIsOpen(false)}>
                <Button variant={isActive("/admin") ? "default" : "ghost"} className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Admin
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
