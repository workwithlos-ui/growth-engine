import Reveal from "./Reveal";
import { TrendingUp, DollarSign, Settings, Activity, ArrowRight } from "lucide-react";

const gripPillars = [
  { icon: TrendingUp, letter: "G", label: "Growth", score: 74, desc: "Lead flow, market expansion, customer acquisition velocity, and growth trajectory.", color: "#22c55e" },
  { icon: DollarSign, letter: "R", label: "Revenue", score: 58, desc: "Pricing power, margin health, revenue mix, monetization efficiency, and LTV.", color: "#f87171" },
  { icon: Settings, letter: "I", label: "Infrastructure", score: 71, desc: "Tech stack, team structure, operational systems, and scalability readiness.", color: "#fbbf24" },
  { icon: Activity, letter: "P", label: "Performance", score: 82, desc: "Conversion rates, utilization, ROI on spend, and operational efficiency.", color: "#22c55e" },
];

function ScoreBar({ score, accent = "#22c55e" }: { score: number; accent?: string }) {
  return (
    <div className="relative h-1.5 w-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
      <div
        className="absolute left-0 top-0 h-full"
        style={{
          width: `${score}%`,
          background: `linear-gradient(90deg, ${accent}, ${accent}aa)`,
          boxShadow: `0 0 8px ${accent}60`,
          transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="relative py-36 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(34,197,94,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Copy */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: "#22c55e", fontFamily: "DM Mono, monospace" }}>The GRIP Framework</span>
                <div className="flex-1 h-px max-w-[120px]" style={{ background: "linear-gradient(90deg, rgba(34,197,94,0.3), transparent)" }} />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-black leading-[1.05] tracking-[-0.03em] mb-6"
                style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Four pillars.<br />Zero blind spots.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-[16px] leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
                Every business has the same four levers. PAID scores each one so you know exactly where you're strong and where you're bleeding money.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-3">
                {[
                  "Overall GRIP score (0-100)",
                  "4-pillar breakdown with priority flags",
                  "Top bottleneck identification",
                  "Revenue-at-risk calculation",
                  "30/60/90 day action plan",
                  "AI-generated quick wins",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}>
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <a href="#assess"
                className="group inline-flex items-center gap-2 mt-10 text-[13px] font-bold px-6 py-3 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)", color: "#0a0a0a", fontFamily: "Syne, sans-serif", boxShadow: "0 0 24px rgba(34,197,94,0.3)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(34,197,94,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(34,197,94,0.3)"; }}>
                Get your GRIP score free
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Reveal>
          </div>

          {/* Right: GRIP cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gripPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.label} delay={i * 80}>
                  <div
                    className="group p-5 transition-all duration-400 cursor-default"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `${pillar.color}06`;
                      el.style.borderColor = `${pillar.color}20`;
                      el.style.transform = "translateY(-3px)";
                      el.style.boxShadow = `0 16px 40px ${pillar.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(255,255,255,0.02)";
                      el.style.borderColor = "rgba(255,255,255,0.06)";
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 flex items-center justify-center"
                          style={{ background: `${pillar.color}12`, border: `1px solid ${pillar.color}20` }}>
                          <span className="text-[14px] font-black" style={{ color: pillar.color, fontFamily: "Syne, sans-serif" }}>{pillar.letter}</span>
                        </div>
                        <span className="text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Syne, sans-serif" }}>
                          {pillar.label}
                        </span>
                      </div>
                      <span className="text-[22px] font-black tracking-[-0.03em]" style={{ color: pillar.color, fontFamily: "Syne, sans-serif" }}>
                        {pillar.score}
                      </span>
                    </div>
                    <ScoreBar score={pillar.score} accent={pillar.color} />
                    <p className="mt-3 text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {pillar.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
