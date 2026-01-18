import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Database, Zap, MessageCircle, Clock, Users, Target } from "lucide-react";

const comparisons = [
  {
    feature: "Lead Management",
    crm: "Stores data in fields",
    followIq: "Triggers automated action",
    crmIcon: Database,
    followIqIcon: Zap,
  },
  {
    feature: "Follow-ups",
    crm: "Manual reminders you ignore",
    followIq: "AI sends at the right time",
    crmIcon: X,
    followIqIcon: Check,
  },
  {
    feature: "Communication",
    crm: "Email-first (low open rates)",
    followIq: "WhatsApp-first (98% opens)",
    crmIcon: X,
    followIqIcon: MessageCircle,
  },
  {
    feature: "Timing",
    crm: "You decide when",
    followIq: "AI detects optimal time",
    crmIcon: Clock,
    followIqIcon: Target,
  },
  {
    feature: "Outcome",
    crm: "Better record-keeping",
    followIq: "More closed deals",
    crmIcon: Database,
    followIqIcon: Zap,
  },
];

export const USPComparisonSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-xs lg:text-sm font-bold text-primary uppercase tracking-widest mb-4"
          >
            The Difference
          </motion.span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight mb-4 lg:mb-5">
            Why Follow IQ is{" "}
            <span className="gradient-text">not just another CRM</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            CRMs are built for data entry. We're built for closing deals.
          </p>
        </motion.div>

        {/* Desktop: Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden lg:block max-w-4xl mx-auto"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-4 mb-4 pb-4 border-b border-border/50">
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide pl-4">
              Capability
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-muted/50 text-muted-foreground text-sm font-semibold">
                Traditional CRM
              </span>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                Follow IQ
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-[1.2fr_1fr_1fr] gap-4 items-center p-4 rounded-xl hover:bg-card/50 transition-colors duration-200"
              >
                <div className="font-semibold text-foreground">
                  {item.feature}
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/20 border border-border/30">
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center shrink-0">
                    <item.crmIcon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-tight">
                    {item.crm}
                  </span>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.followIqIcon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium leading-tight">
                    {item.followIq}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile: Stacked Cards (one feature per card) */}
        <div className="lg:hidden space-y-4">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.feature}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-card/80 border border-border/50 rounded-2xl p-5 space-y-4"
            >
              {/* Feature title */}
              <h3 className="font-display font-bold text-lg text-foreground">
                {item.feature}
              </h3>
              
              {/* CRM approach */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border/30">
                <div className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Traditional CRM</span>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {item.crm}
                  </p>
                </div>
              </div>
              
              {/* Follow IQ approach */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/8 border border-primary/25">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">Follow IQ</span>
                  <p className="text-sm text-foreground font-medium mt-1 leading-relaxed">
                    {item.followIq}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-lg sm:text-xl lg:text-2xl font-display font-semibold text-foreground max-w-xl mx-auto">
            Stop managing leads.{" "}
            <span className="gradient-text">Start closing them.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
