import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, UserPlus, Brain, MessageCircle, TrendingUp, Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { LeadPipelineMockup } from "@/components/mockups/LeadPipelineMockup";
import { WhatsAppPreview } from "@/components/mockups/WhatsAppPreview";
import { AISuggestionPanel } from "@/components/mockups/AISuggestionPanel";
import { FollowUpTimelineMockup } from "@/components/mockups/FollowUpTimelineMockup";
import { MetricsChartMockup } from "@/components/mockups/MetricsChartMockup";
import { SEOHead, pageSEO } from "@/components/SEOHead";
const workflowSteps = [{
  step: "01",
  icon: UserPlus,
  title: "Capture Every Lead",
  description: "Connect your lead sources—forms, CRM, spreadsheets, or manual entry. Follow IQ automatically imports and organizes your leads with smart tagging.",
  details: ["Import from any CRM or spreadsheet", "Auto-capture from web forms", "Smart lead tagging and categorization", "Duplicate detection and merging"],
  mockup: "pipeline"
}, {
  step: "02",
  icon: Brain,
  title: "AI Analyzes & Scores",
  description: "Our AI engine analyzes each lead's behavior, engagement patterns, and profile to assign a priority score and create personalized follow-up sequences.",
  details: ["Behavioral analysis and scoring", "Optimal timing prediction", "Message personalization engine", "Engagement pattern learning"],
  mockup: "ai"
}, {
  step: "03",
  icon: MessageCircle,
  title: "WhatsApp Automation",
  description: "Automated messages sent via WhatsApp Business API at the perfect moment. Each message is personalized by AI to sound like you wrote it.",
  details: ["98% open rate on WhatsApp", "AI-generated personalized messages", "Multi-step sequence automation", "Response detection and routing"],
  mockup: "whatsapp"
}, {
  step: "04",
  icon: TrendingUp,
  title: "Convert & Scale",
  description: "Watch your conversion rates soar as AI handles the follow-up heavy lifting. Focus your time on what matters—closing deals.",
  details: ["Real-time conversion tracking", "Performance analytics dashboard", "A/B testing for sequences", "ROI reporting"],
  mockup: "metrics"
}];
const whatsappMessages = [{
  id: "1",
  text: "Hi Sarah! Thanks for your interest in Follow IQ. I'd love to show you how our AI can help automate your follow-ups.",
  time: "10:30 AM",
  sent: true,
  status: "read" as const
}, {
  id: "2",
  text: "That sounds great! I've been looking for something to help manage our leads better. When can we chat?",
  time: "10:45 AM",
  sent: false,
  status: "read" as const
}, {
  id: "3",
  text: "Perfect! How about tomorrow at 2 PM? I'll send you a calendar invite.",
  time: "10:47 AM",
  sent: true,
  status: "delivered" as const
}];

