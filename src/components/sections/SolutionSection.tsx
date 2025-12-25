import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Brain, MessageCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

const benefits = [
  "Never miss a follow-up window",
  "AI writes personalized messages",
  "WhatsApp-first automation",
  "Real-time lead scoring",
  "Team collaboration built-in",
  "Analytics that matter",
];

export const SolutionSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <AnimatedSection direction="right" className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card p-8 glow-primary">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                    <Zap className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">FollowIO</h3>
                    <p className="text-muted-foreground">AI Follow-Up Assistant</p>
                  </div>
                </div>

                {/* Feature Pills */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Brain, label: "AI Messages" },
                    { icon: MessageCircle, label: "WhatsApp" },
                    { icon: BarChart3, label: "Analytics" },
                    { icon: Zap, label: "Automation" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-xl"
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection direction="left" className="order-1 lg:order-2">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Meet your AI{" "}
              <span className="gradient-text">follow-up assistant</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              FollowIO automates your entire follow-up process with AI-powered messaging 
              that feels personal. Connect with leads on WhatsApp—where they actually respond.
            </p>

            {/* Benefits List */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link to="/product">
              <Button variant="hero" size="lg" className="group">
                See How It Works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
