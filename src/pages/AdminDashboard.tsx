import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Mail, Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  created_at: string;
  is_read: boolean;
}

const AdminDashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchSubmissions();
    }
  }, [user]);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      toast({
        title: "Error",
        description: "Failed to load submissions.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleReadStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .update({ is_read: !currentStatus })
        .eq("id", id);

      if (error) throw error;

      setSubmissions((prev) =>
        prev.map((sub) =>
          sub.id === id ? { ...sub, is_read: !currentStatus } : sub
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "Failed to update status.",
        variant: "destructive",
      });
    }
  };

  const openSubmission = (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
    if (!submission.is_read) {
      toggleReadStatus(submission.id, false);
    }
  };

  if (authLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return null;
  }

  const unreadCount = submissions.filter((s) => !s.is_read).length;

  return (
    <Layout>
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="shrink-0"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Contact Submissions
              </h1>
              <p className="text-muted-foreground mt-1">
                {submissions.length} total • {unreadCount} unread
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <Mail className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-foreground">
                No submissions yet
              </h3>
              <p className="text-muted-foreground mt-1">
                Contact form submissions will appear here.
              </p>
            </div>
          ) : (
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow
                      key={submission.id}
                      className={`cursor-pointer hover:bg-muted/50 ${
                        !submission.is_read ? "bg-primary/5" : ""
                      }`}
                      onClick={() => openSubmission(submission)}
                    >
                      <TableCell>
                        <Badge
                          variant={submission.is_read ? "secondary" : "default"}
                        >
                          {submission.is_read ? "Read" : "New"}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        {submission.name}
                      </TableCell>
                      <TableCell>{submission.email}</TableCell>
                      <TableCell>{submission.company || "—"}</TableCell>
                      <TableCell>
                        {format(new Date(submission.created_at), "MMM d, yyyy")}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleReadStatus(submission.id, submission.is_read);
                          }}
                        >
                          {submission.is_read ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>

      <Dialog
        open={!!selectedSubmission}
        onOpenChange={() => setSelectedSubmission(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Message from {selectedSubmission?.name}</DialogTitle>
            <DialogDescription>
              {selectedSubmission?.email}
              {selectedSubmission?.company && ` • ${selectedSubmission.company}`}
              {selectedSubmission?.created_at &&
                ` • ${format(
                  new Date(selectedSubmission.created_at),
                  "MMMM d, yyyy 'at' h:mm a"
                )}`}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="whitespace-pre-wrap text-foreground">
              {selectedSubmission?.message}
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => {
                if (selectedSubmission) {
                  window.location.href = `mailto:${selectedSubmission.email}?subject=Re: Your inquiry`;
                }
              }}
            >
              <Mail className="h-4 w-4 mr-2" />
              Reply via Email
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default AdminDashboard;
