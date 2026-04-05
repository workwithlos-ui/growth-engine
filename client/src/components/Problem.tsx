import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="relative py-36 overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* Top line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.2), transparent)" }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(34,197,94,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container relative z-10">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span
              className="text-[11px] font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#22c55e", fontFamily: "DM Mono, monospace" }}
            >
              The Problem
            </span>
            <div className="flex-1 h-px max-w-[120px]" style={{ background: "linear-gradient(90deg, rgba(34,197,94,0.3), transparent)" }} />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <Reveal delay={100}>
              <h2
                className="font-black leading-[1.05] tracking-[-0.03em] mb-6"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  You know something
                  <br />
                  is broken. You just
                  <br />
                </span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #f87171 0%, #fb923c 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  can't find it.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-[16px] leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
                Revenue is in one dashboard. Ad spend is somewhere else. Customer data is scattered across 5 tools.
                You're making $100K+ decisions based on gut feel and partial data.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p
                className="text-[15px] leading-relaxed p-5 border-l-2"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  borderColor: "#22c55e",
                  background: "rgba(34,197,94,0.04)",
                }}
              >
                PAID consolidates your business data into a single GRIP score and tells you exactly where you're leaking money - and what to fix first.
              </p>
            </Reveal>

            {/* Pain points */}
            <Reveal delay={400}>
              <div className="mt-8 grid grid-cols-1 gap-3">
                {[
                  { problem: "Data scattered across 5+ tools", fix: "One unified GRIP score" },
                  { problem: "Hours of analysis per client", fix: "2-minute AI assessment" },
                  { problem: "Gut-feel recommendations", fix: "Data-backed action plan" },
                ].map((item) => (
                  <div
                    key={item.problem}
                    className="flex items-center gap-4 p-4 transition-all duration-300 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.04)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                    }}
                  >
                    <span className="text-[13px] text-white/30 line-through flex-1">{item.problem}</span>
                    <span className="text-[11px] mx-2 text-white/20">→</span>
                    <span className="text-[13px] font-semibold flex-1" style={{ color: "#4ade80" }}>{item.fix}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Visual representation of the GRIP framework */}
          <Reveal delay={200} direction="right">
            <div className="relative">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(34,197,94,0.12) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  transform: "scale(1.2)",
                }}
              />
              <div className="relative grid grid-cols-2 gap-3 p-6" style={{
                border: "1px solid rgba(34,197,94,0.1)",
                background: "rgba(255,255,255,0.02)",
                boxShadow: "0 0 60px rgba(34,197,94,0.06), 0 40px 80px rgba(0,0,0,0.4)",
              }}>
                {[
                  { letter: "G", name: "Growth", desc: "Lead flow, market position, expansion rate", color: "#22c55e" },
                  { letter: "R", name: "Revenue", desc: "Pricing, margins, revenue mix, monetization", color: "#60a5fa" },
                  { letter: "I", name: "Infrastructure", desc: "Systems, team, tech stack, operations", color: "#a78bfa" },
                  { letter: "P", name: "Performance", desc: "Efficiency, utilization, conversion, ROI", color: "#fbbf24" },
                ].map((item) => (
                  <div key={item.letter} className="p-5 transition-all duration-300 group cursor-default" style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = `${item.color}08`;
                    el.style.borderColor = `${item.color}25`;
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.02)";
                    el.style.borderColor = "rgba(255,255,255,0.05)";
                    el.style.transform = "translateY(0)";
                  }}>
                    <span className="text-[36px] font-black block mb-2" style={{
                      fontFamily: "Syne, sans-serif",
                      color: item.color,
                      filter: `drop-shadow(0 0 20px ${item.color}30)`,
                    }}>{item.letter}</span>
                    <span className="text-[13px] font-bold block mb-1" style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.7)" }}>{item.name}</span>
                    <span className="text-[11px] leading-relaxed block" style={{ color: "rgba(255,255,255,0.3)" }}>{item.desc}</span>
                  </div>
                ))}
                <div className="col-span-2 text-center py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-[11px] text-white/20" style={{ fontFamily: "DM Mono, monospace" }}>
                    4 pillars. 1 score. Complete business intelligence.
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
