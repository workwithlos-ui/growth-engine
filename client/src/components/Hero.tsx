import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_ORB = "https://private-us-east-1.manuscdn.com/sessionFile/5KPPhIbbESHCUwf9yndhVI/sandbox/PbUp8Y6uFHjaeTh614VScQ-img-1_1775284522000_na1fn_aGVyby1vcmI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNUtQUGhJYmJFU0hDVXdmOXluZGhWSS9zYW5kYm94L1BiVXA4WTZ1RkhqYWVUaDYxNFZTY1EtaW1nLTFfMTc3NTI4NDUyMjAwMF9uYTFmbl9hR1Z5YnkxdmNtSS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=soQCxdndz~jGKnO6eFASOQ35~aEPBaQuLJP32VDCzuwL6dCIps9hTyL7bEQTH6UR-w3eH1Mx-6ekSgPClJKhBJ9a1XkdRX2MJ0FPIHwa2MCRw-ttzFLZYGlBA7gbXGVCKQAZJ5CG24EJJLw8bola3ZVWkuOxU9Ahy94jt9aEYQbYap8znTfZeu99CEEGXU0D8aLyutWRHVf8fGvSzqS6NZ8znGD-p8HO-tt0mQF9noy42~Ez-TPMgLgShrUhv2lkK5RKqaXnIW0Yl03z105JIVTtPfG56OKx75H4CUklbKDNTviaTZLnp8hRp4Ot8WKdFhAtcPRBd8~HLX3SR6Tk7g__";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const parallaxX = (mousePos.x - 0.5) * 20;
  const parallaxY = (mousePos.y - 0.5) * 20;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Ambient gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 80% 20%, rgba(34,197,94,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(20,120,60,0.05) 0%, transparent 60%)
          `,
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 pointer-events-none grid-fade"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Orb image - parallax */}
      <div
        className="absolute right-[-5%] top-[5%] w-[55%] max-w-[700px] pointer-events-none select-none hidden md:block"
        style={{
          transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <img
          src={HERO_ORB}
          alt=""
          className="w-full h-full object-contain float"
          style={{ opacity: 0.65, mixBlendMode: "screen" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(34,197,94,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-[680px]">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 text-[11px] font-semibold tracking-[0.12em] uppercase"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.25)",
              color: "#4ade80",
              fontFamily: "DM Mono, monospace",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}
            />
            AI Commercial Intelligence
          </div>

          {/* Headline */}
          <h1
            className="font-black leading-[0.93] tracking-[-0.04em] mb-7"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(3.2rem, 7vw, 6rem)",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(40px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            <span
              style={{
                background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Turn client
              <br />
              numbers into
              <br />
            </span>
            <span
              style={{
                background: "linear-gradient(135deg, #22c55e 0%, #4ade80 50%, #86efac 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px rgba(34,197,94,0.5))",
              }}
            >
              a verdict.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-[17px] leading-relaxed mb-10 max-w-[480px]"
            style={{
              color: "rgba(255,255,255,0.42)",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
            }}
          >
            PAID scores any business across revenue, spend, conversion, and retention.
            You get the bottleneck, the benchmark, and the next move.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
            }}
          >
            <a
              href="#pricing"
              className="group relative overflow-hidden inline-flex items-center gap-2.5 text-[14px] font-bold px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                color: "#0a0a0a",
                fontFamily: "Syne, sans-serif",
                boxShadow: "0 0 30px rgba(34,197,94,0.4), 0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(34,197,94,0.65), 0 8px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(34,197,94,0.4), 0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.25)";
              }}
            >
              <span className="relative z-10">Run a diagnostic</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              <div className="absolute inset-0 shimmer" />
            </a>

            <a
              href="#what-you-get"
              className="inline-flex items-center gap-2.5 text-[14px] font-medium px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
              }}
            >
              See what you get
            </a>
          </div>

          {/* Social proof strip */}
          <div
            className="flex flex-wrap items-center gap-6 mt-12 pt-8"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
            }}
          >
            {[
              { value: "Score", label: "in minutes" },
              { value: "Benchmark", label: "against peers" },
              { value: "Export", label: "client-ready report" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "#22c55e", boxShadow: "0 0 4px #22c55e" }}
                />
                <span className="text-[12px] font-semibold text-white/60" style={{ fontFamily: "Syne, sans-serif" }}>
                  {item.value}
                </span>
                <span className="text-[12px] text-white/30">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 0.35 : 0,
          transition: "opacity 1s 1.2s",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <span className="text-[10px] tracking-[0.15em] uppercase text-white/30" style={{ fontFamily: "DM Mono, monospace" }}>Scroll</span>
        <ChevronDown size={14} className="text-white/25" />
      </div>
    </section>
  );
}
