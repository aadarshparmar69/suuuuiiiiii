import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Clock, Smartphone, Globe, Shield, Check } from "lucide-react";

const advantages = [
  {
    icon: MessageCircle,
    title: "98% Open Rate",
    description: "WhatsApp messages get opened. Email gets ignored.",
  },
  {
    icon: Clock,
    title: "Instant Delivery",
    description: "Messages arrive in seconds, not hours.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Meet leads where they already are.",
  },
  {
    icon: Globe,
    title: "2B+ Users",
    description: "The #1 messaging platform globally.",
  },
  {
    icon: Shield,
    title: "Business API",
    description: "Official, compliant, and scalable.",
  },
];

export const WhatsAppSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-[#25D366]" />
              WhatsApp-First
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              Why email is{" "}
              <span className="line-through text-muted-foreground decoration-2">dead</span>
              <br />
              and WhatsApp wins
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Your leads don't check email—they're on WhatsApp. Our platform sends 
              personalized follow-ups where they actually get seen and responded to.
            </p>

            {/* Stats Comparison */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-6 bg-card border border-[#25D366]/30 rounded-xl text-center">
                <div className="text-4xl font-display font-bold text-[#25D366] mb-1">98%</div>
                <p className="text-sm text-muted-foreground">WhatsApp Open Rate</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl text-center">
                <div className="text-4xl font-display font-bold text-muted-foreground mb-1">20%</div>
                <p className="text-sm text-muted-foreground">Email Open Rate</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-[#25D366]" />
              <span>Official WhatsApp Business API Partner</span>
            </div>
          </motion.div>

          {/* Right - Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl group hover:border-[#25D366]/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/15 transition-colors">
                  <advantage.icon className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
