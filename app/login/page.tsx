"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Plus, 
  Fingerprint, 
  Globe, 
  Command, 
  ArrowUpRight,
  Mail, 
  Lock, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-white flex flex-col p-6 md:p-12 overflow-hidden selection:bg-indigo-500/30">
      {/* 2. THE MAIN SECTION */}
      <main className="flex-1 flex flex-col lg:flex-row items-center lg:items-end justify-between py-12 lg:py-24 relative">
        
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 select-none pointer-events-none opacity-[0.02]">
          <h2 className="text-[20vw] font-black leading-none uppercase tracking-tighter">Auth</h2>
        </div>

        {/* Left Side: Bold Typography */}
        <div className="max-w-xl z-10 mb-12 lg:mb-0">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-6"
          >
            <ShieldCheck className="w-3 h-3" /> Encrypted Channel Active
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-6"
          >
            Access <br /> <span className="text-indigo-600">Secure</span> <br /> Portal
          </motion.h1>
          <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed border-l border-white/10 pl-4">
            Verify your identity to initialize the business intelligence suite and cloud nodes.
          </p>
        </div>

        {/* Right Side: THE ENHANCED PADDED FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md z-10"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Field 1: User Identifier */}
            <div className="group relative">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2 block ml-1 group-focus-within:text-indigo-500 transition-colors">
                User Identifier
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 w-4 h-4 text-slate-600 group-focus-within:text-indigo-500 transition-colors" />
                <input 
                  type="email" 
                  placeholder="ID_001@TRACKNEST.IO"
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl pl-12 pr-4 py-5 text-sm outline-none focus:bg-white/[0.05] focus:border-indigo-500/50 transition-all placeholder:text-white/5 font-mono"
                />
                {/* Internal Status Tag */}
                <span className="absolute right-4 text-[9px] font-bold text-slate-800 uppercase tracking-widest hidden md:block">Verified_Enc</span>
              </div>
            </div>

            {/* Field 2: Security Key */}
            <div className="group relative">
              <div className="flex justify-between items-center mb-2 px-1">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 group-focus-within:text-indigo-500 transition-colors">
                  Security Key
                </label>
                <Link href="#" className="text-[10px] font-bold text-indigo-500/50 hover:text-indigo-500 transition-colors">RECOVER</Link>
              </div>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 w-4 h-4 text-slate-600 group-focus-within:text-indigo-500 transition-colors" />
                <input 
                  type="password" 
                  placeholder="••••••••••••"
                  className="w-full bg-white/[0.02] border border-white/5 rounded-2xl pl-12 pr-4 py-5 text-sm outline-none focus:bg-white/[0.05] focus:border-indigo-500/50 transition-all placeholder:text-white/5 font-mono"
                />
                <ChevronRight className="absolute right-4 w-4 h-4 text-slate-800 group-focus-within:text-indigo-500 transition-transform group-focus-within:translate-x-1" />
              </div>
            </div>

            {/* Form Actions */}
            <div className="pt-4 space-y-4">
              <button className="relative w-full py-5 bg-white text-black hover:bg-indigo-600 hover:text-white transition-all font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 group overflow-hidden rounded-2xl">
                <span className="relative z-10 flex items-center gap-3">
                  Initialize Session <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              
              <div className="flex items-center gap-3">
                <button className="flex-1 py-4 bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
                  <Fingerprint className="w-4 h-4 text-slate-600 group-hover:text-indigo-500 transition-colors" /> 
                  Biometric
                </button>
                <button className="flex-1 py-4 bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all text-slate-500 hover:text-white">
                  SSO_Vault
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </main>

      {/* 3. FOOTER GRID */}
      <footer className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/5 pt-8 mt-12">
  {/* Replaced Register with Support */}
  <div className="flex flex-col gap-1 border-r border-white/5 pr-4 group cursor-pointer">
    <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Access Help</span>
    <Link href="mailto:M.Ali.admin@tracknest.com" className="text-xs font-bold text-slate-400 group-hover:text-indigo-500 flex items-center gap-1 transition-colors uppercase">
      Contact Administrator <ArrowUpRight className="w-3 h-3" />
    </Link>
  </div>
  
  <div className="flex flex-col gap-1 lg:border-r border-white/5 lg:px-8">
    <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Compliance</span>
    <span className="text-xs font-bold text-slate-400 uppercase">SOC2_TYPE_II_READY</span>
  </div>

  <div className="hidden lg:flex flex-col gap-1 border-r border-white/5 px-8">
    <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Instance</span>
    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
      <ShieldCheck className="w-3 h-3 text-indigo-500" />
      Private_Cluster
    </div>
  </div>

  <div className="hidden lg:flex flex-col gap-1 px-8 items-end text-right">
    <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Auth_Protocol</span>
    <span className="text-xs font-bold text-slate-600 uppercase">Multi-Tenant_v4</span>
  </div>
</footer>
    </div>
  );
}