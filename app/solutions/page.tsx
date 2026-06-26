"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  Users, 
  BarChart, 
  ChevronRight,
  CheckCircle2
} from "lucide-react";

// --- Types & Data (Same as before) ---
const solutions = [
  {
    id: "ops",
    category: "Operations",
    title: "Global Logistics",
    description: "Centralize your entire supply chain with real-time tracking and AI-driven forecasting.",
    icon: <Briefcase className="w-5 h-5" />,
    features: ["Automated Restocking", "Multi-warehouse Sync", "Vendor Portals"],
    stats: "35% Increase in Efficiency",
    accentColor: "from-blue-500 to-cyan-400",
    glowColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    id: "hr",
    category: "Management",
    title: "Employee Experience",
    description: "From automated onboarding to performance tracking, manage your team without the headache.",
    icon: <Users className="w-5 h-5" />,
    features: ["Self-service Portals", "Automated Payroll", "Compliance Tracking"],
    stats: "12hrs Saved per Week",
    accentColor: "from-indigo-500 to-purple-500",
    glowColor: "rgba(99, 102, 241, 0.5)",
  },
  {
    id: "fin",
    category: "Analytics",
    title: "Fiscal Oversight",
    description: "Eliminate end-of-month stress with automated reporting and deep-dive financial analytics.",
    icon: <BarChart className="w-5 h-5" />,
    features: ["Instant Audit Trails", "Tax Compliance", "Predictive Burn Rate"],
    stats: "99.9% Accuracy Rate",
    accentColor: "from-emerald-500 to-teal-400",
    glowColor: "rgba(16, 185, 129, 0.5)",
  },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(solutions[0]);

  return (
    <section id="solutions" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* 1. BACKGROUND DECORATION: Fills "empty" feeling across the whole section */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[10%] left-[-5%] text-[15rem] font-black text-slate-800/20 select-none uppercase tracking-tighter">
          {activeTab.category}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Industry Verticals
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[0.9]">
            Engineered for <br />
            <span className="text-slate-600">Impact.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* 2. LEFT SIDE: NAVIGATION (Enhanced to fill space) */}
          <div className="lg:col-span-5 relative">
            {/* Vertical Indicator Line */}
            <div className="absolute left-0 top-0 w-[2px] h-full bg-slate-800 rounded-full" />
            
            <div className="space-y-6 relative">
              {solutions.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(sol)}
                  className="w-full text-left group relative pl-8 py-2 focus:outline-none"
                >
                  {/* Active Indicator Bar */}
                  {activeTab.id === sol.id && (
                    <motion.div 
                      layoutId="active-bar"
                      className={`absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b ${sol.accentColor} shadow-[0_0_15px_${sol.glowColor}] z-20`}
                    />
                  )}

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                       <span className={`text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${
                        activeTab.id === sol.id ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-400"
                      }`}>
                        {sol.id}
                      </span>
                    </div>
                    
                    <h4 className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                      activeTab.id === sol.id 
                      ? "text-white scale-105 origin-left" 
                      : "text-slate-600 group-hover:text-slate-400"
                    }`}>
                      {sol.title}
                    </h4>
                    
                    <AnimatePresence>
                      {activeTab.id === sol.id && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-slate-400 text-sm mt-2 max-w-xs leading-relaxed"
                        >
                          {sol.description.substring(0, 80)}...
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. RIGHT SIDE: CONTENT & PREVIEW */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="relative bg-slate-900/40 border border-slate-800/50 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-xl"
              >
                {/* Visual Flair: Corner Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${activeTab.accentColor} opacity-10 blur-[60px] rounded-full`} />

                <div className="max-w-xl">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-slate-950 border border-slate-800 text-white mb-8`}>
                    <span className={`flex h-2 w-2 rounded-full bg-gradient-to-r ${activeTab.accentColor} animate-pulse`} />
                    {activeTab.stats}
                  </div>
                  
                  <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                    {activeTab.title}
                  </h3>
                  
                  <p className="text-slate-400 text-lg leading-relaxed mb-10">
                    {activeTab.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                    {activeTab.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-slate-200 font-medium">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500/10 flex items-center justify-center">
                           <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:gap-5 transition-all duration-300`}>
                    Get Started <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}