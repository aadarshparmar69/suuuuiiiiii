import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const barData = [
  { month: "Jul", value: 45 },
  { month: "Aug", value: 62 },
  { month: "Sep", value: 58 },
  { month: "Oct", value: 78 },
  { month: "Nov", value: 85 },
  { month: "Dec", value: 92 },
];

const conversionData = [
  { label: "Leads Captured", value: 2847, percentage: 100 },
  { label: "Contacted", value: 2562, percentage: 90 },
  { label: "Responded", value: 1935, percentage: 68 },
  { label: "Qualified", value: 997, percentage: 35 },
  { label: "Converted", value: 342, percentage: 12 },
];

export const MetricsChartMockup = () => {
  const maxValue = Math.max(...barData.map((d) => d.value));

  return (
    <div className="bg-background/95 border border-border/50 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-card/80 border-b border-border/50 px-6 py-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">Conversion Analytics</h3>
          <p className="text-xs text-muted-foreground">Last 6 months performance</p>
        </div>
        <div className="flex items-center gap-2 text-green-400">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+24.5% vs last period</span>
        </div>
      </div>

      <div className="p-6 grid lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">
            Response Rate Trend
          </h4>
          <div className="flex items-end justify-between gap-3 h-40">
            {barData.map((item, index) => (
              <motion.div
                key={item.month}
                initial={{ height: 0 }}
                animate={{ height: `${(item.value / maxValue) * 100}%` }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div className="w-full relative">
                  <div
                    className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg relative overflow-hidden"
                    style={{ height: `${(item.value / maxValue) * 140}px` }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-transparent to-white"
                    />
                  </div>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground">
                    {item.value}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-3 px-1">
            {barData.map((item) => (
              <span key={item.month} className="text-[10px] text-muted-foreground">
                {item.month}
              </span>
            ))}
          </div>
        </div>

        {/* Funnel */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">
            Conversion Funnel
          </h4>
          <div className="space-y-2">
            {conversionData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      {item.value.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                    />
                  </div>
                </div>
                <span className="text-xs text-muted-foreground w-10 text-right">
                  {item.percentage}%
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Conversion Rate</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">12%</span>
              <div className="flex items-center gap-0.5 text-green-400 text-xs">
                <ArrowUpRight className="w-3 h-3" />
                <span>+3.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
