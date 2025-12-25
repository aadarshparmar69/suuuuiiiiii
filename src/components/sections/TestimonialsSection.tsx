import { Star } from "lucide-react";
import { StaggeredContainer, StaggeredItem, AnimatedSection } from "@/components/AnimatedSection";

const testimonials = [
  {
    quote: "FollowIO increased our lead conversion by 340% in just 3 months. The WhatsApp integration is a game-changer.",
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
    quote: "The AI message suggestions are scary good. Clients think I write every message personally. My team has doubled our capacity.",
    author: "Emily Rodriguez",
    role: "Business Coach",
    rating: 5,
  },
  {
    quote: "We tried 5 different CRMs. None of them fixed our follow-up problem. FollowIO did in week one.",
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
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Loved by{" "}
            <span className="gradient-text">2,000+ teams</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what real users say about FollowIO.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <StaggeredItem key={index}>
              <div className="glass-card p-6 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 flex-1">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-muted-foreground">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
};
