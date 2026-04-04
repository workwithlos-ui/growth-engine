import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="container flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="w-7 h-7 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              boxShadow: "0 0 20px rgba(34,197,94,0.35)",
            }}
          >
            <span className="text-[#0a0a0a] font-bold text-[12px] relative z-10" style={{ fontFamily: "Syne, sans-serif" }}>P</span>
          </div>
          <span className="font-bold text-[15px] tracking-[-0.03em] text-white" style={{ fontFamily: "Syne, sans-serif" }}>
            PAID
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Solutions", href: "#solutions" },
            { label: "Pricing", href: "#pricing" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-white/40 hover:text-white/90 transition-all duration-200 hover:tracking-[-0.01em]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-[13px] font-medium text-white/40 hover:text-white/80 transition-colors">
            Sign in
          </a>
          <a
            href="#pricing"
            className="relative overflow-hidden text-[13px] font-bold px-5 py-2 transition-all duration-300 hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              color: "#0a0a0a",
              fontFamily: "Syne, sans-serif",
              boxShadow: "0 0 24px rgba(34,197,94,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(34,197,94,0.55), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(34,197,94,0.35), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
          >
            Start diagnostic
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/50 hover:text-white/80 transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "280px" : "0",
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(24px)",
        }}
      >
        <div className="container pb-6 pt-2 flex flex-col gap-4 border-t border-white/[0.06]">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Solutions", href: "#solutions" },
            { label: "Pricing", href: "#pricing" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] text-white/50 hover:text-white/90 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center text-[13px] font-bold px-5 py-2.5 mt-2"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              color: "#0a0a0a",
              fontFamily: "Syne, sans-serif",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Start diagnostic
          </a>
        </div>
      </div>
    </nav>
  );
}
