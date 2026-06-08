import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Mail } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:8000"}/api`;

export default function ContactNewsletter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [news, setNews] = useState("");
  const [newsLoading, setNewsLoading] = useState(false);

  const submitContact = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Note received. We'll write back from the roastery.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Could not send. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const submitNewsletter = async (e) => {
    e.preventDefault();
    if (!news.trim()) {
      toast.error("Please enter your email");
      return;
    }
    setNewsLoading(true);
    try {
      await axios.post(`${API}/newsletter`, { email: news });
      toast.success("Welcome to the list. First letter lands Friday.");
      setNews("");
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Subscription failed.");
    } finally {
      setNewsLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-newsletter-section" className="py-24 md:py-32 bg-[#1A1410] text-[#F4EAD9] relative overflow-hidden">
      <div className="grain absolute inset-0 opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 relative">
        {/* Newsletter */}
        <div data-testid="newsletter-card" className="lg:col-span-5">
          <Mail className="w-8 h-8 text-[#D4A574]" />
          <h3 className="mt-6 font-display text-5xl tracking-tight leading-[0.98]">
            The Friday<br />
            <span className="italic">Pour-over Letter.</span>
          </h3>
          <p className="mt-5 text-[#F4EAD9]/70 leading-relaxed max-w-sm">
            One short email each Friday — what we're brewing, who we visited,
            and an occasional 15% off code. No noise, no spam.
          </p>

          <form onSubmit={submitNewsletter} className="mt-10">
            <div className="flex items-center gap-3 border-b-2 border-[#F4EAD9]/30 focus-within:border-[#D4A574] transition-colors">
              <input
                data-testid="newsletter-email-input"
                value={news}
                onChange={(e) => setNews(e.target.value)}
                type="email"
                placeholder="you@example.com"
                className="flex-1 bg-transparent py-4 outline-none text-lg placeholder:text-[#F4EAD9]/40 text-[#F4EAD9]"
              />
              <button
                type="submit"
                data-testid="newsletter-submit-btn"
                disabled={newsLoading}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#C2410C] text-white px-5 py-2.5 text-sm font-semibold hover:-translate-y-0.5 transition-all disabled:opacity-60"
              >
                {newsLoading ? "..." : "Subscribe"}
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Contact */}
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A574]">
            Write to the roastery
          </p>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl tracking-tight leading-[0.98]">
            Wholesale, press,<br />
            <span className="italic">or just a hello.</span>
          </h2>
          <p className="mt-5 text-[#F4EAD9]/70 max-w-xl leading-relaxed">
            Wholesale partners, journalists, fellow nerds — drop us a note.
            We open every email ourselves.
          </p>

          <form
            onSubmit={submitContact}
            data-testid="contact-form"
            className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6"
          >
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F4EAD9]/60">
                Your name
              </label>
              <input
                data-testid="contact-name-input"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Sam Hayward"
                className="w-full bg-transparent border-b-2 border-[#F4EAD9]/20 px-0 py-3 mt-1 focus:outline-none focus:border-[#C2410C] transition-colors text-lg text-[#F4EAD9] placeholder:text-[#F4EAD9]/35"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F4EAD9]/60">
                Email
              </label>
              <input
                data-testid="contact-email-input"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="sam@example.com"
                className="w-full bg-transparent border-b-2 border-[#F4EAD9]/20 px-0 py-3 mt-1 focus:outline-none focus:border-[#C2410C] transition-colors text-lg text-[#F4EAD9] placeholder:text-[#F4EAD9]/35"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F4EAD9]/60">
                Your message
              </label>
              <textarea
                data-testid="contact-message-input"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Tell us a bit about what you'd love to order, ask, or chat about..."
                className="w-full bg-transparent border-b-2 border-[#F4EAD9]/20 px-0 py-3 mt-1 focus:outline-none focus:border-[#C2410C] transition-colors text-lg resize-none text-[#F4EAD9] placeholder:text-[#F4EAD9]/35"
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between flex-wrap gap-4 pt-3">
              <p className="text-xs text-[#F4EAD9]/55">
                We typically reply within one business day.
              </p>
              <button
                type="submit"
                data-testid="contact-submit-btn"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-[#C2410C] text-white px-8 py-4 font-semibold hover:-translate-y-1 hover:shadow-xl transition-all disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send message"}
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
