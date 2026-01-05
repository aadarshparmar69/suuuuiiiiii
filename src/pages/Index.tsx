import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
import { easings } from "@/hooks/useScrollAnimations";

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <Layout>
      {/* Smooth progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary/80 z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <div ref={containerRef}>
        {/* Hero */}
        <HeroSection />

        {/* Trust section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: easings.smooth }}
        >
          <TrustLogosSection />
        </motion.div>

        {/* Problem Section */}
        <ProblemSection />

        {/* Services */}
        <ServicesSection />

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: easings.smooth }}
        >
          <HowItWorksSection />
        </motion.div>

        {/* WhatsApp section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: easings.smooth }}
        >
          <WhatsAppSection />
        </motion.div>

        {/* Features */}
        <FeaturesSection />

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: easings.smooth }}
        >
          <UseCasesSection />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: easings.smooth }}
        >
          <TestimonialsSection />
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: easings.smooth }}
        >
          <PricingSection />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: easings.smooth }}
        >
          <CTASection />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;