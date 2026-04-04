import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      {/* Large ambient orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none orb-animate"
        style={{ background: "radial-gradient(ellipse at center, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.03) 40%, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <div className="container relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 text-[11px] font-semibold tracking-[0.12em] uppercase"
            style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", color: "#4ade80", fontFamily: "DM Mono, monospace" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
            Ready when you are
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-black leading-[0.95] tracking-[-0.04em] mb-6 mx-auto"
            style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", maxWidth: "700px" }}>
            <span style={{ background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Stop guessing.<br />
            </span>
            <span style={{ background: "linear-gradient(135deg, #22c55e 0%, #4ade80 50%, #86efac 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 30px rgba(34,197,94,0.4))" }}>
              Start knowing.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-[17px] leading-relaxed mb-10 mx-auto max-w-[460px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            Run your first diagnostic in minutes. No setup. No integration. Just answers.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#pricing"
              className="group relative overflow-hidden inline-flex items-center gap-2.5 text-[15px] font-bold px-8 py-4 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                color: "#0a0a0a",
                fontFamily: "Syne, sans-serif",
                boxShadow: "0 0 40px rgba(34,197,94,0.45), 0 8px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(34,197,94,0.65), 0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(34,197,94,0.45), 0 8px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)"; }}
            >
              <span className="relative z-10">Start free for 7 days</span>
              <ArrowRight size={15} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              <div className="absolute inset-0 shimmer" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}>
              Book a demo instead
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            {["No credit card required", "Cancel any time", "Setup in under 5 minutes"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                  <path d="M1 4.5L4.5 8L11 1" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
