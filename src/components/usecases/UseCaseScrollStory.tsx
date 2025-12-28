import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Briefcase, Home, Wrench, MessageSquare, Clock, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

interface UseCaseData {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  results: { value: string; label: string }[];
  mockupData: {
    leadName: string;
    company: string;
    value: string;
    message: string;
  };
}

const useCases: UseCaseData[] = [
  {
    id: "agencies",
    icon: Building2,
    title: "Marketing Agencies",
    tagline: "Convert campaign leads on autopilot",
    problem: "Your campaigns generate hundreds of leads, but your team can't follow up fast enough.",
    solution: "Follow IQ automatically nurtures every lead with personalized WhatsApp sequences.",
    results: [
      { value: "3x", label: "Faster Response" },
      { value: "45%", label: "Higher ROI" },
      { value: "80%", label: "Less Manual Work" },
    ],
    mockupData: {
      leadName: "Marketing Pro Agency",
      company: "Campaign: Summer Sale",
      value: "$12,500",
      message: "Hi! Thanks for your interest in our marketing services. I saw you downloaded our case study...",
    },
  },
  {
    id: "consultants",
    icon: Briefcase,
    title: "Consultants & Coaches",
    tagline: "Fill your calendar with qualified prospects",
    problem: "Business development takes time you don't have. Leads from webinars fall through the cracks.",
    solution: "Follow IQ handles all your outreach so you can focus on delivering results.",
    results: [
      { value: "2x", label: "More Calls Booked" },
      { value: "60%", label: "Fewer No-shows" },
      { value: "4hrs", label: "Saved Weekly" },
    ],
    mockupData: {
      leadName: "Alex Thompson",
      company: "Leadership Webinar Attendee",
      value: "$5,000",
      message: "Great insights from yesterday's webinar! I'd love to schedule a discovery call...",
    },
  },
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate Professionals",
    tagline: "Never miss a property lead",
    problem: "Real estate is competitive. When a hot buyer reaches out, every minute counts.",
    solution: "Follow IQ responds instantly and nurtures leads until they're ready to talk.",
    results: [
      { value: "5x", label: "Faster Response" },
      { value: "35%", label: "More Listings" },
      { value: "90%", label: "Follow-up Rate" },
    ],
    mockupData: {
      leadName: "Jennifer Davis",
      company: "Interested in: 123 Oak Street",
      value: "$450,000",
      message: "Hi Jennifer! I saw you inquired about the Oak Street property. It's a beautiful 3-bedroom...",
    },
  },
  {
    id: "services",
    icon: Wrench,
    title: "Service Businesses",
    tagline: "Convert quotes into customers",
    problem: "You send quotes, but prospects go silent. You're too busy working to chase every lead.",
    solution: "Follow IQ automatically follows up on every quote and keeps your pipeline warm.",
    results: [
      { value: "40%", label: "Higher Close Rate" },
      { value: "5x", label: "More Reviews" },
      { value: "100%", label: "Lead Coverage" },
    ],
    mockupData: {
      leadName: "Home Renovation Co.",
      company: "Quote: Kitchen Remodel",
      value: "$28,000",
      message: "Hi! Following up on the kitchen remodel quote I sent last week. Do you have any questions?",
    },
  },
];

