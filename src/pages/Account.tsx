import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Briefcase, 
  Save, 
  Loader2, 
  ArrowLeft,
  Crown,
  Sparkles,
  Check,
  ArrowRight
} from "lucide-react";
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

const planFeatures = [
  "Unlimited lead tracking",
  "AI-powered follow-ups", 
  "Team collaboration",
  "Advanced analytics",
  "Priority support",
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

  const initials = formData.display_name
    ? formData.display_name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)
    : user?.email?.substring(0, 2).toUpperCase() || "U";

  return (
    <>
      <SEOHead 
        title="Account Settings | Follow IQ"
        description="Manage your Follow IQ account settings and profile information."
        noindex={true}
      />
      <Layout>
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate(-1)}
                className="shrink-0 hover:bg-secondary"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                  Account Settings
                </h1>
                <p className="text-muted-foreground mt-1">
                  Manage your profile and subscription
                </p>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Subscription Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="lg:col-span-3 bg-card rounded-2xl border border-border p-6 lg:p-8 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Crown className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-xl font-display font-bold text-foreground">Free Plan</h2>
                        <span className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full">
                          Current
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Upgrade to unlock all features and grow your business faster
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {planFeatures.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 lg:items-end flex-shrink-0">
                    <Link to="/pricing">
                      <Button 
                        size="lg" 
                        className="w-full lg:w-auto gap-2 group h-12 px-6"
                      >
                        <Sparkles className="w-4 h-4" />
                        Upgrade Plan
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link 
                      to="/pricing" 
                      className="text-sm text-primary hover:text-primary/80 transition-colors text-center lg:text-right font-medium"
                    >
                      View all plans →
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Profile Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="lg:col-span-2 bg-card rounded-2xl border border-border p-6 lg:p-8"
              >
                <h2 className="text-lg font-display font-semibold text-foreground mb-6">
                  Profile Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="display_name" className="text-foreground text-sm font-medium">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="display_name"
                        name="display_name"
                        type="text"
                        value={formData.display_name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="pl-12 h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email - Read Only */}
                  <div className="space-y-2">
                    <Label className="text-foreground text-sm font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        value={user?.email || ""}
                        disabled
                        className="pl-12 h-12 bg-muted/50 border-border text-muted-foreground cursor-not-allowed"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Email cannot be changed
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground text-sm font-medium">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="pl-12 h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="company_name" className="text-foreground text-sm font-medium">
                      Company Name
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="company_name"
                        name="company_name"
                        type="text"
                        value={formData.company_name}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="pl-12 h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Job Role */}
                  <div className="space-y-2">
                    <Label htmlFor="job_role" className="text-foreground text-sm font-medium">
                      Your Role
                    </Label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10 pointer-events-none" />
                      <Select
                        value={formData.job_role}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, job_role: value }))}
                      >
                        <SelectTrigger className="pl-12 h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border z-50">
                          {jobRoles.map((role) => (
                            <SelectItem 
                              key={role.value} 
                              value={role.value}
                              className="cursor-pointer hover:bg-secondary focus:bg-secondary"
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
                      className="w-full lg:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
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
              </motion.div>

              {/* Profile Avatar Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-card rounded-2xl border border-border p-6 lg:p-8 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-5">
                  <span className="text-3xl font-display font-bold text-primary">
                    {initials}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {formData.display_name || "Your Name"}
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  {user?.email}
                </p>
                
                <div className="w-full pt-5 border-t border-border space-y-3">
                  {formData.company_name && (
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="w-4 h-4 text-primary/60" />
                      <span>{formData.company_name}</span>
                    </div>
                  )}
                  {formData.job_role && (
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="w-4 h-4 text-primary/60" />
                      <span>{jobRoles.find(r => r.value === formData.job_role)?.label || formData.job_role}</span>
                    </div>
                  )}
                  {formData.phone && (
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary/60" />
                      <span>{formData.phone}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 p-4 bg-secondary/30 rounded-xl text-center"
            >
              <p className="text-sm text-muted-foreground">
                Need help? {" "}
                <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  Contact our support team
                </Link>
              </p>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Account;
