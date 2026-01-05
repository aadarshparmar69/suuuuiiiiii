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
import { easings, springConfigs } from "@/hooks/useScrollAnimations";

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
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="py-32 lg:py-44 relative overflow-hidden bg-card/30">
      {/* Top border with animated reveal */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: easings.smooth }}
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--border)), transparent)",
          transformOrigin: "center",
        }}
      />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: easings.smooth }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: easings.smooth }}
            className="inline-flex items-center justify-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-5"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: easings.smooth }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-5"
          >
            Everything you need to
            <br />
            <span className="gradient-text">close more deals</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: easings.smooth }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Powerful features that work together to turn your follow-up process 
            into a conversion machine.
          </motion.p>
        </motion.div>

        {/* Features Grid with staggered reveal */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            // Calculate row and column for diagonal stagger effect
            const row = Math.floor(index / 3);
            const col = index % 3;
            const diagonalDelay = (row + col) * 0.08;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ 
                  delay: 0.1 + diagonalDelay, 
                  duration: 0.7,
                  ease: easings.smooth
                }}
                className="group"
              >
                <motion.div 
                  whileHover={{ 
                    y: -8, 
                    borderColor: "hsl(var(--primary) / 0.4)",
                    transition: { duration: 0.3, ease: easings.smooth }
                  }}
                  className="h-full p-7 bg-card border border-border rounded-2xl transition-colors duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", ...springConfigs.snappy }}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
