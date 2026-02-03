import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Building2, Briefcase, Save, Loader2, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";

const jobRoles = [
  { value: "founder", label: "Founder / Co-Founder" },
  { value: "ceo", label: "CEO / Managing Director" },
  { value: "marketer", label: "Marketing Manager" },
  { value: "sales_manager", label: "Sales Manager" },
  { value: "business_developer", label: "Business Development" },
  { value: "operations_manager", label: "Operations Manager" },
  { value: "other", label: "Other" },
];

interface ProfileData {
  display_name: string;
  phone: string;
  company_name: string;
  job_role: string;
}

const Account = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<ProfileData>({
    display_name: "",
    phone: "",
    company_name: "",
    job_role: "",
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
      return;
    }

    if (user) {
      fetchProfile();
    }
  }, [user, authLoading, navigate]);

  const fetchProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("display_name, phone, company_name, job_role")
        .eq("user_id", user.id)
        .single();

      if (error && error.code !== "PGRST116") {
        throw error;
      }

      if (data) {
        setFormData({
          display_name: data.display_name || "",
          phone: data.phone || "",
          company_name: data.company_name || "",
          job_role: data.job_role || "",
        });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSaving(true);

    try {
      const { error } = await supabase
        .from("profiles")
        .upsert({
          user_id: user.id,
          display_name: formData.display_name.trim() || null,
          phone: formData.phone.trim() || null,
          company_name: formData.company_name.trim() || null,
          job_role: formData.job_role || null,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: "user_id",
        });

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your account information has been saved successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error saving profile",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (authLoading || isLoading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  return (
    <>
      <SEOHead 
        title="Account Settings | Follow IQ"
        description="Manage your Follow IQ account settings and profile information."
        noindex={true}
      />
      <Layout>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="mb-8">
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">Back to home</span>
                </Link>
                <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                  Account Settings
                </h1>
                <p className="text-muted-foreground">
                  Manage your profile information and preferences
                </p>
              </div>

              {/* Profile Card */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                {/* Email Display (Read Only) */}
                <div className="mb-8 pb-6 border-b border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-semibold">
                      {user?.email?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email address</p>
                      <p className="text-foreground font-medium">{user?.email}</p>
                    </div>
                  </div>
                </div>

                {/* Edit Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="display_name" className="text-foreground">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="display_name"
                          name="display_name"
                          type="text"
                          value={formData.display_name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="pl-10 h-11 bg-background border-border"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="pl-10 h-11 bg-background border-border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="company_name" className="text-foreground">
                      Company Name
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="company_name"
                        name="company_name"
                        type="text"
                        value={formData.company_name}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="pl-10 h-11 bg-background border-border"
                      />
                    </div>
                  </div>

                  {/* Job Role */}
                  <div className="space-y-2">
                    <Label htmlFor="job_role" className="text-foreground">
                      Your Role
                    </Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10 pointer-events-none" />
                      <Select
                        value={formData.job_role}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, job_role: value }))}
                      >
                        <SelectTrigger className="pl-10 h-11 bg-background border-border">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border z-50">
                          {jobRoles.map((role) => (
                            <SelectItem 
                              key={role.value} 
                              value={role.value}
                              className="cursor-pointer hover:bg-secondary"
                            >
                              {role.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                      disabled={isSaving}
                    >
                      {isSaving ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="w-5 h-5 mr-2" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Need help? Contact our support team at{" "}
                  <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">
                    support
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Account;
