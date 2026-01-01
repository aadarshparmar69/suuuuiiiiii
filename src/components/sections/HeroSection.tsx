import { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    className="absolute rounded-full bg-primary/[0.08]"
    style={{
      width: size,
      height: size,
      left: `${initialX}%`,
      top: `${initialY}%`,
    }}
    initial={{ opacity: 0, y: 0 }}
    animate={{ 
      opacity: [0, 0.6, 0.4, 0.6, 0],
      y: [-20, -60, -40, -80, -100],
      x: [0, 10, -5, 15, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  // Generate particles with stable positions
  const particles = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: 4 + Math.random() * 6,
      initialX: 10 + (i * 7) + Math.random() * 5,
      initialY: 30 + Math.random() * 50,
      duration: 12 + Math.random() * 8,
      delay: i * 1.5,
    })), []
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Refined Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft ambient gradient - no harsh glows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Primary soft gradient */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[70%]"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 20%, hsl(var(--primary) / 0.12) 0%, transparent 70%)`,
            }}
          />
          
          {/* Secondary subtle accent */}
          <motion.div 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[600px]"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: `radial-gradient(ellipse at center, hsl(var(--primary) / 0.08) 0%, transparent 60%)`,
            }}
          />
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <FloatingParticle key={particle.id} {...particle} />
          ))}
        </div>

        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              New
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6"
          >
            Intelligent Follow-ups for
            <br />
            <span className="gradient-text">Modern Sales Teams.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Follow IQ brings AI automation to your fingertips & streamlines your lead follow-ups.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                Get in touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Button>
            </Link>
            <Link to="/product">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                View services
              </Button>
            </Link>
          </motion.div>

          {/* Secondary Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <Link
              to="/use-cases"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
            >
              Another AI Template
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
