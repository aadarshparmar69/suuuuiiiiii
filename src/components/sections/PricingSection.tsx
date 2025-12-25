import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/AnimatedSection";

const plans = [
  {
    name: "Starter",
    description: "Perfect for solopreneurs and small teams getting started.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Up to 500 leads",
      "1,000 WhatsApp messages/mo",
      "AI message suggestions",
      "Basic sequences",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description: "For growing teams that need more power and flexibility.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    popular: true,
    features: [
      "Up to 5,000 leads",
      "10,000 WhatsApp messages/mo",
      "Advanced AI personalization",
      "Unlimited sequences",
      "Team collaboration (5 users)",
      "Priority support",
      "Analytics dashboard",
      "CRM integrations",
    ],
  },
  {
    name: "Enterprise",
    description: "For large teams with custom requirements.",
    monthlyPrice: 249,
    yearlyPrice: 199,
    features: [
      "Unlimited leads",
      "Unlimited messages",
      "Custom AI training",
      "White-label option",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
  },
];

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start free for 14 days. No credit card required.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 bg-secondary rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                isYearly ? "bg-primary-foreground/20" : "bg-accent text-accent-foreground"
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </AnimatedSection>

        <StaggeredContainer className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <StaggeredItem key={plan.name}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`glass-card p-8 h-full flex flex-col relative ${
                  plan.popular ? "border-primary glow-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-display font-bold text-foreground">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full group"
                    size="lg"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link to="/pricing" className="text-primary hover:underline">
            Compare all features →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
