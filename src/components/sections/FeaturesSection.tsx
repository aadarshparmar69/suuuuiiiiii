import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  Brain, 
  MessageCircle, 
  Users, 
  BarChart3, 
  Clock, 
  Bell, 
  Workflow,
  Target
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Message Suggestions",
    description: "GPT-powered messages that sound like you wrote them. Personalized and persuasive.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Send automated messages via WhatsApp Business API. Where leads respond.",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "AI picks the optimal time to reach each lead based on engagement patterns.",
  },
  {
    icon: Workflow,
    title: "Follow-up Sequences",
    description: "Create multi-step sequences that nurture leads over days or weeks.",
  },
  {
    icon: Target,
    title: "Lead Scoring",
    description: "AI ranks leads by likelihood to convert. Focus on the hottest opportunities.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never forget a follow-up. Get notified at exactly the right moment.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Assign leads, share notes, and track team performance in real-time.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track open rates, response rates, and conversions. Know what works.",
  },
  {
    icon: Zap,
    title: "CRM Integration",
    description: "Connect with HubSpot, Salesforce, Pipedrive, and 50+ other tools.",
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-primary" />
            Features
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4">
            Everything you need to
            <br />
            <span className="gradient-text">close more deals</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features that work together to turn your follow-up process 
            into a conversion machine.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.06, duration: 0.5 }}
              className="group"
            >
              <div className="h-full p-6 bg-card border border-border rounded-xl transition-all duration-200 hover:border-primary/40 hover:-translate-y-0.5">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
