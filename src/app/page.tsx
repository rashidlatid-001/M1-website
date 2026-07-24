"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FirstVisitAnimation } from "@/components/sections/FirstVisitAnimation";
import { Hero } from "@/components/sections/Hero";
import { MarketplaceSection } from "@/components/sections/MarketplaceSection";
import { OperatingSystemSection } from "@/components/sections/OperatingSystemSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { PartnerStrip } from "@/components/sections/PartnerStrip";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <>
      <FirstVisitAnimation onComplete={() => setAnimationComplete(true)} />
      
      {/* Hide the main content until animation completes, but keep it in DOM for SEO/Performance */}
      <div 
        className="min-h-screen flex flex-col"
        style={{ opacity: animationComplete ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
      >
        <Header />
        <main className="flex-grow">
          <Hero />
          <MarketplaceSection />
          <OperatingSystemSection />
          <EcosystemSection />
          <PartnerStrip />
        </main>
        <Footer />
      </div>
    </>
  );
}
