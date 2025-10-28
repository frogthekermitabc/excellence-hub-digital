import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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

const ScheduleManagement = () => {
  const [schedules, setSchedules] = useState<CourseSchedule[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<CourseSchedule | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    course_type: "ISO9001",
    location: "",
    method: "PHYSICAL",
    duration: 1,
    start_date: "",
    end_date: "",
    fee: 0,
    status: "published"
  });

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    const { data, error } = await supabase
      .from('course_schedules')
      .select('*')
      .order('start_date', { ascending: true });

    if (error) {
      toast({ title: "Error", description: "Failed to load schedules", variant: "destructive" });
    } else {
      setSchedules(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingSchedule) {
        const { error } = await supabase
          .from('course_schedules')
          .update(formData)
          .eq('id', editingSchedule.id);

        if (error) throw error;
        toast({ title: "Success", description: "Schedule updated successfully" });
      } else {
        const { error } = await supabase
          .from('course_schedules')
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Schedule created successfully" });
      }

      fetchSchedules();
      resetForm();
      setIsDialogOpen(false);
    } catch (error) {
      toast({ title: "Error", description: "Failed to save schedule", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this schedule?")) return;

    const { error } = await supabase
      .from('course_schedules')
      .delete()
      .eq('id', id);

    if (error) {
      toast({ title: "Error", description: "Failed to delete schedule", variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Schedule deleted successfully" });
      fetchSchedules();
    }
  };

  const handleEdit = (schedule: CourseSchedule) => {
    setEditingSchedule(schedule);
    setFormData({
      title: schedule.title,
      course_type: schedule.course_type,
      location: schedule.location,
      method: schedule.method,
      duration: schedule.duration,
      start_date: schedule.start_date,
      end_date: schedule.end_date,
      fee: schedule.fee,
      status: schedule.status
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      course_type: "ISO9001",
      location: "",
      method: "PHYSICAL",
      duration: 1,
      start_date: "",
      end_date: "",
      fee: 0,
      status: "published"
    });
    setEditingSchedule(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB');
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Course Schedule Management</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Schedule
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingSchedule ? "Edit Schedule" : "Add New Schedule"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="course_type">Course Type</Label>
                    <Select
                      value={formData.course_type}
                      onValueChange={(value) => setFormData({ ...formData, course_type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ISO9001">ISO 9001</SelectItem>
                        <SelectItem value="ISO14001">ISO 14001</SelectItem>
                        <SelectItem value="ISO45001">ISO 45001</SelectItem>
                        <SelectItem value="ISO27001">ISO 27001</SelectItem>
                        <SelectItem value="ISO37001">ISO 37001</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="method">Method</Label>
                    <Select
                      value={formData.method}
                      onValueChange={(value) => setFormData({ ...formData, method: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PHYSICAL">Physical</SelectItem>
                        <SelectItem value="ONLINE REMOTE">Online Remote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration">Duration (days)</Label>
                    <Input
                      id="duration"
                      type="number"
                      min="1"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="fee">Fee (RM)</Label>
                    <Input
                      id="fee"
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.fee}
                      onChange={(e) => setFormData({ ...formData, fee: parseFloat(e.target.value) })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="start_date">Start Date</Label>
                    <Input
                      id="start_date"
                      type="date"
                      value={formData.start_date}
                      onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="end_date">End Date</Label>
                    <Input
                      id="end_date"
                      type="date"
                      value={formData.end_date}
                      onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) => setFormData({ ...formData, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" disabled={loading}>
                  {loading ? "Saving..." : editingSchedule ? "Update Schedule" : "Create Schedule"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schedules.map((schedule) => (
            <Card key={schedule.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{schedule.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {schedule.location} • {schedule.method} • {schedule.duration} day(s)
                    </p>
                    <p className="text-sm">
                      {formatDate(schedule.start_date)} - {formatDate(schedule.end_date)} • RM {schedule.fee.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(schedule)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(schedule.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleManagement;
