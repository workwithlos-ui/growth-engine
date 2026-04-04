import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#22c55e] flex items-center justify-center">
            <span className="text-[#0a0a0a] font-bold text-sm tracking-tight">P</span>
          </div>
          <span className="font-semibold text-[15px] tracking-[-0.02em] text-[#f5f5f5]">
            PAID
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-[13px] text-[#737373] hover:text-[#f5f5f5] transition-colors">
            How it works
          </a>
          <a href="#who-its-for" className="text-[13px] text-[#737373] hover:text-[#f5f5f5] transition-colors">
            Solutions
          </a>
          <a href="#pricing" className="text-[13px] text-[#737373] hover:text-[#f5f5f5] transition-colors">
            Pricing
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#pricing" className="text-[13px] text-[#737373] hover:text-[#f5f5f5] transition-colors">
            Sign in
          </a>
          <a
            href="#pricing"
            className="bg-[#f5f5f5] text-[#0a0a0a] text-[13px] font-medium px-4 py-2 hover:bg-white transition-colors"
          >
            Start diagnostic
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#737373]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/[0.06] px-5 py-6 space-y-4">
          <a href="#how-it-works" className="block text-[14px] text-[#a3a3a3]" onClick={() => setMobileOpen(false)}>
            How it works
          </a>
          <a href="#who-its-for" className="block text-[14px] text-[#a3a3a3]" onClick={() => setMobileOpen(false)}>
            Solutions
          </a>
          <a href="#pricing" className="block text-[14px] text-[#a3a3a3]" onClick={() => setMobileOpen(false)}>
            Pricing
          </a>
          <div className="pt-4 border-t border-white/[0.06]">
            <a
              href="#pricing"
              className="block w-full text-center bg-[#f5f5f5] text-[#0a0a0a] text-[14px] font-medium px-4 py-2.5"
              onClick={() => setMobileOpen(false)}
            >
              Start diagnostic
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
