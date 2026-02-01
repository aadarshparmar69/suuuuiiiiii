import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkflowAnimation } from "@/components/hero/WorkflowAnimation";
export const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {
    once: true
  });
  return <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orb - slowly drifting */}
        <motion.div className="absolute top-[-20%] left-1/2 w-[120%] h-[80%]" animate={{
        x: ["-50%", "-45%", "-55%", "-50%"],
        y: ["0%", "5%", "-3%", "0%"],
        scale: [1, 1.05, 0.98, 1]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }} style={{
        background: `radial-gradient(ellipse 60% 50% at 50% 30%, hsl(175 80% 50% / 0.12) 0%, transparent 60%)`
      }} />
        
        {/* Secondary accent orb - counter drift */}
        <motion.div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%]" animate={{
        x: ["0%", "-8%", "5%", "0%"],
        y: ["0%", "10%", "-5%", "0%"],
        opacity: [0.4, 0.6, 0.35, 0.4]
      }} transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }} style={{
        background: `radial-gradient(ellipse 80% 80% at 50% 50%, hsl(15 90% 60% / 0.06) 0%, transparent 60%)`
      }} />
        
        {/* Tertiary subtle orb - left side */}
        <motion.div className="absolute top-[30%] left-[-5%] w-[40%] h-[50%]" animate={{
        x: ["0%", "10%", "-5%", "0%"],
        y: ["0%", "-8%", "8%", "0%"],
        opacity: [0.3, 0.5, 0.25, 0.3]
      }} transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }} style={{
        background: `radial-gradient(ellipse 70% 70% at 50% 50%, hsl(200 80% 55% / 0.08) 0%, transparent 60%)`
      }} />
        
        {/* Very subtle noise/grain overlay for depth */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* USP Badge */}
        <motion.div initial={{
        opacity: 0,
        y: 15
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="flex justify-center mb-5 lg:mb-6">
          
        </motion.div>

        {/* Main Headline */}
        <motion.div className="text-center max-w-4xl mx-auto mb-6 lg:mb-8">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-4 lg:mb-6" initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.15,
          ease: [0.25, 0.1, 0.25, 1]
        }}>
            <span className="text-muted-foreground">CRMs track leads.</span>
            <br />
            <span className="gradient-text">Follow IQ closes them.</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 15
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: 0.25,
          ease: [0.25, 0.1, 0.25, 1]
        }} className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            AI-powered follow-ups via WhatsApp that ensure no lead ever slips through. 
            Built for agencies, consultants, and service businesses.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div initial={{
        opacity: 0,
        y: 15
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.5,
        delay: 0.35,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-10 lg:mb-14 px-4">
          <Link to="/contact">
            <Button variant="hero" size="lg" className="w-full sm:w-auto group shadow-lg shadow-primary/20">
              Get Started
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          <a href="https://followiq.setmore.com" target="_blank" rel="noopener noreferrer">
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto group">
              <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              Book a Demo
            </Button>
          </a>
        </motion.div>

        {/* Animated Product Workflow */}
        <WorkflowAnimation />

        {/* Bottom Stats */}
        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.6,
        delay: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="flex flex-wrap justify-center gap-6 lg:gap-10 mt-10 lg:mt-14 pt-8 border-t border-border/30 max-w-lg mx-auto">
          {[{
          value: "340%",
          label: "More Conversions"
        }, {
          value: "3x",
          label: "Faster Response"
        }, {
          value: "50+",
          label: "Happy Teams"
        }].map((stat, i) => <motion.div key={stat.label} initial={{
          opacity: 0,
          y: 10
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          delay: 1.1 + i * 0.1,
          duration: 0.4
        }} className="text-center">
              <div className="text-xl lg:text-2xl font-display font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};