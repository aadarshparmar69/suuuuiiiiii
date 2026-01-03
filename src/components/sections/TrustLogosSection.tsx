import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const companies = [
  "Slack",
  "Pipedrive",
  "Twilio",
  "Freshworks",
  "Dentsu",
  "Yellow.ai",
  "Capillary Technologies",
  "Close.com",
  "Plivo",
  "Schbang",
];

export const TrustLogosSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="py-14 lg:py-16 relative border-t border-border/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm text-muted-foreground mb-10 uppercase tracking-widest font-medium text-center"
        >
          Trusted by 50+ Companies
        </motion.p>
      </div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {/* First set */}
            {companies.map((company, index) => (
              <span
                key={`first-${index}`}
                className="mx-8 md:mx-12 lg:mx-16 text-base md:text-lg font-semibold text-muted-foreground/60 whitespace-nowrap tracking-wide"
              >
                {company}
              </span>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <span
                key={`second-${index}`}
                className="mx-8 md:mx-12 lg:mx-16 text-base md:text-lg font-semibold text-muted-foreground/60 whitespace-nowrap tracking-wide"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
