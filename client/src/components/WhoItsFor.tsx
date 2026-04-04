import FadeIn from "./FadeIn";
import { Users, Building2, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Users,
    label: "Consultants",
    title: "Consultants and Agencies",
    desc: "Know exactly what is wrong with a client's business before the first call ends.",
  },
  {
    icon: Building2,
    label: "Real Estate",
    title: "Real Estate Investors",
    desc: "See which properties are leaking revenue and where operators are underperforming.",
  },
  {
    icon: Briefcase,
    label: "Funds",
    title: "Funds and Portfolio Teams",
    desc: "Run the same diagnostic across every company in your portfolio, instantly.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-32 border-t border-white/[0.04]">
      <div className="container">
        <FadeIn>
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#22c55e] font-medium">
            Who it is for
          </span>
          <h2 className="mt-4 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em]">
            Built for operators, not theorists.
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <FadeIn key={a.label} delay={i * 120}>
              <div className="border border-white/[0.06] p-8 h-full hover:border-white/[0.12] transition-colors group">
                <div className="flex items-center justify-between">
                  <a.icon
                    size={20}
                    className="text-[#525252] group-hover:text-[#22c55e] transition-colors"
                    strokeWidth={1.5}
                  />
                  <span className="text-[10px] uppercase tracking-[0.1em] text-[#3f3f3f] border border-white/[0.06] px-2 py-0.5">
                    {a.label}
                  </span>
                </div>
                <h3 className="mt-6 text-[16px] font-semibold tracking-[-0.01em]">
                  {a.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#525252]">
                  {a.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
