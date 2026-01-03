import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Floating particle component
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
}) => (
  <motion.div
    className="absolute rounded-full bg-primary/[0.06]"
    style={{
      width: size,
      height: size,
      left: `${initialX}%`,
      top: `${initialY}%`
    }}
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0, 0.5, 0.3, 0.5, 0],
      y: [-20, -60, -40, -80, -100],
      x: [0, 8, -4, 12, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// Animated stats counter
const AnimatedStat = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="text-center"
  >
    <div className="text-2xl md:text-3xl font-display font-bold text-foreground">{value}</div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </motion.div>
);

export const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  // Generate particles with stable positions
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: 3 + Math.random() * 5,
      initialX: 5 + i * 6 + Math.random() * 4,
      initialY: 25 + Math.random() * 55,
      duration: 14 + Math.random() * 10,
      delay: i * 1.2
    })), []
  );

  return (
    <section ref={heroRef} className="relative min-h-[100vh] flex items-center justify-center pt-20 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
      {/* Refined Background */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: backgroundY }}>
        {/* Soft ambient gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Primary soft gradient */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80%]" 
            style={{
              background: `radial-gradient(ellipse 90% 70% at 50% 15%, hsl(var(--primary) / 0.1) 0%, transparent 65%)`
            }} 
          />
          
          {/* Secondary subtle accent */}
          <motion.div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] md:w-[1000px] md:h-[700px]" 
            animate={{
              scale: [1, 1.015, 1],
              opacity: [0.7, 1, 0.7]
            }} 
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }} 
            style={{
              background: `radial-gradient(ellipse at center, hsl(var(--primary) / 0.06) 0%, transparent 55%)`
            }} 
          />
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map(particle => (
            <FloatingParticle key={particle.id} {...particle} />
          ))}
        </div>

        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }} 
        />

        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "100px 100px"
          }} 
        />
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              AI-Powered Sales Automation
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.08] tracking-tight mb-8"
          >
            Never Lose a Lead Again.
            <br />
            <span className="gradient-text">WhatsApp-First AI Follow-ups.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            AI ensures every follow-up happens at the right time with the right message — via WhatsApp, where your leads actually respond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group shadow-lg shadow-primary/20">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/product">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
                <MessageCircle className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-16"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              WhatsApp Integration
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Setup in 5 minutes
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              AI-Powered
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8 border-t border-border/50"
          >
            <AnimatedStat value="340%" label="More Conversions" delay={0.9} />
            <AnimatedStat value="3x" label="Faster Response" delay={1.0} />
            <AnimatedStat value="50+" label="Happy Teams" delay={1.1} />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
