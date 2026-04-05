import { useState, useEffect, useRef } from "react";
import { TrendingUp, DollarSign, Settings, Activity, AlertTriangle, CheckCircle, ArrowRight, RotateCcw, Download, Target, Zap } from "lucide-react";

interface GripScore {
  score: number;
  label: string;
  insight: string;
  priority: string;
}

interface AssessmentData {
  overallScore: number;
  gripScores: {
    growth: GripScore;
    revenue: GripScore;
    infrastructure: GripScore;
    performance: GripScore;
  };
  verdict: string;
  topBottleneck: string;
  quickWins: string[];
  thirtyDayPlan: string;
  sixtyDayPlan: string;
  ninetyDayPlan: string;
  benchmarkComparison: string;
  revenueAtRisk: string;
}

function AnimatedScore({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasAnimated.current) {
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
  }, [target, duration]);

  return <span ref={ref}>{current}</span>;
}

function ScoreRing({ score, size = 200 }: { score: number; size?: number }) {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(circumference - (score / 100) * circumference);
    }, 300);
    return () => clearTimeout(timer);
  }, [score, circumference]);

  const color = score >= 75 ? "#22c55e" : score >= 60 ? "#fbbf24" : "#f87171";
  const label = score >= 75 ? "Strong" : score >= 60 ? "Needs Work" : "Critical";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={strokeWidth} />
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)", filter: `drop-shadow(0 0 20px ${color}60)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[52px] font-black tracking-[-0.04em]" style={{ fontFamily: "Syne, sans-serif", color }}>
          <AnimatedScore target={score} duration={2000} />
        </span>
        <span className="text-[12px] text-white/30 -mt-1" style={{ fontFamily: "DM Mono, monospace" }}>/100</span>
        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase mt-2" style={{ color, fontFamily: "DM Mono, monospace" }}>{label}</span>
      </div>
    </div>
  );
}

const GRIP_ICONS = {
  growth: TrendingUp,
  revenue: DollarSign,
  infrastructure: Settings,
  performance: Activity,
};

const GRIP_COLORS: Record<string, (score: number) => string> = {
  growth: (s) => s >= 70 ? "#22c55e" : s >= 50 ? "#fbbf24" : "#f87171",
  revenue: (s) => s >= 70 ? "#22c55e" : s >= 50 ? "#fbbf24" : "#f87171",
  infrastructure: (s) => s >= 70 ? "#22c55e" : s >= 50 ? "#fbbf24" : "#f87171",
  performance: (s) => s >= 70 ? "#22c55e" : s >= 50 ? "#fbbf24" : "#f87171",
};

