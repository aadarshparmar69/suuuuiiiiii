import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Check, CheckCheck, Send, Calendar } from "lucide-react";

interface Message {
  id: string;
  text: string;
  time: string;
  status: "scheduled" | "sending" | "sent" | "delivered" | "read";
  scheduledFor?: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hi Sarah! Just wanted to follow up on our conversation. Did you get a chance to review the proposal?",
    time: "10:30 AM",
    status: "read",
  },
  {
    id: "2",
    text: "Thanks for your interest! I've attached the case study showing how TechFlow increased their conversion rate by 47%.",
    time: "2:15 PM",
    status: "delivered",
  },
];

const scheduledMessage: Message = {
  id: "3",
  text: "Hi Sarah! Quick reminder about our demo call tomorrow at 3 PM. Looking forward to showing you how Follow IQ can help streamline your follow-ups! 🚀",
  time: "",
  status: "scheduled",
  scheduledFor: "Tomorrow, 9:00 AM",
};

export const WhatsAppScheduleDemo = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [scheduled, setScheduled] = useState<Message | null>(scheduledMessage);
  const [isSending, setIsSending] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSendNow = () => {
    if (!scheduled) return;

    setIsSending(true);

    // Simulate sending
    setTimeout(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      const newMessage: Message = {
        ...scheduled,
        time: timeString,
        status: "sending",
      };

      setMessages((prev) => [...prev, newMessage]);
      setScheduled(null);
      setIsSending(false);

      // Simulate status updates
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) => (m.id === newMessage.id ? { ...m, status: "sent" } : m))
        );
      }, 500);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) => (m.id === newMessage.id ? { ...m, status: "delivered" } : m))
        );
        setShowConfirmation(true);
      }, 1500);

      setTimeout(() => {
        setShowConfirmation(false);
      }, 4000);
    }, 1000);
  };

  const getStatusIcon = (status: Message["status"]) => {
    switch (status) {
      case "scheduled":
        return <Clock className="w-3 h-3 text-muted-foreground" />;
      case "sending":
        return <Clock className="w-3 h-3 text-muted-foreground animate-pulse" />;
      case "sent":
        return <Check className="w-3 h-3 text-muted-foreground" />;
      case "delivered":
        return <CheckCheck className="w-3 h-3 text-muted-foreground" />;
      case "read":
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
    }
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden">
      {/* WhatsApp header */}
      <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">
          SC
        </div>
        <div className="flex-1">
          <p className="text-white font-medium text-sm">Sarah Chen</p>
          <p className="text-white/70 text-xs">Online</p>
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <Calendar className="w-4 h-4" />
        </div>
      </div>

      {/* Chat area */}
      <div
        className="p-4 min-h-[280px] bg-[#ECE5DD] dark:bg-[#0B141A] relative"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="space-y-3">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={index >= 2 ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-end"
            >
              <div className="bg-[#DCF8C6] dark:bg-[#005C4B] rounded-lg px-3 py-2 max-w-[85%] shadow-sm">
                <p className="text-sm text-[#111B21] dark:text-white">{message.text}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-[10px] text-[#667781] dark:text-white/60">
                    {message.time}
                  </span>
                  {getStatusIcon(message.status)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success confirmation */}
        <AnimatePresence>
          {showConfirmation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-x-4 bottom-4 bg-emerald-500 text-white rounded-lg px-4 py-3 flex items-center gap-3 shadow-lg"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-sm">Message delivered!</p>
                <p className="text-xs text-white/80">Sarah will see your message</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scheduled message panel */}
      <AnimatePresence>
        {scheduled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-border/50 bg-card p-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-amber-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-full">
                    Scheduled
                  </span>
                  <span className="text-xs text-muted-foreground">{scheduled.scheduledFor}</span>
                </div>
                <p className="text-sm text-foreground line-clamp-2">{scheduled.text}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3 ml-11">
              <button
                onClick={handleSendNow}
                disabled={isSending}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Clock className="w-3 h-3" />
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-3 h-3" />
                    Send Now
                  </>
                )}
              </button>
              <button className="px-3 py-1.5 rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                Edit Schedule
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
