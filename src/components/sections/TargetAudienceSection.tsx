import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase, GraduationCap, Home, Wrench, Users } from "lucide-react";
import { easings } from "@/hooks/useScrollAnimations";

const audiences = [
  {
    icon: Building2,
    title: "Marketing Agencies",
    description: "Handle more clients without dropping the ball on follow-ups. Scale your outreach effortlessly.",
    stat: "2x more clients managed",
  },
  {
    icon: Briefcase,
    title: "Consultants",
    description: "Stay top-of-mind with prospects while focusing on billable work. AI handles the persistence.",
    stat: "45% more conversions",
  },
  {
    icon: GraduationCap,
    title: "Coaches & Trainers",
    description: "Convert interested leads into paying clients with perfectly timed, personalized outreach.",
    stat: "3x faster response time",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Never miss a hot lead. Instant WhatsApp follow-ups when prospects show interest.",
    stat: "60% more closings",
  },
  {
    icon: Wrench,
    title: "Service Businesses",
    description: "From HVAC to plumbing, keep your pipeline flowing with automated follow-ups.",
    stat: "50% less missed leads",
  },
  {
    icon: Users,
    title: "Small Sales Teams",
    description: "Give your team superpowers. AI follow-ups mean they only talk to ready-to-buy leads.",
    stat: "4x productivity boost",
  },
];

export const TargetAudienceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="py-28 lg:py-40 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
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
            Built For You
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6"
          >
            Designed for businesses that
            <br />
            <span className="gradient-text">live on relationships</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            If your success depends on consistent follow-ups and personal touch,
            Follow IQ was built for you.
          </motion.p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.4 + index * 0.1, 
                duration: 0.6,
                ease: easings.smooth 
              }}
            >
              <motion.div
                whileHover={{ 
                  y: -8, 
                  borderColor: "hsl(var(--primary) / 0.4)",
                  transition: { duration: 0.3 }
                }}
                className="h-full p-6 bg-card border border-border rounded-2xl transition-all duration-300 group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                >
                  <audience.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-display font-bold text-foreground mb-3">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {audience.description}
                </p>

                {/* Stat */}
                <div className="pt-4 border-t border-border/50">
                  <span className="text-sm font-semibold text-primary">
                    {audience.stat}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
