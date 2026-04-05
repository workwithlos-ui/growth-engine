import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import GripDemo from "@/components/GripDemo";
import AssessmentWizard from "@/components/AssessmentWizard";
import WhoItsFor from "@/components/WhoItsFor";
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
        <WhatYouGet />
        <GripDemo />
        <AssessmentWizard />
        <WhoItsFor />
        <Pricing />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
