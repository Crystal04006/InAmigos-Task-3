import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="main-footer" className="bg-[#F4EAD9] text-foreground pt-20 pb-10 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1410] text-[#F4EAD9] text-[10px] font-bold tracking-widest">
                N&amp;P
              </span>
              <span className="font-display text-2xl">North &amp; Pine</span>
            </div>
            <p className="mt-6 max-w-md text-foreground/65 leading-relaxed">
              Small-batch specialty coffee, roasted in Portland and shipped within
              48 hours of leaving the drum.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  data-testid={`footer-social-${i}`}
                  aria-label="social link"
                  className="w-10 h-10 rounded-full border border-foreground/20 inline-flex items-center justify-center hover:bg-[#1A1410] hover:text-[#F4EAD9] hover:border-[#1A1410] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C2410C]">Shop</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li><a href="#shop" className="hover:underline">All roasts</a></li>
                <li><a href="#subscribe" className="hover:underline">Subscriptions</a></li>
                <li><a href="#shop" className="hover:underline">Gift cards</a></li>
                <li><a href="#shop" className="hover:underline">Brew gear</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C2410C]">Company</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li><a href="#story" className="hover:underline">Our story</a></li>
                <li><a href="#journal" className="hover:underline">Journal</a></li>
                <li><a href="#cafes" className="hover:underline">Cafés</a></li>
                <li><a href="#contact" className="hover:underline">Wholesale</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C2410C]">Reach us</p>
              <ul className="mt-5 space-y-2.5 text-sm text-foreground/75">
                <li>hello@northandpine.co</li>
                <li>412 NW Pine Ave, Portland</li>
                <li>+1 (503) 555-0142</li>
              </ul>
            </div>
          </div>
        </div>

        <div data-testid="footer-wordmark" className="mt-20 border-t border-foreground/10 pt-10">
          <p className="font-display tracking-tight leading-none text-[16vw] sm:text-[14vw] lg:text-[13vw] text-foreground">
            North &amp; <span className="italic">Pine</span>
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-foreground/55">
          <p>© {new Date().getFullYear()} North &amp; Pine Coffee Co.</p>
          <p>Roasted slowly · Brewed daily.</p>
        </div>
      </div>
    </footer>
  );
}