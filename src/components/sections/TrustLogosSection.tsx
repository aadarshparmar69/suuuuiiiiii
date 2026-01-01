import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { name: "TechFlow", icon: "◆" },
  { name: "Logoipsum", icon: "●" },
  { name: "Logomark", icon: "◇" },
  { name: "Growthlab", icon: "▲" },
];

export const TrustLogosSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Over 50+ businesses trust us.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-200"
              >
                <span className="text-lg">{logo.icon}</span>
                <span className="text-base font-medium tracking-wide">
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
