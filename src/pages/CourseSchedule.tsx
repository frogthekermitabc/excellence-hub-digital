import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";

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
}

const CourseSchedule = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [schedules, setSchedules] = useState<CourseSchedule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const { data, error } = await supabase
        .from('course_schedules')
        .select('*')
        .eq('status', 'published')
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

  return (
    <div className="min-h-screen">
      <SEO 
        title="ISO Course Schedule 2025 Malaysia | Upcoming Training Dates | QAI"
        description="View upcoming ISO training course schedules in Malaysia. Book your ISO certification training for 9001, 14001, 45001, 27001, 37001. Public and in-house courses available."
        keywords="ISO course schedule Malaysia, ISO training dates 2025, book ISO course, ISO training calendar, upcoming ISO courses"
        canonicalUrl={window.location.origin + "/course-schedule"}
      />
      <Navigation />

      {/* Hero Section */}
      <AnimatedHero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedContent>
            <Calendar className="h-16 w-16 mx-auto mb-6" />
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-4xl md:text-5xl font-bold mb-6" type="word">
              Course Schedule
            </AnimatedText>
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-xl max-w-3xl mx-auto opacity-90" delay={0.3}>
              View upcoming course dates and register for your preferred session
            </AnimatedText>
          </AnimatedContent>
        </div>
      </AnimatedHero>

      {/* Schedule Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">Loading schedules...</div>
          ) : schedules.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No upcoming courses scheduled at the moment. Please check back later.
            </div>
          ) : (
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
                      <td className="px-4 py-3 border-b border-border">{schedule.duration}</td>
                      <td className="px-4 py-3 border-b border-border">{formatDate(schedule.start_date)}</td>
                      <td className="px-4 py-3 border-b border-border">{formatDate(schedule.end_date)}</td>
                      <td className="px-4 py-3 border-b border-border">{schedule.fee.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseSchedule;
