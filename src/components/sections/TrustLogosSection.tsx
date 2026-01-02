import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { name: "TechFlow", icon: "◆" },
  { name: "Logoipsum", icon: "●" },
  { name: "Logomark", icon: "◇" },
  { name: "Growthlab", icon: "▲" },
  { name: "Salesify", icon: "◈" },
  { name: "LeadGen", icon: "◎" },
];

export const TrustLogosSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 relative border-t border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-muted-foreground mb-10 uppercase tracking-widest font-medium"
          >
            Trusted by 2,000+ sales teams worldwide
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-20">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.15 + index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ scale: 1.05, opacity: 1 }}
                className="flex items-center gap-2.5 text-muted-foreground/50 hover:text-muted-foreground transition-all duration-300 cursor-default"
              >
                <span className="text-xl opacity-70">{logo.icon}</span>
                <span className="text-base font-semibold tracking-wide">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
