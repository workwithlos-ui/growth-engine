export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-7 h-7 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", boxShadow: "0 0 16px rgba(34,197,94,0.3)" }}
              >
                <span className="text-[#0a0a0a] font-bold text-[12px]" style={{ fontFamily: "Syne, sans-serif" }}>P</span>
              </div>
              <span className="font-bold text-[15px] tracking-[-0.03em] text-white" style={{ fontFamily: "Syne, sans-serif" }}>PAID</span>
            </div>
            <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.25)" }}>
              Commercial intelligence for operators.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "How it works", href: "#how-it-works" },
              { label: "Solutions", href: "#solutions" },
              { label: "Pricing", href: "#pricing" },
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)"; }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.18)" }}>
            &copy; {new Date().getFullYear()} PAID. All rights reserved.
          </p>
          <a
            href="https://LosSilva.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.2)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(34,197,94,0.7)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.2)"; }}
          >
            Powered by{" "}
            <span className="font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>ELIOS</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
