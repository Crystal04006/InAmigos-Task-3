import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    id: "j1",
    tag: "Brewing",
    title: "The 30-second pour-over that beats your café.",
    minutes: 5,
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "j2",
    tag: "Origin",
    title: "We visited the farm in Yirgacheffe. Here's what we learned.",
    minutes: 8,
    img: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "j3",
    tag: "Gear",
    title: "A grinder under $200 that won't betray your beans.",
    minutes: 4,
    img: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Journal() {
  return (
    <section id="journal" data-testid="journal-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2410C]">
              The Brewing Journal
            </p>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl tracking-tight leading-[0.98]">
              Read between<br />the <span className="italic">grinds.</span>
            </h2>
          </div>
          <a
            href="#"
            data-testid="journal-cta-all"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] border-b-2 border-foreground/30 pb-1 hover:border-foreground transition-colors w-fit"
          >
            All articles <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {POSTS.map((p) => (
            <article
              key={p.id}
              data-testid={`journal-card-${p.id}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-md bg-[#EADFC9]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                <span className="text-[#C2410C]">{p.tag}</span>
                <span>·</span>
                <span>{p.minutes} min read</span>
              </div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl leading-[1.1] tracking-tight group-hover:text-[#C2410C] transition-colors">
                {p.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
