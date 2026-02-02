import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, UserPlus, Brain, MessageCircle, TrendingUp, Check, Sparkles, ChevronRight } from "lucide-react";
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
import { MobileDashboardMockup } from "@/components/mockups/MobileDashboardMockup";
import { MobilePipelineMockup } from "@/components/mockups/MobilePipelineMockup";
import { MobileWhatsAppMockup } from "@/components/mockups/MobileWhatsAppMockup";
import { MobileMetricsMockup } from "@/components/mockups/MobileMetricsMockup";
import { MobileAIMockup } from "@/components/mockups/MobileAIMockup";
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

const Product = () => {
  const [activeStep, setActiveStep] = useState(0);
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
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

      {/* Mobile Workflow - Premium Enterprise Layout */}
      <section className="py-16 lg:hidden relative">
        <div className="container mx-auto px-5 sm:px-6 relative">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-primary font-semibold text-xs uppercase tracking-wider">
                How It Works
              </span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">
              Four steps to <span className="gradient-text">success</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              A seamless workflow that turns leads into customers
            </p>
          </motion.div>

          {/* Premium Step Cards - Each with its own mockup */}
          <div className="space-y-6">
            {workflowSteps.map((step, index) => {
              const isActive = activeStep === index;
              const StepIcon = step.icon;
              
              // Determine which mobile mockup to show
              const getMobileMockup = (mockupType: string) => {
                switch (mockupType) {
                  case "pipeline": return <MobilePipelineMockup />;
                  case "ai": return <MobileAIMockup />;
                  case "whatsapp": return <MobileWhatsAppMockup />;
                  case "metrics": return <MobileMetricsMockup />;
                  default: return null;
                }
              };
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step indicator line */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-border/50 -z-10" />
                  )}
                  
                  {/* Step Card */}
                  <div 
                    onClick={() => setActiveStep(isActive ? -1 : index)}
                    className={`relative bg-card border rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "border-primary/30 shadow-lg shadow-primary/5" 
                        : "border-border/50 hover:border-primary/20"
                    }`}
                  >
                    {/* Step Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? "bg-primary" : "bg-primary/10"
                      }`}>
                        <StepIcon className={`w-5 h-5 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                      <div className="flex-1 min-w-0 pt-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="text-base font-display font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isActive ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          isActive ? "bg-primary/10" : "bg-secondary"
                        }`}
                      >
                        <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      </motion.div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed pl-15">
                      {step.description}
                    </p>
                    
                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          {/* Feature List */}
                          <ul className="space-y-2 mt-4 mb-4">
                            {step.details.map((detail, i) => (
                              <motion.li
                                key={detail}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-2"
                              >
                                <div className="w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Check className="w-2.5 h-2.5 text-primary" />
                                </div>
                                <span className="text-sm text-foreground/90">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                          
                          {/* Mockup */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4"
                          >
                            {getMobileMockup(step.mockup)}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
            {/* Mobile: Clean, no-scroll layout */}
            <div className="lg:hidden">
              <MobileDashboardMockup />
            </div>
            
            {/* Desktop: Full view */}
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