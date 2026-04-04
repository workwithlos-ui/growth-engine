import FadeIn from "./FadeIn";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    desc: "One workspace. One diagnostic. Full report.",
    features: [
      "1 workspace",
      "Full diagnostic engine",
      "AI-powered analysis",
      "Exportable PDF report",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Pro",
    desc: "Unlimited clients. Templates. History. Recurring scans.",
    features: [
      "Unlimited workspaces",
      "Assessment history",
      "Custom templates",
      "Recurring scans",
      "Priority support",
    ],
    cta: "Contact us",
    highlight: true,
  },
  {
    name: "Enterprise",
    desc: "Portfolio-wide intelligence with governance and white-label.",
    features: [
      "Portfolio dashboards",
      "Custom integrations",
      "Governance controls",
      "White-label reports",
      "Dedicated support",
    ],
    cta: "Book a demo",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 border-t border-white/[0.04]">
      <div className="container">
        <FadeIn>
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#22c55e] font-medium">
            Pricing
          </span>
          <h2 className="mt-4 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em]">
            Start with one business. Scale to a portfolio.
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 120}>
              <div
                className={`relative p-8 h-full flex flex-col border transition-colors ${
                  tier.highlight
                    ? "border-[#22c55e]/30 bg-[#22c55e]/[0.03]"
                    : "border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-8 bg-[#22c55e] text-[#0a0a0a] text-[10px] uppercase tracking-[0.08em] font-semibold px-3 py-1">
                    Most popular
                  </span>
                )}
                <h3 className="text-[18px] font-semibold tracking-[-0.01em]">
                  {tier.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#525252]">
                  {tier.desc}
                </p>
                <ul className="mt-8 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check size={14} className="text-[#22c55e] shrink-0" strokeWidth={2} />
                      <span className="text-[13px] text-[#a3a3a3]">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 text-[13px] font-medium transition-colors ${
                    tier.highlight
                      ? "bg-[#22c55e] text-[#0a0a0a] hover:bg-[#16a34a]"
                      : "border border-white/[0.1] text-[#a3a3a3] hover:border-white/[0.2] hover:text-[#f5f5f5]"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
