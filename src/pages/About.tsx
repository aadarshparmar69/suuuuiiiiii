import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

const values = [
  {
    icon: Target,
    title: "Results First",
    description: "We obsess over outcomes, not features. Every decision we make is guided by one question: will this help our customers close more deals?",
  },
  {
    icon: Heart,
    title: "Human Touch",
    description: "AI should enhance human connection, not replace it. Our tools help you be more personal, not less—at scale.",
  },
  {
    icon: Zap,
    title: "Radical Simplicity",
    description: "Complexity is the enemy of execution. We build tools that are powerful yet simple enough to use in 5 minutes.",
  },
  {
    icon: Users,
    title: "Customer Obsession",
    description: "Our customers are partners. We build with them, for them, and because of them. Their success is our success.",
  },
];

const team = [
  { name: "Alex Chen", role: "CEO & Co-founder", initial: "AC" },
  { name: "Sarah Williams", role: "CTO & Co-founder", initial: "SW" },
  { name: "Marcus Rodriguez", role: "Head of Product", initial: "MR" },
  { name: "Emily Thompson", role: "Head of Growth", initial: "ET" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                We believe follow-up{" "}
                <span className="gradient-text">shouldn't be hard</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                FollowIO was born from a simple frustration: great opportunities were being lost 
                to poor follow-up. Not because people didn't care, but because they didn't have 
                the right tools.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-display font-bold text-primary mb-2">2,000+</div>
                    <p className="text-muted-foreground text-sm">Teams using FollowIO</p>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-primary mb-2">10M+</div>
                    <p className="text-muted-foreground text-sm">Messages sent</p>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-primary mb-2">$50M+</div>
                    <p className="text-muted-foreground text-sm">Revenue generated</p>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-primary mb-2">98%</div>
                    <p className="text-muted-foreground text-sm">Customer satisfaction</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-invert prose-lg mx-auto">
              <p className="text-muted-foreground">
                In 2022, our founders were running a marketing agency. They were great at 
                generating leads, but terrible at following up. Leads would come in, get 
                lost in spreadsheets, and quietly die.
              </p>
              <p className="text-muted-foreground">
                They tried every CRM, every automation tool, every productivity hack. 
                Nothing worked. CRMs were too complex. Email automation had low response rates. 
                Manual follow-up didn't scale.
              </p>
              <p className="text-muted-foreground">
                Then they discovered something: their best-performing leads all had one thing 
                in common—they'd been contacted via WhatsApp. The open rates were astronomical. 
                The response rates were 5x higher than email.
              </p>
              <p className="text-muted-foreground">
                So they built FollowIO: an AI-powered platform that makes WhatsApp follow-up 
                effortless. Smart enough to personalize every message. Simple enough to set 
                up in 5 minutes. Powerful enough to 10x your conversions.
              </p>
              <p className="text-foreground font-semibold">
                Today, over 2,000 teams use FollowIO to never lose a lead again.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we build.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggeredItem key={value.title}>
                <div className="glass-card p-6 h-full text-center group hover:border-primary/50 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground">
              A small team of builders obsessed with helping you close more deals.
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member) => (
              <StaggeredItem key={member.name}>
                <div className="glass-card p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-2xl font-display font-bold text-primary">
                    {member.initial}
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
