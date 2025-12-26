import { motion } from "framer-motion";
import { Check, CheckCheck, Clock } from "lucide-react";

interface Message {
  id: string;
  text: string;
  time: string;
  sent: boolean;
  status: "sent" | "delivered" | "read" | "pending";
}

interface WhatsAppPreviewProps {
  contactName: string;
  contactInitials: string;
  messages: Message[];
  isTyping?: boolean;
}

export const WhatsAppPreview = ({
  contactName,
  contactInitials,
  messages,
  isTyping = false,
}: WhatsAppPreviewProps) => {
  const getStatusIcon = (status: Message["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="w-3 h-3 text-muted-foreground" />;
      case "sent":
        return <Check className="w-3 h-3 text-muted-foreground" />;
      case "delivered":
        return <CheckCheck className="w-3 h-3 text-muted-foreground" />;
      case "read":
        return <CheckCheck className="w-3 h-3 text-blue-400" />;
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Phone Frame */}
      <div className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-semibold">
            {contactInitials}
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm">{contactName}</p>
            <p className="text-white/70 text-xs">
              {isTyping ? "typing..." : "online"}
            </p>
          </div>
        </div>

        {/* Chat Background */}
        <div
          className="p-4 min-h-[280px] space-y-2"
          style={{
            backgroundColor: "#0B141A",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
              className={`flex ${message.sent ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-lg ${
                  message.sent
                    ? "bg-[#005C4B] text-white rounded-br-none"
                    : "bg-[#202C33] text-white rounded-bl-none"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-[10px] text-white/60">{message.time}</span>
                  {message.sent && getStatusIcon(message.status)}
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-[#202C33] px-4 py-3 rounded-lg rounded-bl-none">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-white/50 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-[#1F2C34] px-3 py-2 flex items-center gap-2">
          <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2">
            <p className="text-white/40 text-sm">Type a message</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white fill-current"
            >
              <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
