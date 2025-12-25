import { 
  Zap, 
  Brain, 
  MessageCircle, 
  Users, 
  BarChart3, 
  Clock, 
  Bell, 
  Workflow,
  Target
} from "lucide-react";
import { StaggeredContainer, StaggeredItem, AnimatedSection } from "@/components/AnimatedSection";

const features = [
  {
    icon: Brain,
    title: "AI Message Suggestions",
    description: "GPT-powered messages that sound like you wrote them. Personalized, professional, and persuasive.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Send automated messages via WhatsApp Business API. Where your leads actually respond.",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "AI picks the optimal time to reach each lead based on their engagement patterns.",
  },
  {
    icon: Workflow,
    title: "Follow-up Sequences",
    description: "Create multi-step sequences that nurture leads automatically over days or weeks.",
  },
  {
    icon: Target,
    title: "Lead Scoring",
    description: "AI ranks your leads by likelihood to convert. Focus on the hottest opportunities.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never forget a follow-up. Get notified at exactly the right moment.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Assign leads, share notes, and track team performance in real-time.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track open rates, response rates, and conversions. Know what's working.",
  },
  {
    icon: Zap,
    title: "CRM Integration",
    description: "Connect with HubSpot, Salesforce, Pipedrive, and 50+ other tools.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Everything you need to{" "}
            <span className="gradient-text">close more deals</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features that work together to turn your follow-up process 
            into a conversion machine.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <StaggeredItem key={feature.title}>
              <div className="glass-card p-6 h-full group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
};
