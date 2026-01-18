import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase, GraduationCap, Home, Wrench, Users } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Marketing Agencies",
    description: "Handle more clients without dropping the ball on follow-ups.",
    stat: "2x clients managed",
  },
  {
    icon: Briefcase,
    title: "Consultants",
    description: "Stay top-of-mind with prospects while focusing on billable work.",
    stat: "45% more conversions",
  },
  {
    icon: GraduationCap,
    title: "Coaches & Trainers",
    description: "Convert interested leads into paying clients with perfect timing.",
    stat: "3x faster response",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Never miss a hot lead with instant WhatsApp follow-ups.",
    stat: "60% more closings",
  },
  {
    icon: Wrench,
    title: "Service Businesses",
    description: "From HVAC to plumbing, keep your pipeline flowing.",
    stat: "50% less missed leads",
  },
  {
    icon: Users,
    title: "Small Sales Teams",
    description: "Give your team superpowers with AI-assisted follow-ups.",
    stat: "4x productivity",
  },
];

export const TargetAudienceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-card/30">
      {/* Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-xs lg:text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Built For You
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight mb-4">
            For businesses that{" "}
            <span className="gradient-text">live on relationships</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            If your success depends on consistent follow-ups, Follow IQ was built for you.
          </p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.15 + index * 0.08, 
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
                className="group p-5 lg:p-6 bg-card/80 border border-border/50 rounded-xl lg:rounded-2xl hover:border-primary/30 hover:bg-card transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-base lg:text-lg font-display font-bold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 lg:mb-4">
                  {audience.description}
                </p>

                {/* Stat */}
                <span className="text-sm font-semibold text-primary">
                  {audience.stat}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
