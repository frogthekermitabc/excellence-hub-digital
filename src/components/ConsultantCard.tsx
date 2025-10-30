import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface ConsultantCardProps {
  name: string;
  title: string;
  education: string[];
  experience: string;
  expertise: string[];
  certifications: string[];
  image?: string;
}

const ConsultantCard = ({ 
  name, 
  title, 
  education, 
  experience, 
  expertise, 
  certifications,
  image 
}: ConsultantCardProps) => {
  return (
    <Card variant="glass" className="p-6 hover:-translate-y-2 group">
      <div className="flex items-start space-x-4 mb-4">
        {image ? (
          <Avatar className="h-24 w-24 shadow-[var(--neu-shadow-light),var(--neu-shadow-dark)] group-hover:shadow-[var(--shadow-md)] transition-all duration-300">
            <AvatarImage src={image} alt={name} className="object-cover" />
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20">
              <User className="h-12 w-12 text-primary" />
            </AvatarFallback>
          </Avatar>
        ) : (
          <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full shadow-[var(--neu-shadow-light),var(--neu-shadow-dark)] group-hover:shadow-[var(--shadow-md)] transition-all duration-300">
            <User className="h-12 w-12 text-primary" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-1">{name}</h3>
          <p className="text-primary font-medium">{title}</p>
          <p className="text-sm text-muted-foreground mt-2">{experience}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2">Education</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {education.map((edu, idx) => (
              <li key={idx}>{edu}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Certifications</h4>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Areas of Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, idx) => (
              <Badge key={idx} className="text-xs bg-gradient-to-r from-primary to-secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ConsultantCard;
