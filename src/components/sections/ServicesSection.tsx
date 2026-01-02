import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MessageCircle, 
  Brain, 
  TrendingUp,
  CheckCircle2,
  Clock,
  Users,
  Bell,
  BarChart3,
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

const WhatsAppMockup = () => (
  <div className="bg-card border border-border rounded-2xl p-5 shadow-xl">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <MessageCircle className="w-5 h-5 text-primary" />
        <span className="text-xs font-medium text-foreground">WhatsApp Messages</span>
        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold">
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
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
              {chat.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{chat.name}</p>
              <p className="text-[10px] text-muted-foreground truncate max-w-[180px]">{chat.message}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] text-muted-foreground">{chat.time}</p>
            <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 ml-auto ${chat.status === "replied" ? "text-primary" : "text-muted-foreground/40"}`} />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const AIMockup = () => (
  <div className="bg-card border border-border rounded-2xl p-5 shadow-xl">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <Brain className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">AI Suggestions</p>
        <p className="text-[10px] text-muted-foreground">For: Lead #2847</p>
      </div>
    </div>
    
    <div className="bg-secondary/50 rounded-xl p-4 mb-3">
      <p className="text-xs text-muted-foreground mb-2">Suggested follow-up:</p>
      <p className="text-sm text-foreground">"Hi Sarah, I noticed you viewed our pricing page. Would you like me to walk you through the options that best fit your team size?"</p>
    </div>
    
    <div className="flex flex-wrap gap-2">
      {["Use this", "Customize", "Generate new"].map((action, i) => (
        <span
          key={action}
          className={`px-3 py-1.5 rounded-full text-xs font-medium ${
            i === 0 ? "bg-primary/10 text-primary" : "bg-secondary border border-border text-muted-foreground"
          }`}
        >
          {action}
        </span>
      ))}
    </div>
  </div>
);

const AutomationMockup = () => (
  <div className="bg-card border border-border rounded-2xl p-5 shadow-xl">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-foreground">Follow-up Queue</span>
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
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
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <task.icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{task.title}</p>
              <p className="text-[10px] text-muted-foreground">{task.time}</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] font-medium">
            {task.status}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

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

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Core Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
            AI-Powered Follow-ups via
            <br />
            <span className="gradient-text">WhatsApp</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Never lose a lead again. Our AI ensures every follow-up happens at the right time with the right message.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-20 lg:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                service.reversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual */}
              <div className={`${service.reversed ? "lg:order-2" : "lg:order-1"}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {getMockup(service.visual)}
                </motion.div>
              </div>

              {/* Content */}
              <div className={`${service.reversed ? "lg:order-1" : "lg:order-2"}`}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                  {service.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-tight mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
