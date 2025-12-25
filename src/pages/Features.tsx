import { 
  Brain, 
  MessageCircle, 
  Clock, 
  Workflow,
  Target,
  Bell,
  Users,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Mail,
  CalendarCheck,
  Sparkles,
  Database
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

const featureCategories = [
  {
    title: "AI-Powered Intelligence",
    description: "Let AI do the heavy lifting with smart automation and personalization.",
    features: [
      {
        icon: Brain,
        title: "AI Message Generation",
        description: "GPT-powered messages that sound like you. Personalized based on lead data, behavior, and context.",
      },
      {
        icon: Target,
        title: "Lead Scoring",
        description: "AI ranks leads by conversion probability so you focus on the hottest opportunities first.",
      },
      {
        icon: Clock,
        title: "Smart Timing",
        description: "AI predicts the optimal time to reach each lead based on their engagement patterns.",
      },
      {
        icon: Sparkles,
        title: "Sentiment Analysis",
        description: "Detect lead interest and urgency from their responses to prioritize follow-ups.",
      },
    ],
  },
  {
    title: "WhatsApp-First Messaging",
    description: "Connect with leads where they actually respond—on WhatsApp.",
    features: [
      {
        icon: MessageCircle,
        title: "WhatsApp Business API",
        description: "Official API integration for reliable, compliant messaging at scale.",
      },
      {
        icon: Smartphone,
        title: "98% Open Rate",
        description: "WhatsApp messages get opened. Stop losing leads in crowded inboxes.",
      },
      {
        icon: Globe,
        title: "Global Reach",
        description: "Reach 2 billion users worldwide on the #1 messaging platform.",
      },
      {
        icon: Mail,
        title: "Multi-Channel",
        description: "Also supports SMS and email for complete coverage across channels.",
      },
    ],
  },
  {
    title: "Automation & Sequences",
    description: "Set it and forget it. Let automation handle the follow-up work.",
    features: [
      {
        icon: Workflow,
        title: "Follow-up Sequences",
        description: "Build multi-step sequences that nurture leads over days or weeks automatically.",
      },
      {
        icon: Bell,
        title: "Smart Reminders",
        description: "Get notified when it's time to personally follow up or when a hot lead responds.",
      },
      {
        icon: CalendarCheck,
        title: "Appointment Booking",
        description: "Let leads book calls directly from your messages with integrated scheduling.",
      },
      {
        icon: Database,
        title: "CRM Sync",
        description: "Two-way sync with HubSpot, Salesforce, Pipedrive, and 50+ other tools.",
      },
    ],
  },
  {
    title: "Team & Analytics",
    description: "Collaborate effectively and track what matters.",
    features: [
      {
        icon: Users,
        title: "Team Collaboration",
        description: "Assign leads, share notes, and track team performance in real-time.",
      },
      {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track open rates, response rates, and conversions. Know what's working.",
      },
      {
        icon: Shield,
        title: "Roles & Permissions",
        description: "Control who can see what with granular permission settings.",
      },
      {
        icon: Zap,
        title: "API Access",
        description: "Full API access for custom integrations and advanced workflows.",
      },
    ],
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Features
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Powerful features for{" "}
              <span className="gradient-text">powerful results</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate follow-ups, engage leads, 
              and close more deals—all in one platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section 
          key={category.title} 
          className={`py-24 lg:py-32 ${categoryIndex % 2 === 1 ? "bg-card/30" : ""}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {category.description}
              </p>
            </AnimatedSection>

            <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.features.map((feature) => (
                <StaggeredItem key={feature.title}>
                  <div className="glass-card p-6 h-full group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>
        </section>
      ))}

      <CTASection />
    </Layout>
  );
};

export default Features;
