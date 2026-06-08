const STORY_IMG ="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=1200&q=80";

export default function Story() {
  return (
    <section
      id="story"
      data-testid="story-section"
      className="relative py-24 md:py-32 bg-[#1A1410] text-[#F4EAD9] overflow-hidden"
    >
      <div className="grain absolute inset-0 opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[5/6] rounded-md overflow-hidden">
            <img
              src={STORY_IMG}
              alt="Roaster pulling beans from a drum roaster"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A574]">
            Our Story
          </p>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl tracking-tight leading-[0.98]">
            Born in a leaky<br />
            <span className="italic">Portland garage,</span><br />
            two friends, one drum.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#F4EAD9]/75 max-w-lg">
            In 2017, we bought a beat-up 5kg roaster off Craigslist and parked it
            under a tarp. Eight years later we still roast every bag ourselves —
            same recipe, same obsession, slightly better roof.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "2017", v: "Year founded" },
              { k: "47", v: "Producers we know by first name" },
              { k: "0", v: "Compromises on freshness" },
            ].map((b) => (
              <div key={b.k} data-testid={`story-stat-${b.k}`} className="border-l border-[#F4EAD9]/20 pl-4">
                <p className="font-display text-3xl">{b.k}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#F4EAD9]/60 leading-snug">
                  {b.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
