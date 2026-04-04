import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import WhatYouGet from "@/components/WhatYouGet";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      {/* Global particle field */}
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <Problem />
        <HowItWorks />
        <WhoItsFor />
        <WhatYouGet />
        <Pricing />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
