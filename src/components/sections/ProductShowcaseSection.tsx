import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MessageCircle, Brain, Clock, Send, Check, Sparkles, TrendingUp, Users } from "lucide-react";
import { easings, springConfigs } from "@/hooks/useScrollAnimations";

const showcaseItems = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "WhatsApp-First Communication",
    description: "Your leads are on WhatsApp, not checking email. We meet them where they are with 98% open rates.",
    stat: "98%",
    statLabel: "Open Rate",
    color: "#25D366",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI-Crafted Messages",
    description: "Our AI writes personalized follow-ups that sound exactly like you. No templates, no robotic messages.",
    stat: "3x",
    statLabel: "Response Rate",
    color: "hsl(var(--primary))",
  },
  {
    id: "timing",
    icon: Clock,
    title: "Perfect Timing",
    description: "AI analyzes behavior patterns to send messages when leads are most likely to respond.",
    stat: "47%",
    statLabel: "Better Conversion",
    color: "hsl(var(--accent))",
  },
];

const WhatsAppMockup = ({ isActive }: { isActive: boolean }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    { text: "Hi! I saw you checked out our pricing. Any questions?", status: "sent" },
    { text: "Yes! What's included in the Pro plan?", status: "received" },
    { text: "Great question! Let me send you a quick breakdown...", status: "sent" },
  ];

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
      {/* WhatsApp Header */}
      <div className="bg-[#25D366]/10 p-4 flex items-center gap-3 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] font-bold text-sm">
          SM
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Sarah Martinez</p>
          <p className="text-xs text-[#25D366]">Online</p>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="p-4 space-y-3 min-h-[200px] bg-secondary/20">
        {messages.slice(0, messageIndex + 1).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.status === "sent" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              msg.status === "sent" 
                ? "bg-[#25D366]/20 text-foreground rounded-br-sm" 
                : "bg-card border border-border rounded-bl-sm"
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const AIMockup = ({ isActive }: { isActive: boolean }) => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi Sarah, I noticed you've been exploring our enterprise solutions. Based on your company size, I'd recommend our Growth plan. Would you like me to set up a quick 15-minute demo?";

  useEffect(() => {
    if (!isActive) {
      setTypedText("");
      return;
    }
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 25);
    return () => clearInterval(typing);
  }, [isActive]);

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
      {/* AI Header */}
      <div className="bg-primary/10 p-4 flex items-center gap-3 border-b border-border">
        <motion.div 
          className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center"
          animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Brain className="w-5 h-5 text-primary" />
        </motion.div>
        <div>
          <p className="text-sm font-semibold text-foreground">AI Message Composer</p>
          <p className="text-xs text-primary">Generating personalized follow-up...</p>
        </div>
      </div>
      
      {/* AI Content */}
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="w-3 h-3 text-primary" />
          <span>Analyzing lead behavior...</span>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4 border border-border/50">
          <p className="text-sm text-foreground leading-relaxed">
            {typedText}
            {isActive && typedText.length < fullText.length && (
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
              />
            )}
          </p>
        </div>
        {typedText.length === fullText.length && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-2"
          >
            <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold cursor-pointer hover:bg-primary/20 transition-colors">
              Send Now
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-secondary text-muted-foreground text-xs font-semibold cursor-pointer hover:text-foreground transition-colors">
              Edit
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const TimingMockup = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-accent/10 p-4 flex items-center gap-3 border-b border-border">
        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
          <Clock className="w-5 h-5 text-accent" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Optimal Send Times</p>
          <p className="text-xs text-accent">AI-detected engagement windows</p>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="p-4 space-y-3">
        {[
          { time: "9:30 AM", label: "High engagement", score: 92 },
          { time: "2:15 PM", label: "Good availability", score: 78 },
          { time: "6:00 PM", label: "After work check", score: 65 },
        ].map((slot, i) => (
          <motion.div
            key={slot.time}
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.5, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.4 }}
            className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30 border border-border/30"
          >
            <div className="text-sm font-mono font-semibold text-foreground w-16">
              {slot.time}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-muted-foreground">{slot.label}</span>
                <span className="text-xs font-semibold text-accent">{slot.score}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={isActive ? { width: `${slot.score}%` } : { width: 0 }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.6, ease: easings.smooth }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const ProductShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, springConfigs.gentle);

  // Update active index based on scroll
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (value) => {
      const newIndex = Math.min(Math.floor(value * showcaseItems.length), showcaseItems.length - 1);
      if (newIndex !== activeIndex && newIndex >= 0) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [smoothProgress, activeIndex]);

  const getMockup = (id: string, isActive: boolean) => {
    switch (id) {
      case "whatsapp":
        return <WhatsAppMockup isActive={isActive} />;
      case "ai":
        return <AIMockup isActive={isActive} />;
      case "timing":
        return <TimingMockup isActive={isActive} />;
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-[300vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <motion.span 
                className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest"
              >
                Product Features
              </motion.span>
              
              <div className="space-y-6">
                {showcaseItems.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div
                      key={item.id}
                      animate={{ 
                        opacity: isActive ? 1 : 0.4,
                        x: isActive ? 0 : -10,
                      }}
                      transition={{ duration: 0.4, ease: easings.smooth }}
                      className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? "bg-card border-primary/30 shadow-lg" 
                          : "bg-transparent border-transparent hover:bg-card/50"
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className="flex items-start gap-4">
                        <div 
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            isActive ? "bg-primary/20" : "bg-secondary"
                          }`}
                          style={{ color: isActive ? item.color : undefined }}
                        >
                          <item.icon className={`w-6 h-6 ${isActive ? "" : "text-muted-foreground"}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-display font-bold mb-2 transition-colors ${
                            isActive ? "text-foreground" : "text-muted-foreground"
                          }`}>
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {item.description}
                          </p>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-3"
                            >
                              <span 
                                className="text-2xl font-display font-bold"
                                style={{ color: item.color }}
                              >
                                {item.stat}
                              </span>
                              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                                {item.statLabel}
                              </span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: Product Mockup */}
            <div className="relative">
              <motion.div
                className="relative"
                animate={{ 
                  rotateY: activeIndex * 2,
                  scale: 1,
                }}
                transition={{ duration: 0.5, ease: easings.smooth }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 -z-10 rounded-3xl blur-3xl opacity-20 transition-colors duration-500"
                  style={{ backgroundColor: showcaseItems[activeIndex]?.color }}
                />
                
                {getMockup(showcaseItems[activeIndex]?.id || "whatsapp", true)}
              </motion.div>
              
              {/* Progress indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {showcaseItems.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
