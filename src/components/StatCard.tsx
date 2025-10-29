import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => {
  return (
    <Card variant="elevated" className="p-6 text-center hover:-translate-y-2 group">
      <div className="flex justify-center mb-3">
        <div className="p-3 rounded-full shadow-[var(--neu-shadow-light),var(--neu-shadow-dark)] group-hover:shadow-[var(--shadow-md)] transition-all duration-300" style={{ background: 'var(--gradient-energy)' }}>
          <Icon className="h-8 w-8 text-white" />
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
