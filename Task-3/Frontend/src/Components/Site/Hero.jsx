import { ArrowUpRight } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1400&q=80";

export default function Hero() {
  return (
    <section id="top" data-testid="hero-section" className="relative pt-32 md:pt-36 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
        <div className="lg:col-span-7">
          <div
            data-testid="hero-badge"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C]" />
            Roasted this week · Portland, OR
          </div>

          <h1
            data-testid="hero-title"
            className="mt-8 font-display tracking-tight leading-[0.92] text-[clamp(3.2rem,9vw,7.5rem)] text-balance"
          >
            Slow coffee.<br />
            <span className="italic">For fast lives.</span>
          </h1>

          <p
            data-testid="hero-subtitle"
            className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-foreground/70"
          >
            We roast in tiny batches, ship within 48 hours, and refuse to round up
            our flavour notes. Whole bean or ground — your call.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#shop"
              data-testid="hero-cta-shop"
              className="group inline-flex items-center gap-2 rounded-full bg-[#C2410C] text-white px-8 py-4 font-semibold hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              Shop the roasts
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#subscribe"
              data-testid="hero-cta-subscribe"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/25 px-8 py-4 font-semibold hover:border-foreground transition-all"
            >
              Start a subscription
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-md overflow-hidden bg-[#EADFC9]">
            <img
              src={HERO_IMG}
              alt="Pour over coffee being brewed"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 grain pointer-events-none" />
          </div>

          {/* Floating tag card */}
          <div
            data-testid="hero-floating-card"
            className="absolute -bottom-6 -left-6 md:-left-10 bg-[#1A1410] text-[#F4EAD9] rounded-md p-5 w-[240px] shadow-2xl"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4A574]">
              This week's pick
            </p>
            <p className="mt-3 font-display text-3xl leading-none">Moonrise</p>
            <p className="mt-2 text-sm text-[#F4EAD9]/70">
              Yirgacheffe · Ethiopia<br />
              jasmine · stone fruit · honey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
