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
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
            Four steps to
            <br />
            <span className="gradient-text">automated growth</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {/* Step Icon */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center relative z-10 shadow-lg ${
                    index === steps.length - 1 
                      ? "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground" 
                      : "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
                  }`}
                >
                  <item.icon className="w-7 h-7" />
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Step {item.step}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
