import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const UseCaseCTA = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
            >
              <Zap className="w-8 h-8 text-primary" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                transform
              </span>{" "}
              your follow-ups?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of businesses using Follow IQ to close more deals with less effort. Get in touch today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group min-w-[200px]">
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/product">
                <Button variant="heroOutline" size="lg" className="group min-w-[200px]">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-border/30"
            >
              {[
                "Personalized demo",
                "Expert consultation",
                "Quick response",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
