import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Brain, Clock, Check, Sparkles, Send } from "lucide-react";

const features = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "WhatsApp-First",
    subtitle: "Where your leads actually are",
    description: "98% of messages get opened on WhatsApp. Email can't compete. We meet leads where they're already active.",
    stat: "98%",
    statLabel: "Open Rate",
    color: "#25D366",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI-Crafted Messages",
    subtitle: "Personalized, not templated",
    description: "Our AI writes follow-ups that sound exactly like you. Personalized based on lead behavior, not generic templates.",
    stat: "3x",
    statLabel: "Response Rate",
    color: "hsl(175, 80%, 50%)",
  },
  {
    id: "timing",
    icon: Clock,
    title: "Perfect Timing",
    subtitle: "Optimal engagement windows",
    description: "AI analyzes patterns to send messages when leads are most likely to respond. No more guessing.",
    stat: "47%",
    statLabel: "Better Conversion",
    color: "hsl(15, 90%, 60%)",
  },
];

// WhatsApp Preview Mockup
const WhatsAppPreview = () => (
  <div className="bg-card border border-border rounded-xl lg:rounded-2xl overflow-hidden shadow-xl">
    <div className="bg-[#25D366]/10 px-4 py-3 flex items-center gap-3 border-b border-border/50">
      <div className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] font-bold text-xs">
        SM
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">Sarah Martinez</p>
        <p className="text-xs text-[#25D366]">Online</p>
      </div>
    </div>
    <div className="p-4 space-y-3 bg-secondary/10">
      <div className="flex justify-end">
        <div className="max-w-[85%] p-3 rounded-2xl rounded-br-md bg-[#25D366]/15 text-foreground text-sm">
          Hi! I saw you checked our pricing. Any questions I can help with?
        </div>
      </div>
      <div className="flex justify-start">
        <div className="max-w-[85%] p-3 rounded-2xl rounded-bl-md bg-card border border-border/50 text-foreground text-sm">
          Yes! What's included in the Pro plan?
        </div>
      </div>
      <div className="flex justify-end items-end gap-1">
        <div className="max-w-[85%] p-3 rounded-2xl rounded-br-md bg-[#25D366]/15 text-foreground text-sm">
          Great question! Let me send you a quick breakdown...
        </div>
        <div className="flex text-[#25D366]">
          <Check className="w-3 h-3" />
          <Check className="w-3 h-3 -ml-1" />
        </div>
      </div>
    </div>
  </div>
);

// AI Message Composer Mockup
const AIComposer = () => (
  <div className="bg-card border border-border rounded-xl lg:rounded-2xl overflow-hidden shadow-xl">
    <div className="bg-primary/10 px-4 py-3 flex items-center gap-3 border-b border-border/50">
      <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
        <Brain className="w-4 h-4 text-primary" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">AI Message Composer</p>
        <p className="text-xs text-primary">Personalized for Sarah</p>
      </div>
    </div>
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Sparkles className="w-3 h-3 text-primary" />
        <span>Based on: Viewed pricing 3x, Growth Plan interest</span>
      </div>
      <div className="bg-secondary/40 rounded-xl p-4 border border-border/30">
        <p className="text-sm text-foreground leading-relaxed">
          Hi Sarah, I noticed you've been exploring our Growth plan. Based on your team size, this would give you unlimited follow-ups + WhatsApp integration. Want me to set up a quick 15-min demo?
        </p>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold flex items-center gap-2">
          <Send className="w-3.5 h-3.5" />
          Send Now
        </button>
        <button className="px-4 py-2 rounded-lg bg-secondary text-muted-foreground text-sm font-semibold hover:text-foreground transition-colors">
          Edit
        </button>
      </div>
    </div>
  </div>
);

// Timing Intelligence Mockup
const TimingPreview = () => (
  <div className="bg-card border border-border rounded-xl lg:rounded-2xl overflow-hidden shadow-xl">
    <div className="bg-accent/10 px-4 py-3 flex items-center gap-3 border-b border-border/50">
      <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center">
        <Clock className="w-4 h-4 text-accent" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">Optimal Send Times</p>
        <p className="text-xs text-accent">AI-detected windows</p>
      </div>
    </div>
    <div className="p-4 space-y-3">
      {[
        { time: "9:30 AM", label: "High engagement", score: 92 },
        { time: "2:15 PM", label: "Good availability", score: 78 },
        { time: "6:00 PM", label: "After work check", score: 65 },
      ].map((slot) => (
        <div key={slot.time} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/30">
          <span className="text-sm font-mono font-semibold text-foreground w-16">{slot.time}</span>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs text-muted-foreground">{slot.label}</span>
              <span className="text-xs font-semibold text-accent">{slot.score}%</span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent rounded-full transition-all duration-500"
                style={{ width: `${slot.score}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ProductShowcaseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [activeFeature, setActiveFeature] = useState(0);

  const getMockup = (id: string) => {
    switch (id) {
      case "whatsapp":
        return <WhatsAppPreview />;
      case "ai":
        return <AIComposer />;
      case "timing":
        return <TimingPreview />;
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-xs lg:text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Product Features
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight mb-4">
            Three pillars of{" "}
            <span className="gradient-text">effortless follow-ups</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Each feature designed to turn missed opportunities into closed deals.
          </p>
        </motion.div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left: Feature list */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const isActive = index === activeFeature;
              const Icon = feature.icon;
              
              return (
                <motion.button
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                    isActive 
                      ? "bg-card border-primary/30 shadow-lg" 
                      : "bg-transparent border-border/30 hover:bg-card/50 hover:border-border"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isActive ? "bg-primary/15" : "bg-secondary"
                      }`}
                    >
                      <Icon 
                        className="w-5 h-5 transition-colors duration-300" 
                        style={{ color: isActive ? feature.color : undefined }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-display font-bold text-lg mb-1 transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {feature.subtitle}
                      </p>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {feature.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <span 
                              className="text-2xl font-display font-bold"
                              style={{ color: feature.color }}
                            >
                              {feature.stat}
                            </span>
                            <span className="text-xs text-muted-foreground uppercase tracking-wide">
                              {feature.statLabel}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Product mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="sticky top-32"
          >
            <div className="relative">
              {/* Glow effect */}
              <div 
                className="absolute inset-0 -z-10 rounded-3xl blur-3xl opacity-15 transition-colors duration-500"
                style={{ backgroundColor: features[activeFeature]?.color }}
              />
              {getMockup(features[activeFeature]?.id || "whatsapp")}
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeFeature 
                      ? "w-6 bg-primary" 
                      : "w-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout: Stacked cards */}
        <div className="lg:hidden space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                className="space-y-4"
              >
                {/* Feature header */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed pl-16">
                  {feature.description}
                </p>
                
                {/* Stat */}
                <div className="flex items-center gap-2 pl-16">
                  <span 
                    className="text-xl font-display font-bold"
                    style={{ color: feature.color }}
                  >
                    {feature.stat}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {feature.statLabel}
                  </span>
                </div>
                
                {/* Mockup */}
                <div className="pt-2">
                  {getMockup(feature.id)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
