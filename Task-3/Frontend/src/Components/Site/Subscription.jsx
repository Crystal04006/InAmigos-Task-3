
import { Check, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const PLANS = [
  {
    id: "solo",
    name: "The Solo",
    price: 16,
    cadence: "every 2 weeks",
    bag: "1 × 340g bag",
    perks: ["Free shipping", "Cancel anytime", "Roaster's choice or pick your own"],
    feature: false,
  },
  {
    id: "duo",
    name: "The Duo",
    price: 28,
    cadence: "every 2 weeks",
    bag: "2 × 340g bags",
    perks: ["Free shipping", "Cancel anytime", "Mix light & dark", "Surprise bonus bag every 4th drop"],
    feature: true,
  },
  {
    id: "cafe",
    name: "The Café",
    price: 64,
    cadence: "every week",
    bag: "4 × 340g bags",
    perks: ["Free priority shipping", "Cancel anytime", "Office / studio supply", "Free brew gear after 3 months"],
    feature: false,
  },
];

export default function Subscription() {
  return (
    <section id="subscribe" data-testid="subscription-section" className="py-24 md:py-32 bg-[#EADFC9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2410C]">
              Subscriptions
            </p>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl tracking-tight leading-[0.98]">
              Stop running out.<br />
              <span className="italic">Start running on coffee.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-foreground/70 leading-relaxed">
            Three plans, zero contracts. Skip a drop, swap a bag, or cancel from
            a single email — we'd rather you stay because you want to.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <article
              key={p.id}
              data-testid={`plan-card-${p.id}`}
              className={`relative rounded-md p-8 transition-all hover:-translate-y-1 ${
                p.feature
                  ? "bg-[#1A1410] text-[#F4EAD9]"
                  : "bg-[#F4EAD9] text-foreground border border-foreground/10"
              }`}
            >
              {p.feature && (
                <div className="absolute -top-3 left-8 bg-[#C2410C] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm">
                  Most loved
                </div>
              )}
              <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${p.feature ? "text-[#D4A574]" : "text-[#C2410C]"}`}>
                {p.bag}
              </p>
              <h3 className="mt-3 font-display text-4xl tracking-tight">
                {p.name}
              </h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl">${p.price}</span>
                <span className={`text-sm ${p.feature ? "text-[#F4EAD9]/60" : "text-foreground/55"}`}>
                  / {p.cadence}
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.feature ? "text-[#D4A574]" : "text-[#C2410C]"}`} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <button
                data-testid={`plan-cta-${p.id}`}
                onClick={() => toast.success(`${p.name} plan selected — we'll email you shortly!`)}
                className={`mt-10 w-full inline-flex items-center justify-between gap-2 rounded-full px-6 py-3.5 font-semibold transition-all ${
                  p.feature
                    ? "bg-[#C2410C] text-white hover:bg-[#A8350B]"
                    : "bg-[#1A1410] text-[#F4EAD9] hover:bg-[#2A2118]"
                }`}
              >
                Start this plan
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
