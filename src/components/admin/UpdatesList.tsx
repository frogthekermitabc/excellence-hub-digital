import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit } from "lucide-react";
import EditUpdateDialog from "./EditUpdateDialog";

interface Update {
  id: string;
  title: string;
  content: string;
  category: string;
  image_url: string | null;
  created_at: string;
}

const UpdatesList = () => {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingUpdate, setEditingUpdate] = useState<Update | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    const { data, error } = await supabase
      .from("company_updates")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch updates",
        variant: "destructive",
      });
      return;
    }

    setUpdates(data || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this update?")) return;

    const { error } = await supabase
      .from("company_updates")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete update",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Update deleted successfully",
    });
    fetchUpdates();
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      company_update: "Company Update",
      event: "Event",
      news: "News",
      activity: "Activity",
    };
    return labels[category] || category;
  };

  if (loading) {
    return <p>Loading updates...</p>;
  }

  return (
    <div className="space-y-4">
      {updates.length === 0 ? (
        <p className="text-center text-muted-foreground">No updates yet</p>
      ) : (
        updates.map((update) => (
          <Card key={update.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{update.title}</CardTitle>
                  <CardDescription>
                    {getCategoryLabel(update.category)} • {new Date(update.created_at).toLocaleDateString()}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setEditingUpdate(update)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(update.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {update.image_url && (
                <img
                  src={update.image_url}
                  alt={update.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <p className="text-sm">{update.content}</p>
            </CardContent>
          </Card>
        ))
      )}
      
      {editingUpdate && (
        <EditUpdateDialog
          update={editingUpdate}
          open={!!editingUpdate}
          onOpenChange={(open) => !open && setEditingUpdate(null)}
          onSuccess={fetchUpdates}
        />
      )}
    </div>
  );
};

export default UpdatesList;
