import { useState, useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { TrendingUp, DollarSign, Settings, Activity, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

const SAMPLE_BUSINESS = {
  name: "Apex Home Services",
  industry: "Home Services",
  revenue: "$127K/mo",
  overallScore: 68,
  grip: {
    growth: { score: 74, label: "Growth", icon: TrendingUp, insight: "Lead volume is healthy but conversion from lead to booked job is 23% below industry average. Your Google Ads CPA has increased 31% in the last quarter.", color: "#22c55e" },
    revenue: { score: 58, label: "Revenue", icon: DollarSign, insight: "Average ticket is $847 vs. industry benchmark of $1,120. You're leaving $34K/mo on the table through underpriced service tiers and no upsell system.", color: "#f87171" },
    infrastructure: { score: 71, label: "Infrastructure", icon: Settings, insight: "Tech stack is adequate but disconnected. CRM, scheduling, and invoicing run on 3 separate platforms creating data blind spots.", color: "#fbbf24" },
    performance: { score: 69, label: "Performance", icon: Activity, insight: "Technician utilization is at 64% vs. 78% target. Route optimization and scheduling gaps are costing ~$12K/mo in lost billable hours.", color: "#fbbf24" },
  },
  verdict: "Apex is a solid business with strong lead flow but is hemorrhaging revenue through pricing gaps and operational inefficiency. The biggest lever is fixing the revenue engine — proper pricing tiers and an upsell framework could add $40K+/mo within 90 days.",
  bottleneck: "Revenue conversion — underpriced services and zero upsell system are leaving $34K/mo on the table",
  quickWins: [
    "Implement tiered pricing (Good/Better/Best) — potential +$15K/mo",
    "Add post-service upsell checklist for technicians — potential +$8K/mo",
    "Fix Google Ads landing page (current CVR: 2.1% vs 4.5% benchmark)",
  ],
  revenueAtRisk: "$408K/year",
};

function AnimatedScore({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{current}</span>;
}

function ScoreRing({ score, size = 160 }: { score: number; size?: number }) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(circumference - (score / 100) * circumference);
    }, 500);
    return () => clearTimeout(timer);
  }, [score, circumference]);

  const color = score >= 75 ? "#22c55e" : score >= 60 ? "#fbbf24" : "#f87171";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={strokeWidth} />
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1)", filter: `drop-shadow(0 0 12px ${color}60)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[42px] font-black tracking-[-0.04em]" style={{ fontFamily: "Syne, sans-serif", color }}>
          <AnimatedScore target={score} />
        </span>
        <span className="text-[11px] text-white/30 -mt-1" style={{ fontFamily: "DM Mono, monospace" }}>/100</span>
      </div>
    </div>
  );
}

