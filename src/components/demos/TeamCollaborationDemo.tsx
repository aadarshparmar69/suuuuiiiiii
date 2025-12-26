import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, MessageCircle, Clock, Check, ChevronDown } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  color: string;
  status: "online" | "away" | "offline";
}

interface AssignedLead {
  id: string;
  name: string;
  company: string;
  assignee: TeamMember;
  lastActivity: string;
  status: "active" | "pending" | "closed";
}

const teamMembers: TeamMember[] = [
  { id: "1", name: "Aadarsh P.", role: "Sales Lead", avatar: "AP", color: "bg-blue-500", status: "online" },
  { id: "2", name: "Sarvesh R.", role: "Account Exec", avatar: "SR", color: "bg-emerald-500", status: "online" },
  { id: "3", name: "Maya K.", role: "SDR", avatar: "MK", color: "bg-purple-500", status: "away" },
  { id: "4", name: "Alex T.", role: "Sales Rep", avatar: "AT", color: "bg-amber-500", status: "offline" },
];

const initialLeads: AssignedLead[] = [
  {
    id: "1",
    name: "TechFlow Inc",
    company: "Enterprise Software",
    assignee: teamMembers[0],
    lastActivity: "Sent proposal 2h ago",
    status: "active",
  },
  {
    id: "2",
    name: "CloudBase",
    company: "SaaS Platform",
    assignee: teamMembers[1],
    lastActivity: "Demo scheduled",
    status: "active",
  },
  {
    id: "3",
    name: "DataSync",
    company: "Data Analytics",
    assignee: teamMembers[2],
    lastActivity: "Initial contact",
    status: "pending",
  },
];

const activities = [
  { id: "1", user: teamMembers[0], action: "closed deal with", target: "Innovate AI", time: "5m ago", value: "$22,000" },
  { id: "2", user: teamMembers[1], action: "scheduled demo with", target: "GrowthLabs", time: "15m ago" },
  { id: "3", user: teamMembers[2], action: "sent follow-up to", target: "ScaleUp Co", time: "32m ago" },
];

export const TeamCollaborationDemo = () => {
  const [leads, setLeads] = useState(initialLeads);
  const [hoveredLead, setHoveredLead] = useState<string | null>(null);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleAssign = (leadId: string, member: TeamMember) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId ? { ...lead, assignee: member } : lead
      )
    );
    setOpenDropdown(null);
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-4 sm:p-6">
      {/* Team members */}
      <div className="mb-6">
        <h4 className="font-display font-bold text-foreground mb-4">Team Members</h4>
        <div className="flex flex-wrap gap-2">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div
                className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border/50 cursor-pointer transition-all ${
                  hoveredMember === member.id ? "border-primary/50 shadow-md" : ""
                }`}
              >
                <div className="relative">
                  <div
                    className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {member.avatar}
                  </div>
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-card ${
                      member.status === "online"
                        ? "bg-emerald-500"
                        : member.status === "away"
                        ? "bg-amber-500"
                        : "bg-muted"
                    }`}
                  />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-foreground">{member.name}</p>
                  <p className="text-[10px] text-muted-foreground">{member.role}</p>
                </div>
              </div>

              {/* Hover card */}
              <AnimatePresence>
                {hoveredMember === member.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 z-20 bg-card border border-border rounded-lg shadow-xl p-3 min-w-[180px]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`w-10 h-10 rounded-full ${member.color} flex items-center justify-center text-white text-sm font-bold`}
                      >
                        {member.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="bg-muted/50 rounded-md p-2">
                        <p className="text-lg font-bold text-primary">12</p>
                        <p className="text-[10px] text-muted-foreground">Active Leads</p>
                      </div>
                      <div className="bg-muted/50 rounded-md p-2">
                        <p className="text-lg font-bold text-emerald-500">87%</p>
                        <p className="text-[10px] text-muted-foreground">Response</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Assigned leads */}
      <div className="mb-6">
        <h4 className="font-display font-bold text-foreground mb-4">Assigned Leads</h4>
        <div className="space-y-2">
          {leads.map((lead) => (
            <motion.div
              key={lead.id}
              className={`bg-background rounded-lg p-3 border transition-all ${
                hoveredLead === lead.id ? "border-primary/50" : "border-border/50"
              }`}
              onMouseEnter={() => setHoveredLead(lead.id)}
              onMouseLeave={() => setHoveredLead(null)}
            >
              <div className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm text-foreground truncate">{lead.name}</p>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        lead.status === "active"
                          ? "bg-emerald-500/10 text-emerald-600"
                          : lead.status === "pending"
                          ? "bg-amber-500/10 text-amber-600"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{lead.company}</p>
                </div>

                {/* Assignee dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === lead.id ? null : lead.id)}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-muted transition-colors"
                  >
                    <div
                      className={`w-6 h-6 rounded-full ${lead.assignee.color} flex items-center justify-center text-white text-[10px] font-bold`}
                    >
                      {lead.assignee.avatar}
                    </div>
                    <ChevronDown className="w-3 h-3 text-muted-foreground" />
                  </button>

                  <AnimatePresence>
                    {openDropdown === lead.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute right-0 top-full mt-1 z-20 bg-card border border-border rounded-lg shadow-xl overflow-hidden min-w-[160px]"
                      >
                        {teamMembers.map((member) => (
                          <button
                            key={member.id}
                            onClick={() => handleAssign(lead.id, member)}
                            className="flex items-center gap-2 w-full px-3 py-2 hover:bg-muted transition-colors"
                          >
                            <div
                              className={`w-6 h-6 rounded-full ${member.color} flex items-center justify-center text-white text-[10px] font-bold`}
                            >
                              {member.avatar}
                            </div>
                            <span className="text-sm">{member.name}</span>
                            {lead.assignee.id === member.id && (
                              <Check className="w-3 h-3 text-primary ml-auto" />
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <p className="text-[10px] text-muted-foreground hidden sm:block">{lead.lastActivity}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity feed */}
      <div>
        <h4 className="font-display font-bold text-foreground mb-4">Recent Activity</h4>
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div
                className={`w-8 h-8 rounded-full ${activity.user.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
              >
                {activity.user.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">
                  <span className="font-medium">{activity.user.name}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-medium text-primary">{activity.target}</span>
                  {activity.value && (
                    <span className="text-emerald-500 font-bold ml-1">• {activity.value}</span>
                  )}
                </p>
              </div>
              <span className="text-[10px] text-muted-foreground flex-shrink-0">{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
