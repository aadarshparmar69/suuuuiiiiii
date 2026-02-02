import { motion } from "framer-motion";
import { Check, Phone, Video } from "lucide-react";

const messages = [
  {
    text: "Hi Sarah! Thanks for your interest in Follow IQ. I'd love to show you how our AI can automate your follow-ups.",
    time: "10:30 AM",
    sent: true,
    status: "read",
  },
  {
    text: "That sounds great! When can we chat?",
    time: "10:45 AM",
    sent: false,
    status: "read",
  },
  {
    text: "How about tomorrow at 2 PM? I'll send you a calendar invite.",
    time: "10:47 AM",
    sent: true,
    status: "delivered",
  },
];

export const MobileWhatsAppMockup = () => {
  return (
    <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-lg">
      {/* WhatsApp Header */}
      <div className="bg-[#25D366]/15 border-b border-border/30 px-3 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#25D366]/30 flex items-center justify-center text-[10px] font-bold text-[#25D366]">
            SJ
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">Sarah Johnson</p>
            <p className="text-[10px] text-[#25D366]">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Video className="w-4 h-4 text-muted-foreground" />
          <Phone className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Messages */}
      <div className="p-3 space-y-2 bg-secondary/10">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] p-2.5 rounded-xl text-xs leading-relaxed ${
                msg.sent
                  ? "bg-[#25D366]/15 text-foreground rounded-br-sm"
                  : "bg-card border border-border/30 text-foreground rounded-bl-sm"
              }`}
            >
              <p>{msg.text}</p>
              <div className={`flex items-center gap-1 mt-1 ${msg.sent ? "justify-end" : ""}`}>
                <span className="text-[9px] text-muted-foreground">{msg.time}</span>
                {msg.sent && (
                  <div className="flex text-[#25D366]">
                    <Check className="w-2.5 h-2.5" />
                    {msg.status === "read" && <Check className="w-2.5 h-2.5 -ml-1.5" />}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Generated Badge */}
      <div className="bg-primary/10 border-t border-primary/20 px-3 py-2 flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[10px] text-primary font-medium">AI-crafted message</span>
      </div>
    </div>
  );
};
