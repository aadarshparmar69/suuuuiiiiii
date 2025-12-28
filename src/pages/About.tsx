import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";

const team = [
  { 
    name: "Aadarsh Parmar", 
    role: "Founder", 
    bio: "Building tools that help businesses grow through better customer relationships."
  },
  { 
    name: "Sarvesh Rathore", 
    role: "Head of Product", 
    bio: "Obsessed with creating simple solutions for complex problems."
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 }
  },
  viewport: { once: true }
};

const About = () => {
  return (
    <Layout>
      {/* Hero - Purpose Statement */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center">
            <p className="text-primary font-medium tracking-wide text-sm mb-6">
              Our Purpose
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-8">
              We exist to help businesses{" "}
              <span className="text-primary">never lose a lead</span> to poor follow-up.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every missed follow-up is a missed opportunity. We're here to make sure that never happens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Follow IQ Exists */}
      <section className="py-20 lg:py-28 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-10 text-center">
              Why Follow IQ Exists
            </h2>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="space-y-8 text-muted-foreground"
          >
            <motion.p {...fadeInUp} className="text-lg leading-relaxed">
              In 2022, we were running a marketing agency. We were good at generating leads—but terrible at following up. Leads came in, got buried in spreadsheets, and quietly disappeared.
            </motion.p>

            <motion.p {...fadeInUp} className="text-lg leading-relaxed">
              We tried CRMs. Too complex. Email automation? Low response rates. Manual follow-up? Didn't scale.
            </motion.p>

            <motion.p {...fadeInUp} className="text-lg leading-relaxed">
              Then we noticed something: leads contacted via WhatsApp converted at 5× the rate. Open rates were through the roof. Replies came in minutes, not days.
            </motion.p>

            <motion.p {...fadeInUp} className="text-lg leading-relaxed">
              So we built Follow IQ—a simple, AI-powered tool that makes WhatsApp follow-up effortless. Personalized at scale. Set up in minutes. No complexity, just results.
            </motion.p>

            <motion.p {...fadeInUp} className="text-lg text-foreground font-medium">
              Today, teams rely on Follow IQ to close more deals without the chaos.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-28 bg-card/40 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground">
              Simplicity over complexity. Always.
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid md:grid-cols-3 gap-8 md:gap-12"
          >
            <motion.div {...fadeInUp} className="text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <span className="text-primary font-display font-bold">01</span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                Results over features
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We don't build features for the sake of it. Every feature exists to help you close more deals.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <span className="text-primary font-display font-bold">02</span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                Human connection at scale
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI should make you more personal, not less. Our tools enhance relationships, not replace them.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <span className="text-primary font-display font-bold">03</span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                Simple enough to use today
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If it takes a week to set up, it's too complicated. We build tools you can use in minutes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              The Team
            </h2>
            <p className="text-muted-foreground">
              Small team. Big focus on helping you succeed.
            </p>
          </motion.div>

          <motion.div 
            {...staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {team.map((member) => (
              <motion.div 
                key={member.name}
                {...fadeInUp}
                className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-border transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5">
                  <span className="text-xl font-display font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Ready to transform your follow-up?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join teams who never lose a lead to poor follow-up again.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
