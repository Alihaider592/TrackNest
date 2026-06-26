"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Check, ArrowRight, Terminal, Rocket, Box } from "lucide-react";

const releases = [
  {
    version: "v1.0.0",
    date: "March 12, 2026",
    tag: "Genesis Release",
    title: "Project TrackNest is Live",
    description: "The foundation of our vision. This version introduces the core architecture, real-time sync capabilities, and the essential dashboard for tracking your nests.",
    features: ["Core Engine 1.0", "Real-time Dashboard", "Secure Auth", "Project Scaffolding", "Mobile Responsive UI"],
    stats: [
      { label: "Status", value: "Stable" },
      { label: "Build", value: "A102" }
    ],
    color: "from-indigo-500 to-purple-600",
    icon: <Rocket className="w-6 h-6" />,
  }
];

export default function ReleasesPage() {
  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden text-slate-100 font-sans selection:bg-indigo-500/30 overflow-hidden pb-24">
      
      {/* Background Glows (Exact match to pricing feel) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Visual Header */}
      <div className="relative pt-32 pb-20 px-6 max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6"
        >
          <Zap className="w-3 h-3 fill-current" /> Product History
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
          The journey of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Project TrackNest.
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Tracking every ship, patch, and breakthrough. From our first branch to the current ecosystem.
        </p>
      </div>

      {/* Releases Grid - Using the 1-pixel gradient border trick from your pricing cards */}
      <div className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
        {releases.map((release, i) => (
          <motion.div
            key={release.version}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative group rounded-[3rem] p-1 border border-slate-800 bg-slate-800/50 transition-all duration-500 hover:border-indigo-500/50"
          >
            <div className="relative bg-slate-900/90 backdrop-blur-2xl rounded-[2.9rem] p-8 md:p-12">
              
              {/* Layout Split: Metadata & Content */}
              <div className="grid lg:grid-cols-12 gap-12">
                
                {/* Left Side: Version Info */}
                <div className="lg:col-span-4 space-y-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${release.color} flex items-center justify-center text-white shadow-lg shadow-indigo-500/20`}>
                    {release.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{release.version}</h3>
                    <p className="text-indigo-400 text-xs font-black uppercase tracking-widest">{release.tag}</p>
                    <p className="text-slate-500 text-sm mt-1">{release.date}</p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {release.stats.map((stat) => (
                      <div key={stat.label} className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700">
                        <p className="text-[8px] font-black uppercase text-slate-500 tracking-tighter">{stat.label}</p>
                        <p className="text-xs font-bold text-white uppercase">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Description and Features */}
                <div className="lg:col-span-8">
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {release.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-8 italic">
                    {release.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-4">
                      {release.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm">
                          <div className="mt-1 h-4 w-4 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-emerald-500" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Feature Highlight Block (Visual Filler) */}
                    <div className="hidden md:flex p-6 rounded-2xl bg-slate-800/40 border border-slate-800 flex-col justify-center gap-2">
                        <Terminal className="w-5 h-5 text-indigo-500" />
                        <p className="text-xs font-bold text-white uppercase tracking-widest">Initial Build Successful</p>
                        <p className="text-[10px] text-slate-500">Node verification complete. System operational.</p>
                    </div>
                  </div>
                  
                  <button className="mt-12 w-full md:w-auto px-8 py-4 rounded-2xl bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 transition-all flex items-center justify-center gap-2 group/btn border border-slate-700">
                    View Full Changelog
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQ Link / Help Footer (Matching Pricing) */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-20 text-slate-500 text-sm"
      >
        Curious about future updates?{" "}
        <a href="#" className="text-indigo-400 font-bold hover:underline italic">
          Subscribe to our roadmap
        </a>
      </motion.p>
    </div>
  );
}