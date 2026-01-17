import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustLogosSection } from "@/components/sections/TrustLogosSection";
import { USPComparisonSection } from "@/components/sections/USPComparisonSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { SEOHead, pageSEO } from "@/components/SEOHead";
import { easings } from "@/hooks/useScrollAnimations";

const Index = () => {
  return (
    <Layout>
      <SEOHead {...pageSEO.home} />

      <div>
        {/* Hero with animated workflow */}
        <HeroSection />

        {/* Trust section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: easings.smooth }}
        >
          <TrustLogosSection />
        </motion.div>

        {/* USP Comparison - CRM vs Follow IQ */}
        <USPComparisonSection />

        {/* Problem Section */}
        <ProblemSection />

        {/* Product Showcase with scroll-based storytelling */}
        <ProductShowcaseSection />

        {/* Target Audience */}
        <TargetAudienceSection />

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: easings.smooth }}
        >
          <HowItWorksSection />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: easings.smooth }}
        >
          <TestimonialsSection />
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: easings.smooth }}
        >
          <PricingSection />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: easings.smooth }}
        >
          <CTASection />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;
