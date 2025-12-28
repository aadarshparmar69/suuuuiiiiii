import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, Send, Sparkles, MessageSquare, Calendar, CheckCircle2, User, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// Realistic lead data with more context
const leads = [{
  id: 1,
  name: "Sarah Chen",
  company: "TechVentures",
  value: "$12,500",
  status: "hot",
  daysInPipeline: 3,
  nextAction: "Send proposal",
  avatar: "SC",
  email: "sarah@techventures.io"
}, {
  id: 2,
  name: "Marcus Johnson",
  company: "GrowthLab",
  value: "$8,400",
  status: "warm",
  daysInPipeline: 7,
  nextAction: "Schedule call",
  avatar: "MJ",
  email: "marcus@growthlab.co"
}, {
  id: 3,
  name: "Emily Rivera",
  company: "Startup Co",
  value: "$15,200",
  status: "hot",
  daysInPipeline: 1,
  nextAction: "Follow up",
  avatar: "ER",
  email: "emily@startup.co"
}];
const aiMessage = "Hi Sarah, I noticed you've been exploring our enterprise solutions. Based on your team's needs, I'd love to show you how we helped TechVentures achieve 47% faster deal cycles. Free for a quick call Thursday at 2 PM?";
export const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [messageSent, setMessageSent] = useState(false);
  const [selectedLead, setSelectedLead] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {
    once: true
  });

  // Natural typing animation - starts when in view
  useEffect(() => {
    if (!isInView) return;
    const startDelay = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= aiMessage.length) {
          setTypedText(aiMessage.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTypingComplete(true);
          setTimeout(() => {
            setMessageSent(true);
          }, 800);
        }
      }, 28);
      return () => clearInterval(typeInterval);
    }, 1500);
    return () => clearTimeout(startDelay);
  }, [isInView]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);
  const getStatusColor = (status: string) => {
    return status === "hot" ? "bg-accent/15 text-accent border-accent/30" : "bg-primary/15 text-primary border-primary/30";
  };
  return <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 pb-16 lg:pt-24 lg:pb-24 overflow-hidden">
      {/* Subtle Background - No glows, just clean gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20" />
      
      {/* Refined Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
      backgroundSize: '80px 80px'
    }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - 5 columns */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1]
        }} className="lg:col-span-5">
            {/* Minimal Badge */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3,
            duration: 0.5
          }} className="inline-flex items-center gap-2.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground font-medium tracking-wide">WhatsApp first follow up platform</span>
            </motion.div>

            {/* Headline - Strong hierarchy */}
            <motion.h1 initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.7
          }} className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-display font-bold leading-[1.08] tracking-tight mb-6">
              Turn leads into
              <br />
              <span className="gradient-text">closed deals</span>
            </motion.h1>

            {/* Subheadline - Refined */}
            <motion.p initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.7
          }} className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">AI-powered follow ups that send the right message at the right time. Via WhatsApp, where leads actually respond.</motion.p>

            {/* CTA Buttons - Clean, confident */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.7
          }} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Button>
              </Link>
              <Link to="/product">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  See How It Works
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof - Subtle and elegant */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.8,
            duration: 0.6
          }} className="mt-12 pt-8 border-t border-border/40">
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2.5">
                  {["JD", "AK", "SM", "LP"].map((initials, i) => <div key={i} className="w-9 h-9 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground">
                      {initials}
                    </div>)}
                </div>
                <div className="text-sm">
                  <span className="text-foreground font-semibold">55+ teams</span>
                  <span className="text-muted-foreground"> trust Follow IQ</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Mockup - 7 columns */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }} className="lg:col-span-7 relative">
            {/* Main Dashboard Container */}
            <div className="relative">
              {/* Dashboard Frame */}
              <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-1 bg-background/50 rounded-md text-xs text-muted-foreground">
                      <div className="w-3 h-3 rounded-sm bg-primary/20" />
                      app.followiq.com/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-5 lg:p-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-base font-display font-semibold text-foreground">Today's Follow ups</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">3 leads need your attention</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-primary font-medium">Live</span>
                    </div>
                  </div>

                  {/* Lead Cards */}
                  <div className="space-y-2.5 mb-5">
                    {leads.map((lead, index) => <motion.div key={lead.id} initial={{
                    opacity: 0,
                    x: 15
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: 0.8 + index * 0.12,
                    duration: 0.4
                  }} onClick={() => setSelectedLead(index)} className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 ${selectedLead === index ? 'bg-secondary border border-primary/30' : 'bg-secondary/40 border border-transparent hover:bg-secondary/70'}`}>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                            {lead.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{lead.name}</p>
                            <p className="text-xs text-muted-foreground">{lead.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-medium text-foreground hidden sm:block">{lead.value}</span>
                          <div className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border ${getStatusColor(lead.status)}`}>
                            {lead.status}
                          </div>
                        </div>
                      </motion.div>)}
                  </div>

                  {/* AI Message Panel */}
                  <motion.div initial={{
                  opacity: 0,
                  y: 15
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 1.3,
                  duration: 0.5
                }} className="bg-background border border-border rounded-xl p-4">
                    {/* AI Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-xs font-semibold text-primary">AI Suggestion</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">for {leads[selectedLead].name}</span>
                    </div>
                    
                    {/* Message Content */}
                    <div className="text-sm text-muted-foreground leading-relaxed min-h-[56px] mb-3">
                      {typedText}
                      {!isTypingComplete && <span className={`inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />}
                    </div>
                    
                    {/* Actions */}
                    <motion.div initial={{
                    opacity: 0
                  }} animate={{
                    opacity: isTypingComplete ? 1 : 0
                  }} transition={{
                    duration: 0.3
                  }} className="flex items-center justify-between pt-3 border-t border-border/50">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                            <MessageSquare className="w-2.5 h-2.5 text-[#25D366]" />
                          </div>
                          <span className="text-[10px] text-muted-foreground">WhatsApp</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-muted-foreground" />
                          <span className="text-[10px] text-muted-foreground">Thu, 2 PM</span>
                        </div>
                      </div>
                      
                      <motion.button whileHover={{
                      scale: 1.02
                    }} whileTap={{
                      scale: 0.98
                    }} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${messageSent ? 'bg-[#25D366]/20 text-[#25D366]' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
                        {messageSent ? <>
                            <CheckCircle2 className="w-3 h-3" />
                            Sent
                          </> : <>
                            <Send className="w-3 h-3" />
                            Send
                          </>}
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements - Subtle, purposeful */}
              
              {/* Follow-up Reminder */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 1.6,
              duration: 0.5
            }} className="absolute -left-4 lg:-left-8 top-24 hidden lg:block">
                <div className="bg-card border border-border rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Follow-up in 2h</p>
                      <p className="text-[10px] text-muted-foreground">Sarah Chen</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Success Indicator */}
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: messageSent ? 1 : 0,
              scale: messageSent ? 1 : 0.9
            }} transition={{
              duration: 0.4
            }} className="absolute -right-4 lg:-right-6 bottom-32 hidden lg:block">
                <div className="bg-card border border-[#25D366]/30 rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#25D366]/15 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Message sent!</p>
                      <p className="text-[10px] text-muted-foreground">Just now</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};