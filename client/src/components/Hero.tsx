import FadeIn from "./FadeIn";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/91190584/B2BudScCdEmDN3qqoK5xj2/hero-abstract-CBcxwh8uSJ9abaBVx9dgZ6.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      <div className="container relative z-10 pt-24">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/[0.08] bg-white/[0.03] mb-8">
            <div className="w-1.5 h-1.5 bg-[#22c55e] rounded-full" />
            <span className="text-[11px] uppercase tracking-[0.1em] text-[#737373] font-medium">
              AI Commercial Intelligence
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] max-w-3xl">
            Turn client numbers
            <br />
            <span className="text-[#22c55e]">into a growth verdict.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-6 text-[17px] leading-relaxed text-[#737373] max-w-xl">
            PAID scores any business across revenue, spend, conversion, and retention.
            You get the bottleneck, the benchmark, and the next move.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-[#f5f5f5] text-[#0a0a0a] text-[14px] font-medium px-6 py-3 hover:bg-white transition-colors group"
            >
              Run a diagnostic
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#what-you-get"
              className="inline-flex items-center gap-2 border border-white/[0.1] text-[14px] text-[#a3a3a3] px-6 py-3 hover:border-white/[0.2] hover:text-[#f5f5f5] transition-all"
            >
              See what you get
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3">
            {[
              "Score a business in minutes",
              "Benchmark against real peers",
              "Export a client-ready report",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="w-1 h-1 bg-[#22c55e] rounded-full" />
                <span className="text-[13px] text-[#525252]">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
