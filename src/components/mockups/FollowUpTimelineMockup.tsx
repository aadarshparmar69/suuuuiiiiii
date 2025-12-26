import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface TimelineEvent {
  id: string;
  type: "whatsapp" | "email" | "call";
  status: "completed" | "scheduled" | "overdue";
  title: string;
  description: string;
  time: string;
  date: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    type: "whatsapp",
    status: "completed",
    title: "Initial Follow-up Sent",
    description: "AI-personalized message sent via WhatsApp",
    time: "10:30 AM",
    date: "Dec 24",
  },
  {
    id: "2",
    type: "email",
    status: "completed",
    title: "Product Brochure Sent",
    description: "Email with pricing details and case studies",
    time: "2:00 PM",
    date: "Dec 24",
  },
  {
    id: "3",
    type: "whatsapp",
    status: "completed",
    title: "Response Received",
    description: '"Interested! Can we schedule a call?" - Lead replied',
    time: "4:45 PM",
    date: "Dec 24",
  },
  {
    id: "4",
    type: "call",
    status: "scheduled",
    title: "Discovery Call",
    description: "30-minute demo scheduled with Sarah",
    time: "11:00 AM",
    date: "Dec 26",
  },
  {
    id: "5",
    type: "whatsapp",
    status: "scheduled",
    title: "Post-Call Follow-up",
    description: "AI will send thank you message after call",
    time: "12:00 PM",
    date: "Dec 26",
  },
];

export const FollowUpTimelineMockup = () => {
  const getIcon = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "whatsapp":
        return <MessageCircle className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      case "call":
        return <Phone className="w-4 h-4" />;
    }
  };

  const getStatusStyles = (status: TimelineEvent["status"]) => {
    switch (status) {
      case "completed":
        return {
          bg: "bg-green-500/20",
          border: "border-green-500/40",
          icon: "text-green-400",
          badge: "bg-green-500/10 text-green-400",
        };
      case "scheduled":
        return {
          bg: "bg-primary/20",
          border: "border-primary/40",
          icon: "text-primary",
          badge: "bg-primary/10 text-primary",
        };
      case "overdue":
        return {
          bg: "bg-red-500/20",
          border: "border-red-500/40",
          icon: "text-red-400",
          badge: "bg-red-500/10 text-red-400",
        };
    }
  };

  const getStatusIcon = (status: TimelineEvent["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-3 h-3" />;
      case "scheduled":
        return <Clock className="w-3 h-3" />;
      case "overdue":
        return <AlertCircle className="w-3 h-3" />;
    }
  };

  return (
    <div className="bg-background/95 border border-border/50 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-card/80 border-b border-border/50 px-6 py-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">Follow-up Timeline</h3>
          <p className="text-xs text-muted-foreground">Sarah Johnson · TechCorp Inc.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">5 touchpoints</span>
          <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full">
            3 completed
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/50 via-primary/50 to-primary/20" />

          {/* Events */}
          <div className="space-y-4">
            {timelineEvents.map((event, index) => {
              const styles = getStatusStyles(event.status);
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-4"
                >
                  {/* Icon */}
                  <div
                    className={`relative z-10 w-9 h-9 rounded-full ${styles.bg} border ${styles.border} flex items-center justify-center ${styles.icon}`}
                  >
                    {getIcon(event.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="bg-card/60 border border-border/30 rounded-lg p-3">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-medium text-foreground text-sm">
                          {event.title}
                        </h4>
                        <div
                          className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full ${styles.badge}`}
                        >
                          {getStatusIcon(event.status)}
                          <span className="capitalize">{event.status}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span>{event.date}</span>
                        <span>·</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
