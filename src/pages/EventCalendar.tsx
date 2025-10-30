import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedHero, { AnimatedContent } from "@/components/AnimatedHero";
import AnimatedText from "@/components/AnimatedText";
import { Calendar, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface CourseEvent {
  id: string;
  title: string;
  course_type: string;
  start_date: string;
  end_date: string;
  duration: number;
  fee: number;
  location: string;
  method: string;
}

interface GroupedEvents {
  [isoStandard: string]: CourseEvent[];
}

const EventCalendar = () => {
  const [events, setEvents] = useState<CourseEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const today = new Date();
      const nextYear = new Date();
      nextYear.setFullYear(today.getFullYear() + 1);

      const { data, error } = await supabase
        .from("course_schedules")
        .select("*")
        .eq("status", "published")
        .gte("start_date", today.toISOString().split("T")[0])
        .lte("start_date", nextYear.toISOString().split("T")[0])
        .order("start_date", { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  const getMonthName = (monthIndex: number) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return months[monthIndex];
  };

  const getCurrentMonthRange = () => {
    const today = new Date();
    const months = [];
    for (let i = 0; i < 12; i++) {
      const month = new Date(today.getFullYear(), today.getMonth() + i, 1);
      months.push({
        month: month.getMonth(),
        year: month.getFullYear(),
        name: getMonthName(month.getMonth())
      });
    }
    return months;
  };

  const groupEventsByISO = (events: CourseEvent[]): GroupedEvents => {
    const grouped: GroupedEvents = {};
    
    events.forEach(event => {
      const isoType = event.course_type;
      if (!grouped[isoType]) {
        grouped[isoType] = [];
      }
      grouped[isoType].push(event);
    });

    return grouped;
  };

  const getEventsByMonth = (events: CourseEvent[], month: number, year: number) => {
    return events.filter(event => {
      const eventDate = new Date(event.start_date);
      return eventDate.getMonth() === month && eventDate.getFullYear() === year;
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const getISOTitle = (courseType: string) => {
    const titles: { [key: string]: string } = {
      "ISO 9001": "ISO 9001:2015 QUALITY MANAGEMENT SYSTEMS",
      "ISO 14001": "ISO 14001:2015 ENVIRONMENTAL MANAGEMENT SYSTEMS",
      "ISO 45001": "ISO 45001:2018 OCCUPATIONAL HEALTH & SAFETY MANAGEMENT SYSTEMS",
      "ISO 27001": "ISO 27001:2022 INFORMATION SECURITY MANAGEMENT SYSTEMS",
      "ISO 37001": "ISO 37001:2016 ANTI-BRIBERY MANAGEMENT SYSTEMS"
    };
    return titles[courseType] || courseType;
  };

  const getCoursePagePath = (courseType: string) => {
    const paths: { [key: string]: string } = {
      "ISO 9001": "/iso-9001",
      "ISO 14001": "/iso-14001",
      "ISO 45001": "/iso-45001",
      "ISO 27001": "/iso-27001",
      "ISO 37001": "/iso-37001"
    };
    return paths[courseType] || "/courses";
  };

  const handleCourseClick = (courseType: string) => {
    navigate(getCoursePagePath(courseType));
  };

  const monthRange = getCurrentMonthRange();
  const groupedEvents = groupEventsByISO(events);
  const isoStandards = ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001", "ISO 37001"];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading calendar...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <AnimatedHero variant="gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedContent>
            <Calendar className="h-16 w-16 mx-auto mb-6" />
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-4xl md:text-5xl font-bold mb-6" type="word">
              ISO Training Event Calendar
            </AnimatedText>
          </AnimatedContent>
          <AnimatedContent>
            <AnimatedText className="text-xl max-w-3xl mx-auto opacity-90" delay={0.3}>
              Standards Based Management Systems - Next 12 Months
            </AnimatedText>
          </AnimatedContent>
        </div>
      </AnimatedHero>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
              {/* Header Row */}
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-left">No</th>
                  <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-left">Title</th>
                  <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-center">Code</th>
                  <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-center">Duration<br/>(Day)</th>
                  <th className="border border-gray-300 px-4 py-3 text-sm font-semibold text-center">Fees/Pax<br/>(RM)<br/>Excl. SST</th>
                  {monthRange.map((m, idx) => (
                    <th key={idx} className="border border-gray-300 px-4 py-3 text-sm font-semibold text-center">
                      {m.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {isoStandards.map((isoStandard, stdIdx) => {
                  const standardEvents = groupedEvents[isoStandard] || [];
                  if (standardEvents.length === 0) return null;

                  return (
                    <tr key={isoStandard}>
                      <td colSpan={17} className="p-0">
                        <table className="w-full">
                          {/* ISO Standard Header */}
                          <thead>
                            <tr className="bg-blue-200">
                              <th colSpan={17} className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">
                                {getISOTitle(isoStandard)}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {standardEvents.map((event, eventIdx) => (
                              <tr 
                                key={event.id} 
                                className="hover:bg-gray-50 cursor-pointer transition-colors"
                                onClick={() => handleCourseClick(isoStandard)}
                              >
                                <td className="border border-gray-300 px-4 py-3 text-sm text-center w-16">
                                  {eventIdx + 1}
                                </td>
                                <td className="border border-gray-300 px-4 py-3 text-sm">
                                  {event.title}
                                </td>
                                <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                                  -
                                </td>
                                <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                                  {event.duration}
                                </td>
                                <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                                  {event.fee.toFixed(0)}
                                </td>
                                {monthRange.map((m, monthIdx) => {
                                  const monthEvents = getEventsByMonth([event], m.month, m.year);
                                  return (
                                    <td key={monthIdx} className="border border-gray-300 px-2 py-3 text-sm text-center">
                                      {monthEvents.length > 0 && (
                                        <div className="flex flex-col gap-1">
                                          {monthEvents.map((evt, idx) => (
                                            <div key={idx} className="text-xs">
                                              <div className="font-semibold">
                                                {formatDate(evt.start_date)}-{formatDate(evt.end_date)}
                                              </div>
                                              <div className="text-gray-600">
                                                {evt.location}
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </td>
                                  );
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {events.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No events scheduled for the next 12 months</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventCalendar;
