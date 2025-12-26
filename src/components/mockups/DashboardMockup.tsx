import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  MessageCircle,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";
import { LeadCard } from "./LeadCard";

const metrics = [
  {
    label: "Total Leads",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Messages Sent",
    value: "8,432",
    change: "+23.1%",
    trend: "up",
    icon: MessageCircle,
  },
  {
    label: "Response Rate",
    value: "68%",
    change: "+8.2%",
    trend: "up",
    icon: Target,
  },
  {
    label: "Conversions",
    value: "342",
    change: "+15.3%",
    trend: "up",
    icon: TrendingUp,
  },
];

const recentLeads = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    score: 92,
    status: "hot" as const,
    lastContact: "2 hours ago",
    nextFollowUp: "Today, 3:00 PM",
  },
  {
    name: "Michael Chen",
    company: "StartupXYZ",
    score: 78,
    status: "warm" as const,
    lastContact: "1 day ago",
    nextFollowUp: "Tomorrow, 10:00 AM",
  },
  {
    name: "Emily Davis",
    company: "Global Solutions",
    score: 65,
    status: "warm" as const,
    lastContact: "3 days ago",
    nextFollowUp: "Dec 28, 2:00 PM",
  },
];

const followUpsDue = [
  { name: "James Wilson", time: "10:00 AM", type: "WhatsApp" },
  { name: "Lisa Anderson", time: "11:30 AM", type: "Email" },
  { name: "Robert Taylor", time: "2:00 PM", type: "WhatsApp" },
  { name: "Amanda White", time: "4:30 PM", type: "Call" },
];

export const DashboardMockup = () => {
  return (
    <div className="bg-background/95 border border-border/50 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Bar */}
      <div className="bg-card/80 border-b border-border/50 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search leads..."
              className="bg-secondary/50 border border-border/30 rounded-lg pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground w-64 focus:outline-none focus:ring-1 focus:ring-primary/50"
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </button>
          <div className="flex items-center gap-2 pl-3 border-l border-border/50">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-xs font-semibold">
              AP
            </div>
            <span className="text-sm font-medium text-foreground">Aadarsh</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/60 border border-border/30 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-primary" />
                </div>
                <div
                  className={`flex items-center gap-1 text-xs font-medium ${
                    metric.trend === "up" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {metric.trend === "up" ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {metric.change}
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Leads */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Recent Leads</h3>
              <button className="text-xs text-primary hover:underline">
                View all
              </button>
            </div>
            <div className="grid gap-3">
              {recentLeads.map((lead, index) => (
                <LeadCard key={lead.name} {...lead} index={index} />
              ))}
            </div>
          </div>

          {/* Follow-ups Due */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Due Today</h3>
              <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                {followUpsDue.length} pending
              </span>
            </div>
            <div className="bg-card/60 border border-border/30 rounded-xl divide-y divide-border/20">
              {followUpsDue.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 flex items-center justify-between hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-foreground">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      item.type === "WhatsApp"
                        ? "bg-green-500/10 text-green-400"
                        : item.type === "Email"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-orange-500/10 text-orange-400"
                    }`}
                  >
                    {item.type}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
