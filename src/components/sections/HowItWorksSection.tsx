import { motion } from "framer-motion";
import { UserPlus, Brain, MessageCircle, TrendingUp } from "lucide-react";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/AnimatedSection";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Capture Leads",
    description: "Import leads from any source—forms, CRM, spreadsheets. We connect with everything.",
    color: "primary",
  },
  {
    step: "02",
    icon: Brain,
    title: "AI Analyzes",
    description: "Our AI scores leads and creates personalized follow-up sequences based on behavior.",
    color: "primary",
  },
  {
    step: "03",
    icon: MessageCircle,
    title: "WhatsApp Magic",
    description: "Automated messages sent at the perfect time via WhatsApp—where leads actually respond.",
    color: "primary",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Convert & Scale",
    description: "Watch your conversion rates soar while your team focuses on closing deals.",
    color: "accent",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Four steps to{" "}
            <span className="gradient-text">automated growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From lead capture to conversion, FollowIO handles the entire follow-up process 
            so you can focus on what matters—closing deals.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <StaggeredItem key={item.step}>
                <div className="relative group">
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center relative z-10 ${
                      item.color === "accent" 
                        ? "bg-accent text-accent-foreground" 
                        : "bg-primary text-primary-foreground"
                    } group-hover:shadow-[0_0_30px_hsl(var(--${item.color})/0.5)] transition-shadow duration-300`}
                  >
                    <item.icon className="w-7 h-7" />
                  </motion.div>

                  {/* Step Label */}
                  <div className="text-center">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Step {item.step}
                    </span>
                    <h3 className="text-xl font-display font-bold text-foreground mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 text-border">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </StaggeredItem>
            ))}
          </div>
        </StaggeredContainer>
      </div>
    </section>
  );
};
