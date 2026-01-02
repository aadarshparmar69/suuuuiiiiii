import { Link } from "react-router-dom";
import { ArrowRight, Building2, Briefcase, Home, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-28 lg:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-5"
          >
            Use Cases
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Built for teams who{" "}
            <span className="gradient-text">close deals</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Follow IQ works for any business that relies on timely follow-up to win customers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <motion.div 
                whileHover={{ y: -6, borderColor: "hsl(var(--primary) / 0.4)" }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl p-8 h-full group transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors"
                  >
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {useCase.benefits.map((benefit, i) => (
                    <motion.li 
                      key={benefit} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                <Link to={useCase.href}>
                  <Button variant="ghost" size="sm" className="group/btn text-primary hover:text-primary hover:bg-primary/10 p-0">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link to="/use-cases">
            <Button variant="heroOutline" size="lg" className="group">
              View All Use Cases
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