export default function AssessmentResults({ results, businessName, industry, onReset }: {
  results: AssessmentData;
  businessName: string;
  industry: string;
  onReset: () => void;
}) {
  const [activeSection, setActiveSection] = useState<"scores" | "insights" | "plan">("scores");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative py-20 overflow-hidden min-h-screen" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.06) 0%, transparent 70%)`,
      }} />

      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
        }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-[11px] font-semibold tracking-[0.12em] uppercase"
            style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", color: "#4ade80", fontFamily: "DM Mono, monospace" }}>
            <CheckCircle size={10} />
            Assessment Complete
          </div>
          <h1 className="font-black leading-[1.05] tracking-[-0.03em] mb-3"
            style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            GRIP Report: {businessName}
          </h1>
          <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "DM Mono, monospace" }}>
            {industry} · Generated {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        {/* Score ring + GRIP bars */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-start mb-10" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
        }}>
          <div className="flex flex-col items-center gap-4 p-8" style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
            <ScoreRing score={results.overallScore} />
            <span className="text-[12px] text-white/25">Overall GRIP Score</span>
          </div>

          <div className="space-y-4">
            {(Object.entries(results.gripScores) as [keyof typeof GRIP_ICONS, GripScore][]).map(([key, val]) => {
              const Icon = GRIP_ICONS[key];
              const color = GRIP_COLORS[key](val.score);
              return (
                <div key={key} className="p-5 transition-all duration-300 hover:translate-x-1" style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 flex items-center justify-center" style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div>
                        <span className="text-[14px] font-bold block" style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.85)" }}>{val.label}</span>
                        <span className="text-[10px] font-semibold tracking-[0.1em] uppercase" style={{
                          color: val.priority === "high" ? "#f87171" : val.priority === "medium" ? "#fbbf24" : "#22c55e",
                          fontFamily: "DM Mono, monospace",
                        }}>
                          {val.priority} priority
                        </span>
                      </div>
                    </div>
                    <span className="text-[28px] font-black tracking-[-0.03em]" style={{ color, fontFamily: "Syne, sans-serif" }}>
                      <AnimatedScore target={val.score} duration={1500} />
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden mb-3" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div style={{
                      width: `${val.score}%`, height: "100%",
                      background: `linear-gradient(90deg, ${color}, ${color}aa)`,
                      boxShadow: `0 0 12px ${color}40`,
                      transition: "width 2s cubic-bezier(0.16, 1, 0.3, 1)",
                    }} />
                  </div>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{val.insight}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center gap-1 mb-6 p-1" style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s 0.5s",
        }}>
          {(["scores", "insights", "plan"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className="flex-1 py-2.5 text-[12px] font-semibold tracking-[0.08em] uppercase transition-all duration-200"
              style={{
                fontFamily: "DM Mono, monospace",
                background: activeSection === tab ? "rgba(34,197,94,0.1)" : "transparent",
                color: activeSection === tab ? "#4ade80" : "rgba(255,255,255,0.3)",
                border: activeSection === tab ? "1px solid rgba(34,197,94,0.2)" : "1px solid transparent",
              }}
            >
              {tab === "scores" ? "Deep Dive" : tab === "insights" ? "Insights" : "Action Plan"}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
        }}>
          {activeSection === "scores" && (
            <div className="space-y-5">
              {/* Verdict */}
              <div className="p-6" style={{ background: "rgba(34,197,94,0.04)", border: "1px solid rgba(34,197,94,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Target size={14} style={{ color: "#22c55e" }} />
                  <span className="text-[12px] font-semibold tracking-[0.1em] uppercase" style={{ color: "#4ade80", fontFamily: "DM Mono, monospace" }}>AI Verdict</span>
                </div>
                <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{results.verdict}</p>
              </div>

              {/* Bottleneck */}
              <div className="p-6" style={{ background: "rgba(248,113,113,0.04)", border: "1px solid rgba(248,113,113,0.12)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={14} style={{ color: "#f87171" }} />
                  <span className="text-[12px] font-semibold tracking-[0.1em] uppercase" style={{ color: "#f87171", fontFamily: "DM Mono, monospace" }}>Top Bottleneck</span>
                </div>
                <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{results.topBottleneck}</p>
              </div>

              {/* Revenue at risk */}
              <div className="flex items-center justify-between p-6" style={{ background: "rgba(251,191,36,0.04)", border: "1px solid rgba(251,191,36,0.12)" }}>
                <div>
                  <span className="text-[12px] font-semibold tracking-[0.1em] uppercase block mb-1" style={{ color: "#fbbf24", fontFamily: "DM Mono, monospace" }}>Revenue at Risk</span>
                  <span className="text-[12px] text-white/30">Annual estimate based on identified leaks</span>
                </div>
                <span className="text-[32px] font-black tracking-[-0.03em]" style={{ fontFamily: "Syne, sans-serif", color: "#fbbf24" }}>{results.revenueAtRisk}</span>
              </div>

              {/* Benchmark */}
              <div className="p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-[12px] font-semibold tracking-[0.1em] uppercase block mb-3" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Mono, monospace" }}>Industry Benchmark</span>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{results.benchmarkComparison}</p>
              </div>
            </div>
          )}

          {activeSection === "insights" && (
            <div className="space-y-5">
              <div>
                <span className="text-[12px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: "#22c55e", fontFamily: "DM Mono, monospace" }}>
                  <Zap size={12} className="inline mr-1" />
                  Quick Wins - Highest Impact, Lowest Effort
                </span>
                <div className="space-y-3">
                  {results.quickWins.map((win, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 transition-all duration-300 hover:translate-x-1" style={{
                      background: "rgba(34,197,94,0.03)",
                      border: "1px solid rgba(34,197,94,0.08)",
                    }}>
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{
                        background: "rgba(34,197,94,0.12)",
                        border: "1px solid rgba(34,197,94,0.25)",
                      }}>
                        <span className="text-[12px] font-bold" style={{ color: "#22c55e", fontFamily: "DM Mono, monospace" }}>{i + 1}</span>
                      </div>
                      <p className="text-[14px] leading-relaxed pt-1" style={{ color: "rgba(255,255,255,0.55)" }}>{win}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* GRIP letter breakdown */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                {(["G", "R", "I", "P"] as const).map((letter, i) => {
                  const keys = ["growth", "revenue", "infrastructure", "performance"] as const;
                  const key = keys[i];
                  const val = results.gripScores[key];
                  const color = GRIP_COLORS[key](val.score);
                  return (
                    <div key={letter} className="p-4 text-center" style={{
                      background: `${color}08`,
                      border: `1px solid ${color}15`,
                    }}>
                      <span className="text-[32px] font-black block" style={{ fontFamily: "Syne, sans-serif", color }}>{letter}</span>
                      <span className="text-[11px] text-white/30 block" style={{ fontFamily: "DM Mono, monospace" }}>{val.label}</span>
                      <span className="text-[24px] font-black block mt-1" style={{ fontFamily: "Syne, sans-serif", color }}>
                        <AnimatedScore target={val.score} duration={1000} />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeSection === "plan" && (
            <div className="space-y-5">
              {[
                { period: "30 Days", plan: results.thirtyDayPlan, color: "#22c55e", icon: "🎯" },
                { period: "60 Days", plan: results.sixtyDayPlan, color: "#60a5fa", icon: "📈" },
                { period: "90 Days", plan: results.ninetyDayPlan, color: "#a78bfa", icon: "🚀" },
              ].map((item) => (
                <div key={item.period} className="p-6" style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: `3px solid ${item.color}`,
                }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[14px]">{item.icon}</span>
                    <span className="text-[13px] font-semibold tracking-[0.1em] uppercase" style={{ color: item.color, fontFamily: "DM Mono, monospace" }}>{item.period}</span>
                  </div>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.plan}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-10 pt-8" style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s 0.8s",
        }}>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 text-[13px] font-medium px-5 py-2.5 transition-all duration-200"
            style={{ color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <RotateCcw size={12} /> Run another assessment
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 text-[13px] font-medium px-5 py-2.5 transition-all duration-200"
              style={{ color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Download size={12} /> Export Report
            </button>
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 text-[13px] font-bold px-6 py-2.5 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                color: "#0a0a0a",
                fontFamily: "Syne, sans-serif",
                boxShadow: "0 0 24px rgba(34,197,94,0.3)",
              }}
            >
              Unlock full reports
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
