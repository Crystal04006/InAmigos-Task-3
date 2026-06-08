
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const LINKS = [
  { label: "Shop", href: "#shop" },
  { label: "Story", href: "#story" },
  { label: "Subscribe", href: "#subscribe" },
  { label: "Journal", href: "#journal" },
  { label: "Cafés", href: "#cafes" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/85 border-b border-foreground/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-2.5 font-display text-2xl tracking-tight"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1A1410] text-[#F4EAD9] text-xs font-bold tracking-widest">
            N&amp;P
          </span>
          <span className="hidden sm:inline">North &amp; Pine</span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="text-sm font-medium text-foreground/75 hover:text-foreground transition-colors uppercase tracking-[0.12em]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#shop"
            data-testid="nav-cart-btn"
            className="inline-flex items-center gap-2 rounded-full bg-[#1A1410] text-[#F4EAD9] px-5 py-2.5 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag · 0</span>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-full border border-foreground/15"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div data-testid="nav-mobile-menu" className="md:hidden bg-background border-t border-foreground/10">
          <ul className="px-6 py-6 flex flex-col gap-5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="text-base font-semibold uppercase tracking-[0.12em]">
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#shop" onClick={() => setOpen(false)} className="rounded-full bg-[#1A1410] text-[#F4EAD9] px-5 py-3 text-sm font-semibold text-center inline-flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Bag · 0
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
