import FadeIn from "./FadeIn";
import {
  Activity,
  Layers,
  AlertCircle,
  GitCompare,
  Lightbulb,
  CalendarCheck,
  Shield,
  Download,
} from "lucide-react";

const deliverables = [
  { icon: Activity, title: "Health score", desc: "One number that tells you how the business is doing." },
  { icon: Layers, title: "Category subscores", desc: "See exactly where the business is strong and weak." },
  { icon: AlertCircle, title: "Primary bottleneck", desc: "The single biggest thing holding growth back." },
  { icon: GitCompare, title: "Benchmark context", desc: "How this business compares to similar ones." },
  { icon: Lightbulb, title: "Root cause", desc: "Why the bottleneck exists, not just what it is." },
  { icon: CalendarCheck, title: "30/60/90 day plan", desc: "Exactly what to do next, in order." },
  { icon: Shield, title: "Confidence score", desc: "How reliable the assessment is based on data quality." },
  { icon: Download, title: "Exportable report", desc: "A client-ready PDF you can share immediately." },
];

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="py-32 border-t border-white/[0.04]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: heading + report image */}
          <div className="lg:w-2/5">
            <FadeIn>
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#22c55e] font-medium">
                What you get
              </span>
              <h2 className="mt-4 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em]">
                A clear operating picture. Every time.
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-[#525252]">
                Every assessment returns the same structured output.
                No ambiguity. No filler. Just what you need to make a decision.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="mt-10 max-w-[280px]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/91190584/B2BudScCdEmDN3qqoK5xj2/report-preview-SEg4dZwGncDNxikLPp7BYK.webp"
                  alt="PAID executive report preview"
                  className="w-full opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right: deliverables grid */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.04]">
              {deliverables.map((d, i) => (
                <FadeIn key={d.title} delay={i * 60}>
                  <div className="bg-[#0a0a0a] p-6 h-full group hover:bg-white/[0.02] transition-colors">
                    <d.icon
                      size={16}
                      className="text-[#3f3f3f] group-hover:text-[#22c55e] transition-colors"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-3 text-[14px] font-semibold tracking-[-0.01em]">
                      {d.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#525252]">
                      {d.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
