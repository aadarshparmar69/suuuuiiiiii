import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  UserPlus, 
  Brain, 
  MessageCircle, 
  TrendingUp,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { LeadPipelineMockup } from "@/components/mockups/LeadPipelineMockup";
import { WhatsAppPreview } from "@/components/mockups/WhatsAppPreview";
import { AISuggestionPanel } from "@/components/mockups/AISuggestionPanel";
import { FollowUpTimelineMockup } from "@/components/mockups/FollowUpTimelineMockup";
import { MetricsChartMockup } from "@/components/mockups/MetricsChartMockup";

const workflowSteps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Capture Every Lead",
    description: "Connect your lead sources—forms, CRM, spreadsheets, or manual entry. Follow IQ automatically imports and organizes your leads with smart tagging.",
    details: [
      "Import from any CRM or spreadsheet",
      "Auto-capture from web forms",
      "Smart lead tagging and categorization",
      "Duplicate detection and merging",
    ],
    mockup: "pipeline",
  },
  {
    step: "02",
    icon: Brain,
    title: "AI Analyzes & Scores",
    description: "Our AI engine analyzes each lead's behavior, engagement patterns, and profile to assign a priority score and create personalized follow-up sequences.",
    details: [
      "Behavioral analysis and scoring",
      "Optimal timing prediction",
      "Message personalization engine",
      "Engagement pattern learning",
    ],
    mockup: "ai",
  },
  {
    step: "03",
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description: "Automated messages sent via WhatsApp Business API at the perfect moment. Each message is personalized by AI to sound like you wrote it.",
    details: [
      "98% open rate on WhatsApp",
      "AI-generated personalized messages",
      "Multi-step sequence automation",
      "Response detection and routing",
    ],
    mockup: "whatsapp",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Convert & Scale",
    description: "Watch your conversion rates soar as AI handles the follow-up heavy lifting. Focus your time on what matters—closing deals.",
    details: [
      "Real-time conversion tracking",
      "Performance analytics dashboard",
      "A/B testing for sequences",
      "ROI reporting",
    ],
    mockup: "metrics",
  },
];

const whatsappMessages = [
  {
    id: "1",
    text: "Hi Sarah! Thanks for your interest in Follow IQ. I'd love to show you how our AI can help automate your follow-ups.",
    time: "10:30 AM",
    sent: true,
    status: "read" as const,
  },
  {
    id: "2",
    text: "That sounds great! I've been looking for something to help manage our leads better. When can we chat?",
    time: "10:45 AM",
    sent: false,
    status: "read" as const,
  },
  {
    id: "3",
    text: "Perfect! How about tomorrow at 2 PM? I'll send you a calendar invite.",
    time: "10:47 AM",
    sent: true,
    status: "delivered" as const,
  },
];

const Product = () => {
  const [activeMockupIndex, setActiveMockupIndex] = useState(0);

  const renderMockup = (type: string) => {
    switch (type) {
      case "pipeline":
        return <LeadPipelineMockup />;
      case "ai":
        return <AISuggestionPanel />;
      case "whatsapp":
        return (
          <WhatsAppPreview
            contactName="Sarah Johnson"
            contactInitials="SJ"
            messages={whatsappMessages}
          />
        );
      case "metrics":
        return <MetricsChartMockup />;
      default:
        return null;
    }
  };

  const handlePrevMockup = () => {
    setActiveMockupIndex((prev) => (prev > 0 ? prev - 1 : workflowSteps.length - 1));
  };

  const handleNextMockup = () => {
    setActiveMockupIndex((prev) => (prev < workflowSteps.length - 1 ? prev + 1 : 0));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[120px]" />

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              How It Works
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight">
              From lead capture to{" "}
              <span className="gradient-text">closed deal</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
              See exactly how Follow IQ transforms your follow-up process into an 
              automated conversion machine.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="group w-full sm:w-auto min-h-[52px] text-base">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing" className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto min-h-[52px] text-base">
                  View Pricing
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mobile Swipeable Workflow - Only visible on mobile/tablet */}
      <section className="py-12 sm:py-16 lg:hidden">
        <div className="container mx-auto px-5 sm:px-6">
          <AnimatedSection className="text-center mb-8">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-2">
              The Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              How it works
            </h2>
          </AnimatedSection>

          {/* Step Indicator Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {workflowSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveMockupIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeMockupIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipeable Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMockupIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Step Header */}
                <div className="text-center px-4">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center">
                      {(() => {
                        const Icon = workflowSteps[activeMockupIndex].icon;
                        return <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />;
                      })()}
                    </div>
                    <span className="text-3xl sm:text-4xl font-display font-bold text-muted/50">
                      {workflowSteps[activeMockupIndex].step}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3">
                    {workflowSteps[activeMockupIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {workflowSteps[activeMockupIndex].description}
                  </p>
                </div>

                {/* Details List */}
                <ul className="space-y-2.5 px-4">
                  {workflowSteps[activeMockupIndex].details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Mockup */}
                <div className="overflow-x-auto -mx-5 px-5 pb-2">
                  <div className="min-w-[320px] transform scale-[0.85] sm:scale-100 origin-top-left sm:origin-top">
                    {renderMockup(workflowSteps[activeMockupIndex].mockup)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevMockup}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg active:scale-95 transition-transform z-10"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={handleNextMockup}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg active:scale-95 transition-transform z-10"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* Desktop Workflow Steps - Hidden on mobile */}
      <section className="hidden lg:block py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {workflowSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
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
                      {step.details.map((detail) => (
                        <motion.li 
                          key={detail} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    {renderMockup(step.mockup)}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 sm:py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Your Dashboard
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
              Everything in{" "}
              <span className="gradient-text">one place</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              A powerful yet simple dashboard that gives you complete visibility 
              into your follow-up pipeline.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0 pb-4 sm:pb-0">
              <div className="min-w-[600px] sm:min-w-0">
                <DashboardMockup />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
                Complete Visibility
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                Track every{" "}
                <span className="gradient-text">touchpoint</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6">
                See the complete journey of every lead—from first contact to closed deal. 
                Our timeline view shows you exactly when each follow-up happened and what's coming next.
              </p>
              <ul className="space-y-3">
                {[
                  "Visual timeline of all interactions",
                  "Status tracking for each touchpoint",
                  "Scheduled follow-ups with reminders",
                  "AI-suggested next best actions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0 pb-4 sm:pb-0">
                <div className="min-w-[320px] sm:min-w-0">
                  <FollowUpTimelineMockup />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Product;
