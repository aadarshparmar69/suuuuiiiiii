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
    quote: "I used to spend 4 hours a day on follow-ups. Now the AI handles it and I just close deals.",
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
    quote: "My team was skeptical about AI. Now they fight over who gets to use the new templates first.",
    author: "James Wilson",
    role: "Sales Manager",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-xs lg:text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight mb-4">
            Loved by{" "}
            <span className="gradient-text">50+ teams</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            See what sales teams are saying about Follow IQ
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.1 + index * 0.08, 
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group p-5 lg:p-6 bg-card/80 border border-border/50 rounded-xl lg:rounded-2xl hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-7 h-7 lg:w-8 lg:h-8 text-primary/20 mb-3 lg:mb-4 group-hover:text-primary/30 transition-colors" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm lg:text-[15px] text-foreground leading-relaxed mb-6 flex-1">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-xs font-bold text-primary">
                  {testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
