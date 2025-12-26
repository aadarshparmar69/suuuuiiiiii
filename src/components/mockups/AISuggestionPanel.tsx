import { motion } from "framer-motion";
import { Sparkles, Clock, Send, ThumbsUp, ThumbsDown, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

interface Suggestion {
  id: string;
  leadName: string;
  message: string;
  timing: string;
  confidence: number;
}

const suggestions: Suggestion[] = [
  {
    id: "1",
    leadName: "Sarah Johnson",
    message:
      "Hi Sarah! I noticed you checked out our analytics dashboard yesterday. Would you like me to walk you through how it can help track your team's performance?",
    timing: "Send now - 3:00 PM optimal",
    confidence: 94,
  },
  {
    id: "2",
    leadName: "Michael Chen",
    message:
      "Hey Michael, just circling back on our conversation about the automation features. Have you had a chance to discuss with your team?",
    timing: "Tomorrow at 10:00 AM",
    confidence: 87,
  },
];

export const AISuggestionPanel = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = suggestions[0].message;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background/95 border border-border/50 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border/50 px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">AI Follow-up Suggestions</h3>
          <p className="text-xs text-muted-foreground">
            Personalized messages ready to send
          </p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {suggestions.map((suggestion, index) => (
          <motion.div
            key={suggestion.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-card/60 border rounded-xl p-4 ${
              index === 0
                ? "border-primary/30 ring-1 ring-primary/10"
                : "border-border/30"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/60 to-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
                  {suggestion.leadName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="font-medium text-foreground text-sm">
                  {suggestion.leadName}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">
                  {suggestion.confidence}% match
                </span>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-3 mb-3">
              <p className="text-sm text-foreground leading-relaxed">
                {index === 0 ? (
                  <>
                    {typedText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
                    />
                  </>
                ) : (
                  suggestion.message
                )}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{suggestion.timing}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                  <ThumbsDown className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                  <ThumbsUp className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                  <RefreshCw className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="flex items-center gap-1.5 bg-green-500/20 hover:bg-green-500/30 text-green-400 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                  <Send className="w-3 h-3" />
                  Send via WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
