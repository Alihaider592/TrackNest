"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Globe,
  Mail,
  ShieldCheck,
  ChevronRight,
  ArrowUpLeft,
  Users2,
  MessageSquare,
} from "lucide-react";

export default function ContactAdmin() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-white flex flex-col p-6 md:p-12 overflow-hidden selection:bg-indigo-500/30 font-sans">
      {/* 2. THE MAIN SECTION */}
      <main className="flex-1 flex flex-col lg:flex-row items-center lg:items-end justify-between py-12 lg:py-24 relative">
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.02]">
          <h2 className="text-[20vw] font-black leading-none uppercase tracking-tighter">
            Join
          </h2>
        </div>

        {/* Left Side: Bold Typography */}
        <div className="max-w-xl z-10 mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-6"
          >
            <Building2 className="w-3 h-3" /> Entity Registration Protocol
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-6"
          >
            Register <br /> <span className="text-indigo-600">Company</span>{" "}
            <br /> Node
          </motion.h1>
          <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed border-l border-white/10 pl-4">
            Initialize your organizations presence. Provide corporate
            credentials for administrative verification.
          </p>
        </div>

        {/* Right Side: THE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg z-10"
        >
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Field 1: Company Name */}
            <div className="group relative">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2 block ml-1 group-focus-within:text-indigo-500 transition-colors">
                Company Name
              </label>
              <div className="relative flex items-center">
                <Building2 className="absolute left-4 w-4 h-4 text-slate-600 group-focus-within:text-indigo-500 transition-colors" />
                <input
                  type="text"
                  placeholder="ACME_CORP_INT"
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-sm outline-none focus:bg-white/[0.05] focus:border-indigo-500/50 transition-all placeholder:text-white/5 font-mono uppercase"
                />
              </div>
            </div>

            {/* Row: Email and Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="group relative">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2 block ml-1 group-focus-within:text-indigo-500 transition-colors">
                  Working mail
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 w-4 h-4 text-slate-600 group-focus-within:text-indigo-500 transition-colors" />
                  <input
                    type="email"
                    placeholder="ADMIN@CORP.IO"
                    className="w-full bg-white/[0.02] border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-sm outline-none focus:bg-white/[0.05] focus:border-indigo-500/50 transition-all placeholder:text-white/5 font-mono"
                  />
                </div>
              </div>

              <div className="group relative">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2 block ml-1 group-focus-within:text-indigo-500 transition-colors">
                  Company Size
                </label>
                <div className="relative flex items-center">
                  <Users2 className="absolute left-4 w-4 h-4 text-slate-600 group-focus-within:text-indigo-500 transition-colors" />
                  <select className="w-full bg-[#020617] border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-sm outline-none focus:bg-white/[0.05] focus:border-indigo-500/50 transition-all text-slate-400 font-mono appearance-none">
                    <option>SIZE_01-10</option>
                    <option>SIZE_11-50</option>
                    <option>SIZE_50_PLUS</option>
                  </select>
                  <ChevronRight className="absolute right-4 w-4 h-4 text-slate-800 rotate-90" />
                </div>
              </div>
            </div>

            {/* Field 3: Message */}
            <div className="group relative">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2 block ml-1 group-focus-within:text-indigo-500 transition-colors">
                Tell us about your needs
              </label>
              <div className="relative flex items-center">
                <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-slate-600 group-focus-within:text-indigo-500 transition-colors" />
                <textarea
                  rows={4}
                  placeholder="How do you plan to use TrackNest? (e.g. Project tracking, team management...)"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-sm outline-none focus:bg-white/[0.07] focus:border-indigo-500/50 transition-all placeholder:text-white/10 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Form Actions */}
            <div className="pt-4">
              <button className="relative w-full py-5 bg-white text-black hover:bg-indigo-600 hover:text-white transition-all font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 group overflow-hidden rounded-2xl">
                <span className="relative z-10 flex items-center gap-3">
                  Submit Request{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </div>
          </form>
        </motion.div>
      </main>

      {/* 3. FOOTER GRID */}
      <footer className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/5 pt-8 mt-12">
        <div className="flex flex-col gap-1 border-r border-white/5 pr-4">
          <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">
            Protocol
          </span>
          <span className="text-xs font-bold text-slate-400 uppercase">
            Onboarding_v1.0.4
          </span>
        </div>

        <div className="flex flex-col gap-1 lg:border-r border-white/5 lg:px-8">
          <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">
            Response Time
          </span>
          <span className="text-xs font-bold text-slate-400 uppercase">
            {"<"} 24_HOURS_UTC
          </span>
        </div>

        <div className="hidden lg:flex flex-col gap-1 border-r border-white/5 px-8">
          <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">
            Global Status
          </span>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
            <Globe className="w-3 h-3 text-indigo-500" />
            Operational
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-1 px-8 items-end text-right">
          <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">
            Security
          </span>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase">
            AES-256_ACTIVE <ShieldCheck className="w-3 h-3" />
          </div>
        </div>
      </footer>
    </div>
  );
}
