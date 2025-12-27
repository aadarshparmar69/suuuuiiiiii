import { motion } from "framer-motion";
import { Building2, Briefcase, Home, Wrench } from "lucide-react";

const useCaseIcons = [
  { icon: Building2, label: "Agencies", delay: 0 },
  { icon: Briefcase, label: "Consultants", delay: 0.1 },
  { icon: Home, label: "Real Estate", delay: 0.2 },
  { icon: Wrench, label: "Services", delay: 0.3 },
];

export const UseCaseHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Use Cases
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              See how teams{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                close more deals
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8">
              Watch Follow IQ in action across different industries. Real workflows, real results.
            </p>

            {/* Use Case Quick Links */}
            <div className="flex flex-wrap gap-3">
              {useCaseIcons.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={`#${item.label.toLowerCase().replace(" ", "-")}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + item.delay }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 group"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Animated Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex items-center gap-2 p-4 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">Follow IQ Dashboard</span>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Active Leads", value: "247", change: "+12%" },
                    { label: "Follow-ups Due", value: "18", change: "Today" },
                    { label: "Closed This Week", value: "34", change: "+23%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="bg-background/50 rounded-lg p-3"
                    >
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="text-xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-primary">{stat.change}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Lead Cards */}
                <div className="space-y-3">
                  {[
                    { name: "Sarah Mitchell", company: "TechCorp", status: "Hot", time: "2min ago" },
                    { name: "James Rodriguez", company: "StartupXYZ", status: "Follow-up", time: "1hr ago" },
                    { name: "Emily Chen", company: "DesignPro", status: "New", time: "3hr ago" },
                  ].map((lead, i) => (
                    <motion.div
                      key={lead.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="flex items-center justify-between p-3 bg-background/30 rounded-lg border border-border/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <span className="text-xs font-medium text-foreground">
                            {lead.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{lead.name}</p>
                          <p className="text-xs text-muted-foreground">{lead.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          lead.status === "Hot" ? "bg-destructive/20 text-destructive" :
                          lead.status === "Follow-up" ? "bg-accent/20 text-accent" :
                          "bg-primary/20 text-primary"
                        }`}>
                          {lead.status}
                        </span>
                        <span className="text-xs text-muted-foreground">{lead.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -left-4 bg-card border border-border/50 rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs">AI</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">AI Suggestion</p>
                  <p className="text-sm font-medium text-foreground">Message ready to send</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
