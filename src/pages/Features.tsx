import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
import { CTASection } from "@/components/sections/CTASection";
import { LeadPipelineDemo } from "@/components/demos/LeadPipelineDemo";
import { FollowUpTimelineDemo } from "@/components/demos/FollowUpTimelineDemo";
import { AIMessageDemo } from "@/components/demos/AIMessageDemo";
import { WhatsAppScheduleDemo } from "@/components/demos/WhatsAppScheduleDemo";
import { TeamCollaborationDemo } from "@/components/demos/TeamCollaborationDemo";
import { PerformanceInsightsDemo } from "@/components/demos/PerformanceInsightsDemo";
import { ScrollReveal, StaggeredReveal, StaggeredItem } from "@/components/ScrollReveal";

const featureCategories = [
  {
    title: "AI-Powered Intelligence",
    description: "Let AI do the heavy lifting with smart automation and personalization.",
    demo: "ai-message",
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
    demo: "whatsapp",
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
    demo: "timeline",
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
    title: "Lead Management",
    description: "Organize, prioritize, and track every opportunity in one place.",
    demo: "pipeline",
    features: [
      {
        icon: Target,
        title: "Visual Pipeline",
        description: "Drag-and-drop kanban board to manage leads through every stage.",
      },
      {
        icon: Users,
        title: "Lead Profiles",
        description: "Complete lead history with every interaction, note, and touchpoint.",
      },
      {
        icon: Zap,
        title: "Quick Actions",
        description: "One-click follow-ups, calls, and task assignments from any view.",
      },
      {
        icon: Shield,
        title: "Data Security",
        description: "Enterprise-grade security with encryption and compliance features.",
      },
    ],
  },
  {
    title: "Team Collaboration",
    description: "Collaborate effectively and track what matters.",
    demo: "team",
    features: [
      {
        icon: Users,
        title: "Team Workspaces",
        description: "Assign leads, share notes, and track team performance in real-time.",
      },
      {
        icon: MessageCircle,
        title: "Internal Notes",
        description: "Leave notes for teammates visible only to your team, not leads.",
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
  {
    title: "Analytics & Insights",
    description: "Data-driven decisions with powerful reporting.",
    demo: "insights",
    features: [
      {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track open rates, response rates, and conversions. Know what's working.",
      },
      {
        icon: Target,
        title: "Conversion Tracking",
        description: "See exactly which messages and sequences drive the most conversions.",
      },
      {
        icon: Clock,
        title: "Activity Reports",
        description: "Monitor team activity and identify coaching opportunities.",
      },
      {
        icon: Sparkles,
        title: "AI Recommendations",
        description: "Get AI-powered suggestions to improve your follow-up strategy.",
      },
    ],
  },
];

const renderDemo = (demoType: string) => {
  switch (demoType) {
    case "pipeline":
      return <LeadPipelineDemo />;
    case "timeline":
      return <FollowUpTimelineDemo />;
    case "ai-message":
      return <AIMessageDemo />;
    case "whatsapp":
      return <WhatsAppScheduleDemo />;
    case "team":
      return <TeamCollaborationDemo />;
    case "insights":
      return <PerformanceInsightsDemo />;
    default:
      return null;
  }
};

const Features = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>

      {/* Hero */}
      <section ref={heroRef} className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" 
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Features
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Powerful features for{" "}
              <span className="gradient-text">powerful results</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Everything you need to automate follow-ups, engage leads, 
              and close more deals—all in one platform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories with Interactive Demos */}
      {featureCategories.map((category, categoryIndex) => (
        <FeatureCategory 
          key={category.title} 
          category={category} 
          index={categoryIndex}
          renderDemo={renderDemo}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <CTASection />
      </motion.div>
    </Layout>
  );
};

// Feature Category Component with enhanced animations
const FeatureCategory = ({ 
  category, 
  index, 
  renderDemo 
}: { 
  category: typeof featureCategories[0]; 
  index: number;
  renderDemo: (type: string) => React.ReactNode;
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className={`py-16 lg:py-24 ${index % 2 === 1 ? "bg-card/30" : ""}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
          index % 2 === 1 ? "lg:flex-row-reverse" : ""
        }`}>
          {/* Content side */}
          <motion.div 
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={index % 2 === 1 ? "lg:order-2" : ""}
          >
            <div className="mb-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4"
              >
                {category.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground"
              >
                {category.description}
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {category.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + featureIndex * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
                >
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <feature.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="font-display font-bold text-foreground mb-1 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Demo side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={index % 2 === 1 ? "lg:order-1" : ""}
          >
            {renderDemo(category.demo)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
