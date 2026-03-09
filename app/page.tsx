"use client";
import TrustNumber from "./components/trustnumber";
import HeroSection from "./components/header/herosectino";
import FeatureGrid from "./components/featuregrid";
import CTA from "./cta";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-50 selection:bg-indigo-500/30 transition-colors duration-300 overflow-x-hidden">
      <HeroSection />
      <FeatureGrid />
      <TrustNumber />
      <CTA />
    </main>
  );
}
