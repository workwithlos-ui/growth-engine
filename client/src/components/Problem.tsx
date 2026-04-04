import Reveal from "./Reveal";

const DASHBOARD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/91190584/B2BudScCdEmDN3qqoK5xj2/dashboard-glass-EcDKjaKXjKX6GbLgDdrTsu.png";

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
                  Most consultants
                  <br />
                  still diagnose from
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
                  scattered data.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-[16px] leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
                Revenue is in one dashboard. Ad spend is somewhere else. Sales data is partial.
                Strategy recommendations are still guesswork.
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
                PAID turns fragmented inputs into a single commercial verdict you can use to qualify
                prospects, onboard clients, and justify strategy.
              </p>
            </Reveal>

            {/* Pain points */}
            <Reveal delay={400}>
              <div className="mt-8 grid grid-cols-1 gap-3">
                {[
                  { problem: "Data scattered across 5+ tools", fix: "One unified score" },
                  { problem: "Hours of analysis per client", fix: "Minutes with PAID" },
                  { problem: "Gut-feel recommendations", fix: "Evidence-backed verdict" },
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
                    <span className="text-[11px] mx-2 text-white/20">vs</span>
                    <span className="text-[13px] font-semibold flex-1" style={{ color: "#4ade80" }}>{item.fix}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Dashboard mockup */}
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
              <div
                className="relative overflow-hidden float"
                style={{
                  border: "1px solid rgba(34,197,94,0.15)",
                  boxShadow: "0 0 60px rgba(34,197,94,0.1), 0 40px 80px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src={DASHBOARD_IMG}
                  alt="PAID Dashboard"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