const UseCaseSection = ({ useCase, index }: { useCase: UseCaseData; index: number }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [animationStep, setAnimationStep] = useState(0);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value > 0.3 && value < 0.7) {
        const step = Math.min(Math.floor((value - 0.3) / 0.1), 4);
        setAnimationStep(step);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      id={useCase.id}
      className={`py-24 lg:py-32 flex items-center ${
        index % 2 === 1 ? "bg-card/20" : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          style={{ opacity, y }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content Side */}
          <div className={index % 2 === 1 ? "lg:order-2" : ""}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <useCase.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                    {useCase.title}
                  </h2>
                  <p className="text-primary">{useCase.tagline}</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                  <p className="text-sm font-medium text-destructive mb-1">The Problem</p>
                  <p className="text-muted-foreground">{useCase.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm font-medium text-primary mb-1">The Solution</p>
                  <p className="text-muted-foreground">{useCase.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4">
                {useCase.results.map((result, i) => (
                  <motion.div
                    key={result.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-xl bg-card/50 border border-border/50"
                  >
                    <p className="text-2xl lg:text-3xl font-bold text-primary">{result.value}</p>
                    <p className="text-xs text-muted-foreground">{result.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive Mockup Side */}
          <div className={index % 2 === 1 ? "lg:order-1" : ""}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Dashboard Mockup */}
              <div className="bg-card/90 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-accent/60" />
                      <div className="w-3 h-3 rounded-full bg-primary/60" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{useCase.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Live</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Step 1: Lead Card */}
                  <motion.div
                    animate={{
                      opacity: animationStep >= 0 ? 1 : 0.3,
                      scale: animationStep === 0 ? 1.02 : 1,
                    }}
                    className="p-4 rounded-xl bg-background/50 border border-border/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{useCase.mockupData.leadName}</p>
                          <p className="text-xs text-muted-foreground">{useCase.mockupData.company}</p>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-primary">{useCase.mockupData.value}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Zap className="w-3 h-3 text-accent" />
                      <span>Lead entered pipeline</span>
                    </div>
                  </motion.div>

                  {/* Step 2: Follow-up Reminder */}
                  <motion.div
                    animate={{
                      opacity: animationStep >= 1 ? 1 : 0.3,
                      scale: animationStep === 1 ? 1.02 : 1,
                      x: animationStep >= 1 ? 0 : 20,
                    }}
                    className="p-4 rounded-xl bg-accent/5 border border-accent/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-accent" />
                      <p className="font-medium text-foreground">Follow-up Due</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Send personalized message</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">In 2 min</span>
                    </div>
                  </motion.div>

                  {/* Step 3: AI Message */}
                  <motion.div
                    animate={{
                      opacity: animationStep >= 2 ? 1 : 0.3,
                      scale: animationStep === 2 ? 1.02 : 1,
                      x: animationStep >= 2 ? 0 : 20,
                    }}
                    className="p-4 rounded-xl bg-primary/5 border border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">AI</span>
                      </div>
                      <p className="font-medium text-foreground">AI Message Ready</p>
                    </div>
                    <motion.p
                      animate={{
                        opacity: animationStep >= 2 ? 1 : 0,
                      }}
                      className="text-sm text-muted-foreground italic"
                    >
                      "{useCase.mockupData.message}"
                    </motion.p>
                  </motion.div>

                  {/* Step 4: WhatsApp Sent */}
                  <motion.div
                    animate={{
                      opacity: animationStep >= 3 ? 1 : 0.3,
                      scale: animationStep === 3 ? 1.02 : 1,
                      x: animationStep >= 3 ? 0 : 20,
                    }}
                    className="p-4 rounded-xl bg-[hsl(142,70%,45%)]/10 border border-[hsl(142,70%,45%)]/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-[hsl(142,70%,45%)]" />
                      <div>
                        <p className="font-medium text-foreground">WhatsApp Message Sent</p>
                        <p className="text-xs text-muted-foreground">Delivered • Read ✓✓</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 5: Deal Closed */}
                  <motion.div
                    animate={{
                      opacity: animationStep >= 4 ? 1 : 0.3,
                      scale: animationStep === 4 ? 1.02 : 1,
                      x: animationStep >= 4 ? 0 : 20,
                    }}
                    className="p-4 rounded-xl bg-primary/10 border border-primary/40 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                        <div>
                          <p className="font-bold text-foreground">Deal Closed!</p>
                          <p className="text-xs text-muted-foreground">Automatically tracked</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">{useCase.mockupData.value}</p>
                        <p className="text-xs text-muted-foreground">Won</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
                {[0, 1, 2, 3, 4].map((step) => (
                  <motion.div
                    key={step}
                    animate={{
                      scale: animationStep === step ? 1.5 : 1,
                      backgroundColor: animationStep >= step ? "hsl(var(--primary))" : "hsl(var(--muted))",
                    }}
                    className="w-2 h-2 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const UseCaseScrollStory = () => {
  return (
    <div className="relative">
      {useCases.map((useCase, index) => (
        <UseCaseSection key={useCase.id} useCase={useCase} index={index} />
      ))}
    </div>
  );
};
