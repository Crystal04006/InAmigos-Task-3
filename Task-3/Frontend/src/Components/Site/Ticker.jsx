import { Coffee } from "lucide-react";

const WORDS = [
  "Small-batch", "Direct trade", "Roasted this week",
  "Whole bean or ground", "Free shipping over $40", "Compostable bags",
];

export default function Ticker() {
  const items = [...WORDS, ...WORDS];
  return (
    <div
      data-testid="ticker-section"
      className="border-y border-foreground/15 bg-[#1A1410] text-[#F4EAD9] overflow-hidden py-5"
    >
      <div className="flex gap-12 ticker w-max items-center">
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-2xl md:text-3xl tracking-tight">{w}</span>
            <Coffee className="w-5 h-5 text-[#D4A574] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
