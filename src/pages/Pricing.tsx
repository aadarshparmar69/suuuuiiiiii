import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/AnimatedSection";

const plans = [
  {
    name: "Starter",
    description: "For individuals getting started with follow-up automation.",
    monthlyPrice: 15,
    yearlyPrice: 12,
    features: [
      { name: "Basic follow-ups", included: true },
      { name: "Limited leads (up to 100)", included: true },
      { name: "Email support", included: true },
      { name: "Basic templates", included: true },
      { name: "WhatsApp scheduling", included: false },
      { name: "AI messaging", included: false },
      { name: "Team collaboration", included: false },
      { name: "Analytics dashboard", included: false },
    ],
  },
  {
    name: "Professional",
    description: "Unlimited leads with advanced AI and full feature access.",
    monthlyPrice: 35,
    yearlyPrice: 28,
    popular: true,
    features: [
      { name: "Unlimited leads", included: true },
      { name: "Advanced AI messaging", included: true },
      { name: "WhatsApp scheduling", included: true },
      { name: "Analytics dashboard", included: true },
      { name: "Team collaboration", included: true },
      { name: "Priority support", included: true },
      { name: "CRM integrations", included: true },
      { name: "Custom templates", included: true },
    ],
  },
  {
    name: "Enterprise",
    description: "For agencies and teams needing custom workflows.",
    monthlyPrice: 45,
    yearlyPrice: 36,
    features: [
      { name: "Everything in Professional", included: true },
      { name: "Custom workflows", included: true },
      { name: "Priority support", included: true },
      { name: "Multi-team setup", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "White-label option", included: true },
      { name: "Custom integrations", included: true },
      { name: "SLA guarantee", included: true },
    ],
  },
];

const faqs = [
  {
    question: "What's included in the free trial?",
    answer: "You get full access to all Professional plan features for 14 days. No credit card required. At the end of your trial, you can choose to continue with any plan.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes! You can upgrade or downgrade at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the next billing cycle.",
  },
  {
    question: "What happens if I exceed my message limit?",
    answer: "We'll notify you when you're approaching your limit. You can either upgrade to a higher plan or purchase additional messages as needed. We never cut off your messaging mid-campaign.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes! Annual billing saves you 20% compared to monthly billing. That's like getting over 2 months free.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees ever. You only pay the monthly or annual subscription price. Our team will help you get started at no extra cost.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and can arrange invoice billing for Enterprise customers.",
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Simple, transparent{" "}
              <span className="gradient-text">pricing</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Start free for 14 days. No credit card required. Cancel anytime.
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
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
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
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold text-foreground">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                    {isYearly && (
                      <p className="text-sm text-primary mt-1">
                        Billed annually (${plan.yearlyPrice * 12}/year)
                      </p>
                    )}
                  </div>

                  <Link to="/contact" className="block mb-8">
                    <Button 
                      variant={plan.popular ? "hero" : "outline"} 
                      className="w-full group"
                      size="lg"
                    >
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          feature.included ? "bg-primary/20" : "bg-secondary"
                        }`}>
                          <Check className={`w-3 h-3 ${
                            feature.included ? "text-primary" : "text-muted-foreground/50"
                          }`} />
                        </div>
                        <span className={`text-sm ${
                          feature.included ? "text-foreground" : "text-muted-foreground/50"
                        }`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Frequently asked questions
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <StaggeredContainer className="space-y-4">
              {faqs.map((faq) => (
                <StaggeredItem key={faq.question}>
                  <div className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12">
              <h2 className="text-3xl font-display font-bold mb-4">
                Need a custom solution?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Enterprise customers get custom pricing, dedicated support, and tailored 
                features. Let's talk about what you need.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Contact Sales
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
