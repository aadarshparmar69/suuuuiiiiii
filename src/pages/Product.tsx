import { motion } from "framer-motion";
import { 
  ArrowRight, 
  UserPlus, 
  Brain, 
  MessageCircle, 
  TrendingUp,
  Check,
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

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              How It Works
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              From lead capture to{" "}
              <span className="gradient-text">closed deal</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              See exactly how Follow IQ transforms your follow-up process into an 
              automated conversion machine.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="heroOutline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-24 lg:py-32">
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
      <section className="py-24 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Your Dashboard
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Everything in{" "}
              <span className="gradient-text">one place</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A powerful yet simple dashboard that gives you complete visibility 
              into your follow-up pipeline.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <DashboardMockup />
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Complete Visibility
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                Track every{" "}
                <span className="gradient-text">touchpoint</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
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
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <FollowUpTimelineMockup />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Product;