// Mobile Step Card Component
const MobileStepCard = ({
  step,
  index,
  isActive,
  onClick
}: {
  step: typeof workflowSteps[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 30
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 30
  }} transition={{
    duration: 0.5,
    delay: index * 0.1,
    ease: [0.25, 0.46, 0.45, 0.94]
  }} onClick={onClick} className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${isActive ? "bg-primary/5 border-primary/30 shadow-lg shadow-primary/10" : "bg-card/50 border-border/50 hover:border-primary/20"}`}>
      {/* Step number badge */}
      <div className="absolute -top-3 -left-1 px-3 py-1 bg-primary rounded-full">
        <span className="text-xs font-bold text-primary-foreground">Step {step.step}</span>
      </div>
      
      <div className="pt-2">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${isActive ? "bg-primary" : "bg-primary/10"}`}>
            <step.icon className={`w-5 h-5 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
          </div>
          <h3 className="text-lg font-display font-bold text-foreground">{step.title}</h3>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {step.description}
        </p>
        
        {/* Expandable details */}
        <AnimatePresence>
          {isActive && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: "auto",
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="overflow-hidden">
              <ul className="space-y-2 mb-4">
                {step.details.map((detail, i) => <motion.li key={detail} initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: i * 0.05
            }} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/90">{detail}</span>
                  </motion.li>)}
              </ul>
            </motion.div>}
        </AnimatePresence>
        
        {/* Expand indicator */}
        <div className="flex items-center justify-center">
          <motion.div animate={{
          rotate: isActive ? 180 : 0
        }} className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
            <ChevronRight className={`w-3 h-3 rotate-90 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
          </motion.div>
        </div>
      </div>
    </motion.div>;
};
const Product = () => {
  const [activeMockupIndex, setActiveMockupIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress: pageProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);
  
  const renderMockup = (type: string) => {
    switch (type) {
      case "pipeline":
        return <LeadPipelineMockup />;
      case "ai":
        return <AISuggestionPanel />;
      case "whatsapp":
        return <WhatsAppPreview contactName="Sarah Johnson" contactInitials="SJ" messages={whatsappMessages} />;
      case "metrics":
        return <MetricsChartMockup />;
      default:
        return null;
    }
  };
  
  const handlePrevMockup = () => {
    setActiveMockupIndex(prev => prev > 0 ? prev - 1 : workflowSteps.length - 1);
  };
  
  const handleNextMockup = () => {
    setActiveMockupIndex(prev => prev < workflowSteps.length - 1 ? prev + 1 : 0);
  };
  
  return <Layout>
      <SEOHead {...pageSEO.product} />
      <div ref={containerRef}>
      {/* Hero - Mobile Optimized */}
      <section ref={heroRef} className="pt-20 pb-16 lg:py-32 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 hero-gradient" />
        <motion.div style={{
        y: heroY,
        opacity: heroOpacity
      }} className="absolute top-10 right-0 w-72 h-72 bg-primary/15 rounded-full blur-[100px] lg:hidden" />
        <motion.div style={{
        y: heroY
      }} className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px] lg:hidden" />
        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] hidden lg:block" />

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div style={{
          opacity: heroOpacity
        }} className="text-center max-w-4xl mx-auto">
            {/* Premium badge */}
            
            
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="text-[2rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 sm:mb-6">
              From lead capture to{" "}
              <span className="gradient-text">closed deal</span>
            </motion.h1>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              See exactly how Follow IQ transforms your follow-up process into an 
              automated conversion machine.
            </motion.p>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="group w-full sm:w-auto min-h-[56px] text-base rounded-xl shadow-lg shadow-primary/25">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto min-h-[56px] text-base rounded-xl">
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Workflow - Premium Card Layout */}
      <section className="py-16 lg:hidden relative">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
        
        <div className="container mx-auto px-5 sm:px-6 relative">
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                The Process
              </span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">
              Four steps to <span className="gradient-text">success</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              See how Follow IQ automates your entire follow-up workflow
            </p>
          </motion.div>

          {/* Stacked Step Cards */}
          <div className="space-y-4">
            {workflowSteps.map((step, index) => <MobileStepCard key={step.step} step={step} index={index} isActive={activeStep === index} onClick={() => setActiveStep(activeStep === index ? -1 : index)} />)}
          </div>

          {/* Featured Mockup Preview */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="mt-10">
            <div className="text-center mb-4">
              <span className="text-sm font-medium text-muted-foreground">Preview</span>
            </div>
            
            {/* Mockup selector pills */}
            <div className="flex justify-center gap-2 mb-6 overflow-x-auto pb-2 -mx-5 px-5">
              {workflowSteps.map((step, index) => <button key={step.step} onClick={() => setActiveMockupIndex(index)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeMockupIndex === index ? "bg-primary text-primary-foreground shadow-md" : "bg-muted/50 text-muted-foreground hover:bg-muted"}`}>
                  <step.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{step.title}</span>
                  <span className="sm:hidden">Step {step.step}</span>
                </button>)}
            </div>
            
            {/* Mockup display */}
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-4 overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div key={activeMockupIndex} initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 0.95
              }} transition={{
                duration: 0.3
              }} className="relative z-10">
                  <div className="overflow-x-auto -mx-4 px-4 pb-2">
                    <div className="min-w-[300px] transform scale-[0.9] origin-top-left">
                      {renderMockup(workflowSteps[activeMockupIndex].mockup)}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-4">
                {workflowSteps.map((_, index) => <button key={index} onClick={() => setActiveMockupIndex(index)} className={`h-1.5 rounded-full transition-all duration-300 ${index === activeMockupIndex ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} aria-label={`View step ${index + 1}`} />)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desktop Workflow Steps - Hidden on mobile */}
      <section className="hidden lg:block py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {workflowSteps.map((step, index) => (
              <WorkflowStep key={step.step} step={step} index={index} renderMockup={renderMockup} />
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview - Mobile Optimized */}
      <section className="py-16 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-card/30 to-background pointer-events-none" />
        
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                Your Dashboard
              </span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
              Everything in{" "}
              <span className="gradient-text">one place</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              A powerful yet simple dashboard that gives you complete visibility 
              into your follow-up pipeline.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            {/* Mobile: Scrollable container with visual hint */}
            <div className="lg:hidden">
              <div className="relative">
                {/* Scroll hint gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
                
                <div className="overflow-x-auto -mx-5 px-5 pb-4 scrollbar-hide">
                  <div className="min-w-[550px]">
                    <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-3 shadow-xl">
                      <DashboardMockup />
                    </div>
                  </div>
                </div>
                
                {/* Scroll indicator */}
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                  <ChevronLeft className="w-3 h-3" />
                  <span>Swipe to explore</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
            
            {/* Desktop: Normal view */}
            <div className="hidden lg:block">
              <DashboardMockup />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - Mobile Optimized */}
      <section className="py-16 lg:py-32 relative">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content - Stacks on mobile */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                  Complete Visibility
                </span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                Track every{" "}
                <span className="gradient-text">touchpoint</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                See the complete journey of every lead from first contact to closed deal. Our timeline view shows you exactly when each follow-up happened and what's coming next.
              </p>
              <ul className="space-y-3">
                {["Visual timeline of all interactions", "Status tracking for each touchpoint", "Scheduled follow-ups with reminders", "AI-suggested next best actions"].map((item, i) => <motion.li key={item} initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: i * 0.1
              }} className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                  </motion.li>)}
              </ul>
            </motion.div>

            {/* Timeline Mockup */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="order-1 lg:order-2">
              <div className="lg:hidden">
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-4 shadow-lg">
                  <FollowUpTimelineMockup />
                </div>
              </div>
              <div className="hidden lg:block">
                <FollowUpTimelineMockup />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      </div>
    </Layout>;
};

// WorkflowStep Component for desktop view
const WorkflowStep = ({ 
  step, 
  index, 
  renderMockup 
}: { 
  step: typeof workflowSteps[0]; 
  index: number;
  renderMockup: (type: string) => React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
        <motion.div 
          initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={index % 2 === 1 ? "lg:order-2" : ""}
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <step.icon className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <span className="text-5xl font-display font-bold text-muted/50">
              {step.step}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            {step.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {step.description}
          </p>
          <ul className="space-y-3">
            {step.details.map((detail, detailIndex) => (
              <motion.li 
                key={detail} 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + detailIndex * 0.1 }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{detail}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={index % 2 === 1 ? "lg:order-1" : ""}
        >
          {renderMockup(step.mockup)}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Product;