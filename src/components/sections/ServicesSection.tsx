import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  MessageCircle, 
  Brain, 
  CheckCircle2,
  Clock,
  Bell,
  Send
} from "lucide-react";

const services = [
  {
    id: 1,
    badge: "WhatsApp Integration",
    title: "WhatsApp-First Follow-ups",
    description:
      "Connect with leads where they actually respond. Our WhatsApp Business API integration ensures your follow-ups get 3x higher open rates than email.",
    tags: ["WhatsApp Business API", "Auto-responses", "Rich Media"],
    visual: "whatsapp",
  },
  {
    id: 2,
    badge: "AI-Powered",
    title: "Smart Message Suggestions",
    description:
      "Our AI analyzes lead behavior and crafts personalized messages that sound like you wrote them. Never stare at a blank screen again.",
    tags: ["GPT-Powered", "Personalized", "Context-Aware"],
    visual: "ai",
    reversed: true,
  },
  {
    id: 3,
    badge: "Sales Automation",
    title: "Never Miss a Follow-up",
    description:
      "Automated sequences that nurture leads at the perfect time. AI determines the optimal moment to reach each prospect based on their engagement patterns.",
    tags: ["Smart Scheduling", "Sequences", "Reminders"],
    visual: "automation",
  },
];

const WhatsAppMockup = () => {
  const mockupRef = useRef(null);
  const isInView = useInView(mockupRef, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={mockupRef}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-card border border-border rounded-2xl p-6 shadow-xl shadow-black/10"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm font-semibold text-foreground">WhatsApp Messages</span>
          <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-semibold">
            3 Active
          </span>
        </div>
      </div>
      
      <div className="space-y-3">
        {[
          { name: "Sarah M.", message: "Thanks for the follow-up! Let's schedule a call", time: "Just now", status: "replied" },
          { name: "Mike R.", message: "Following up on our proposal discussion...", time: "2 min ago", status: "sent" },
          { name: "Lisa K.", message: "Hi! Just checking in about your interest...", time: "5 min ago", status: "delivered" },
        ].map((chat, i) => (
          <motion.div
            key={chat.name}
            initial={{ opacity: 0, x: -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
            whileHover={{ x: 4 }}
            className="flex items-center justify-between p-3.5 bg-secondary/40 rounded-xl cursor-default transition-colors hover:bg-secondary/60"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                {chat.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{chat.name}</p>
                <p className="text-[11px] text-muted-foreground truncate max-w-[180px]">{chat.message}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-muted-foreground mb-1">{chat.time}</p>
              <CheckCircle2 className={`w-4 h-4 ml-auto ${chat.status === "replied" ? "text-primary" : "text-muted-foreground/30"}`} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const AIMockup = () => {
  const mockupRef = useRef(null);
  const isInView = useInView(mockupRef, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={mockupRef}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-card border border-border rounded-2xl p-6 shadow-xl shadow-black/10"
    >
      <div className="flex items-center gap-3 mb-5">
        <motion.div 
          className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain className="w-5 h-5 text-primary" />
        </motion.div>
        <div>
          <p className="text-sm font-bold text-foreground">AI Suggestions</p>
          <p className="text-[10px] text-muted-foreground">For: Lead #2847</p>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-secondary/40 rounded-xl p-4 mb-4 border border-border/50"
      >
        <p className="text-[11px] text-muted-foreground mb-2 font-medium">Suggested follow-up:</p>
        <p className="text-sm text-foreground leading-relaxed">"Hi Sarah, I noticed you viewed our pricing page. Would you like me to walk you through the options that best fit your team size?"</p>
      </motion.div>
      
      <div className="flex flex-wrap gap-2">
        {["Use this", "Customize", "Generate new"].map((action, i) => (
          <motion.span
            key={action}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
              i === 0 ? "bg-primary/15 text-primary hover:bg-primary/25" : "bg-secondary border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {action}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const AutomationMockup = () => {
  const mockupRef = useRef(null);
  const isInView = useInView(mockupRef, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={mockupRef}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-card border border-border rounded-2xl p-6 shadow-xl shadow-black/10"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-semibold text-foreground">Follow-up Queue</span>
          <motion.span 
            className="w-2 h-2 rounded-full bg-primary" 
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
      
      <div className="space-y-3">
        {[
          { icon: Clock, title: "Send reminder to John D.", time: "In 2 hours", status: "scheduled" },
          { icon: Bell, title: "Follow-up with Emma S.", time: "Tomorrow, 9:00 AM", status: "scheduled" },
          { icon: Send, title: "Re-engage with cold leads", time: "Mon, 10:00 AM", status: "sequence" },
        ].map((task, i) => (
          <motion.div
            key={task.title}
            initial={{ opacity: 0, x: -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
            whileHover={{ x: 4 }}
            className="flex items-center justify-between p-3.5 bg-secondary/40 rounded-xl cursor-default transition-colors hover:bg-secondary/60"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <task.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{task.title}</p>
                <p className="text-[11px] text-muted-foreground">{task.time}</p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-wide">
              {task.status}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const getMockup = (visual: string) => {
  switch (visual) {
    case "whatsapp":
      return <WhatsAppMockup />;
    case "ai":
      return <AIMockup />;
    case "automation":
      return <AutomationMockup />;
    default:
      return <WhatsAppMockup />;
  }
};

export const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={sectionRef} className="py-28 lg:py-40 relative overflow-hidden">
      {/* Subtle background accent */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-[150px]" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-5"
          >
            Core Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
            AI-Powered Follow-ups via
            <br />
            <span className="gradient-text">WhatsApp</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Never lose a lead again. Our AI ensures every follow-up happens at the right time with the right message.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-24 lg:space-y-40">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                service.reversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual */}
              <div className={`${service.reversed ? "lg:order-2" : "lg:order-1"}`}>
                {getMockup(service.visual)}
              </div>

              {/* Content */}
              <div className={`${service.reversed ? "lg:order-1" : "lg:order-2"}`}>
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-5"
                >
                  {service.badge}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-tight mb-5 text-foreground"
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-muted-foreground leading-relaxed mb-8 text-lg"
                >
                  {service.description}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-wrap gap-2.5"
                >
                  {service.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                      className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium text-muted-foreground"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
