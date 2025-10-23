import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card variant="glass" className="p-6 hover:-translate-y-2 group">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex-shrink-0 shadow-[var(--neu-shadow-light),var(--neu-shadow-dark)] group-hover:shadow-[var(--shadow-md)] transition-all duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          {link && (
            <Link to={link}>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                Learn More →
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
