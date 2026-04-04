import Reveal from "./Reveal";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$97",
    period: "/mo",
    tagline: "For solo consultants getting started.",
    features: ["10 diagnostics per month", "Full health score and subscores", "Bottleneck identification", "PDF export", "Email support"],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Pro",
    price: "$297",
    period: "/mo",
    tagline: "For agencies and active advisors.",
    features: ["Unlimited diagnostics", "Full health score and subscores", "Bottleneck identification", "Peer benchmarking", "30/60/90 day action plan", "White-label PDF export", "Priority support"],
    cta: "Start with Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "For funds and large portfolio teams.",
    features: ["Unlimited diagnostics", "Portfolio-level dashboard", "Custom benchmarking", "API access", "Dedicated onboarding", "SLA and custom contracts"],
    cta: "Talk to us",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-36 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(34,197,94,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: "#22c55e", fontFamily: "DM Mono, monospace" }}>Pricing</span>
            <div className="flex-1 h-px max-w-[120px]" style={{ background: "linear-gradient(90deg, rgba(34,197,94,0.3), transparent)" }} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-black leading-[1.05] tracking-[-0.03em] mb-4 max-w-lg"
            style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Simple pricing.<br />No surprises.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-[16px] mb-16 max-w-md" style={{ color: "rgba(255,255,255,0.35)" }}>
            Start free for 7 days. Cancel any time.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className="group relative p-8 transition-all duration-500 cursor-default overflow-hidden"
                style={{
                  background: plan.featured ? "rgba(34,197,94,0.06)" : "rgba(255,255,255,0.02)",
                  border: plan.featured ? "1px solid rgba(34,197,94,0.25)" : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: plan.featured ? "0 0 60px rgba(34,197,94,0.08), 0 40px 80px rgba(0,0,0,0.3)" : "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  if (plan.featured) {
                    el.style.boxShadow = "0 0 80px rgba(34,197,94,0.15), 0 40px 80px rgba(0,0,0,0.4)";
                  } else {
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.background = plan.featured ? "rgba(34,197,94,0.06)" : "rgba(255,255,255,0.02)";
                  el.style.boxShadow = plan.featured ? "0 0 60px rgba(34,197,94,0.08), 0 40px 80px rgba(0,0,0,0.3)" : "none";
                }}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase"
                    style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", color: "#0a0a0a", fontFamily: "DM Mono, monospace" }}>
                    Most popular
                  </div>
                )}

                <div className="mb-6">
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3 block"
                    style={{ color: plan.featured ? "#22c55e" : "rgba(255,255,255,0.35)", fontFamily: "DM Mono, monospace" }}>
                    {plan.name}
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="font-black tracking-[-0.04em]"
                      style={{ fontFamily: "Syne, sans-serif", fontSize: "2.5rem", color: plan.featured ? "#fff" : "rgba(255,255,255,0.85)" }}>
                      {plan.price}
                    </span>
                    {plan.period && <span className="text-[14px] mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>{plan.period}</span>}
                  </div>
                  <p className="text-[13px] mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>{plan.tagline}</p>
                </div>

                <div className="h-px mb-6" style={{ background: plan.featured ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.06)" }} />

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: plan.featured ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.06)", border: plan.featured ? "1px solid rgba(34,197,94,0.3)" : "1px solid rgba(255,255,255,0.1)" }}>
                        <Check size={8} style={{ color: plan.featured ? "#22c55e" : "rgba(255,255,255,0.4)" }} strokeWidth={2.5} />
                      </div>
                      <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a href="#"
                  className="group/btn relative overflow-hidden flex items-center justify-center gap-2 w-full py-3 text-[13px] font-bold transition-all duration-300"
                  style={{
                    background: plan.featured ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" : "rgba(255,255,255,0.06)",
                    color: plan.featured ? "#0a0a0a" : "rgba(255,255,255,0.7)",
                    fontFamily: "Syne, sans-serif",
                    boxShadow: plan.featured ? "0 0 24px rgba(34,197,94,0.3)" : "none",
                    border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (plan.featured) { el.style.boxShadow = "0 0 40px rgba(34,197,94,0.5)"; }
                    else { el.style.background = "rgba(255,255,255,0.1)"; el.style.color = "rgba(255,255,255,0.9)"; }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (plan.featured) { el.style.boxShadow = "0 0 24px rgba(34,197,94,0.3)"; }
                    else { el.style.background = "rgba(255,255,255,0.06)"; el.style.color = "rgba(255,255,255,0.7)"; }
                  }}
                >
                  {plan.cta}
                  <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="text-center text-[13px] mt-10" style={{ color: "rgba(255,255,255,0.2)" }}>
            All plans include a 7-day free trial. No credit card required to start.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
