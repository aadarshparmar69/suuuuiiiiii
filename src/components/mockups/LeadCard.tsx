import { motion } from "framer-motion";
import { Clock, MessageCircle, Phone, Star, MoreHorizontal } from "lucide-react";

interface LeadCardProps {
  name: string;
  company: string;
  score: number;
  status: "hot" | "warm" | "cold";
  lastContact: string;
  nextFollowUp: string;
  avatar?: string;
  index?: number;
}

export const LeadCard = ({
  name,
  company,
  score,
  status,
  lastContact,
  nextFollowUp,
  index = 0,
}: LeadCardProps) => {
  const statusColors = {
    hot: "bg-green-500/20 text-green-400 border-green-500/30",
    warm: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    cold: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };

  const statusLabels = {
    hot: "Hot Lead",
    warm: "Warm",
    cold: "Cold",
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="group bg-card/60 border border-border/50 rounded-xl p-4 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
            {initials}
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm">{name}</h4>
            <p className="text-xs text-muted-foreground">{company}</p>
          </div>
        </div>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-secondary rounded">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[status]}`}
        >
          {statusLabels[status]}
        </span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(score / 20)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{lastContact}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-colors">
            <Phone className="w-3 h-3" />
          </button>
          <button className="p-1.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors">
            <MessageCircle className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-border/30">
        <p className="text-xs text-muted-foreground">
          Next follow-up:{" "}
          <span className="text-primary font-medium">{nextFollowUp}</span>
        </p>
      </div>
    </motion.div>
  );
};