export default function GripDemo() {
  const [activeTab, setActiveTab] = useState<"overview" | "details" | "action">("overview");
  const data = SAMPLE_BUSINESS;

  return (
    <section id="demo" className="relative py-32 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.2), transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(34,197,94,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: "#22c55e", fontFamily: "DM Mono, monospace" }}>Live Demo</span>
            <div className="flex-1 h-px max-w-[120px]" style={{ background: "linear-gradient(90deg, rgba(34,197,94,0.3), transparent)" }} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-black leading-[1.05] tracking-[-0.03em] mb-4 max-w-2xl"
            style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            See what a GRIP report<br />actually looks like.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-[16px] mb-12 max-w-lg" style={{ color: "rgba(255,255,255,0.35)" }}>
            This is a real sample assessment for a home services company doing $127K/mo. This is exactly what you get.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative overflow-hidden" style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(34,197,94,0.12)",
            boxShadow: "0 0 80px rgba(34,197,94,0.05), 0 40px 80px rgba(0,0,0,0.4)",
          }}>
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}>
                  <span className="text-[10px] font-black text-[#0a0a0a]" style={{ fontFamily: "Syne, sans-serif" }}>P</span>
                </div>
                <div>
                  <span className="text-[14px] font-bold text-white/90" style={{ fontFamily: "Syne, sans-serif" }}>{data.name}</span>
                  <span className="text-[11px] text-white/30 block" style={{ fontFamily: "DM Mono, monospace" }}>{data.industry} · {data.revenue}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {(["overview", "details", "action"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="px-4 py-1.5 text-[11px] font-semibold tracking-[0.05em] uppercase transition-all duration-200"
                    style={{
                      fontFamily: "DM Mono, monospace",
                      background: activeTab === tab ? "rgba(34,197,94,0.1)" : "transparent",
                      color: activeTab === tab ? "#4ade80" : "rgba(255,255,255,0.3)",
                      border: activeTab === tab ? "1px solid rgba(34,197,94,0.2)" : "1px solid transparent",
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-start">
                  {/* Score ring */}
                  <div className="flex flex-col items-center gap-4">
                    <ScoreRing score={data.overallScore} />
                    <div className="text-center">
                      <span className="text-[11px] font-semibold tracking-[0.1em] uppercase block mb-1" style={{ color: "#fbbf24", fontFamily: "DM Mono, monospace" }}>Needs Attention</span>
                      <span className="text-[12px] text-white/25">Overall GRIP Score</span>
                    </div>
                  </div>

                  {/* GRIP breakdown */}
                  <div className="space-y-4">
                    {Object.entries(data.grip).map(([key, val]) => {
                      const Icon = val.icon;
                      return (
                        <div key={key} className="p-4 transition-all duration-300" style={{
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 flex items-center justify-center" style={{ background: `${val.color}12`, border: `1px solid ${val.color}25` }}>
                                <Icon size={13} style={{ color: val.color }} />
                              </div>
                              <span className="text-[13px] font-bold" style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.8)" }}>{val.label}</span>
                            </div>
                            <span className="text-[20px] font-black tracking-[-0.03em]" style={{ color: val.color, fontFamily: "Syne, sans-serif" }}>
                              <AnimatedScore target={val.score} duration={1200} />
                            </span>
                          </div>
                          <div className="h-1 w-full overflow-hidden mb-2" style={{ background: "rgba(255,255,255,0.06)" }}>
                            <div style={{ width: `${val.score}%`, height: "100%", background: `linear-gradient(90deg, ${val.color}, ${val.color}aa)`, boxShadow: `0 0 8px ${val.color}40`, transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)" }} />
                          </div>
                          <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{val.insight}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === "details" && (
                <div className="space-y-6">
                  {/* Verdict */}
                  <div className="p-5" style={{ background: "rgba(34,197,94,0.04)", border: "1px solid rgba(34,197,94,0.12)" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle size={14} style={{ color: "#22c55e" }} />
                      <span className="text-[12px] font-semibold tracking-[0.1em] uppercase" style={{ color: "#4ade80", fontFamily: "DM Mono, monospace" }}>AI Verdict</span>
                    </div>
                    <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{data.verdict}</p>
                  </div>

                  {/* Bottleneck */}
                  <div className="p-5" style={{ background: "rgba(248,113,113,0.04)", border: "1px solid rgba(248,113,113,0.12)" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle size={14} style={{ color: "#f87171" }} />
                      <span className="text-[12px] font-semibold tracking-[0.1em] uppercase" style={{ color: "#f87171", fontFamily: "DM Mono, monospace" }}>Top Bottleneck</span>
                    </div>
                    <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{data.bottleneck}</p>
                  </div>

                  {/* Revenue at risk */}
                  <div className="flex items-center justify-between p-5" style={{ background: "rgba(251,191,36,0.04)", border: "1px solid rgba(251,191,36,0.12)" }}>
                    <div>
                      <span className="text-[11px] font-semibold tracking-[0.1em] uppercase block mb-1" style={{ color: "#fbbf24", fontFamily: "DM Mono, monospace" }}>Revenue at Risk</span>
                      <span className="text-[12px] text-white/30">Annual estimate based on identified leaks</span>
                    </div>
                    <span className="text-[28px] font-black tracking-[-0.03em]" style={{ fontFamily: "Syne, sans-serif", color: "#fbbf24" }}>{data.revenueAtRisk}</span>
                  </div>

                  {/* Benchmark */}
                  <div className="p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-[11px] font-semibold tracking-[0.1em] uppercase block mb-2" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Mono, monospace" }}>Peer Benchmark</span>
                    <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Compared to home service companies at $100K-$200K/mo revenue, Apex scores in the <strong className="text-white/70">42nd percentile</strong>. Primary gap is in revenue optimization — top-quartile peers average 32% higher ticket sizes.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "action" && (
                <div className="space-y-6">
                  {/* Quick wins */}
                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: "#22c55e", fontFamily: "DM Mono, monospace" }}>Quick Wins</span>
                    <div className="space-y-3">
                      {data.quickWins.map((win, i) => (
                        <div key={i} className="flex items-start gap-3 p-4" style={{ background: "rgba(34,197,94,0.03)", border: "1px solid rgba(34,197,94,0.08)" }}>
                          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}>
                            <span className="text-[10px] font-bold" style={{ color: "#22c55e", fontFamily: "DM Mono, monospace" }}>{i + 1}</span>
                          </div>
                          <span className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{win}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 30/60/90 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { period: "30 Days", plan: "Implement tiered pricing across all service lines. Train technicians on upsell checklist. Audit and fix Google Ads landing pages.", color: "#22c55e" },
                      { period: "60 Days", plan: "Consolidate CRM and scheduling into one platform. Implement route optimization. Launch customer review automation.", color: "#60a5fa" },
                      { period: "90 Days", plan: "Launch membership/maintenance plan program. Implement dynamic pricing for peak seasons. Build referral incentive system.", color: "#a78bfa" },
                    ].map((item) => (
                      <div key={item.period} className="p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase block mb-3" style={{ color: item.color, fontFamily: "DM Mono, monospace" }}>{item.period}</span>
                        <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.plan}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer CTA */}
            <div className="px-6 py-5 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(34,197,94,0.02)" }}>
              <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                This is a sample report. <strong className="text-white/50">Get yours free.</strong>
              </p>
              <a
                href="#assess"
                className="group inline-flex items-center gap-2 text-[13px] font-bold px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                  color: "#0a0a0a",
                  fontFamily: "Syne, sans-serif",
                  boxShadow: "0 0 20px rgba(34,197,94,0.3)",
                }}
              >
                Run my assessment
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
