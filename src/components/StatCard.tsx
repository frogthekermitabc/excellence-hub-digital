import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-center mb-3">
        <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </Card>
  );
};

export default StatCard;
