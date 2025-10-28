import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface Update {
  id: string;
  title: string;
  content: string;
  category: string;
  image_url: string | null;
  created_at: string;
}

const CompanyUpdates = () => {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    const { data, error } = await supabase
      .from("company_updates")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setUpdates(data);
    }
    setLoading(false);
  };

  const filterByCategory = (category: string) => {
    return updates.filter((update) => update.category === category);
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      company_update: "Company Updates",
      event: "Events",
      news: "News",
      activity: "Activities",
    };
    return labels[category] || category;
  };

  const renderUpdates = (filteredUpdates: Update[]) => {
    if (filteredUpdates.length === 0) {
      return <p className="text-center text-muted-foreground py-8">No updates yet</p>;
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUpdates.map((update, index) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              {update.image_url && (
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={update.image_url}
                    alt={update.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">{update.title}</CardTitle>
                <CardDescription>
                  {new Date(update.created_at).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm line-clamp-3">{update.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <p className="text-center">Loading updates...</p>;
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Updates</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about our company news, events, and activities
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="company_update">Company</TabsTrigger>
            <TabsTrigger value="event">Events</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="activity">Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {renderUpdates(updates)}
          </TabsContent>

          <TabsContent value="company_update">
            {renderUpdates(filterByCategory("company_update"))}
          </TabsContent>

          <TabsContent value="event">
            {renderUpdates(filterByCategory("event"))}
          </TabsContent>

          <TabsContent value="news">
            {renderUpdates(filterByCategory("news"))}
          </TabsContent>

          <TabsContent value="activity">
            {renderUpdates(filterByCategory("activity"))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CompanyUpdates;
