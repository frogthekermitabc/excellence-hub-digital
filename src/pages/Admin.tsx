import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UpdatesList from "@/components/admin/UpdatesList";
import AddUpdateForm from "@/components/admin/AddUpdateForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScheduleManagement from "@/components/admin/ScheduleManagement";
import { useAuth } from "@/contexts/AuthContext";

const Admin = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/auth");
      } else if (!isAdmin) {
        toast({
          title: "Access Denied",
          description: "You need admin privileges to access this page.",
          variant: "destructive",
        });
        navigate("/");
      }
    }
  }, [user, isAdmin, loading, navigate, toast]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Manage your website content, course schedules, and user accounts
            </p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <Tabs defaultValue="manage" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="manage" className="text-xs sm:text-sm py-3">
              Manage Updates
            </TabsTrigger>
            <TabsTrigger value="add" className="text-xs sm:text-sm py-3">
              Add Update
            </TabsTrigger>
            <TabsTrigger value="schedules" className="text-xs sm:text-sm py-3">
              Schedules
            </TabsTrigger>
            <TabsTrigger value="users" className="text-xs sm:text-sm py-3">
              Users
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="manage" className="mt-6">
            <UpdatesList />
          </TabsContent>
          
          <TabsContent value="add" className="mt-6">
            <AddUpdateForm />
          </TabsContent>
          
          <TabsContent value="schedules" className="mt-6">
            <ScheduleManagement />
          </TabsContent>
          
          <TabsContent value="users" className="mt-6">
            <div className="text-center p-8">
              <Button onClick={() => navigate("/admin/users")}>
                Go to User Management
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
