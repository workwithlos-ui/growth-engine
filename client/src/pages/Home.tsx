/*
 * PAID Landing Page - "Obsidian Precision" Design
 * Design: Swiss-minimalist dark theme. #0a0a0a bg, #f5f5f5 text, #22c55e accent.
 * Principles: Radical reduction, typography as architecture, generous whitespace.
 */

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import WhatYouGet from "@/components/WhatYouGet";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <WhoItsFor />
      <WhatYouGet />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
