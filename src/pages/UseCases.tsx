import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { UseCaseHero } from "@/components/usecases/UseCaseHero";
import { UseCaseScrollStory } from "@/components/usecases/UseCaseScrollStory";
import { UseCaseResults } from "@/components/usecases/UseCaseResults";
import { UseCaseCTA } from "@/components/usecases/UseCaseCTA";

const UseCases = () => {
  return (
    <Layout>
      <div>
        {/* Hero with enhanced entrance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <UseCaseHero />
        </motion.div>

        {/* Scroll Story with smooth reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <UseCaseScrollStory />
        </motion.div>

        {/* Results section with scale effect */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <UseCaseResults />
        </motion.div>

        {/* CTA with bounce effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <UseCaseCTA />
        </motion.div>
      </div>
    </Layout>
  );
};

export default UseCases;
