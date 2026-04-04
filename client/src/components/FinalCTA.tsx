import FadeIn from "./FadeIn";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 border-t border-white/[0.04]">
      <div className="container">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.02em] leading-tight">
              Run PAID on the next
              <br />
              business you advise.
            </h2>
            <p className="mt-5 text-[16px] text-[#525252]">
              Stop guessing. Start with the numbers.
            </p>
            <div className="mt-10">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#22c55e] text-[#0a0a0a] text-[14px] font-medium px-8 py-3.5 hover:bg-[#16a34a] transition-colors group"
              >
                Start the diagnostic
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
