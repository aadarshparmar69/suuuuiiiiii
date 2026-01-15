import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { easings, springConfigs } from "@/hooks/useScrollAnimations";

// Floating particle component with smoother motion
const FloatingParticle = ({
  size,
  initialX,
  initialY,
  duration,
  delay
}: {
  size: number;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
}) => <motion.div className="absolute rounded-full bg-primary/[0.08]" style={{
  width: size,
  height: size,
  left: `${initialX}%`,
  top: `${initialY}%`
}} initial={{
  opacity: 0,
  scale: 0
}} animate={{
  opacity: [0, 0.6, 0.4, 0.6, 0],
  scale: [0.5, 1, 0.9, 1, 0.5],
  y: [-10, -50, -35, -70, -90],
  x: [0, 6, -3, 10, 0]
}} transition={{
  duration,
  delay,
  repeat: Infinity,
  ease: "easeInOut"
}} />;

// Animated stats counter with spring physics
const AnimatedStat = ({
  value,
  label,
  delay
}: {
  value: string;
  label: string;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 30,
    filter: "blur(4px)"
  }} animate={isInView ? {
    opacity: 1,
    y: 0,
    filter: "blur(0px)"
  } : {}} transition={{
    duration: 0.7,
    delay,
    ease: easings.smooth
  }} className="text-center">
      <motion.div className="text-2xl md:text-3xl font-display font-bold text-foreground" initial={{
      scale: 0.9
    }} animate={isInView ? {
      scale: 1
    } : {}} transition={{
      type: "spring",
      ...springConfigs.bouncy,
      delay: delay + 0.2
    }}>
        {value}
      </motion.div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </motion.div>;
};

// Word-by-word reveal component
const WordReveal = ({
  children,
  delay = 0,
  className = ""
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  const words = children.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  return <span ref={ref} className={className}>
      {words.map((word, i) => <span key={i} className="inline-block overflow-hidden">
          <motion.span className="inline-block" initial={{
        y: "100%",
        opacity: 0
      }} animate={isInView ? {
        y: "0%",
        opacity: 1
      } : {}} transition={{
        duration: 0.6,
        delay: delay + i * 0.04,
        ease: easings.smooth
      }}>
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>)}
    </span>;
};
export const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {
    once: true
  });
  const {
    scrollY
  } = useScroll();
  const smoothScrollY = useSpring(scrollY, springConfigs.gentle);
  const backgroundY = useTransform(smoothScrollY, [0, 600], [0, 80]);
  const opacity = useTransform(smoothScrollY, [0, 600], [1, 0.85]);
  const scale = useTransform(smoothScrollY, [0, 600], [1, 0.99]);

  // Generate particles with stable positions
  const particles = useMemo(() => Array.from({
    length: 18
  }, (_, i) => ({
    id: i,
    size: 4 + Math.random() * 6,
    initialX: 5 + i * 5 + Math.random() * 3,
    initialY: 20 + Math.random() * 60,
    duration: 16 + Math.random() * 12,
    delay: i * 0.8
  })), []);
  return <section ref={heroRef} className="relative min-h-[100vh] flex items-center justify-center pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
      {/* Refined Background with parallax */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{
      y: backgroundY
    }}>
        {/* Soft ambient gradient */}
        <motion.div initial={{
        opacity: 0,
        scale: 1.1
      }} animate={isInView ? {
        opacity: 1,
        scale: 1
      } : {}} transition={{
        duration: 2,
        ease: "easeOut"
      }} className="absolute inset-0">
          {/* Primary soft gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[85%]" style={{
          background: `radial-gradient(ellipse 90% 70% at 50% 15%, hsl(var(--primary) / 0.12) 0%, transparent 60%)`
        }} />

          {/* Secondary breathing accent */}
          <motion.div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] md:w-[1100px] md:h-[800px]" animate={{
          scale: [1, 1.02, 1],
          opacity: [0.6, 0.85, 0.6]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }} style={{
          background: `radial-gradient(ellipse at center, hsl(var(--primary) / 0.08) 0%, transparent 50%)`
        }} />
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map(particle => <FloatingParticle key={particle.id} {...particle} />)}
        </div>

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />

        {/* Subtle grid */}
        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 0.015
      } : {}} transition={{
        duration: 2,
        delay: 0.5
      }} className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "100px 100px"
      }} />
      </motion.div>

      <motion.div style={{
      opacity,
      scale
    }} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline with word reveal */}
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.08] tracking-tight mb-8">
            <WordReveal delay={0.2}>Never Lose a Lead Again.</WordReveal>
            <br />
            <motion.span className="gradient-text inline-block" initial={{
            opacity: 0,
            y: 40,
            filter: "blur(8px)"
          }} animate={isInView ? {
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          } : {}} transition={{
            duration: 0.9,
            delay: 0.5,
            ease: easings.smooth
          }}>
              WhatsApp-First AI Follow-ups.
            </motion.span>
          </motion.h1>

          {/* Subheadline with smooth reveal */}
          <motion.p initial={{
          opacity: 0,
          y: 30,
          filter: "blur(4px)"
        }} animate={isInView ? {
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        } : {}} transition={{
          duration: 0.7,
          delay: 0.7,
          ease: easings.smooth
        }} className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            AI ensures every follow-up happens at the right time with the right message via WhatsApp, where your leads actually respond.
          </motion.p>

          {/* CTA Buttons with stagger */}
          <motion.div initial={{
          opacity: 0,
          y: 25
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.9,
          ease: easings.smooth
        }} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.div whileHover={{
            scale: 1.02,
            y: -2
          }} whileTap={{
            scale: 0.98
          }} transition={{
            type: "spring",
            ...springConfigs.snappy
          }}>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group shadow-lg shadow-primary/20">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.02,
            y: -2
          }} whileTap={{
            scale: 0.98
          }} transition={{
            type: "spring",
            ...springConfigs.snappy
          }}>
              <Link to="/product">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  See How It Works
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust indicators with staggered reveal */}
          <motion.div initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {}} transition={{
          duration: 0.6,
          delay: 1.1
        }} className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-16">
            {["WhatsApp Integration", "Setup in 5 minutes", "AI-Powered"].map((item, i) => <motion.span key={item} initial={{
            opacity: 0,
            y: 10
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 1.2 + i * 0.1,
            ease: easings.smooth
          }} className="flex items-center gap-2">
                <motion.span className="w-1.5 h-1.5 rounded-full bg-primary" animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }} />
                {item}
              </motion.span>)}
          </motion.div>

          {/* Stats with spring animations */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.7,
          delay: 1.4,
          ease: easings.smooth
        }} className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8 border-t border-border/50">
            <AnimatedStat value="340%" label="More Conversions" delay={1.5} />
            <AnimatedStat value="3x" label="Faster Response" delay={1.6} />
            <AnimatedStat value="50+" label="Happy Teams" delay={1.7} />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with smooth animation */}
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {}} transition={{
      delay: 2,
      duration: 0.6
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div className="w-1 h-2 rounded-full bg-muted-foreground/50" animate={{
          opacity: [0.5, 1, 0.5],
          scaleY: [1, 1.5, 1]
        }} transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
        </motion.div>
      </motion.div>
    </section>;
};