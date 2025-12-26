import { motion } from "framer-motion";
import { MoreHorizontal, Plus, Clock, MessageCircle } from "lucide-react";

interface Lead {
  name: string;
  company: string;
  value: string;
  daysInStage: number;
  hasWhatsApp: boolean;
}

interface Stage {
  name: string;
  color: string;
  leads: Lead[];
}

const pipelineStages: Stage[] = [
  {
    name: "New Leads",
    color: "bg-blue-500",
    leads: [
      {
        name: "David Miller",
        company: "Acme Corp",
        value: "$12,000",
        daysInStage: 1,
        hasWhatsApp: true,
      },
      {
        name: "Jennifer Lee",
        company: "Nova Tech",
        value: "$8,500",
        daysInStage: 2,
        hasWhatsApp: true,
      },
      {
        name: "Chris Brown",
        company: "Summit LLC",
        value: "$15,000",
        daysInStage: 0,
        hasWhatsApp: false,
      },
    ],
  },
  {
    name: "Contacted",
    color: "bg-yellow-500",
    leads: [
      {
        name: "Sarah Johnson",
        company: "TechCorp",
        value: "$24,000",
        daysInStage: 3,
        hasWhatsApp: true,
      },
      {
        name: "Alex Thompson",
        company: "InnovateCo",
        value: "$18,500",
        daysInStage: 5,
        hasWhatsApp: true,
      },
    ],
  },
  {
    name: "Qualified",
    color: "bg-purple-500",
    leads: [
      {
        name: "Michael Chen",
        company: "StartupXYZ",
        value: "$32,000",
        daysInStage: 2,
        hasWhatsApp: true,
      },
      {
        name: "Emily Davis",
        company: "Global Sol.",
        value: "$45,000",
        daysInStage: 4,
        hasWhatsApp: true,
      },
      {
        name: "Ryan Martinez",
        company: "NextGen Inc",
        value: "$28,000",
        daysInStage: 1,
        hasWhatsApp: false,
      },
    ],
  },
  {
    name: "Proposal",
    color: "bg-orange-500",
    leads: [
      {
        name: "Amanda White",
        company: "CloudFirst",
        value: "$56,000",
        daysInStage: 6,
        hasWhatsApp: true,
      },
    ],
  },
  {
    name: "Closed Won",
    color: "bg-green-500",
    leads: [
      {
        name: "James Wilson",
        company: "Enterprise Co",
        value: "$85,000",
        daysInStage: 0,
        hasWhatsApp: true,
      },
      {
        name: "Lisa Anderson",
        company: "MegaCorp",
        value: "$120,000",
        daysInStage: 1,
        hasWhatsApp: true,
      },
    ],
  },
];

export const LeadPipelineMockup = () => {
  return (
    <div className="bg-background/95 border border-border/50 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-card/80 border-b border-border/50 px-6 py-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">Lead Pipeline</h3>
          <p className="text-xs text-muted-foreground">
            11 active leads · $444,000 total value
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-colors">
            Add Lead
          </button>
        </div>
      </div>

      {/* Pipeline Board */}
      <div className="p-4 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {pipelineStages.map((stage, stageIndex) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stageIndex * 0.1 }}
              className="w-64 flex-shrink-0"
            >
              {/* Stage Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${stage.color}`} />
                  <span className="font-medium text-sm text-foreground">
                    {stage.name}
                  </span>
                  <span className="text-xs text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                    {stage.leads.length}
                  </span>
                </div>
                <button className="p-1 hover:bg-secondary rounded transition-colors">
                  <Plus className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Lead Cards */}
              <div className="space-y-2">
                {stage.leads.map((lead, leadIndex) => (
                  <motion.div
                    key={lead.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: stageIndex * 0.1 + leadIndex * 0.05 }}
                    className="bg-card/80 border border-border/40 rounded-lg p-3 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/60 to-primary flex items-center justify-center text-primary-foreground text-[10px] font-semibold">
                          {lead.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground leading-tight">
                            {lead.name}
                          </p>
                          <p className="text-[10px] text-muted-foreground">
                            {lead.company}
                          </p>
                        </div>
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 p-0.5 hover:bg-secondary rounded transition-all">
                        <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary">
                        {lead.value}
                      </span>
                      <div className="flex items-center gap-2">
                        {lead.hasWhatsApp && (
                          <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                        )}
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {lead.daysInStage === 0
                            ? "Today"
                            : `${lead.daysInStage}d`}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
