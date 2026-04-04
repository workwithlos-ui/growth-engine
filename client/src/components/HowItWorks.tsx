import FadeIn from "./FadeIn";
import { ClipboardList, Search, BarChart3, FileText } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Input the numbers",
    desc: "Enter revenue, funnel metrics, ad spend, pricing, and sales data.",
  },
  {
    num: "02",
    icon: Search,
    title: "Find the bottleneck",
    desc: "PAID scores the business across six categories and pinpoints what is holding it back.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Benchmark it",
    desc: "Compare performance against the right peer set and industry context.",
  },
  {
    num: "04",
    icon: FileText,
    title: "Get the plan",
    desc: "Receive a verdict, a 30/60/90 day action plan, and a client-ready report.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 border-t border-white/[0.04]">
      <div className="container">
        <FadeIn>
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#22c55e] font-medium">
            How it works
          </span>
          <h2 className="mt-4 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em]">
            From raw numbers to a decision.
          </h2>
        </FadeIn>

        {/* Data flow visual */}
        <FadeIn delay={100}>
          <div className="mt-12 mb-16">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/91190584/B2BudScCdEmDN3qqoK5xj2/data-flow-7aymmguMiG9sbzTQDmYxSi.webp"
              alt="Data flow from input to output"
              className="w-full max-w-2xl mx-auto opacity-60"
              loading="lazy"
            />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 100}>
              <div className="bg-[#0a0a0a] p-8 h-full group hover:bg-white/[0.02] transition-colors">
                <span className="font-mono text-[13px] text-[#22c55e]">{step.num}</span>
                <step.icon
                  size={20}
                  className="mt-5 text-[#525252] group-hover:text-[#737373] transition-colors"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 text-[15px] font-semibold tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#525252]">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
