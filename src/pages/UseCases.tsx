import { Link } from "react-router-dom";
import { ArrowRight, Building2, Briefcase, Home, Wrench, Check, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

const useCases = [
  {
    id: "agencies",
    icon: Building2,
    title: "Marketing Agencies",
    tagline: "Convert campaign leads on autopilot",
    problem: "Your campaigns generate hundreds of leads, but your team can't follow up fast enough. Warm leads go cold. Clients get frustrated. Revenue slips away.",
    solution: "FollowIO automatically nurtures every lead from your campaigns with personalized WhatsApp sequences. Hot leads get routed to your sales team instantly.",
    results: [
      "3x faster lead response time",
      "45% increase in campaign ROI",
      "80% reduction in manual follow-up work",
    ],
    features: [
      "Multi-client lead management",
      "Campaign-specific sequences",
      "White-label client portals",
      "Agency team collaboration",
    ],
  },
  {
    id: "consultants",
    title: "Consultants & Coaches",
    icon: Briefcase,
    tagline: "Fill your calendar with qualified prospects",
    problem: "You're great at what you do, but business development takes time you don't have. Leads from webinars and content fall through the cracks.",
    solution: "FollowIO handles all your outreach and follow-up so you can focus on delivering results. AI writes messages that sound like you.",
    results: [
      "2x more discovery calls booked",
      "60% reduction in no-shows",
      "4 hours saved per week on follow-ups",
    ],
    features: [
      "Webinar lead automation",
      "Discovery call booking",
      "Proposal follow-up sequences",
      "Client onboarding flows",
    ],
  },
  {
    id: "realestate",
    title: "Real Estate Professionals",
    icon: Home,
    tagline: "Never miss a property lead",
    problem: "Real estate is competitive. When a hot buyer or seller reaches out, every minute counts. But you can't be available 24/7.",
    solution: "FollowIO responds to inquiries instantly and nurtures leads until they're ready to talk. Open house attendees get automatic follow-up sequences.",
    results: [
      "5x faster inquiry response",
      "35% more listings from nurture campaigns",
      "90% of leads get at least 5 follow-ups",
    ],
    features: [
      "Instant inquiry response",
      "Open house follow-up automation",
      "Buyer nurturing sequences",
      "Listing anniversary reminders",
    ],
  },
  {
    id: "services",
    title: "Service Businesses",
    icon: Wrench,
    tagline: "Convert quotes into customers",
    problem: "You send quotes, but prospects go silent. You're too busy working to chase every lead. Money walks out the door.",
    solution: "FollowIO automatically follows up on every quote and keeps your pipeline warm. Get notified when leads are ready to move forward.",
    results: [
      "40% higher quote-to-close rate",
      "5x more review requests sent",
      "Consistent follow-up on every lead",
    ],
    features: [
      "Quote follow-up automation",
      "Appointment reminders",
      "Post-service review requests",
      "Referral request sequences",
    ],
  },
];

const UseCases = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Use Cases
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Built for businesses that{" "}
              <span className="gradient-text">close deals</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              See how different industries use FollowIO to automate follow-ups and grow revenue.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {useCases.map((useCase) => (
              <StaggeredItem key={useCase.id}>
                <a 
                  href={`#${useCase.id}`}
                  className="glass-card p-6 h-full flex flex-col items-center text-center group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {useCase.tagline}
                  </p>
                </a>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Detailed Use Cases */}
      {useCases.map((useCase, index) => (
        <section 
          key={useCase.id} 
          id={useCase.id}
          className={`py-24 lg:py-32 ${index % 2 === 1 ? "bg-card/30" : ""}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection direction={index % 2 === 0 ? "right" : "left"}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                    <useCase.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                      {useCase.title}
                    </h2>
                    <p className="text-primary">{useCase.tagline}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-accent mb-2">The Problem</h3>
                    <p className="text-muted-foreground">{useCase.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">The Solution</h3>
                    <p className="text-muted-foreground">{useCase.solution}</p>
                  </div>
                </div>

                <Link to="/contact" className="inline-block mt-8">
                  <Button variant="hero" className="group">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </AnimatedSection>

              <AnimatedSection direction={index % 2 === 0 ? "left" : "right"} delay={0.2}>
                <div className="space-y-6">
                  {/* Results Card */}
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <h3 className="font-display font-bold text-foreground">Results</h3>
                    </div>
                    <ul className="space-y-3">
                      {useCase.results.map((result) => (
                        <li key={result} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features Card */}
                  <div className="glass-card p-6">
                    <h3 className="font-display font-bold text-foreground mb-4">Key Features</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {useCase.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </Layout>
  );
};

export default UseCases;
