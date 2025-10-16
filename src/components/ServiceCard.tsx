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
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex-shrink-0">
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
