import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CourseSchedule {
  id: string;
  title: string;
  course_type: string;
  location: string;
  method: string;
  duration: number;
  start_date: string;
  end_date: string;
  fee: number;
  status: string;
  availability_status: string;
}

interface CourseScheduleTableProps {
  courseType: string;
}

const CourseScheduleTable = ({ courseType }: CourseScheduleTableProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState<CourseSchedule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSchedules();
  }, [courseType]);

  const fetchSchedules = async () => {
    try {
      const { data, error } = await supabase
        .from('course_schedules')
        .select('*')
        .eq('status', 'published')
        .eq('course_type', courseType)
        .order('start_date', { ascending: true });

      if (error) throw error;
      setSchedules(data || []);
    } catch (error) {
      console.error('Error fetching schedules:', error);
      toast({
        title: "Error",
        description: "Failed to load course schedules",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  };

  const handleJoin = () => {
    navigate('/contact');
  };

  if (loading) {
    return <div className="text-center py-12">Loading schedules...</div>;
  }

  if (schedules.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No upcoming courses scheduled at the moment. Please check back later or{" "}
        <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/contact')}>
          contact us
        </Button>{" "}
        for in-house training options.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-primary text-primary-foreground">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">NO</th>
            <th className="px-4 py-3 text-left font-semibold">TITLE</th>
            <th className="px-4 py-3 text-left font-semibold">LOCATION</th>
            <th className="px-4 py-3 text-left font-semibold">METHOD</th>
            <th className="px-4 py-3 text-left font-semibold">DURATION</th>
            <th className="px-4 py-3 text-left font-semibold">START DATE</th>
            <th className="px-4 py-3 text-left font-semibold">END DATE</th>
            <th className="px-4 py-3 text-left font-semibold">FEE (RM) excluding SST</th>
            <th className="px-4 py-3 text-center font-semibold">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, index) => (
            <tr 
              key={schedule.id} 
              className={index % 2 === 0 ? 'bg-muted/50' : 'bg-background'}
            >
              <td className="px-4 py-3 border-b border-border">{index + 1}</td>
              <td className="px-4 py-3 border-b border-border font-medium">{schedule.title}</td>
              <td className="px-4 py-3 border-b border-border">{schedule.location}</td>
              <td className="px-4 py-3 border-b border-border">{schedule.method}</td>
              <td className="px-4 py-3 border-b border-border">{schedule.duration} day{schedule.duration > 1 ? 's' : ''}</td>
              <td className="px-4 py-3 border-b border-border">{formatDate(schedule.start_date)}</td>
              <td className="px-4 py-3 border-b border-border">{formatDate(schedule.end_date)}</td>
              <td className="px-4 py-3 border-b border-border">{schedule.fee.toFixed(2)}</td>
              <td className="px-4 py-3 border-b border-border text-center">
                {schedule.availability_status === 'closed' ? (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    disabled
                    className="min-w-[80px]"
                  >
                    CLOSED
                  </Button>
                ) : (
                  <Button 
                    variant="default" 
                    size="sm"
                    onClick={handleJoin}
                    className="min-w-[80px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    JOIN
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseScheduleTable;
