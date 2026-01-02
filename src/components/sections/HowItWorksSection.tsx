import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Brain, MessageCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Capture Leads",
    description: "Import leads from any source—forms, CRM, spreadsheets. We integrate with everything.",
  },
  {
    step: "02",
    icon: Brain,
    title: "AI Analyzes",
    description: "Our AI scores leads and creates personalized follow-up sequences based on behavior.",
  },
  {
    step: "03",
    icon: MessageCircle,
    title: "WhatsApp Magic",
    description: "Automated messages sent at the perfect time via WhatsApp—where leads actually respond.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Convert & Scale",
    description: "Watch your conversion rates soar while your team focuses on closing deals.",
  },
];

export const HowItWorksSection = () => {
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
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-5"
          >
            How It Works
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4">
            Four steps to
            <br />
            <span className="gradient-text">automated growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes, not days
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block absolute top-[60px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 origin-left" 
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.2 + index * 0.15, 
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="relative"
              >
                {/* Step Icon */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-2xl mx-auto mb-7 flex items-center justify-center relative z-10 shadow-lg transition-shadow hover:shadow-xl ${
                    index === steps.length - 1 
                      ? "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-accent/20" 
                      : "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-primary/20"
                  }`}
                >
                  <item.icon className="w-7 h-7" />
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.4 }}
                    className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest"
                  >
                    Step {item.step}
                  </motion.span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-3 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
