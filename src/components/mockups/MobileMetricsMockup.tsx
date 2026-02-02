import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, Target, Users, Zap } from "lucide-react";

const metrics = [
  { label: "Conversion Rate", value: "32%", change: "+8%", icon: Target },
  { label: "Response Time", value: "2.4h", change: "-45%", icon: Zap },
  { label: "Active Leads", value: "847", change: "+12%", icon: Users },
];

const weeklyData = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 82 },
  { day: "Thu", value: 74 },
  { day: "Fri", value: 91 },
  { day: "Sat", value: 68 },
  { day: "Sun", value: 85 },
];

export const MobileMetricsMockup = () => {
  const maxValue = Math.max(...weeklyData.map(d => d.value));

  return (
    <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-accent-foreground" />
          </div>
          <span className="text-sm font-semibold text-foreground">Performance</span>
        </div>
        <span className="text-[10px] text-muted-foreground">This Week</span>
      </div>

      <div className="p-3 space-y-3">
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-2">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/20 border border-border/30 rounded-lg p-2 text-center"
            >
              <metric.icon className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-sm font-bold text-foreground">{metric.value}</p>
              <div className="flex items-center justify-center gap-0.5">
                <ArrowUpRight className="w-2.5 h-2.5 text-green-500" />
                <span className="text-[10px] text-green-500">{metric.change}</span>
              </div>
              <p className="text-[9px] text-muted-foreground mt-0.5">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-secondary/20 border border-border/30 rounded-lg p-3">
          <p className="text-[10px] font-medium text-muted-foreground mb-2">
            Weekly Conversions
          </p>
          <div className="flex items-end justify-between gap-1 h-16">
            {weeklyData.map((data, index) => (
              <motion.div
                key={data.day}
                initial={{ height: 0 }}
                animate={{ height: `${(data.value / maxValue) * 100}%` }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <div
                  className="w-full bg-primary/80 rounded-t-sm"
                  style={{ height: "100%" }}
                />
                <span className="text-[8px] text-muted-foreground">{data.day}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2.5 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <ArrowUpRight className="w-3 h-3 text-green-500" />
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">+47% vs last week</p>
            <p className="text-[10px] text-muted-foreground">Conversion improvement</p>
          </div>
        </div>
      </div>
    </div>
  );
};
