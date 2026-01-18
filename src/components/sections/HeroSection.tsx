import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Check, Clock, Brain, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Refined workflow animation - calm, intentional, product-real
const WorkflowAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const steps = [{
    id: 0,
    icon: User,
    label: "Lead Captured",
    sublabel: "From your website"
  }, {
    id: 1,
    icon: Brain,
    label: "AI Prepares",
    sublabel: "Personalized message"
  }, {
    id: 2,
    icon: MessageCircle,
    label: "WhatsApp Sent",
    sublabel: "Perfect timing"
  }, {
    id: 3,
    icon: Check,
    label: "Deal Closed",
    sublabel: "$4,500 revenue"
  }];
  const aiMessage = "Hi Sarah! Following up on our chat about the Growth plan. Ready when you are 👋";
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 5);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (currentStep === 1) {
      setIsTyping(true);
      setTypedMessage("");
      let i = 0;
      const typing = setInterval(() => {
        if (i < aiMessage.length) {
          setTypedMessage(aiMessage.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
          setIsTyping(false);
        }
      }, 35);
      return () => clearInterval(typing);
    }
  }, [currentStep]);
  const getStepStatus = (index: number) => {
    if (currentStep > index || currentStep === 4) return "complete";
    if (currentStep === index) return "active";
    return "pending";
  };
  return <div className="w-full max-w-3xl mx-auto">
      {/* Main container - glass card */}
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }} className="relative bg-card/90 backdrop-blur-xl border border-border/60 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4 border-b border-border/40 bg-secondary/30">
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs lg:text-sm font-medium text-muted-foreground">Live Workflow Preview</span>
          </div>
          <span className="text-[10px] lg:text-xs text-muted-foreground/60 font-mono">follow-iq.app</span>
        </div>

        {/* Workflow steps - horizontal on desktop, vertical on mobile */}
        <div className="p-4 lg:p-8">
          {/* Steps row */}
          <div className="flex items-start justify-between gap-2 lg:gap-4 mb-6 lg:mb-8">
            {steps.map((step, index) => {
            const status = getStepStatus(index);
            const Icon = step.icon;
            return <div key={step.id} className="flex flex-col items-center flex-1">
                  {/* Step circle */}
                  <motion.div animate={{
                scale: status === "active" ? 1.1 : 1,
                backgroundColor: status === "complete" ? "hsl(var(--primary))" : status === "active" ? "hsl(var(--primary) / 0.2)" : "hsl(var(--secondary))"
              }} transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }} className={`w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center relative ${status === "complete" ? "text-primary-foreground" : status === "active" ? "text-primary ring-2 ring-primary/30 ring-offset-2 ring-offset-card" : "text-muted-foreground"}`}>
                    {status === "complete" ? <Check className="w-4 h-4 lg:w-5 lg:h-5" /> : <Icon className="w-4 h-4 lg:w-5 lg:h-5" />}
                  </motion.div>
                  
                  {/* Labels - hidden on mobile, visible on desktop */}
                  <div className="mt-2 lg:mt-3 text-center hidden sm:block">
                    <p className={`text-xs lg:text-sm font-semibold transition-colors duration-300 ${status === "active" ? "text-primary" : status === "complete" ? "text-foreground" : "text-muted-foreground"}`}>
                      {step.label}
                    </p>
                    <p className="text-[10px] lg:text-xs text-muted-foreground/70 mt-0.5">
                      {step.sublabel}
                    </p>
                  </div>
                </div>;
          })}
          </div>

          {/* Progress bar */}
          <div className="relative h-1 bg-secondary rounded-full mb-6 lg:mb-8 overflow-hidden">
            <motion.div className="absolute inset-y-0 left-0 bg-primary rounded-full" animate={{
            width: `${Math.min(currentStep / 3 * 100, 100)}%`
          }} transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }} />
          </div>

          {/* Dynamic content area */}
          <AnimatePresence mode="wait">
            <motion.div key={currentStep} initial={{
            opacity: 0,
            y: 8
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -8
          }} transition={{
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1]
          }} className="bg-secondary/40 rounded-xl lg:rounded-2xl p-4 lg:p-5 min-h-[80px] lg:min-h-[100px]">
              {currentStep === 0 && <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm lg:text-base shrink-0">
                    SM
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm lg:text-base font-semibold text-foreground truncate">Sarah Martinez</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">Viewed pricing • Intent score: 85</p>
                  </div>
                  <span className="px-2 py-1 lg:px-3 lg:py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold whitespace-nowrap">
                    Hot Lead
                  </span>
                </div>}
              
              {currentStep === 1 && <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-primary" />
                    <span className="text-xs lg:text-sm font-medium text-primary">AI composing message...</span>
                  </div>
                  <div className="bg-card/60 rounded-lg lg:rounded-xl p-3 lg:p-4 border border-border/30">
                    <p className="text-sm lg:text-base text-foreground leading-relaxed">
                      {typedMessage}
                      {isTyping && <motion.span animate={{
                    opacity: [1, 0]
                  }} transition={{
                    duration: 0.6,
                    repeat: Infinity
                  }} className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle" />}
                    </p>
                  </div>
                </div>}
              
              {currentStep === 2 && <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-[#25D366]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm lg:text-base font-semibold text-foreground">Sent via WhatsApp</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">Delivered • Read at 10:32 AM</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#25D366]">
                    <Check className="w-4 h-4" />
                    <Check className="w-4 h-4 -ml-2" />
                  </div>
                </div>}
              
              {(currentStep === 3 || currentStep === 4) && <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm lg:text-base font-semibold text-foreground">Deal Closed! 🎉</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">$4,500 • 3 days from first contact</p>
                  </div>
                  <span className="px-2 py-1 lg:px-3 lg:py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold">
                    Won
                  </span>
                </div>}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>;
};
export const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {
    once: true
  });
  return <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orb - slowly drifting */}
        <motion.div className="absolute top-[-20%] left-1/2 w-[120%] h-[80%]" animate={{
        x: ["-50%", "-45%", "-55%", "-50%"],
        y: ["0%", "5%", "-3%", "0%"],
        scale: [1, 1.05, 0.98, 1]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }} style={{
        background: `radial-gradient(ellipse 60% 50% at 50% 30%, hsl(175 80% 50% / 0.12) 0%, transparent 60%)`
      }} />
        
        {/* Secondary accent orb - counter drift */}
        <motion.div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%]" animate={{
        x: ["0%", "-8%", "5%", "0%"],
        y: ["0%", "10%", "-5%", "0%"],
        opacity: [0.4, 0.6, 0.35, 0.4]
      }} transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }} style={{
        background: `radial-gradient(ellipse 80% 80% at 50% 50%, hsl(15 90% 60% / 0.06) 0%, transparent 60%)`
      }} />
        
        {/* Tertiary subtle orb - left side */}
        <motion.div className="absolute top-[30%] left-[-5%] w-[40%] h-[50%]" animate={{
        x: ["0%", "10%", "-5%", "0%"],
        y: ["0%", "-8%", "8%", "0%"],
        opacity: [0.3, 0.5, 0.25, 0.3]
      }} transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }} style={{
        background: `radial-gradient(ellipse 70% 70% at 50% 50%, hsl(200 80% 55% / 0.08) 0%, transparent 60%)`
      }} />
        
        {/* Very subtle noise/grain overlay for depth */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* USP Badge */}
        <motion.div initial={{
        opacity: 0,
        y: 15
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="flex justify-center mb-5 lg:mb-6">
          
        </motion.div>

        {/* Main Headline */}
        <motion.div className="text-center max-w-4xl mx-auto mb-6 lg:mb-8">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-4 lg:mb-6" initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.15,
          ease: [0.25, 0.1, 0.25, 1]
        }}>
            <span className="text-muted-foreground">CRMs track leads.</span>
            <br />
            <span className="gradient-text">Follow IQ closes them.</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 15
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: 0.25,
          ease: [0.25, 0.1, 0.25, 1]
        }} className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            AI-powered follow-ups via WhatsApp that ensure no lead ever slips through. 
            Built for agencies, consultants, and service businesses.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div initial={{
        opacity: 0,
        y: 15
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.5,
        delay: 0.35,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-10 lg:mb-14 px-4">
          <Link to="/contact">
            <Button variant="hero" size="lg" className="w-full sm:w-auto group shadow-lg shadow-primary/20">
              Get Started
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          <a href="https://followiq.setmore.com" target="_blank" rel="noopener noreferrer">
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto group">
              <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              Book a Demo
            </Button>
          </a>
        </motion.div>

        {/* Animated Product Workflow */}
        <WorkflowAnimation />

        {/* Bottom Stats */}
        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.6,
        delay: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="flex flex-wrap justify-center gap-6 lg:gap-10 mt-10 lg:mt-14 pt-8 border-t border-border/30 max-w-lg mx-auto">
          {[{
          value: "340%",
          label: "More Conversions"
        }, {
          value: "3x",
          label: "Faster Response"
        }, {
          value: "50+",
          label: "Happy Teams"
        }].map((stat, i) => <motion.div key={stat.label} initial={{
          opacity: 0,
          y: 10
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          delay: 1.1 + i * 0.1,
          duration: 0.4
        }} className="text-center">
              <div className="text-xl lg:text-2xl font-display font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};