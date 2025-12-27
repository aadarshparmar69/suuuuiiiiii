import { Link } from "react-router-dom";
import { ArrowRight, Building2, Briefcase, Home, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { StaggeredContainer, StaggeredItem, AnimatedSection } from "@/components/AnimatedSection";

const useCases = [
  {
    icon: Building2,
    title: "Marketing Agencies",
    description: "Nurture leads from ad campaigns automatically. Stop losing warm leads to slow follow-up.",
    benefits: ["Campaign lead automation", "Multi-client management", "ROI tracking"],
    href: "/use-cases#agencies",
  },
  {
    icon: Briefcase,
    title: "Consultants & Coaches",
    description: "Fill your calendar with qualified prospects. AI handles outreach so you can focus on delivery.",
    benefits: ["Discovery call booking", "Proposal follow-ups", "Client onboarding"],
    href: "/use-cases#consultants",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Follow up with buyers and sellers at the perfect moment. Never miss a hot property lead.",
    benefits: ["Listing inquiries", "Open house follow-ups", "Buyer nurturing"],
    href: "/use-cases#real-estate",
  },
  {
    icon: Wrench,
    title: "Service Businesses",
    description: "Convert quotes into customers automatically. Keep your pipeline flowing with happy clients.",
    benefits: ["Quote follow-ups", "Appointment reminders", "Review requests"],
    href: "/use-cases#services",
  },
];

export const UseCasesSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Built for teams who{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">close deals</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow IQ works for any business that relies on timely follow-up to win customers.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {useCases.map((useCase) => (
            <StaggeredItem key={useCase.title}>
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link to={useCase.href}>
                  <Button variant="ghost" size="sm" className="group/btn text-primary hover:text-primary">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link to="/use-cases">
            <Button variant="heroOutline" size="lg">
              View All Use Cases
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
