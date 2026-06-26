"use client";

import React from 'react';
import { ShieldCheck, Lock, Eye, Server, Globe } from 'lucide-react';

export default function PrivacyProtocolPage() {
  const policies = [
    {
      id: "01",
      icon: <Eye className="w-3 h-3 text-indigo-400" />,
      title: "Data Acquisition",
      gradient: "from-indigo-400 to-purple-400",
      content: <>We collect identity credentials including <span className="text-purple-400 font-mono text-xs">FULL_NAME</span>, <span className="text-purple-400 font-mono text-xs">EMAIL_ADDR</span>, and communication logs. This data is strictly used for node-to-node administrative verification.</>
    },
    {
      id: "02",
      icon: <Server className="w-3 h-3 text-purple-400" />,
      title: "Operational Usage",
      gradient: "from-purple-400 to-pink-400",
      content: <>Data metrics are deployed to optimize system performance, respond to administrative inquiries, and maintain the integrity of our high-frequency growth infrastructure.</>
    },
    {
      id: "03",
      icon: <Lock className="w-3 h-3 text-pink-400" />,
      title: "Encryption & Security",
      gradient: "from-pink-400 to-purple-400",
      content: <>All incoming packets are processed through industry-standard encryption layers. We protect your credentials against unauthorized system breaches or external node interference.</>
    },
    {
      id: "04",
      icon: <Globe className="w-3 h-3 text-purple-400" />,
      title: "External Nodes",
      gradient: "from-purple-400 to-indigo-400",
      content: <>We do not transmit user identity data to third-party entities without explicit administrative clearance, except as required by global regulatory protocols.</>
    }
  ];

  return (
    <main 
      className="min-h-screen bg-[#030712] text-gray-100 py-16 px-4 md:px-16 flex items-center justify-center relative overflow-hidden select-none"
    >
      {/* Safe Native Style Block */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes inlineMarquee {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        .custom-auto-scroll {
          animation: inlineMarquee 25s linear infinite !important;
        }
        .custom-auto-scroll:hover {
          animation-play-state: paused !important;
        }
      `}} />

      {/* Background Watermark Text "JOIN" */}
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 text-[24vw] font-black text-slate-900/30 tracking-tighter z-0 pointer-events-none font-sans">
        JOIN
      </div>

      <div className="max-w-7xl mt-8 w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
        
        {/* Left Side: Branding & Titles */}
        <div className="flex flex-col items-start space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-950/40 border border-indigo-500/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-indigo-400 text-[10px] font-bold tracking-widest uppercase">
              Legal Documentation Protocol
            </span>
          </div>
          
          {/* Colorful Main Titles */}
          <div className="">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight uppercase leading-[0.95]">
              Privacy
            </h1>
            <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight uppercase leading-[0.95]">
              Policy
            </h1>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight uppercase leading-[0.95]">
              Protocol
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm md:text-base max-w-sm font-medium leading-relaxed pt-4 border-l-2 border-indigo-600/30 pl-4">
            Review our data handling directives. Administrative transparency regarding user identity and encrypted metrics.
          </p>

          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] mt-3">
            Node Status: Secure // Version 2.0.4
          </div>
        </div>

        {/* Right Side: Re-aligned Auto-Scrolling Policy Container */}
        <div className="w-full max-w-xl justify-self-center lg:justify-self-end bg-[#090d16]/50 backdrop-blur-md p-8 rounded-3xl border border-slate-900/50 flex flex-col gap-6">
          
          {/* Window Viewport aligned perfectly with the inner blocks */}
          <div className="h-[330px] overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            
            {/* Scroller Target Container */}
            <div className="space-y-6 custom-auto-scroll">
              
              {/* First Set of Cards */}
              {policies.map((policy, idx) => (
                <div key={`set1-${idx}`} className="space-y-2">
                  <label className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-widest bg-gradient-to-r ${policy.gradient} bg-clip-text text-transparent mb-2`}>
                    {policy.icon} {policy.id} {"//"} {policy.title}
                  </label>
                  <div className="bg-[#090d16] border border-slate-900/80 rounded-xl p-5 text-sm text-slate-400 font-medium leading-relaxed">
                    {policy.content}
                  </div>
                </div>
              ))}

              {/* Duplicated Set of Cards */}
              {policies.map((policy, idx) => (
                <div key={`set2-${idx}`} className="space-y-2" aria-hidden="true">
                  <label className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-widest bg-gradient-to-r ${policy.gradient} bg-clip-text text-transparent mb-2`}>
                    {policy.icon} {policy.id} {"//"} {policy.title}
                  </label>
                  <div className="bg-[#090d16] border border-slate-900/80 rounded-xl p-5 text-sm text-slate-400 font-medium leading-relaxed">
                    {policy.content}
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Call to Action / Acceptance */}
          <div className="pt-2 border-t border-slate-900">
            <button 
              type="button"
              className="w-full bg-white hover:bg-slate-100 text-black font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-xl flex items-center justify-center gap-3 transition-colors active:scale-[0.99]"
            >
              Acknowledged & Encrypted
              <ShieldCheck className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] text-slate-600 mt-4 font-mono uppercase tracking-widest">
              Last Updated: 2026.06.21 {"//"} Terminal: 0x442
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}