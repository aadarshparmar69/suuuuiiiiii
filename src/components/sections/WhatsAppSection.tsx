import { motion } from "framer-motion";
import { MessageCircle, Check, Smartphone, Globe, Clock, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const advantages = [
  {
    icon: MessageCircle,
    title: "98% Open Rate",
    description: "WhatsApp messages get opened. Email gets ignored. It's that simple.",
  },
  {
    icon: Clock,
    title: "Instant Delivery",
    description: "Messages arrive in seconds, not hours. Strike while the lead is hot.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First World",
    description: "Your leads live on their phones. Meet them where they already are.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "2 billion users worldwide. WhatsApp is the #1 messaging platform.",
  },
  {
    icon: Shield,
    title: "Business API",
    description: "Official WhatsApp Business API. Compliant, reliable, and scalable.",
  },
];

export const WhatsAppSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* WhatsApp Green Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#25D366]/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection>
            <span className="inline-block text-[#25D366] font-semibold text-sm uppercase tracking-wider mb-4">
              WhatsApp-First
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Why email is{" "}
              <span className="line-through text-muted-foreground">dead</span>{" "}
              and WhatsApp wins
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your leads don't check email—they're on WhatsApp. Our platform sends 
              personalized follow-ups where they actually get seen and responded to.
            </p>

            {/* Stats Comparison */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-display font-bold text-[#25D366] mb-2">98%</div>
                <p className="text-sm text-muted-foreground">WhatsApp Open Rate</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-display font-bold text-muted-foreground mb-2">20%</div>
                <p className="text-sm text-muted-foreground">Email Open Rate</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-5 h-5 text-[#25D366]" />
              <span>Official WhatsApp Business API Partner</span>
            </div>
          </AnimatedSection>

          {/* Right - Advantages Grid */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card p-4 flex items-start gap-4 group hover:border-[#25D366]/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                    <advantage.icon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
