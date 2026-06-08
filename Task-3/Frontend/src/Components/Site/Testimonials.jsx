
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  { name: "Mara K.", role: "Subscriber, 2 yrs", quote: "I have tried every roaster in the Pacific Northwest. I keep coming back to Moonrise.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80" },
  { name: "Devon R.", role: "Café owner, Seattle", quote: "Their Ember House made our latte program. Customers ask what changed.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80" },
  { name: "Priya S.", role: "Home brewer", quote: "Bags arrive smelling like a roastery. Nothing else compares.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80" },
  { name: "Tom A.", role: "Studio owner", quote: "I subscribed for myself. My team voted to expand it for the whole studio.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80" },
  { name: "Jules M.", role: "Barista, Portland", quote: "Even the decaf has a backbone. That's rare.", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&q=80" },
];

export default function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section data-testid="testimonials-section" className="py-20 md:py-28 bg-[#EADFC9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2410C]">
          What folks say
        </p>
        <h2 className="mt-4 font-display text-5xl sm:text-6xl tracking-tight leading-[0.98] max-w-3xl">
          Better than five stars —<br />
          <span className="italic">people sending us photos of their morning.</span>
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 marquee w-max">
          {items.map((t, i) => (
            <article
              key={i}
              data-testid={`testimonial-card-${i}`}
              className="w-[340px] sm:w-[400px] bg-[#F4EAD9] rounded-md p-7 shrink-0 border border-foreground/10"
            >
              <Quote className="w-6 h-6 text-[#C2410C]" />
              <p className="mt-4 font-display text-xl leading-snug">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-foreground/10">
                <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-foreground/60">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
