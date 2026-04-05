import Reveal from "./Reveal";
import { ClipboardList, Cpu, BarChart3, Rocket } from "lucide-react";

const steps = [
  { num: "01", icon: ClipboardList, title: "Enter your numbers", desc: "Revenue, expenses, customers, channels. Takes 2 minutes. No spreadsheets needed." },
  { num: "02", icon: Cpu, title: "AI analyzes everything", desc: "Our engine scores your business across Growth, Revenue, Infrastructure, and Performance." },
  { num: "03", icon: BarChart3, title: "See your GRIP score", desc: "Get a 0-100 score for each pillar, your top bottleneck, and revenue at risk." },
  { num: "04", icon: Rocket, title: "Get your action plan", desc: "Receive a 30/60/90 day plan with specific quick wins to stop the bleeding." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-36 overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* Top line */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      <div className="container relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: "#22c55e", fontFamily: "DM Mono, monospace" }}>
              How it works
            </span>
            <div className="flex-1 h-px max-w-[120px]" style={{ background: "linear-gradient(90deg, rgba(34,197,94,0.3), transparent)" }} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-black leading-[1.05] tracking-[-0.03em] mb-4 max-w-xl"
            style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            From raw numbers<br />to a verdict in minutes.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-[16px] mb-16 max-w-md" style={{ color: "rgba(255,255,255,0.35)" }}>
            Four steps. One GRIP score. Everything you need to know where you're losing money.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.num} delay={i * 100}>
                <div
                  className="group relative p-6 h-full transition-all duration-500 cursor-default overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(34,197,94,0.04)";
                    el.style.borderColor = "rgba(34,197,94,0.2)";
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 20px 60px rgba(34,197,94,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.02)";
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div className="text-[11px] font-bold mb-5 tracking-[0.1em]" style={{ color: "#22c55e", fontFamily: "DM Mono, monospace" }}>
                    {step.num}
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.15)" }}>
                    <Icon size={18} style={{ color: "#22c55e" }} />
                  </div>
                  <h3 className="text-[15px] font-bold mb-2 tracking-[-0.01em]" style={{ fontFamily: "Syne, sans-serif", color: "rgba(255,255,255,0.9)" }}>
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {step.desc}
                  </p>
                  <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(225deg, rgba(34,197,94,0.15), transparent)" }} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
