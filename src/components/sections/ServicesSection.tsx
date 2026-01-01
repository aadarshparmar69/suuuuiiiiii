import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Workflow, 
  Bot, 
  TrendingUp,
  CheckCircle2,
  Clock,
  Users,
  Mail,
  BarChart3
} from "lucide-react";

const services = [
  {
    id: 1,
    badge: "Workflow Automation",
    title: "Automate repetitive tasks",
    description:
      "We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains, saving time and cutting down errors.",
    tags: ["Internal Task Bots", "100+ Automations"],
    visual: "tasks",
  },
  {
    id: 2,
    badge: "AI Assistant",
    title: "Delegate Daily Tasks",
    description:
      "From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.",
    tags: ["Summaries", "Scheduling", "Many more"],
    visual: "assistant",
    reversed: true,
  },
  {
    id: 3,
    badge: "Sales & Marketing",
    title: "Accelerate Sales Growth",
    description:
      "AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.",
    tags: ["Leads", "Content", "Social post"],
    visual: "sales",
  },
];

const TasksMockup = () => (
  <div className="bg-card border border-border rounded-2xl p-5 shadow-xl">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground">All Tasks</span>
        <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold">
          Waiting for approval
        </span>
      </div>
    </div>
    
    <div className="space-y-3">
      {[
        { icon: BarChart3, title: "Payroll management", status: "Pending", time: "2 days ago" },
        { icon: Users, title: "Employee Training", status: "In Progress", time: "1 day ago" },
        { icon: Mail, title: "Social media post", status: "Completed", time: "Just now" },
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
          <CheckCircle2 className={`w-4 h-4 ${task.status === "Completed" ? "text-primary" : "text-muted-foreground/30"}`} />
        </motion.div>
      ))}
    </div>
  </div>
);

const AssistantMockup = () => (
  <div className="bg-card border border-border rounded-2xl p-5 shadow-xl">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <Bot className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">AI Assistant</p>
        <p className="text-[10px] text-muted-foreground">Online</p>
      </div>
    </div>
    
    <div className="bg-secondary/50 rounded-xl p-4 mb-3">
      <p className="text-sm text-muted-foreground">What can I help with?</p>
    </div>
    
    <div className="flex flex-wrap gap-2">
      {["Schedule meeting", "Draft email", "Summarize notes"].map((action) => (
        <span
          key={action}
          className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
        >
          {action}
        </span>
      ))}
    </div>
  </div>
);

const SalesMockup = () => (
  <div className="bg-card border border-border rounded-2xl p-5 shadow-xl">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-foreground">Email Sending</span>
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>
    </div>
    
    <div className="flex gap-4 mb-4">
      {["Linkedin", "Fiverr", "Twitter"].map((platform, i) => (
        <div
          key={platform}
          className={`px-3 py-1.5 rounded-full text-xs font-medium ${
            i === 0 ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
          }`}
        >
          {platform}
        </div>
      ))}
    </div>
    
    <div className="space-y-3">
      <div className="p-3 bg-secondary/50 rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-[10px] font-semibold text-accent">
              JD
            </div>
            <span className="text-sm font-medium text-foreground">Jack David</span>
          </div>
          <CheckCircle2 className="w-4 h-4 text-primary" />
        </div>
        <p className="text-xs text-muted-foreground">Connection request sent</p>
      </div>
    </div>
  </div>
);

const getMockup = (visual: string) => {
  switch (visual) {
    case "tasks":
      return <TasksMockup />;
    case "assistant":
      return <AssistantMockup />;
    case "sales":
      return <SalesMockup />;
    default:
      return <TasksMockup />;
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
            AI Solutions That Take Your
            <br />
            Business to the Next Level
          </h2>
          <p className="text-lg text-muted-foreground">
            We design, develop, and implement automation tools that help you work smarter, not harder.
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
