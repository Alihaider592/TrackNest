"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Globe, Cpu, Users, ArrowRight, ShieldCheck, Code2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-sans selection:bg-indigo-500/30 overflow-hidden">
      
      {/* THEME BACKGROUND: Same glow and grid from your Pricing Page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] " />
      </div>

      {/* HERO SECTION: High-impact typography */}
      <section className="relative pt-32 pb-24 px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Zap className="w-3 h-3 fill-current" /> Engineering the Future
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
            The infrastructure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              for creators.
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            TrackNest isnt just a tool; its a digital ecosystem designed to scale ideas from first commit to global deployment.
          </p>
        </motion.div>
      </section>

      {/* MODERN BENTO GRID: The "Latest Type" Layout */}
      <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-full">
          
          {/* Main Vision Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-1 rounded-[3rem] bg-gradient-to-b from-slate-700/50 to-transparent border border-slate-800"
          >
            <div className="bg-slate-900/90 backdrop-blur-2xl rounded-[2.9rem] p-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-slate-400 leading-relaxed text-lg">
                  We believe that the bottleneck of innovation shouldnt be the tools. Were building a unified environment where performance, security, and design converge.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase">Scalable</div>
                <div className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase">Secure</div>
              </div>
            </div>
          </motion.div>

          {/* Metric Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-1 rounded-[3rem] bg-slate-800/50 border border-slate-800"
          >
            <div className="bg-slate-900/90 backdrop-blur-2xl rounded-[2.9rem] p-10 h-full flex flex-col items-center justify-center text-center">
              <p className="text-5xl font-black text-white mb-2 tracking-tighter">99.9%</p>
              <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Uptime Guaranteed</p>
              <Globe className="w-12 h-12 text-indigo-500/20 mt-6" />
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-1 rounded-[3rem] bg-slate-800/50 border border-slate-800"
          >
            <div className="bg-slate-900/90 backdrop-blur-2xl rounded-[2.9rem] p-10 h-full">
              <Code2 className="w-10 h-10 text-indigo-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">Modern Stack</h3>
              <p className="text-slate-500 text-sm">Engineered with the latest in edge computing and neural-sync technology.</p>
            </div>
          </motion.div>

          {/* Global Community Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-1 rounded-[3rem] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-slate-800"
          >
            <div className="bg-slate-900/90 backdrop-blur-2xl rounded-[2.9rem] p-10 h-full flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Join the Node.</h3>
                <p className="text-slate-400 text-sm max-w-sm">Connect with thousands of institutions scaling with TrackNest across the globe.</p>
              </div>
              <button className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-slate-950 hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES: Using your Pricing feature list style */}
      <section className="max-w-7xl mx-auto px-6 pb-40 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white tracking-tight">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { label: "Radical Transparency", icon: <ShieldCheck className="text-emerald-500" /> },
                { label: "User Obsession", icon: <Users className="text-indigo-500" /> },
                { label: "Iterative Excellence", icon: <Cpu className="text-purple-500" /> }
            ].map((value) => (
                <div key={value.label} className="p-8 rounded-4xl bg-slate-900/50 border border-slate-800 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 border border-slate-700">
                        {value.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{value.label}</h4>
                    <p className="text-slate-500 text-sm">Maintaining the highest standards in every line of code we ship.</p>
                </div>
            ))}
        </div>
      </section>

      {/* CTA Footer: Consistent with your theme */}
      <footer className="py-24 border-t border-slate-800 text-center relative z-10">
        <h3 className="text-3xl font-black text-white italic mb-8">Ready to start nesting?</h3>
        <button className="px-10 py-5 rounded-2xl bg-indigo-600 text-white font-black text-xs uppercase tracking-widest hover:bg-indigo-500 shadow-xl shadow-indigo-500/20 transition-all">
          Build Your First Nest
        </button>
      </footer>
    </div>
  );
}