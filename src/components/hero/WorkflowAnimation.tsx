import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check, Brain, User, Sparkles, Zap, TrendingUp, Send } from "lucide-react";

interface Step {
  id: number;
  icon: typeof User;
  label: string;
  sublabel: string;
}

const steps: Step[] = [
  { id: 0, icon: User, label: "Lead Captured", sublabel: "From your website" },
  { id: 1, icon: Brain, label: "AI Analyzes", sublabel: "Context & intent" },
  { id: 2, icon: Send, label: "Message Sent", sublabel: "Via WhatsApp" },
  { id: 3, icon: TrendingUp, label: "Deal Closed", sublabel: "$4,500 revenue" },
];

const FloatingParticle = ({ delay, duration, x, size }: { delay: number; duration: number; x: number; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ width: size, height: size, left: `${x}%` }}
    initial={{ y: "100%", opacity: 0 }}
    animate={{
      y: ["-10%", "-120%"],
      opacity: [0, 0.6, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

export const WorkflowAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");

  const aiMessage = "Hi Sarah! Following up on our chat about the Growth plan. Ready when you are 👋";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentStep === 1) {
      setIsTyping(true);
      setTypedMessage("");
      let i = 0;
      const typing = setInterval(() => {
        if (i < aiMessage.length) {
          setTypedMessage(aiMessage.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
          setIsTyping(false);
        }
      }, 30);
      return () => clearInterval(typing);
    }
  }, [currentStep]);

  const getStepStatus = (index: number) => {
    if (currentStep > index || currentStep === 4) return "complete";
    if (currentStep === index) return "active";
    return "pending";
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4">
      {/* Main container - premium glass morphism */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Outer glow effect (subtle) */}
        <div className="absolute -inset-1 bg-primary/10 rounded-[28px] blur-xl opacity-50" />
        
        {/* Main card */}
        <div className="relative bg-gradient-to-b from-card/95 to-card/80 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none" />

          {/* Floating particles (kept minimal + slower so it feels premium) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {[...Array(4)].map((_, i) => (
              <FloatingParticle
                key={i}
                delay={i * 1.4}
                duration={7 + i * 0.8}
                x={18 + i * 20}
                size={3 + (i % 2) * 2}
              />
            ))}
          </div>

          {/* Header bar */}
          <div className="relative flex items-center justify-between px-5 py-4 lg:px-8 lg:py-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              {/* Animated status dot */}
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-[2px]" />
              </div>
              <span className="text-sm font-medium text-foreground/80">Live Demo</span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                <Sparkles className="w-3 h-3" />
                AI-Powered
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground/60 font-mono">follow-iq.app</span>
              <div className="hidden sm:flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              </div>
            </div>
          </div>

          {/* Content area - FIXED HEIGHT */}
          <div className="relative p-4 sm:p-5 lg:p-8">
            {/* Steps with connecting line */}
            <div className="relative mb-6 sm:mb-8">
              {/* Background track */}
              <div className="absolute top-5 sm:top-7 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 sm:h-1 bg-secondary/50 rounded-full" />
              
              {/* Animated progress line */}
              <motion.div
                className="absolute top-5 sm:top-7 left-[calc(12.5%)] h-0.5 sm:h-1 bg-primary/70 rounded-full"
                animate={{ width: `${Math.min(currentStep / 3 * 75, 75)}%` }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Step items */}
              <div className="relative flex items-start justify-between">
                {steps.map((step, index) => {
                  const status = getStepStatus(index);
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={step.id}
                      className="flex flex-col items-center flex-1 z-10"
                      initial={false}
                    >
                      {/* Step circle with dynamic gradient */}
                      <motion.div
                        className="relative"
                        animate={{
                          scale: status === "active" ? 1 : 1,
                        }}
                      >
                        {/* Active ring (no pulse — calmer) */}
                        {status === "active" && (
                          <div className="absolute -inset-1.5 sm:-inset-2 rounded-xl sm:rounded-2xl border border-primary/30" />
                        )}

                        <motion.div
                          className={`relative w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center overflow-hidden ${
                            status === "complete"
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/10"
                              : status === "active"
                              ? "bg-card border-2 border-primary shadow-lg shadow-primary/20"
                              : "bg-secondary/60 border border-white/5"
                          }`}
                          animate={{
                            y: status === "active" ? -2 : 0,
                          }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {status === "complete" ? (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" strokeWidth={3} />
                            </motion.div>
                          ) : (
                            <Icon
                              className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${
                                status === "active" ? "text-primary" : "text-muted-foreground/50"
                              }`}
                            />
                          )}
                        </motion.div>
                      </motion.div>

                      {/* Labels */}
                      <div className="mt-2 sm:mt-3 text-center">
                        <motion.p
                          className={`text-[10px] sm:text-sm font-semibold transition-all duration-300 leading-tight ${
                            status === "active"
                              ? "text-foreground"
                              : status === "complete"
                              ? "text-foreground/90"
                              : "text-muted-foreground/60"
                          }`}
                        >
                          {step.label}
                        </motion.p>
                        <p
                          className={`text-[8px] sm:text-xs mt-0.5 transition-all duration-300 hidden sm:block ${
                            status === "active" ? "text-primary" : "text-muted-foreground/50"
                          }`}
                        >
                          {step.sublabel}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Dynamic content area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-[68px] sm:h-[76px] lg:h-[84px] flex items-center"
              >
                {currentStep === 0 && (
                  <div className="flex items-center gap-3 sm:gap-4 w-full">
                    <div className="relative shrink-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
                        SM
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-primary rounded-full border-2 border-card flex items-center justify-center">
                        <Zap className="w-2.5 h-2.5 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
                        <p className="text-sm sm:text-base font-semibold text-foreground truncate">Sarah Martinez</p>
                        <span className="px-1.5 py-0.5 rounded bg-primary/15 text-primary text-[10px] sm:text-xs font-semibold shrink-0">Hot Lead</span>
                      </div>
                      <p className="text-[11px] sm:text-sm text-muted-foreground/80 truncate">
                        Viewed pricing page · Intent score: <span className="text-primary font-semibold">85%</span>
                      </p>
                    </div>
                    <div className="hidden sm:block px-2.5 py-1 rounded-md bg-muted/50 text-[11px] text-muted-foreground/60 shrink-0">just now</div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="w-full space-y-2">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground">AI composing message</span>
                      <motion.div className="flex gap-0.5" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.8, repeat: Infinity }}>
                        {[0, 1, 2].map((i) => (<div key={i} className="w-1 h-1 rounded-full bg-primary" />))}
                      </motion.div>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed line-clamp-2 pl-6">
                      {typedMessage}
                      {isTyping && (
                        <motion.span className="inline-block w-0.5 h-3.5 bg-primary ml-0.5 align-middle" animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} />
                      )}
                    </p>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="flex items-center gap-3 sm:gap-4 w-full">
                    <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-primary flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <p className="text-sm sm:text-base font-semibold text-foreground">WhatsApp Delivered</p>
                        <div className="flex items-center text-primary"><Check className="w-3.5 h-3.5" /><Check className="w-3.5 h-3.5 -ml-1.5" /></div>
                      </div>
                      <p className="text-[11px] sm:text-sm text-muted-foreground/80">
                        Opened <span className="text-foreground/90 font-medium">10:32 AM</span> · 98% open rate
                      </p>
                    </div>
                    <motion.div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
                      <Check className="w-3.5 h-3.5" />Read
                    </motion.div>
                  </div>
                )}

                {(currentStep === 3 || currentStep === 4) && (
                  <div className="flex items-center gap-3 sm:gap-4 w-full">
                    <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-primary flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-foreground mb-0.5">Deal Closed</p>
                      <p className="text-[11px] sm:text-sm text-muted-foreground/80">
                        <span className="text-lg sm:text-2xl font-bold text-foreground">$4,500</span>
                        <span className="ml-1.5 hidden sm:inline">· 3 days from first contact</span>
                      </p>
                    </div>
                    <motion.div className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs sm:text-sm" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}>
                      Closed
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Bottom metrics bar */}
            <motion.div
              className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 mt-4 sm:mt-6 pt-3 sm:pt-5 border-t border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { label: "Response Rate", value: "98%", icon: MessageCircle },
                { label: "Avg. Close Time", value: "3 days", icon: Zap },
                { label: "Revenue", value: "+340%", icon: TrendingUp },
              ].map((metric) => (
                <div key={metric.label} className="flex items-center gap-1.5 sm:gap-2 text-center">
                  <metric.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary hidden sm:block" />
                  <div>
                    <p className="text-xs sm:text-sm lg:text-base font-bold text-foreground">{metric.value}</p>
                    <p className="text-[8px] sm:text-[10px] lg:text-xs text-muted-foreground/60">{metric.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
