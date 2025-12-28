import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const problems = [
  {
    stat: "80%",
    title: "of leads need 5+ follow-ups",
    description: "Yet most salespeople give up after just one or two attempts, leaving potential revenue on the table.",
  },
  {
    stat: "44%",
    title: "of salespeople stop after one follow-up",
    description: "Without a system, manual follow-ups fall through the cracks every single day.",
  },
  {
    stat: "71%",
    title: "of qualified leads are never contacted again",
    description: "Poor follow-up systems cost businesses millions in lost opportunities each year.",
  },
];

interface AnimatedCounterProps {
  value: string;
  isInView: boolean;
}

const AnimatedCounter = ({ value, isInView }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 1500;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(easeOutQuart * numericValue);
      
      setDisplayValue(current.toString());
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  return <span>{displayValue}{suffix}</span>;
};

export const ProblemSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-accent" />
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
            Your leads are slipping away
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.stat}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="h-full p-8 bg-card border border-border rounded-2xl transition-all duration-300 hover:border-accent/40">
                {/* Stat */}
                <div className="text-5xl lg:text-6xl font-display font-bold text-accent mb-4">
                  <AnimatedCounter value={problem.stat} isInView={isInView} />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <p className="text-lg text-muted-foreground max-w-2xl">
            The follow-up gap isn't because you don't care—it's because{" "}
            <span className="text-foreground font-medium">manual follow-up doesn't scale</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
