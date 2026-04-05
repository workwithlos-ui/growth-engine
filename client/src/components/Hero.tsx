import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Zap } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const parallaxX = (mousePos.x - 0.5) * 20;
  const parallaxY = (mousePos.y - 0.5) * 20;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Ambient gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 80% 20%, rgba(34,197,94,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(20,120,60,0.05) 0%, transparent 60%)
          `,
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 pointer-events-none grid-fade"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Floating GRIP score preview - parallax */}
      <div
        className="absolute right-[-2%] top-[12%] w-[45%] max-w-[520px] pointer-events-none select-none hidden lg:block"
        style={{
          transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="relative p-6 float" style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(34,197,94,0.15)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 0 80px rgba(34,197,94,0.08), 0 40px 80px rgba(0,0,0,0.4)",
        }}>
          {/* Mini GRIP scores */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: "#4ade80", fontFamily: "DM Mono, monospace" }}>GRIP Score Preview</span>
          </div>
          <div className="text-center mb-5">
            <span className="text-[56px] font-black tracking-[-0.04em]" style={{
              fontFamily: "Syne, sans-serif",
              background: "linear-gradient(135deg, #22c55e 0%, #4ade80 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px rgba(34,197,94,0.4))",
            }}>72</span>
            <span className="text-[14px] text-white/30 block" style={{ fontFamily: "DM Mono, monospace" }}>/100</span>
          </div>
          <div className="space-y-3">
            {[
              { letter: "G", label: "Growth", score: 81, color: "#22c55e" },
              { letter: "R", label: "Revenue", score: 68, color: "#fbbf24" },
              { letter: "I", label: "Infrastructure", score: 74, color: "#22c55e" },
              { letter: "P", label: "Performance", score: 65, color: "#f87171" },
            ].map((item) => (
              <div key={item.letter} className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center text-[12px] font-black" style={{
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                  color: item.color,
                  fontFamily: "Syne, sans-serif",
                }}>{item.letter}</span>
                <span className="text-[12px] text-white/50 w-24" style={{ fontFamily: "DM Sans, sans-serif" }}>{item.label}</span>
                <div className="flex-1 h-1.5 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="absolute left-0 top-0 h-full" style={{
                    width: `${item.score}%`,
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}aa)`,
                    boxShadow: `0 0 8px ${item.color}40`,
                  }} />
                </div>
                <span className="text-[13px] font-bold w-8 text-right" style={{ color: item.color, fontFamily: "Syne, sans-serif" }}>{item.score}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[11px] text-white/25" style={{ fontFamily: "DM Mono, monospace" }}>
              ⚠ Bottleneck: Revenue conversion leaking $18K/mo
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-[720px]">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 text-[11px] font-semibold tracking-[0.12em] uppercase"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.25)",
              color: "#4ade80",
              fontFamily: "DM Mono, monospace",
            }}
          >
            <Zap size={10} />
            AI Business Intelligence
          </div>

          {/* Headline */}
          <h1
            className="font-black leading-[0.93] tracking-[-0.04em] mb-7"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(40px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            <span
              style={{
                background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Find where your
              <br />
              business is
              <br />
            </span>
            <span
              style={{
                background: "linear-gradient(135deg, #f87171 0%, #fb923c 50%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px rgba(248,113,113,0.4))",
              }}
            >
              leaking money.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-[18px] leading-relaxed mb-10 max-w-[520px]"
            style={{
              color: "rgba(255,255,255,0.45)",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
            }}
          >
            PAID gives your business a GRIP score — Growth, Revenue, Infrastructure, Performance — and tells you exactly what to fix first.
            <span className="block mt-2 text-[15px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              In 2 minutes. Powered by AI. No spreadsheets required.
            </span>
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
            }}
          >
            <a
              href="#assess"
              className="group relative overflow-hidden inline-flex items-center gap-2.5 text-[14px] font-bold px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                color: "#0a0a0a",
                fontFamily: "Syne, sans-serif",
                boxShadow: "0 0 30px rgba(34,197,94,0.4), 0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(34,197,94,0.65), 0 8px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(34,197,94,0.4), 0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)";
              }}
            >
              <span className="relative z-10">Get your free GRIP score</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              <div className="absolute inset-0 shimmer" />
            </a>

            <a
              href="#demo"
              className="inline-flex items-center gap-2.5 text-[14px] font-medium px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
              }}
            >
              See a sample report
            </a>
          </div>

          {/* Social proof strip */}
          <div
            className="flex flex-wrap items-center gap-6 mt-12 pt-8"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
            }}
          >
            {[
              { value: "2 min", label: "assessment" },
              { value: "GRIP", label: "4-pillar score" },
              { value: "AI", label: "powered insights" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "#22c55e", boxShadow: "0 0 4px #22c55e" }}
                />
                <span className="text-[12px] font-semibold text-white/60" style={{ fontFamily: "Syne, sans-serif" }}>
                  {item.value}
                </span>
                <span className="text-[12px] text-white/30">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 0.35 : 0,
          transition: "opacity 1s 1.2s",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <span className="text-[10px] tracking-[0.15em] uppercase text-white/30" style={{ fontFamily: "DM Mono, monospace" }}>Scroll</span>
        <ChevronDown size={14} className="text-white/25" />
      </div>
    </section>
  );
}
