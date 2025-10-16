import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const managementSystems = [
    { title: "ISO 9001:2015", description: "Quality Management", path: "/iso-9001" },
    { title: "ISO 14001:2015", description: "Environmental Management", path: "/iso-14001" },
    { title: "ISO 45001:2018", description: "Occupational Health & Safety", path: "/iso-45001" },
    { title: "ISO 27001:2022", description: "Information Security", path: "/iso-27001" },
    { title: "ISO 37001:2018", description: "Anti-Bribery Management", path: "/iso-37001" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={qaiLogo} 
              alt="QAI - Quality Assurance International" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/">
              <Button variant={isActive("/") ? "default" : "ghost"}>Home</Button>
            </Link>
            <Link to="/about">
              <Button variant={isActive("/about") ? "default" : "ghost"}>About Us</Button>
            </Link>
            <Link to="/services">
              <Button variant={isActive("/services") ? "default" : "ghost"}>Services</Button>
            </Link>
            
            {/* Management Systems Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Management Systems
                  </NavigationMenuTrigger>
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

            <Link to="/consultants">
              <Button variant={isActive("/consultants") ? "default" : "ghost"}>Our Consultants</Button>
            </Link>
            <Link to="/courses">
              <Button variant={isActive("/courses") ? "default" : "ghost"}>Courses</Button>
            </Link>
            <Link to="/contact">
              <Button variant={isActive("/contact") ? "default" : "ghost"}>Contact</Button>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-primary to-secondary">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Button variant={isActive("/") ? "default" : "ghost"} className="w-full justify-start">
                Home
              </Button>
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <Button variant={isActive("/about") ? "default" : "ghost"} className="w-full justify-start">
                About Us
              </Button>
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              <Button variant={isActive("/services") ? "default" : "ghost"} className="w-full justify-start">
                Services
              </Button>
            </Link>
            <div className="pl-4 space-y-1">
              {managementSystems.map((system) => (
                <Link key={system.path} to={system.path} onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    {system.title}
                  </Button>
                </Link>
              ))}
            </div>
            <Link to="/consultants" onClick={() => setIsOpen(false)}>
              <Button variant={isActive("/consultants") ? "default" : "ghost"} className="w-full justify-start">
                Our Consultants
              </Button>
            </Link>
            <Link to="/courses" onClick={() => setIsOpen(false)}>
              <Button variant={isActive("/courses") ? "default" : "ghost"} className="w-full justify-start">
                Courses
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant={isActive("/contact") ? "default" : "ghost"} className="w-full justify-start">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
