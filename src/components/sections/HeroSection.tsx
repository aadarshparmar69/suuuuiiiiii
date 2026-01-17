import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Check, Clock, Send, Brain, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { easings, springConfigs } from "@/hooks/useScrollAnimations";

// Animated workflow step
interface WorkflowStep {
  id: number;
  icon: React.ElementType;
  label: string;
  status: "waiting" | "active" | "complete";
}

const WorkflowAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [messageTyped, setMessageTyped] = useState("");
  const aiMessage = "Hi Sarah! Following up on our proposal. Ready to discuss next steps?";
  
  const steps: WorkflowStep[] = [
    { id: 1, icon: User, label: "New Lead", status: currentStep >= 0 ? (currentStep === 0 ? "active" : "complete") : "waiting" },
    { id: 2, icon: Clock, label: "AI Reminder", status: currentStep >= 1 ? (currentStep === 1 ? "active" : "complete") : "waiting" },
    { id: 3, icon: Brain, label: "AI Message", status: currentStep >= 2 ? (currentStep === 2 ? "active" : "complete") : "waiting" },
    { id: 4, icon: MessageCircle, label: "WhatsApp", status: currentStep >= 3 ? (currentStep === 3 ? "active" : "complete") : "waiting" },
    { id: 5, icon: Check, label: "Deal Closed", status: currentStep >= 4 ? "active" : "waiting" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentStep === 2) {
      setMessageTyped("");
      let i = 0;
      const typing = setInterval(() => {
        if (i < aiMessage.length) {
          setMessageTyped(aiMessage.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
        }
      }, 30);
      return () => clearInterval(typing);
    }
  }, [currentStep]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main workflow container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: easings.smooth }}
        className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/20"
      >
        {/* Subtle glow behind */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent blur-2xl" />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold text-foreground">Follow IQ Workflow</p>
              <p className="text-xs text-muted-foreground">AI-Powered Lead Journey</p>
            </div>
          </div>
          <motion.div 
            className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Live Demo
          </motion.div>
        </div>

        {/* Workflow steps */}
        <div className="flex items-center justify-between relative mb-8">
          {/* Connection line */}
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-border/50 -translate-y-1/2" />
          <motion.div 
            className="absolute top-1/2 left-8 h-0.5 bg-primary -translate-y-1/2"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(currentStep * 25, 100)}%` }}
            transition={{ duration: 0.5, ease: easings.smooth }}
          />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative z-10 flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
            >
              <motion.div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  step.status === "complete" 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
                    : step.status === "active"
                    ? "bg-primary/20 text-primary ring-2 ring-primary ring-offset-2 ring-offset-card"
                    : "bg-secondary text-muted-foreground"
                }`}
                animate={step.status === "active" ? { scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 1, repeat: step.status === "active" ? Infinity : 0 }}
              >
                {step.status === "complete" ? (
                  <Check className="w-5 h-5 md:w-6 md:h-6" />
                ) : (
                  <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                )}
              </motion.div>
              <span className={`text-xs font-medium hidden sm:block ${
                step.status === "active" ? "text-primary" : "text-muted-foreground"
              }`}>
                {step.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Dynamic content area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-secondary/50 rounded-2xl p-4 md:p-5 min-h-[100px]"
          >
            {currentStep === 0 && (
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  SM
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Sarah Martinez - New Lead</p>
                  <p className="text-xs text-muted-foreground">Viewed pricing page • High intent score: 85</p>
                </div>
                <motion.span 
                  className="ml-auto px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  Hot Lead
                </motion.span>
              </div>
            )}
            {currentStep === 1 && (
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 2 }}
                >
                  <Clock className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Follow-up Reminder Triggered</p>
                  <p className="text-xs text-muted-foreground">Optimal time detected: Tuesday 10:30 AM</p>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">AI Generating Message...</span>
                </div>
                <div className="bg-card/80 rounded-xl p-3 border border-border/30">
                  <p className="text-sm text-foreground leading-relaxed">
                    {messageTyped}
                    <motion.span
                      animate={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
                    />
                  </p>
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3, repeat: 2 }}
                >
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">Message Sent via WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Delivered • Read at 10:32 AM</p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                  className="text-[#25D366]"
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              </div>
            )}
            {currentStep >= 4 && (
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="w-6 h-6 text-accent" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">Deal Closed! 🎉</p>
                  <p className="text-xs text-muted-foreground">$4,500 revenue • 3 days from first contact</p>
                </div>
                <motion.span 
                  className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  Won
                </motion.span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, springConfigs.gentle);
  const backgroundY = useTransform(smoothScrollY, [0, 600], [0, 80]);
  const opacity = useTransform(smoothScrollY, [0, 400], [1, 0.7]);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: backgroundY }}>
        {/* Gradient orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80%]"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 20%, hsl(var(--primary) / 0.15) 0%, transparent 60%)`
          }}
        />
        
        {/* Subtle grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.03 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px"
          }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* USP Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easings.smooth }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Not a CRM. An AI Follow-Up System.</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div className="text-center max-w-4xl mx-auto mb-8">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: easings.smooth }}
          >
            <span className="text-muted-foreground">CRMs track leads.</span>
            <br />
            <span className="gradient-text">Follow IQ closes them.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: easings.smooth }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
          >
            AI-powered follow-ups via WhatsApp that ensure no lead ever slips through the cracks. 
            Built for agencies, consultants, and service businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: easings.smooth }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", ...springConfigs.snappy }}
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group shadow-lg shadow-primary/25">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", ...springConfigs.snappy }}
            >
              <a href="https://followiq.setmore.com" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book a Demo
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Product Workflow */}
        <WorkflowAnimation />

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2, ease: easings.smooth }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 pt-8 border-t border-border/30 max-w-2xl mx-auto"
        >
          {[
            { value: "340%", label: "More Conversions" },
            { value: "3x", label: "Faster Response" },
            { value: "50+", label: "Happy Teams" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3 + i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
