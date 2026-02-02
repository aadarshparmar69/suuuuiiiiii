import { motion } from "framer-motion";
import { Brain, Sparkles, Send, Clock, Target } from "lucide-react";

const insights = [
  { icon: Target, label: "Lead Score", value: "92/100" },
  { icon: Clock, label: "Best Time", value: "10:30 AM" },
];

export const MobileAIMockup = () => {
  return (
    <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-primary/10 border-b border-primary/20 px-4 py-3 flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
          <Brain className="w-3.5 h-3.5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">AI Composer</p>
          <p className="text-[10px] text-primary">Personalized for Sarah</p>
        </div>
      </div>

      <div className="p-3 space-y-3">
        {/* AI Insights */}
        <div className="grid grid-cols-2 gap-2">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/30 border border-border/30 rounded-lg p-2.5 flex items-center gap-2"
            >
              <insight.icon className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs font-bold text-foreground">{insight.value}</p>
                <p className="text-[9px] text-muted-foreground">{insight.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analysis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-[10px] text-muted-foreground"
        >
          <Sparkles className="w-3 h-3 text-primary" />
          <span>Based on: Viewed pricing 3x, Growth Plan interest</span>
        </motion.div>

        {/* Generated Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-secondary/30 border border-border/30 rounded-lg p-3"
        >
          <p className="text-xs text-foreground leading-relaxed">
            Hi Sarah, I noticed you've been exploring our Growth plan. Based on your team size, this would give you unlimited follow-ups + WhatsApp integration. Want me to set up a quick 15-min demo?
          </p>
        </motion.div>

        {/* Actions */}
        <div className="flex gap-2">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center gap-1.5"
          >
            <Send className="w-3 h-3" />
            Send Now
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 }}
            className="px-4 py-2 rounded-lg bg-secondary text-muted-foreground text-xs font-semibold"
          >
            Edit
          </motion.button>
        </div>
      </div>
    </div>
  );
};
