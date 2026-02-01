import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Check, Brain, User, Sparkles, Zap, TrendingUp, Send } from "lucide-react";

interface Step {
  id: number;
  icon: typeof User;
  label: string;
  sublabel: string;
  color: string;
}

const steps: Step[] = [
  { id: 0, icon: User, label: "Lead Captured", sublabel: "From your website", color: "from-blue-500 to-cyan-400" },
  { id: 1, icon: Brain, label: "AI Analyzes", sublabel: "Context & intent", color: "from-violet-500 to-purple-400" },
  { id: 2, icon: Send, label: "Message Sent", sublabel: "Via WhatsApp", color: "from-emerald-500 to-teal-400" },
  { id: 3, icon: TrendingUp, label: "Deal Won", sublabel: "$4,500 closed", color: "from-amber-500 to-orange-400" },
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
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Main container - premium glass morphism */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Outer glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[28px] blur-xl opacity-50" />
        
        {/* Main card */}
        <div className="relative bg-gradient-to-b from-card/95 to-card/80 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none" />
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <FloatingParticle
                key={i}
                delay={i * 0.8}
                duration={4 + i * 0.5}
                x={15 + i * 14}
                size={4 + (i % 3) * 2}
              />
            ))}
          </div>

          {/* Header bar */}
          <div className="relative flex items-center justify-between px-5 py-4 lg:px-8 lg:py-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              {/* Animated status dot */}
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
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
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="relative p-5 lg:p-8">
            {/* Steps with connecting line */}
            <div className="relative mb-8">
              {/* Background track */}
              <div className="absolute top-7 left-[calc(12.5%)] right-[calc(12.5%)] h-1 bg-secondary/50 rounded-full hidden sm:block" />
              
              {/* Animated progress line */}
              <motion.div
                className="absolute top-7 left-[calc(12.5%)] h-1 bg-gradient-to-r from-primary via-primary to-accent rounded-full hidden sm:block"
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
                        {/* Active ring pulse */}
                        {status === "active" && (
                          <motion.div
                            className={`absolute -inset-2 rounded-2xl bg-gradient-to-r ${step.color} opacity-30`}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}

                        <motion.div
                          className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center overflow-hidden ${
                            status === "complete"
                              ? `bg-gradient-to-br ${step.color} shadow-lg`
                              : status === "active"
                              ? "bg-card border-2 border-primary shadow-lg shadow-primary/20"
                              : "bg-secondary/60 border border-white/5"
                          }`}
                          animate={{
                            y: status === "active" ? -4 : 0,
                          }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {status === "complete" ? (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <Check className="w-5 h-5 lg:w-6 lg:h-6 text-white" strokeWidth={3} />
                            </motion.div>
                          ) : (
                            <Icon
                              className={`w-5 h-5 lg:w-6 lg:h-6 ${
                                status === "active" ? "text-primary" : "text-muted-foreground/50"
                              }`}
                            />
                          )}
                        </motion.div>
                      </motion.div>

                      {/* Labels */}
                      <div className="mt-3 text-center hidden sm:block">
                        <motion.p
                          className={`text-sm font-semibold transition-all duration-300 ${
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
                          className={`text-xs mt-0.5 transition-all duration-300 ${
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
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Card with subtle gradient background */}
                <div className="relative bg-gradient-to-br from-secondary/60 via-secondary/40 to-secondary/30 rounded-2xl p-5 lg:p-6 border border-white/5 overflow-hidden min-h-[100px]">
                  {/* Subtle inner glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                  {currentStep === 0 && (
                    <motion.div
                      className="relative flex items-center gap-4"
                      initial={{ x: 20 }}
                      animate={{ x: 0 }}
                    >
                      {/* Avatar with status ring */}
                      <div className="relative shrink-0">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                          SM
                        </div>
                        <motion.div
                          className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Zap className="w-3 h-3 text-white" />
                        </motion.div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-base lg:text-lg font-semibold text-foreground">Sarah Martinez</p>
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold">
                            Hot Lead
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">Viewed pricing page • Intent score: <span className="text-primary font-semibold">85%</span></p>
                      </div>

                      <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground/60">
                        <div className="px-3 py-1.5 rounded-lg bg-card/50 border border-white/5">
                          just now
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 1 && (
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-foreground">AI composing personalized message...</span>
                        <motion.div
                          className="flex gap-1"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          {[0, 1, 2].map((i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                          ))}
                        </motion.div>
                      </div>

                      <div className="bg-card/60 rounded-xl p-4 border border-white/10 shadow-inner">
                        <p className="text-sm lg:text-base text-foreground leading-relaxed">
                          {typedMessage}
                          {isTyping && (
                            <motion.span
                              className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
                              animate={{ opacity: [1, 0] }}
                              transition={{ duration: 0.5, repeat: Infinity }}
                            />
                          )}
                        </p>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ x: 20 }}
                      animate={{ x: 0 }}
                    >
                      <div className="relative shrink-0">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                          <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-base lg:text-lg font-semibold text-foreground">WhatsApp Delivered</p>
                          <div className="flex items-center text-emerald-400">
                            <Check className="w-4 h-4" />
                            <Check className="w-4 h-4 -ml-2" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Opened at <span className="text-foreground font-medium">10:32 AM</span> • 98% open rate
                        </p>
                      </div>

                      <motion.div
                        className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-medium"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Check className="w-4 h-4" />
                        Read
                      </motion.div>
                    </motion.div>
                  )}

                  {(currentStep === 3 || currentStep === 4) && (
                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                    >
                      <div className="relative shrink-0">
                        <motion.div
                          className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center shadow-lg shadow-amber-500/20"
                          animate={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <TrendingUp className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                        </motion.div>
                        <motion.div
                          className="absolute -top-2 -right-2 text-xl"
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.3, 1] }}
                          transition={{ delay: 0.4 }}
                        >
                          🎉
                        </motion.div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-base lg:text-lg font-semibold text-foreground">Deal Closed!</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <span className="text-2xl lg:text-3xl font-bold text-foreground">$4,500</span>
                          <span className="ml-2">• 3 days from first contact</span>
                        </p>
                      </div>

                      <motion.div
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-400 text-white font-semibold text-sm shadow-lg shadow-amber-500/30"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        Won
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom metrics bar */}
            <motion.div
              className="flex items-center justify-center gap-6 lg:gap-10 mt-6 pt-5 border-t border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { label: "Response Rate", value: "98%", icon: MessageCircle },
                { label: "Avg. Close Time", value: "3 days", icon: Zap },
                { label: "Revenue", value: "+340%", icon: TrendingUp },
              ].map((metric) => (
                <div key={metric.label} className="flex items-center gap-2 text-center">
                  <metric.icon className="w-4 h-4 text-primary hidden lg:block" />
                  <div>
                    <p className="text-sm lg:text-base font-bold text-foreground">{metric.value}</p>
                    <p className="text-[10px] lg:text-xs text-muted-foreground/60">{metric.label}</p>
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
