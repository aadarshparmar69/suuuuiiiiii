import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Clock, MessageCircle, Mail, Phone, Calendar, ChevronRight } from "lucide-react";

interface TimelineEvent {
  id: string;
  type: "message" | "email" | "call" | "meeting";
  title: string;
  description: string;
  time: string;
  status: "completed" | "upcoming" | "in-progress";
  lead: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    type: "message",
    title: "WhatsApp Follow-up",
    description: "Sent product demo link to Sarah",
    time: "Today, 9:00 AM",
    status: "completed",
    lead: "Sarah Chen",
  },
  {
    id: "2",
    type: "email",
    title: "Proposal Email",
    description: "Sent pricing proposal with 15% discount",
    time: "Today, 11:30 AM",
    status: "completed",
    lead: "James Wilson",
  },
  {
    id: "3",
    type: "call",
    title: "Discovery Call",
    description: "Scheduled call to discuss requirements",
    time: "Today, 2:00 PM",
    status: "in-progress",
    lead: "Emily Rodriguez",
  },
  {
    id: "4",
    type: "message",
    title: "Check-in Message",
    description: "Follow up on proposal feedback",
    time: "Today, 4:30 PM",
    status: "upcoming",
    lead: "David Kim",
  },
  {
    id: "5",
    type: "meeting",
    title: "Demo Meeting",
    description: "Product walkthrough scheduled",
    time: "Tomorrow, 10:00 AM",
    status: "upcoming",
    lead: "Lisa Park",
  },
];

const getIcon = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "message":
      return MessageCircle;
    case "email":
      return Mail;
    case "call":
      return Phone;
    case "meeting":
      return Calendar;
  }
};

export const FollowUpTimelineDemo = () => {
  const [countdown, setCountdown] = useState(3600);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const [completedEvents, setCompletedEvents] = useState<string[]>(["1", "2"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatCountdown = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m.toString().padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  };

  const handleMarkComplete = (id: string) => {
    if (!completedEvents.includes(id)) {
      setCompletedEvents((prev) => [...prev, id]);
    }
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-4 sm:p-6">
      {/* Header with countdown */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="font-display font-bold text-foreground">Today's Follow-ups</h4>
          <p className="text-sm text-muted-foreground">5 activities scheduled</p>
        </div>
        <div className="flex items-center gap-3 bg-primary/10 rounded-lg px-4 py-2">
          <Clock className="w-4 h-4 text-primary" />
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Next follow-up in</p>
            <motion.p
              key={countdown}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="font-mono font-bold text-primary text-sm"
            >
              {formatCountdown(countdown)}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-0.5 bg-border" />
        <motion.div
          className="absolute left-[15px] sm:left-[19px] top-0 w-0.5 bg-primary"
          initial={{ height: 0 }}
          animate={{ height: `${(completedEvents.length / timelineEvents.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <div className="space-y-4">
          {timelineEvents.map((event, index) => {
            const Icon = getIcon(event.type);
            const isCompleted = completedEvents.includes(event.id);
            const isInProgress = event.status === "in-progress" && !isCompleted;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-3 sm:gap-4"
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Status indicator */}
                <div
                  className={`relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isInProgress
                      ? "bg-amber-500 text-white ring-4 ring-amber-500/20"
                      : "bg-card border-2 border-border text-muted-foreground"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 bg-card rounded-lg p-3 sm:p-4 border transition-all duration-200 cursor-pointer ${
                    hoveredEvent === event.id
                      ? "border-primary/50 shadow-lg shadow-primary/5"
                      : "border-border/50"
                  } ${isInProgress ? "ring-2 ring-amber-500/20" : ""}`}
                  onClick={() => handleMarkComplete(event.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-medium text-sm text-foreground">{event.title}</h5>
                        {isInProgress && (
                          <span className="text-[10px] bg-amber-500/20 text-amber-600 px-1.5 py-0.5 rounded-full">
                            In Progress
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{event.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[10px] text-muted-foreground">{event.time}</span>
                        <span className="text-[10px] text-muted-foreground">•</span>
                        <span className="text-[10px] text-primary">{event.lead}</span>
                      </div>
                    </div>

                    {hoveredEvent === event.id && !isCompleted && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-1 whitespace-nowrap"
                      >
                        Mark Done <ChevronRight className="w-3 h-3" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
