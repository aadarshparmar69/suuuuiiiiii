import { motion } from "framer-motion";
import { Clock, MessageCircle, TrendingUp } from "lucide-react";

const pipelineData = [
  { stage: "New", count: 3, value: "$35K", color: "bg-blue-500" },
  { stage: "Contacted", count: 2, value: "$42K", color: "bg-amber-500" },
  { stage: "Qualified", count: 3, value: "$105K", color: "bg-purple-500" },
  { stage: "Proposal", count: 1, value: "$56K", color: "bg-orange-500" },
  { stage: "Won", count: 2, value: "$205K", color: "bg-green-500" },
];

const topLeads = [
  { name: "Sarah Johnson", company: "TechCorp", value: "$24K", stage: "Qualified", hasWhatsApp: true },
  { name: "Michael Chen", company: "StartupXYZ", value: "$32K", stage: "Proposal", hasWhatsApp: true },
  { name: "Emily Davis", company: "Global Sol.", value: "$45K", stage: "Contacted", hasWhatsApp: false },
];

export const MobilePipelineMockup = () => {
  return (
    <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border/30 px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-foreground">Lead Pipeline</span>
          <span className="text-xs text-muted-foreground">11 leads</span>
        </div>
        {/* Pipeline stages as a horizontal bar */}
        <div className="flex rounded-full overflow-hidden h-2">
          {pipelineData.map((stage) => (
            <motion.div
              key={stage.stage}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`${stage.color} flex-1`}
              style={{ flex: stage.count }}
            />
          ))}
        </div>
      </div>

      <div className="p-3 space-y-3">
        {/* Stage Summary */}
        <div className="grid grid-cols-5 gap-1">
          {pipelineData.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="text-center"
            >
              <div className={`w-2 h-2 ${stage.color} rounded-full mx-auto mb-1`} />
              <p className="text-[10px] font-medium text-foreground">{stage.count}</p>
              <p className="text-[8px] text-muted-foreground truncate">{stage.stage}</p>
            </motion.div>
          ))}
        </div>

        {/* Total Value */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-xs text-foreground">Total Pipeline Value</span>
          </div>
          <span className="text-sm font-bold text-primary">$443K</span>
        </div>

        {/* Top Leads */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
            Priority Leads
          </span>
          {topLeads.map((lead, index) => (
            <motion.div
              key={lead.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-secondary/20 border border-border/30 rounded-lg p-2 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[9px] font-bold text-primary">
                  {lead.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-medium text-foreground truncate">{lead.name}</p>
                    {lead.hasWhatsApp && (
                      <MessageCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[10px] text-muted-foreground">{lead.company}</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-primary flex-shrink-0">{lead.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
