import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { SEOHead, pageSEO } from "@/components/SEOHead";

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

const About = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <Layout>
      <SEOHead {...pageSEO.about} />

      {/* Hero - Purpose Statement */}
      <section ref={heroRef} className="py-20 lg:py-32 relative overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" 
        />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary font-medium tracking-wide text-sm mb-6"
            >
              Our Purpose
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-8"
            >
              We exist to help businesses{" "}
              <span className="text-primary">never lose a lead</span> to poor follow-up.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Every missed follow-up is a missed opportunity. We're here to make sure that never happens.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Follow IQ Exists */}
      <section className="py-20 lg:py-28 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-10 text-center">
              Why Follow IQ Exists
            </h2>
          </motion.div>

          <div className="space-y-8 text-muted-foreground">
            {[
              "In 2022, we were running a marketing agency. We were good at generating leads, but terrible at following up. Leads came in, got buried in spreadsheets, and quietly disappeared.",
              "We tried CRMs. Too complex. Email automation? Low response rates. Manual follow-up? It just didn't scale.",
              "Then we noticed something: leads contacted via WhatsApp converted at 5× the rate. Open rates were through the roof. Replies came in minutes, not days.",
              "So we built Follow IQ, a simple, AI-powered tool that makes WhatsApp follow-up effortless. Personalized at scale. Set up in minutes. No complexity, just results.",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-lg leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-foreground font-medium"
            >
              Today, teams rely on Follow IQ to close more deals without the chaos.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-28 bg-card/40 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground">
              Simplicity over complexity. Always.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                num: "01",
                title: "Results over features",
                desc: "We don't build features for the sake of it. Every feature exists to help you close more deals."
              },
              {
                num: "02",
                title: "Human connection at scale",
                desc: "AI should make you more personal, not less. Our tools enhance relationships, not replace them."
              },
              {
                num: "03",
                title: "Simple enough to use today",
                desc: "If it takes a week to set up, it's too complicated. We build tools you can use in minutes."
              }
            ].map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center md:text-left"
              >
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto md:mx-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-primary font-display font-bold">{item.num}</span>
                </motion.div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              The Team
            </h2>
            <p className="text-muted-foreground">
              Small team. Big focus on helping you succeed.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-border transition-colors duration-300"
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-xl font-display font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </motion.div>
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl font-display font-bold mb-4"
            >
              Ready to transform your follow-up?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-8"
            >
              Join teams who never lose a lead to poor follow-up again.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link to="/contact">
                <Button size="lg" className="group">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
