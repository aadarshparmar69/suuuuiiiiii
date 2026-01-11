import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { easings } from "@/hooks/useScrollAnimations";
const problems = [{
  stat: "80%",
  title: "of leads need 5+ follow-ups",
  description: "Yet most salespeople give up after just one or two attempts, leaving potential revenue on the table."
}, {
  stat: "44%",
  title: "of salespeople stop after one follow-up",
  description: "Without a system, manual follow-ups fall through the cracks every single day."
}, {
  stat: "71%",
  title: "of qualified leads are never contacted again",
  description: "Poor follow-up systems cost businesses millions in lost opportunities each year."
}];
interface AnimatedCounterProps {
  value: string;
  isInView: boolean;
  delay?: number;
}
const AnimatedCounter = ({
  value,
  isInView,
  delay = 0
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let startTime: number;
      const duration = 1800;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Smoother easing curve
        const easeOutQuint = 1 - Math.pow(1 - progress, 5);
        const current = Math.round(easeOutQuint * numericValue);
        setDisplayValue(current.toString());
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, numericValue, delay]);
  return <span>{displayValue}{suffix}</span>;
};
export const ProblemSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-15%"
  });
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  return <section ref={sectionRef} className="py-28 lg:py-36 relative overflow-hidden">
      {/* Animated background */}
      <motion.div style={{
      opacity: backgroundOpacity
    }} className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Accent line */}
      <motion.div className="absolute top-0 left-0 right-0 h-px" initial={{
      scaleX: 0
    }} animate={isInView ? {
      scaleX: 1
    } : {}} transition={{
      duration: 1.2,
      ease: easings.smooth
    }} style={{
      background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.5), transparent)"
    }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        ease: easings.smooth
      }} className="max-w-2xl mb-20">
          <motion.span initial={{
          opacity: 0,
          x: -20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2,
          ease: easings.smooth
        }} className="inline-flex items-center gap-3 text-sm font-semibold text-accent uppercase tracking-wider mb-5">
            <motion.span className="w-10 h-px bg-accent" initial={{
            scaleX: 0
          }} animate={isInView ? {
            scaleX: 1
          } : {}} transition={{
            duration: 0.6,
            delay: 0.3
          }} style={{
            originX: 0
          }} />
            The Problem
          </motion.span>
          <motion.h2 initial={{
          opacity: 0,
          y: 30,
          filter: "blur(4px)"
        }} animate={isInView ? {
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        } : {}} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: easings.smooth
        }} className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
            Your leads are slipping away
          </motion.h2>
        </motion.div>

        {/* Problem Cards with staggered reveal */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => <motion.div key={problem.stat} initial={{
          opacity: 0,
          y: 50,
          filter: "blur(8px)"
        }} animate={isInView ? {
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        } : {}} transition={{
          delay: 0.4 + index * 0.15,
          duration: 0.7,
          ease: easings.smooth
        }} className="group">
              <motion.div whileHover={{
            y: -8,
            borderColor: "hsl(var(--accent) / 0.5)",
            transition: {
              duration: 0.3
            }
          }} className="h-full p-8 bg-card border border-border rounded-2xl transition-colors duration-300">
                {/* Stat with animated counter */}
                <motion.div className="text-5xl lg:text-6xl font-display font-bold text-accent mb-5" initial={{
              scale: 0.9
            }} animate={isInView ? {
              scale: 1
            } : {}} transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.5 + index * 0.15
            }}>
                  <AnimatedCounter value={problem.stat} isInView={isInView} delay={0.5 + index * 0.15} />
                </motion.div>
                
                {/* Title */}
                <motion.h3 initial={{
              opacity: 0,
              y: 10
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.5,
              delay: 0.6 + index * 0.15,
              ease: easings.smooth
            }} className="text-lg font-semibold text-foreground mb-3">
                  {problem.title}
                </motion.h3>
                
                {/* Description */}
                <motion.p initial={{
              opacity: 0
            }} animate={isInView ? {
              opacity: 1
            } : {}} transition={{
              duration: 0.5,
              delay: 0.7 + index * 0.15
            }} className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </motion.p>
              </motion.div>
            </motion.div>)}
        </div>

        {/* Bottom Line with reveal */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        delay: 1,
        duration: 0.7,
        ease: easings.smooth
      }} className="mt-16 pt-10 border-t border-border/50">
          <motion.p className="text-lg text-muted-foreground max-w-2xl" initial={{
          opacity: 0,
          x: -20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          delay: 1.1,
          duration: 0.6
        }}>
            The follow-up gap isn't because you don't care—it's because{" "}
            <motion.span className="text-foreground font-medium" initial={{
            opacity: 0
          }} animate={isInView ? {
            opacity: 1
          } : {}} transition={{
            delay: 1.3,
            duration: 0.5
          }}>
              manual follow-up doesn't scale
            </motion.span>
            .
          </motion.p>
        </motion.div>
      </div>
    </section>;
};