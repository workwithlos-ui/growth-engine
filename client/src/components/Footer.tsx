export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 bg-[#22c55e] flex items-center justify-center">
                <span className="text-[#0a0a0a] font-bold text-[11px]">P</span>
              </div>
              <span className="font-semibold text-[14px] tracking-[-0.02em]">PAID</span>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-[#3f3f3f] max-w-[200px]">
              AI-powered commercial intelligence for consultants, investors, and funds.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.1em] text-[#525252] font-medium mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {["How it works", "What you get", "Pricing"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-[#3f3f3f] hover:text-[#a3a3a3] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.1em] text-[#525252] font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["Security", "Privacy", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-[#3f3f3f] hover:text-[#a3a3a3] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.1em] text-[#525252] font-medium mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {["Contact", "Book a demo"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-[#3f3f3f] hover:text-[#a3a3a3] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-[#2a2a2a]">
            &copy; 2026 PAID. All rights reserved.
          </span>
          <a
            href="https://LosSilva.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-[#3f3f3f] hover:text-[#22c55e] transition-colors"
          >
            Powered by ELIOS
          </a>
        </div>
      </div>
    </footer>
  );
}
