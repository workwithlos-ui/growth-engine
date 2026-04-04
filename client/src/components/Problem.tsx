import FadeIn from "./FadeIn";

export default function Problem() {
  return (
    <section className="py-32 border-t border-white/[0.04]">
      <div className="container">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em] leading-tight">
              Most consultants still diagnose
              <br className="hidden sm:block" />
              from scattered data and instinct.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-[#737373]">
              Revenue is in one dashboard. Ad spend is somewhere else.
              Sales data is partial. Strategy recommendations are still guesswork.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-[#a3a3a3]">
              PAID turns fragmented inputs into a single commercial verdict
              you can use to qualify prospects, onboard clients, and justify strategy.
            </p>
          </div>
        </FadeIn>

        {/* Dashboard mockup */}
        <FadeIn delay={200}>
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative rounded-sm overflow-hidden border border-white/[0.06]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/91190584/B2BudScCdEmDN3qqoK5xj2/dashboard-mockup-R9Dhq38wm6kV7Zv2hKxuzG.webp"
                alt="PAID Dashboard showing health score and category subscores"
                className="w-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
