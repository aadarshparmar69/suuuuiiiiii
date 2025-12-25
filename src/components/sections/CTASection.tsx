import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

export const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 lg:p-16">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-8 glow-primary">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to{" "}
              <span className="gradient-text">close more deals?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join 2,000+ businesses using FollowIO to convert leads on autopilot. 
              Start your free 14-day trial today—no credit card required.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Book a Demo
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
