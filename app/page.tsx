"use client";
import TrustNumber from "./components/trustnumber";
import HeroSection from "./components/header/herosectino";
import FeatureGrid from "./components/featuregrid";
import CTA from "./cta";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-50 selection:bg-indigo-500/30 transition-colors duration-300 overflow-x-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px', // Adjust size of the grid boxes here
      }} >
      <HeroSection />
      <FeatureGrid />
      <CTA />
      <TrustNumber />
    </main>
  );
}
