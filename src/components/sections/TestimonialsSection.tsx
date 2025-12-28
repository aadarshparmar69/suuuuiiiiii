import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

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
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-primary" />
            Testimonials
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
            Loved by{" "}
            <span className="gradient-text">2,000+ teams</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
            >
              <div className="h-full p-6 bg-card border border-border rounded-xl flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-muted-foreground">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
