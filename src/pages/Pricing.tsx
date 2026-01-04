import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

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
    question: "How do I get started?",
    answer: "Contact our team for a personalized demo. We'll walk you through the platform and help you find the right plan for your needs.",
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
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll();
  
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <Layout>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/80 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero */}
      <section ref={heroRef} className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px]" 
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Pricing
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Simple, transparent{" "}
              <span className="gradient-text">pricing</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Simple, transparent pricing. Contact us to get started.
            </motion.p>

            {/* Toggle */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-4 p-1.5 bg-secondary rounded-full"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard 
                key={plan.name} 
                plan={plan} 
                index={index} 
                isYearly={isYearly} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              className="glass-card p-12"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-display font-bold mb-4"
              >
                Need a custom solution?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground mb-8 max-w-xl mx-auto"
              >
                Enterprise customers get custom pricing, dedicated support, and tailored 
                features. Let's talk about what you need.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Contact Sales
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

// Pricing Card Component
const PricingCard = ({ 
  plan, 
  index, 
  isYearly 
}: { 
  plan: typeof plans[0]; 
  index: number;
  isYearly: boolean;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`glass-card p-8 h-full flex flex-col relative ${
        plan.popular ? "border-primary glow-primary" : ""
      }`}
    >
      {plan.popular && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full"
        >
          Most Popular
        </motion.div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-display font-bold text-foreground mb-2">
          {plan.name}
        </h3>
        <p className="text-sm text-muted-foreground">{plan.description}</p>
      </div>

      <div className="mb-8">
        <motion.span 
          key={isYearly ? "yearly" : "monthly"}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-display font-bold text-foreground"
        >
          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
        </motion.span>
        <span className="text-muted-foreground">/month</span>
        {isYearly && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-primary mt-1"
          >
            Billed annually (${plan.yearlyPrice * 12}/year)
          </motion.p>
        )}
      </div>

      <Link to="/contact" className="block mb-8">
        <Button 
          variant={plan.popular ? "hero" : "outline"} 
          className="w-full group"
          size="lg"
        >
          Contact Us
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>

      <ul className="space-y-3 flex-1">
        {plan.features.map((feature, featureIndex) => (
          <motion.li 
            key={feature.name} 
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + featureIndex * 0.05 }}
            className="flex items-start gap-3"
          >
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
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Pricing;
