import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  MessageCircle,
  Target,
  ArrowUpRight,
} from "lucide-react";

const metrics = [
  {
    label: "Leads",
    value: "2,847",
    change: "+12.5%",
    icon: Users,
  },
  {
    label: "Messages",
    value: "8,432",
    change: "+23.1%",
    icon: MessageCircle,
  },
  {
    label: "Response",
    value: "68%",
    change: "+8.2%",
    icon: Target,
  },
  {
    label: "Converted",
    value: "342",
    change: "+15.3%",
    icon: TrendingUp,
  },
];

const recentLeads = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    score: 92,
    status: "hot",
  },
  {
    name: "Michael Chen",
    company: "StartupXYZ",
    score: 78,
    status: "warm",
  },
];

export const MobileDashboardMockup = () => {
  return (
    <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold text-foreground">Dashboard</span>
        </div>
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
          AP
        </div>
      </div>

      <div className="p-3 space-y-3">
        {/* Metrics - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-2">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-secondary/30 border border-border/30 rounded-lg p-2.5"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="w-6 h-6 rounded-md bg-primary/15 flex items-center justify-center">
                  <metric.icon className="w-3 h-3 text-primary" />
                </div>
                <div className="flex items-center gap-0.5 text-[10px] font-medium text-green-500">
                  <ArrowUpRight className="w-2.5 h-2.5" />
                  {metric.change}
                </div>
              </div>
              <p className="text-base font-bold text-foreground">{metric.value}</p>
              <p className="text-[10px] text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Leads */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">Top Leads</span>
            <span className="text-[10px] text-primary">View all</span>
          </div>
          {recentLeads.map((lead, index) => (
            <motion.div
              key={lead.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-secondary/20 border border-border/30 rounded-lg p-2.5 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                  {lead.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">{lead.name}</p>
                  <p className="text-[10px] text-muted-foreground">{lead.company}</p>
                </div>
              </div>
              <div className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                lead.status === "hot" 
                  ? "bg-red-500/15 text-red-400" 
                  : "bg-amber-500/15 text-amber-400"
              }`}>
                {lead.score}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
