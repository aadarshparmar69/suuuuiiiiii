import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustLogosSection } from "@/components/sections/TrustLogosSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhatsAppSection } from "@/components/sections/WhatsAppSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { ProblemSection } from "@/components/sections/ProblemSection";
const Index = () => {
  const containerRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return <Layout>
      {/* Progress bar */}
      
      
      <div ref={containerRef}>
        {/* Hero with parallax */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8
      }}>
          <HeroSection />
        </motion.div>

        {/* Trust section with slide reveal */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <TrustLogosSection />
        </motion.div>

        {/* Problem Section */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <ProblemSection />
        </motion.div>

        {/* Services with stagger */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6
      }}>
          <ServicesSection />
        </motion.div>

        {/* How it works with scroll reveal */}
        <motion.div initial={{
        opacity: 0,
        y: 60
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <HowItWorksSection />
        </motion.div>

        {/* WhatsApp section with scale */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.98
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <WhatsAppSection />
        </motion.div>

        {/* Features */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <FeaturesSection />
        </motion.div>

        {/* Use Cases */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6
      }}>
          <UseCasesSection />
        </motion.div>

        {/* Testimonials */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <TestimonialsSection />
        </motion.div>

        {/* Pricing */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <PricingSection />
        </motion.div>

        {/* CTA */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <CTASection />
        </motion.div>
      </div>
    </Layout>;
};
export default Index;