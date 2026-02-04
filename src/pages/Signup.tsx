import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, Check, Zap, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/Logo";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { SEOHead, pageSEO } from "@/components/SEOHead";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Smart follow-ups that adapt to your leads",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly on every deal",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track performance and optimize results",
  },
];

const benefits = [
  "14-day free trial",
  "No credit card required",
  "Cancel anytime",
];

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { signUp, signInWithGoogle } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const { error } = await signUp(formData.email, formData.password, formData.name);
    
    if (error) {
      toast({
        title: "Signup failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Account created!",
        description: "Please check your email to verify your account.",
      });
      navigate("/login");
    }
    
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const passwordStrength = formData.password.length >= 8 ? 
    formData.password.length >= 12 ? "strong" : "medium" : "weak";

  return (
    <>
      <SEOHead {...pageSEO.signup} />
      <div className="min-h-screen flex flex-col lg:flex-row bg-background overflow-hidden">
        {/* Visual Section - Desktop Only (Left side for signup) */}
        <div className="hidden lg:flex flex-1 bg-card relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-2xl"
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
              y: [0, -10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 right-24 w-24 h-24 border border-primary/30 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 right-16 w-16 h-16 border border-primary/20 rounded-lg rotate-45"
            animate={{ 
              rotate: [45, 55, 45],
              y: [0, 15, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Gradient glow */}
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col justify-center h-full px-16 py-16"
          >
            <div className="max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2 className="text-4xl font-display font-bold text-foreground mb-4 leading-tight">
                  Start closing more deals today
                </h2>
                <p className="text-lg text-muted-foreground mb-10">
                  Join growing businesses that trust Follow IQ to manage their lead follow-ups.
                </p>
              </motion.div>

              {/* Features */}
              <div className="space-y-6 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/30">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="pt-8 border-t border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-sm font-semibold text-muted-foreground"
                        initial={{ opacity: 0, scale: 0.8, x: -10 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.9 + i * 0.05, duration: 0.3 }}
                      >
                        {String.fromCharCode(64 + i)}
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      <span className="text-foreground font-semibold">50+ teams</span> already growing with us
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Form Section */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 lg:py-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[420px]"
          >
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-10"
            >
              <Logo size="lg" />
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 tracking-tight">
                Create account
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Start your 14-day free trial
              </p>
            </motion.div>

            {/* Benefits - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:hidden flex flex-wrap gap-3 mb-8"
            >
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Google Sign Up */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full h-14 gap-3 border-border bg-card hover:bg-card/80 hover:border-primary/30 transition-all duration-300 group"
                onClick={async () => {
                  setIsGoogleLoading(true);
                  const { error } = await signInWithGoogle();
                  if (error) {
                    toast({
                      title: "Google sign up failed",
                      description: error.message,
                      variant: "destructive",
                    });
                  }
                  setIsGoogleLoading(false);
                }}
                disabled={isGoogleLoading || isLoading}
              >
                {isGoogleLoading ? (
                  <div className="w-5 h-5 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span className="font-medium">Continue with Google</span>
                  </>
                )}
              </Button>
            </motion.div>

            {/* Divider */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative my-8"
            >
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background px-4 text-sm text-muted-foreground">or continue with email</span>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Full name
                </label>
                <div className="relative group">
                  <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'name' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John Doe"
                    required
                    className="pl-12 h-14 bg-card border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Work email
                </label>
                <div className="relative group">
                  <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="you@company.com"
                    required
                    className="pl-12 h-14 bg-card border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <div className="relative group">
                  <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'password' ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Create a strong password"
                    required
                    minLength={8}
                    className="pl-12 pr-12 h-14 bg-card border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={showPassword ? 'visible' : 'hidden'}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.15 }}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </motion.div>
                    </AnimatePresence>
                  </button>
                </div>
                
                {/* Password strength indicator */}
                {formData.password && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full bg-border overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            passwordStrength === 'strong' ? 'bg-green-500' :
                            passwordStrength === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ 
                            width: passwordStrength === 'strong' ? '100%' :
                                   passwordStrength === 'medium' ? '66%' : '33%'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <span className={`text-xs font-medium ${
                        passwordStrength === 'strong' ? 'text-green-500' :
                        passwordStrength === 'medium' ? 'text-yellow-500' : 'text-red-500'
                      }`}>
                        {passwordStrength === 'strong' ? 'Strong' :
                         passwordStrength === 'medium' ? 'Medium' : 'Weak'}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base group transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    Create account
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              {/* Terms */}
              <p className="text-xs text-muted-foreground text-center leading-relaxed pt-2">
                By creating an account, you agree to our{" "}
                <Link to="/terms-of-service" className="text-primary hover:text-primary/80 transition-colors">
                  Terms of Service
                </Link>
                {" "}and{" "}
                <Link to="/privacy-policy" className="text-primary hover:text-primary/80 transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </motion.form>

            {/* Sign in link */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-8 text-center text-muted-foreground"
            >
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                Sign in
              </Link>
            </motion.p>
          </motion.div>
        </div>

        {/* Mobile Bottom Section */}
        <div className="lg:hidden bg-card border-t border-border py-6 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">50+ teams</span> use Follow IQ
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Signup;
