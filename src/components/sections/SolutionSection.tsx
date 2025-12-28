import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Zap, Brain, MessageCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Never miss a follow-up window",
  "AI writes personalized messages",
  "WhatsApp-first automation",
  "Real-time lead scoring",
];

const capabilities = [
  { icon: Brain, label: "AI Messages", description: "Natural, personalized" },
  { icon: MessageCircle, label: "WhatsApp", description: "98% open rate" },
  { icon: BarChart3, label: "Analytics", description: "Track everything" },
  { icon: Zap, label: "Automation", description: "Set and forget" },
];

export const SolutionSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                    <Zap className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">Follow IQ</h3>
                    <p className="text-sm text-muted-foreground">AI Follow-Up Assistant</p>
                  </div>
                </div>

                {/* Capability Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {capabilities.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="p-4 bg-secondary/50 rounded-xl group hover:bg-secondary transition-colors duration-200"
                    >
                      <item.icon className="w-5 h-5 text-primary mb-2" />
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-primary" />
              The Solution
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              Meet your AI
              <br />
              <span className="gradient-text">follow-up assistant</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Follow IQ automates your entire follow-up process with AI-powered messaging 
              that feels personal. Connect with leads on WhatsApp—where they actually respond.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/product">
              <Button variant="hero" size="lg" className="group">
                See How It Works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
