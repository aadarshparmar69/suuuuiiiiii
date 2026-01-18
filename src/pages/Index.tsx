import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustLogosSection } from "@/components/sections/TrustLogosSection";
import { USPComparisonSection } from "@/components/sections/USPComparisonSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { SEOHead, pageSEO } from "@/components/SEOHead";

const Index = () => {
  return (
    <Layout>
      <SEOHead {...pageSEO.home} />

      <div>
        {/* Hero with animated workflow */}
        <HeroSection />

        {/* Trust section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.6 }}
        >
          <TrustLogosSection />
        </motion.div>

        {/* USP Comparison - CRM vs Follow IQ */}
        <USPComparisonSection />

        {/* Problem Section */}
        <ProblemSection />

        {/* Product Showcase */}
        <ProductShowcaseSection />

        {/* Target Audience */}
        <TargetAudienceSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.6 }}
        >
          <PricingSection />
        </motion.div>

        {/* CTA */}
        <CTASection />
      </div>
    </Layout>
  );
};

export default Index;
