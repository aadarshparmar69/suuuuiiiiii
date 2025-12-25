import { AlertCircle, TrendingDown, Clock, Users } from "lucide-react";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/AnimatedSection";

const problems = [
  {
    icon: Clock,
    stat: "80%",
    title: "of leads need 5+ follow-ups",
    description: "Yet most salespeople give up after just one or two attempts.",
  },
  {
    icon: TrendingDown,
    stat: "44%",
    title: "of salespeople give up",
    description: "After one follow-up, leaving money on the table every single day.",
  },
  {
    icon: AlertCircle,
    stat: "71%",
    title: "of leads are never followed up",
    description: "Qualified leads slip through the cracks due to poor systems.",
  },
  {
    icon: Users,
    stat: "$1.2M",
    title: "lost per year on average",
    description: "Businesses lose significant revenue from poor follow-up habits.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Your leads are{" "}
            <span className="gradient-text-accent">slipping away</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The follow-up gap is costing businesses billions every year. 
            Not because they don't care—but because manual follow-up doesn't scale.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <StaggeredItem key={problem.title}>
              <div className="glass-card p-6 h-full group hover:border-accent/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-4xl font-display font-bold text-foreground mb-2">
                  {problem.stat}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
};
