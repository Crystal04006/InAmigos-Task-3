
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
const API = "http://127.0.0.1:8000/api";

export default function Roasts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((r) => setProducts(r.data))
      .catch(() => toast.error("Couldn't load roasts"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="shop" data-testid="roasts-section" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2410C]">
              Featured Roasts
            </p>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl tracking-tight leading-[1]">
              This week from<br />the roastery.
            </h2>
          </div>
          <p className="md:max-w-sm text-foreground/65 leading-relaxed">
            Four releases, rotated weekly. Every bag is dated the day it left the
            drum — never older than seven days when it ships.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/5] bg-[#EADFC9] rounded-md" />
                  <div className="h-4 bg-[#EADFC9] rounded mt-4 w-2/3" />
                  <div className="h-3 bg-[#EADFC9] rounded mt-2 w-1/2" />
                </div>
              ))
            : products.map((p, idx) => (
                <article
                  key={p.id}
                  data-testid={`product-card-${p.id}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] rounded-md overflow-hidden bg-[#EADFC9]">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#F4EAD9] text-[#1A1410] text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-sm">
                      #{String(idx + 1).padStart(2, "0")}
                    </div>
                    <button
                      data-testid={`product-add-${p.id}`}
                      onClick={() => toast.success(`${p.name} added to bag`)}
                      aria-label={`Add ${p.name} to bag`}
                      className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-[#1A1410] text-[#F4EAD9] inline-flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl leading-tight">
                        {p.name}
                      </h3>
                      <span className="font-semibold tabular-nums">
                        ${p.price_usd.toFixed(0)}
                      </span>
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/55">
                      {p.origin} · {p.roast}
                    </p>
                    <p className="mt-3 text-sm text-foreground/75 italic">
                      {p.notes.join(" · ")}
                    </p>
                  </div>
                </article>
              ))}
        </div>
      </div>
    </section>
  );
}
