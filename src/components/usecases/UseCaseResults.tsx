import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, MessageSquare, Clock, CheckCircle2 } from "lucide-react";

interface Metric {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const metrics: Metric[] = [
  { icon: TrendingUp, value: 300, suffix: "%", label: "Average ROI Increase", color: "text-primary" },
  { icon: Users, value: 50000, suffix: "+", label: "Leads Processed", color: "text-accent" },
  { icon: MessageSquare, value: 2, suffix: "M+", label: "Messages Sent", color: "text-[hsl(142,70%,45%)]" },
  { icon: Clock, value: 95, suffix: "%", label: "Response Rate", color: "text-primary" },
  { icon: CheckCircle2, value: 40, suffix: "%", label: "Higher Close Rate", color: "text-accent" },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, inView]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const UseCaseResults = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Numbers that{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              speak for themselves
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from businesses using Follow IQ to automate their follow-ups.
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center h-full hover:border-primary/50 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-card flex items-center justify-center ${metric.color}`}
                >
                  <metric.icon className="w-6 h-6" />
                </motion.div>
                <p className={`text-3xl lg:text-4xl font-bold mb-2 ${metric.color}`}>
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} inView={isInView} />
                </p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-display font-bold text-foreground">Performance Over Time</h3>
              <p className="text-sm text-muted-foreground">Average conversion improvement after implementing Follow IQ</p>
            </div>
            <div className="flex gap-4">
              {["Before", "After"].map((label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${i === 0 ? "bg-muted" : "bg-primary"}`} />
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Simple Bar Chart */}
          <div className="grid grid-cols-4 gap-8">
            {[
              { label: "Week 1", before: 20, after: 35 },
              { label: "Week 2", before: 25, after: 52 },
              { label: "Week 3", before: 22, after: 68 },
              { label: "Week 4", before: 28, after: 85 },
            ].map((week, i) => (
              <div key={week.label} className="text-center">
                <div className="h-40 flex items-end justify-center gap-3 mb-4">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${week.before}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="w-8 bg-muted/50 rounded-t-lg"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${week.after}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="w-8 bg-gradient-to-t from-primary to-accent rounded-t-lg"
                  />
                </div>
                <p className="text-sm font-medium text-foreground">{week.label}</p>
                <p className="text-xs text-muted-foreground">+{week.after - week.before}% improvement</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
