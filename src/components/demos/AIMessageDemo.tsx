import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, RefreshCw, Edit3, Check, Copy } from "lucide-react";

const suggestions = [
  {
    id: "1",
    leadName: "Sarah Chen",
    context: "Viewed pricing page 3 times",
    message: "Hi Sarah! I noticed you've been exploring our pricing options. I'd love to walk you through how Follow IQ can specifically help TechFlow Inc streamline your sales follow-ups. Would you have 15 minutes this week for a quick call?",
  },
  {
    id: "2",
    leadName: "James Wilson",
    context: "Downloaded case study",
    message: "Hey James, thanks for checking out our case study! The results Innovate AI achieved are definitely replicable. Want me to show you exactly how they set up their follow-up sequences? Happy to do a personalized demo.",
  },
  {
    id: "3",
    leadName: "Emily Rodriguez",
    context: "Opened 5 emails, no reply",
    message: "Hi Emily, I know you're probably busy scaling CloudBase! Quick question — would a 3x faster follow-up response time help your sales team? We've helped similar companies close 40% more deals. Worth a chat?",
  },
];

export const AIMessageDemo = () => {
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const suggestion = suggestions[currentSuggestion];

  useEffect(() => {
    if (isTyping && !isEditing && !isSent) {
      const fullText = suggestion.message;
      if (displayedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [displayedText, isTyping, suggestion.message, isEditing, isSent]);

  const handleRegenerate = () => {
    setCurrentSuggestion((prev) => (prev + 1) % suggestions.length);
    setDisplayedText("");
    setIsTyping(true);
    setIsEditing(false);
    setIsSent(false);
    setEditedText("");
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedText(displayedText);
    setTimeout(() => textareaRef.current?.focus(), 0);
  };

  const handleSaveEdit = () => {
    setDisplayedText(editedText);
    setIsEditing(false);
  };

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => {
      handleRegenerate();
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(displayedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-display font-bold text-foreground">AI Message Suggestions</h4>
          <p className="text-sm text-muted-foreground">Personalized messages for your leads</p>
        </div>
      </div>

      {/* Lead context */}
      <div className="bg-background/50 rounded-lg p-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
            {suggestion.leadName.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <p className="font-medium text-sm text-foreground">{suggestion.leadName}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {suggestion.context}
            </p>
          </div>
        </div>
      </div>

      {/* Message area */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {isSent ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center"
            >
              <Check className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-emerald-600">Message sent successfully!</p>
              <p className="text-xs text-muted-foreground mt-1">Generating next suggestion...</p>
            </motion.div>
          ) : isEditing ? (
            <motion.div
              key="editing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <textarea
                ref={textareaRef}
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="w-full min-h-[140px] bg-background border border-primary/50 rounded-lg p-3 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={handleSaveEdit}
                className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-xs font-medium hover:bg-primary/90 transition-colors flex items-center gap-1"
              >
                <Check className="w-3 h-3" /> Save
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-background rounded-lg p-4 border border-border/50 min-h-[140px]"
            >
              <p className="text-sm text-foreground leading-relaxed">
                {displayedText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
                  />
                )}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Actions */}
      {!isSent && !isEditing && (
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <button
            onClick={handleRegenerate}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-background border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Regenerate</span>
          </button>
          <button
            onClick={handleEdit}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-background border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Edit</span>
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-background border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="hidden sm:inline text-emerald-500">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>
          <button
            onClick={handleSend}
            disabled={isTyping}
            className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-3.5 h-3.5" />
            Send via WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};
