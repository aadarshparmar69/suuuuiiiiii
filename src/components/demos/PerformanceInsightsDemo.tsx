import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Users, MessageCircle, Target, DollarSign } from "lucide-react";

interface Metric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  trend: number;
  icon: React.ElementType;
  color: string;
}

const metrics: Metric[] = [
  { id: "1", label: "Response Rate", value: 87, suffix: "%", trend: 12, icon: MessageCircle, color: "text-blue-500" },
  { id: "2", label: "Leads Converted", value: 156, suffix: "", trend: 23, icon: Target, color: "text-emerald-500" },
  { id: "3", label: "Active Leads", value: 342, suffix: "", trend: -5, icon: Users, color: "text-purple-500" },
  { id: "4", label: "Revenue", value: 47500, suffix: "", trend: 18, icon: DollarSign, color: "text-amber-500" },
];

const chartData = [
  { month: "Jan", value: 65 },
  { month: "Feb", value: 72 },
  { month: "Mar", value: 68 },
  { month: "Apr", value: 85 },
  { month: "May", value: 92 },
  { month: "Jun", value: 87 },
];

const filters = ["7 days", "30 days", "90 days", "1 year"];

export const PerformanceInsightsDemo = () => {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});
  const [activeFilter, setActiveFilter] = useState("30 days");
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumbers = () => {
    metrics.forEach((metric) => {
      let current = 0;
      const increment = metric.value / 40;
      const interval = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          current = metric.value;
          clearInterval(interval);
        }
        setAnimatedValues((prev) => ({ ...prev, [metric.id]: Math.round(current) }));
      }, 25);
    });
  };

  const formatValue = (value: number, id: string) => {
    if (id === "4") {
      return `$${(value / 1000).toFixed(1)}k`;
    }
    return value.toString();
  };

  const maxChartValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div ref={containerRef} className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-4 sm:p-6">
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="font-display font-bold text-foreground">Performance Insights</h4>
          <p className="text-sm text-muted-foreground">Track your team's success metrics</p>
        </div>
        <div className="flex gap-1 p-1 bg-muted/50 rounded-lg">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setHasAnimated(false);
                setAnimatedValues({});
                setTimeout(animateNumbers, 100);
              }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeFilter === filter
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const displayValue = animatedValues[metric.id] ?? 0;

          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-xl p-4 border border-border/50"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${metric.color}`} />
                <div
                  className={`flex items-center gap-0.5 text-[10px] font-medium ${
                    metric.trend > 0 ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {metric.trend > 0 ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {Math.abs(metric.trend)}%
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {formatValue(displayValue, metric.id)}
                {metric.suffix}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="bg-background rounded-xl p-4 border border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h5 className="font-medium text-sm text-foreground">Conversion Trend</h5>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Conversion Rate</span>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end justify-between gap-2 sm:gap-4 h-[140px]">
          {chartData.map((data, index) => {
            const height = (data.value / maxChartValue) * 100;

            return (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  className="w-full bg-primary/20 rounded-t-md relative overflow-hidden group cursor-pointer"
                  initial={{ height: 0 }}
                  animate={{ height: hasAnimated ? `${height}%` : 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary"
                    initial={{ y: "100%" }}
                    animate={{ y: hasAnimated ? 0 : "100%" }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  />

                  {/* Hover tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {data.value}%
                  </div>
                </motion.div>
                <span className="text-[10px] text-muted-foreground">{data.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="text-center p-3 bg-background rounded-lg border border-border/50">
          <p className="text-lg font-bold text-primary">2.3x</p>
          <p className="text-[10px] text-muted-foreground">Faster Response</p>
        </div>
        <div className="text-center p-3 bg-background rounded-lg border border-border/50">
          <p className="text-lg font-bold text-emerald-500">47%</p>
          <p className="text-[10px] text-muted-foreground">More Conversions</p>
        </div>
        <div className="text-center p-3 bg-background rounded-lg border border-border/50">
          <p className="text-lg font-bold text-purple-500">12h</p>
          <p className="text-[10px] text-muted-foreground">Avg. Time Saved</p>
        </div>
      </div>
    </div>
  );
};
