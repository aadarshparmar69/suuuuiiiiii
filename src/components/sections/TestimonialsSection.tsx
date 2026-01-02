import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Follow IQ increased our lead conversion by 340% in just 3 months. The WhatsApp integration is a game-changer.",
    author: "Sarah Chen",
    role: "CEO, Digital Growth Agency",
    rating: 5,
  },
  {
    quote: "I used to spend 4 hours a day on follow-ups. Now the AI handles it and I just close deals. Best investment I've made.",
    author: "Marcus Johnson",
    role: "Real Estate Broker",
    rating: 5,
  },
  {
    quote: "The AI message suggestions are scary good. Clients think I write every message personally.",
    author: "Emily Rodriguez",
    role: "Business Coach",
    rating: 5,
  },
  {
    quote: "We tried 5 different CRMs. None of them fixed our follow-up problem. Follow IQ did in week one.",
    author: "David Park",
    role: "Founder, ServicePro HVAC",
    rating: 5,
  },
  {
    quote: "The analytics alone are worth it. Finally I can see which follow-up sequences actually convert.",
    author: "Amanda Foster",
    role: "Marketing Director",
    rating: 5,
  },
  {
    quote: "My team was skeptical about AI writing messages. Now they fight over who gets to use the new templates first.",
    author: "James Wilson",
    role: "Sales Manager",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-28 lg:py-40 relative overflow-hidden bg-card/30">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-5"
          >
            Testimonials
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4">
            Loved by{" "}
            <span className="gradient-text">2,000+ teams</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what sales teams are saying about Follow IQ
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: 0.1 + index * 0.08, 
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <motion.div 
                whileHover={{ y: -6, borderColor: "hsl(var(--primary) / 0.4)" }}
                transition={{ duration: 0.3 }}
                className="h-full p-7 bg-card border border-border rounded-2xl flex flex-col transition-all duration-300 group"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4 group-hover:text-primary/30 transition-colors" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.08 + i * 0.05, duration: 0.3 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-8 flex-1 text-[15px]">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-border/50">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-sm font-bold text-primary">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
