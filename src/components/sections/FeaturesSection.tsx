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
    <section ref={sectionRef} className="py-28 lg:py-40 relative overflow-hidden bg-card/30">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-5"
          >
            Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-5">
            Everything you need to
            <br />
            <span className="gradient-text">close more deals</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful features that work together to turn your follow-up process 
            into a conversion machine.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: 0.05 + index * 0.06, 
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group"
            >
              <motion.div 
                whileHover={{ y: -6, borderColor: "hsl(var(--primary) / 0.4)" }}
                transition={{ duration: 0.3 }}
                className="h-full p-7 bg-card border border-border rounded-2xl transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-13 h-13 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-display font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
