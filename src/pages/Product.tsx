import { motion } from "framer-motion";
import { 
  ArrowRight, 
  UserPlus, 
  Brain, 
  MessageCircle, 
  TrendingUp,
  Zap,
  Check,
  BarChart3,
  Clock,
  Bell,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

const workflowSteps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Capture Every Lead",
    description: "Connect your lead sources—forms, CRM, spreadsheets, or manual entry. FollowIO automatically imports and organizes your leads with smart tagging.",
    details: [
      "Import from any CRM or spreadsheet",
      "Auto-capture from web forms",
      "Smart lead tagging and categorization",
      "Duplicate detection and merging",
    ],
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
  },
];

const dashboardFeatures = [
  { icon: BarChart3, title: "Analytics", description: "Track performance" },
  { icon: Clock, title: "Scheduler", description: "Perfect timing" },
  { icon: Bell, title: "Notifications", description: "Never miss a lead" },
  { icon: Users, title: "Team View", description: "Collaborate easily" },
];

const Product = () => {
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
              See exactly how FollowIO transforms your follow-up process into an 
              automated conversion machine.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Start Free Trial
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
          <div className="space-y-24">
            {workflowSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center glow-primary">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
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
                        <li key={detail} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`glass-card p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                      <step.icon className="w-16 h-16 text-primary/50" />
                    </div>
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
            <div className="glass-card p-8 lg:p-12 glow-primary">
              {/* Mock Dashboard */}
              <div className="grid lg:grid-cols-4 gap-6 mb-8">
                {dashboardFeatures.map((feature) => (
                  <div key={feature.title} className="bg-secondary rounded-xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Product;
