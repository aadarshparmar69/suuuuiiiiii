import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Calendar, MoreHorizontal, GripVertical, Star } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  company: string;
  value: string;
  score: number;
  avatar: string;
  lastContact: string;
}

const initialLeads: Record<string, Lead[]> = {
  new: [
    { id: "1", name: "Sarah Chen", company: "TechFlow Inc", value: "$12,500", score: 85, avatar: "SC", lastContact: "2h ago" },
    { id: "2", name: "Marcus Johnson", company: "DataSync", value: "$8,200", score: 72, avatar: "MJ", lastContact: "5h ago" },
  ],
  contacted: [
    { id: "3", name: "Emily Rodriguez", company: "CloudBase", value: "$15,800", score: 91, avatar: "ER", lastContact: "1d ago" },
  ],
  qualified: [
    { id: "4", name: "James Wilson", company: "Innovate AI", value: "$22,000", score: 94, avatar: "JW", lastContact: "3h ago" },
    { id: "5", name: "Lisa Park", company: "GrowthLabs", value: "$18,500", score: 88, avatar: "LP", lastContact: "6h ago" },
  ],
  proposal: [
    { id: "6", name: "David Kim", company: "ScaleUp Co", value: "$35,000", score: 96, avatar: "DK", lastContact: "1h ago" },
  ],
};

const columns = [
  { id: "new", title: "New Leads", color: "bg-blue-500" },
  { id: "contacted", title: "Contacted", color: "bg-amber-500" },
  { id: "qualified", title: "Qualified", color: "bg-emerald-500" },
  { id: "proposal", title: "Proposal Sent", color: "bg-purple-500" },
];

export const LeadPipelineDemo = () => {
  const [leads, setLeads] = useState(initialLeads);
  const [draggedLead, setDraggedLead] = useState<{ lead: Lead; from: string } | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [hoveredLead, setHoveredLead] = useState<string | null>(null);

  const handleDragStart = (lead: Lead, columnId: string) => {
    setDraggedLead({ lead, from: columnId });
  };

  const handleDragEnd = () => {
    setDraggedLead(null);
    setHoveredColumn(null);
  };

  const handleDrop = (toColumn: string) => {
    if (!draggedLead || draggedLead.from === toColumn) return;

    setLeads((prev) => {
      const newLeads = { ...prev };
      newLeads[draggedLead.from] = prev[draggedLead.from].filter(
        (l) => l.id !== draggedLead.lead.id
      );
      newLeads[toColumn] = [...prev[toColumn], draggedLead.lead];
      return newLeads;
    });
    handleDragEnd();
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-4 sm:p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="font-display font-bold text-foreground">Lead Pipeline</h4>
          <p className="text-sm text-muted-foreground">Drag cards to change status</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="hidden sm:inline">Total Value:</span>
          <span className="font-bold text-primary">$112,000</span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {columns.map((column) => (
          <div
            key={column.id}
            className={`rounded-xl bg-background/50 p-3 transition-all duration-200 ${
              hoveredColumn === column.id ? "ring-2 ring-primary/50" : ""
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setHoveredColumn(column.id);
            }}
            onDragLeave={() => setHoveredColumn(null)}
            onDrop={() => handleDrop(column.id)}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-2 h-2 rounded-full ${column.color}`} />
              <span className="text-xs sm:text-sm font-medium text-foreground">{column.title}</span>
              <span className="ml-auto text-xs text-muted-foreground bg-muted rounded-full px-1.5 py-0.5">
                {leads[column.id].length}
              </span>
            </div>

            <div className="space-y-2 min-h-[120px]">
              <AnimatePresence mode="popLayout">
                {leads[column.id].map((lead) => (
                  <motion.div
                    key={lead.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    draggable
                    onDragStart={() => handleDragStart(lead, column.id)}
                    onDragEnd={handleDragEnd}
                    onMouseEnter={() => setHoveredLead(lead.id)}
                    onMouseLeave={() => setHoveredLead(null)}
                    className={`bg-card rounded-lg p-3 border border-border/50 cursor-grab active:cursor-grabbing hover:border-primary/30 transition-all duration-200 ${
                      draggedLead?.lead.id === lead.id ? "opacity-50" : ""
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <GripVertical className="w-3 h-3 text-muted-foreground/50 mt-1 flex-shrink-0 hidden sm:block" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                            {lead.avatar}
                          </div>
                          <span className="font-medium text-xs sm:text-sm text-foreground truncate">
                            {lead.name}
                          </span>
                        </div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{lead.company}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs font-bold text-primary">{lead.value}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                            <span className="text-[10px] text-muted-foreground">{lead.score}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover actions */}
                    <AnimatePresence>
                      {hoveredLead === lead.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-center gap-1 mt-2 pt-2 border-t border-border/50"
                        >
                          <button className="p-1 hover:bg-primary/10 rounded transition-colors">
                            <Phone className="w-3 h-3 text-muted-foreground" />
                          </button>
                          <button className="p-1 hover:bg-primary/10 rounded transition-colors">
                            <Mail className="w-3 h-3 text-muted-foreground" />
                          </button>
                          <button className="p-1 hover:bg-primary/10 rounded transition-colors">
                            <Calendar className="w-3 h-3 text-muted-foreground" />
                          </button>
                          <button className="ml-auto p-1 hover:bg-primary/10 rounded transition-colors">
                            <MoreHorizontal className="w-3 h-3 text-muted-foreground" />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
