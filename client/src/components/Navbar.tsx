import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "GRIP Framework", href: "#what-you-get" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
            }}
          >
            <span
              className="text-[11px] font-black text-[#0a0a0a]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              P
            </span>
          </div>
          <span
            className="text-[15px] font-bold tracking-[-0.02em]"
            style={{
              fontFamily: "Syne, sans-serif",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            PAID
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#assess"
            className="group inline-flex items-center gap-2 text-[12px] font-bold px-4 py-2 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              color: "#0a0a0a",
              fontFamily: "Syne, sans-serif",
              boxShadow: "0 0 16px rgba(34,197,94,0.25)",
            }}
          >
            <Zap size={10} />
            Free GRIP Score
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-16 inset-x-0 p-6 space-y-4"
          style={{
            background: "rgba(10,10,10,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[14px] font-medium py-2"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#assess"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2 text-[13px] font-bold px-5 py-2.5 mt-2"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              color: "#0a0a0a",
              fontFamily: "Syne, sans-serif",
            }}
          >
            <Zap size={10} />
            Free GRIP Score
          </a>
        </div>
      )}
    </nav>
  );
}
