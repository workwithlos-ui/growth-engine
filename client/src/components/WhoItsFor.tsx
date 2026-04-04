import Reveal from "./Reveal";
import { Briefcase, Building2, PieChart } from "lucide-react";

const audiences = [
  { icon: Briefcase, label: "Consultants", title: "Consultants and Agencies", desc: "Know exactly what is wrong with a client's business before the first call ends.", accent: "#22c55e", glow: "rgba(34,197,94,0.08)" },
  { icon: Building2, label: "Real Estate", title: "Real Estate Investors", desc: "See which properties are leaking revenue and where operators are underperforming.", accent: "#60a5fa", glow: "rgba(96,165,250,0.08)" },
  { icon: PieChart, label: "Funds", title: "Funds and Portfolio Teams", desc: "Run the same diagnostic across every company in your portfolio, instantly.", accent: "#a78bfa", glow: "rgba(167,139,250,0.08)" },
];

export default function WhoItsFor() {
  return (
    <section id="solutions" className="relative py-36 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(34,197,94,0.04) 0%, transparent 60%)", filter: "blur(60px)" }} />

      <div className="container relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: "#22c55e", fontFamily: "DM Mono, monospace" }}>Who it is for</span>
            <div className="flex-1 h-px max-w-[120px]" style={{ background: "linear-gradient(90deg, rgba(34,197,94,0.3), transparent)" }} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-black leading-[1.05] tracking-[-0.03em] mb-4 max-w-xl"
            style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Built for operators,<br />not theorists.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-[16px] mb-16 max-w-md" style={{ color: "rgba(255,255,255,0.35)" }}>
            Whether you advise one business or manage a hundred, PAID gives you the same edge.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map((aud, i) => {
            const Icon = aud.icon;
            return (
              <Reveal key={aud.label} delay={i * 120}>
                <div
                  className="group relative p-8 h-full transition-all duration-500 cursor-default overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = aud.glow;
                    el.style.borderColor = `${aud.accent}30`;
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = `0 30px 80px ${aud.accent}15`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.02)";
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-6 text-[10px] font-semibold tracking-[0.1em] uppercase"
                    style={{ background: `${aud.accent}15`, border: `1px solid ${aud.accent}25`, color: aud.accent, fontFamily: "DM Mono, monospace" }}>
                    <Icon size={10} />
                    {aud.label}
                  </div>
                  <h3 className="text-[18px] font-bold mb-3 tracking-[-0.02em]" style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.9)" }}>
                    {aud.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {aud.desc}
                  </p>
                  <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at bottom right, ${aud.accent}20, transparent)` }} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
