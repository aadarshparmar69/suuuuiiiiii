import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-card border border-border rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 max-w-2xl mx-auto">
                Ready to never lose
                <br />
                <span className="gradient-text">a lead again?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                Join 2,000+ teams using Follow IQ to automate their follow-ups 
                and close more deals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="group">
                    Contact Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Button>
                </Link>
                <Link to="/product">
                  <Button variant="heroOutline" size="xl">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
