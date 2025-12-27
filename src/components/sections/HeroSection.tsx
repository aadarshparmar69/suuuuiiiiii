import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Send, Sparkles, User, MessageSquare, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Realistic lead data
const leads = [
  { id: 1, name: "Sarah Chen", company: "TechVentures", status: "hot", timer: "2h 34m", avatar: "SC" },
  { id: 2, name: "Marcus Johnson", company: "GrowthLab", status: "warm", timer: "4h 12m", avatar: "MJ" },
  { id: 3, name: "Emily Rivera", company: "Startup Co", status: "hot", timer: "45m", avatar: "ER" },
];

const aiSuggestion = "Hi Sarah, I noticed you checked out our enterprise plan yesterday. Would love to walk you through the AI features that could save your team 10+ hours per week. Free for a quick call this week?";

export const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [messageSent, setMessageSent] = useState(false);

  // Natural typing animation
  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= aiSuggestion.length) {
        setTypedText(aiSuggestion.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setMessageSent(true);
        }, 1000);
      }
    }, 35); // Natural typing speed

    return () => clearInterval(typeInterval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">
                WhatsApp-First Follow-Up Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-6"
            >
              Never lose a{" "}
              <span className="gradient-text">lead</span>{" "}
              again
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              AI ensures every follow-up happens at the right time with the right message. 
              Convert more leads with intelligent WhatsApp automation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/product">
                <Button variant="heroOutline" size="xl">
                  See How It Works
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-border/50"
            >
              <div className="flex -space-x-2">
                {["JD", "AK", "SM", "LP", "RW"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">2,000+ teams</p>
                <p className="text-xs text-muted-foreground">trust Follow IQ daily</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Premium Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Card */}
            <div className="glass-card p-6 rounded-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-semibold text-foreground">Follow-ups Due Today</h3>
                  <p className="text-sm text-muted-foreground">3 leads need attention</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-primary font-medium">Live</span>
                </div>
              </div>

              {/* Lead Cards */}
              <div className="space-y-3 mb-6">
                {leads.map((lead, index) => (
                  <motion.div
                    key={lead.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
                    className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl hover:bg-secondary/80 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                        {lead.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{lead.name}</p>
                        <p className="text-xs text-muted-foreground">{lead.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        lead.status === "hot" 
                          ? "bg-accent/20 text-accent" 
                          : "bg-primary/20 text-primary"
                      }`}>
                        {lead.status}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">{lead.timer}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* AI Suggestion Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary">AI Suggestion for Sarah</span>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed min-h-[60px]">
                  {typedText}
                  {!messageSent && (
                    <span className={`inline-block w-0.5 h-4 bg-primary ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                  )}
                </div>
                
                {/* Send Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: messageSent ? 1 : 0, y: messageSent ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between mt-3 pt-3 border-t border-border/50"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center">
                      <MessageSquare className="w-2.5 h-2.5 text-background" />
                    </div>
                    <span className="text-xs text-muted-foreground">via WhatsApp</span>
                  </div>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors">
                    <Send className="w-3 h-3" />
                    Send Now
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute -left-8 top-8 glass-card p-4 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-lg font-display font-bold text-foreground">+47%</p>
                  <p className="text-xs text-muted-foreground">Conversion rate</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Message Sent Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: messageSent ? 1 : 0, scale: messageSent ? 1 : 0.9 }}
              transition={{ duration: 0.4 }}
              className="absolute -right-4 bottom-20 glass-card p-3 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <Send className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Sent!</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
