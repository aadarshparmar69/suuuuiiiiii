import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, X, Database, Zap, MessageCircle, Clock, Users, BarChart3 } from "lucide-react";
import { easings } from "@/hooks/useScrollAnimations";

const comparisons = [
  {
    feature: "Lead Tracking",
    crm: "Stores lead data in fields",
    followIq: "Tracks behavior + triggers action",
    crmIcon: Database,
    followIqIcon: Zap,
  },
  {
    feature: "Follow-ups",
    crm: "Manual reminders you ignore",
    followIq: "AI sends the right message at the right time",
    crmIcon: Clock,
    followIqIcon: MessageCircle,
  },
  {
    feature: "Communication",
    crm: "Email-focused (low open rates)",
    followIq: "WhatsApp-first (98% open rates)",
    crmIcon: X,
    followIqIcon: Check,
  },
  {
    feature: "Built For",
    crm: "Enterprise sales teams",
    followIq: "Agencies, consultants, service businesses",
    crmIcon: Users,
    followIqIcon: Users,
  },
  {
    feature: "Outcome",
    crm: "Better record-keeping",
    followIq: "More closed deals",
    crmIcon: BarChart3,
    followIqIcon: Zap,
  },
];

export const USPComparisonSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-28 lg:py-40 relative overflow-hidden">
      {/* Background accent */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] pointer-events-none"
      >
        <div className="absolute inset-0 bg-primary/3 rounded-full blur-[200px]" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easings.smooth }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-5"
          >
            The Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6"
          >
            Why Follow IQ is
            <br />
            <span className="gradient-text">not just another CRM</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            CRMs are built for data entry. Follow IQ is built for action.
            Here's what that means for your business.
          </motion.p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: easings.smooth }}
          className="max-w-4xl mx-auto"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-4 border-b border-border">
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Feature
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted text-muted-foreground text-sm font-semibold">
                Traditional CRM
              </span>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-semibold">
                Follow IQ
              </span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: easings.smooth }}
                className="grid grid-cols-3 gap-4 items-center p-4 rounded-2xl hover:bg-card/50 transition-colors"
              >
                {/* Feature name */}
                <div className="font-semibold text-foreground text-sm md:text-base">
                  {item.feature}
                </div>
                
                {/* CRM column */}
                <motion.div 
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <item.crmIcon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground leading-tight">
                    {item.crm}
                  </span>
                </motion.div>
                
                {/* Follow IQ column */}
                <motion.div 
                  className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20"
                  whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.4)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.followIqIcon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm text-foreground font-medium leading-tight">
                    {item.followIq}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.7, ease: easings.smooth }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-xl md:text-2xl font-display font-semibold text-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Stop managing leads.{" "}
            <span className="gradient-text">Start closing them.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
