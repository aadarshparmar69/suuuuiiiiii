import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, ArrowRight, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/Logo";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { SEOHead, pageSEO } from "@/components/SEOHead";

const floatingShapes = [
  { size: 120, x: "10%", y: "20%", delay: 0 },
  { size: 80, x: "80%", y: "60%", delay: 1.5 },
  { size: 60, x: "70%", y: "15%", delay: 0.8 },
  { size: 100, x: "15%", y: "70%", delay: 2 },
];

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { signIn, signInWithGoogle } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const { error } = await signIn(formData.email, formData.password);
    
    if (error) {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
      navigate("/");
    }
    
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <SEOHead {...pageSEO.login} noindex={true} />
      <div className="min-h-screen flex flex-col lg:flex-row bg-background overflow-hidden">
        {/* Form Section */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 lg:py-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[420px]"
          >
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-12"
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
                Welcome back
              </h1>
              <p className="text-muted-foreground text-lg mb-10">
                Sign in to continue managing your leads
              </p>
            </motion.div>

            {/* Google Sign In */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
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
                      title: "Google sign in failed",
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
              transition={{ delay: 0.25, duration: 0.5 }}
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
              className="space-y-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email address
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
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm font-medium text-foreground">
                    Password
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
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
                    placeholder="Enter your password"
                    required
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
                    Sign in
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </motion.form>

            {/* Sign up link */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 text-center text-muted-foreground"
            >
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                Create account
              </Link>
            </motion.p>
          </motion.div>
        </div>

        {/* Visual Section - Desktop Only */}
        <div className="hidden lg:flex flex-1 bg-card relative overflow-hidden">
          {/* Animated Background Shapes */}
          {floatingShapes.map((shape, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full border border-primary/20"
              style={{
                width: shape.size,
                height: shape.size,
                left: shape.x,
                top: shape.y,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
                y: [0, -20, 0],
              }}
              transition={{
                delay: shape.delay,
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col justify-center items-center h-full px-16"
          >
            <div className="max-w-lg text-center">
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Trusted by 50+ companies</span>
              </motion.div>

              <h2 className="text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Automate your lead follow-ups with AI
              </h2>
              
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Stop losing deals to missed follow-ups. Let Follow IQ handle your outreach while you focus on closing.
              </p>

              {/* Stats row */}
              <div className="flex items-center justify-center gap-8">
                {[
                  { value: "3x", label: "Faster response" },
                  { value: "40%", label: "More conversions" },
                  { value: "10h", label: "Saved weekly" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Bottom Section */}
        <div className="lg:hidden bg-card border-t border-border py-8 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 50+ companies</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Join thousands of teams using Follow IQ to close more deals.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Login;
