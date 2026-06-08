import { MapPin } from "lucide-react";

const CAFES = [
  {
    id: "pdx",
    city: "Portland, OR",
    address: "412 NW Pine Ave",
    hours: "7am – 5pm · Daily",
    img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: "sea",
    city: "Seattle, WA",
    address: "82 Pike Lane",
    hours: "6am – 6pm · Mon–Sat",
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: "ny",
    city: "Brooklyn, NY",
    address: "199 Bedford Pl",
    hours: "7am – 7pm · Daily",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1100&q=80",
  },
];

export default function Locations() {
  return (
    <section id="cafes" data-testid="locations-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2410C]">
              Drop by
            </p>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl tracking-tight leading-[0.98]">
              Three cafés.<br />
              <span className="italic">All within walking distance of something good.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-foreground/70 leading-relaxed">
            Stop in for a cortado, sit by the window, and watch us pull a fresh
            roast. Wi-Fi is fine. The pastries are better.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {CAFES.map((c) => (
            <article
              key={c.id}
              data-testid={`cafe-card-${c.id}`}
              className="group relative rounded-md overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={c.img}
                alt={c.city}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A574] inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Café
                </p>
                <h3 className="mt-3 font-display text-4xl tracking-tight leading-none">{c.city}</h3>
                <p className="mt-4 text-sm text-white/85">{c.address}</p>
                <p className="text-sm text-white/65">{c.hours}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
