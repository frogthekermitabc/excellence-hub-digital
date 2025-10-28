import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AddUpdateForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = null;

      if (image) {
        const fileExt = image.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { error: uploadError, data } = await supabase.storage
          .from("update-images")
          .upload(fileName, image);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from("update-images")
          .getPublicUrl(fileName);

        imageUrl = publicUrl;
      }

      const { data: { user } } = await supabase.auth.getUser();

      const { error } = await supabase.from("company_updates").insert({
        title,
        content,
        category,
        image_url: imageUrl,
        author_id: user?.id,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Update published successfully",
      });

      setTitle("");
      setContent("");
      setCategory("");
      setImage(null);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Update</CardTitle>
        <CardDescription>
          Create and publish company updates, news, events, and activities that will be visible on your website
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Fill out the form below to create a new update. All fields except the image are required. 
            Your update will be published immediately and visible to all visitors.
          </AlertDescription>
        </Alert>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., New ISO Training Program Launched"
              required
            />
            <p className="text-sm text-muted-foreground">
              A clear, concise headline for your update (max 100 characters recommended)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="company_update">Company Update - General announcements</SelectItem>
                <SelectItem value="event">Event - Upcoming or past events</SelectItem>
                <SelectItem value="news">News - Industry news & achievements</SelectItem>
                <SelectItem value="activity">Activity - Team activities & initiatives</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Choose the category that best fits your update
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write the full details of your update here. Include all relevant information visitors should know..."
              required
              rows={8}
              className="resize-y"
            />
            <p className="text-sm text-muted-foreground">
              Write the main content of your update. Be clear and informative (200-500 words recommended)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Image (Optional)
            </Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="cursor-pointer"
            />
            <p className="text-sm text-muted-foreground">
              Add a relevant image to make your update more engaging. Supported formats: JPG, PNG, WEBP (max 5MB recommended)
            </p>
            {image && (
              <div className="mt-2 p-2 bg-muted rounded-md text-sm">
                Selected: {image.name} ({(image.size / 1024 / 1024).toFixed(2)} MB)
              </div>
            )}
          </div>

          <Button type="submit" disabled={loading} className="w-full" size="lg">
            {loading ? "Publishing..." : "Publish Update"}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            * Required fields
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddUpdateForm;
