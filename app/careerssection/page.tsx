import React from 'react';
import { Users, ClipboardList } from 'lucide-react';

export default function CareersSection() {
  return (
    <main 
      className="min-h-screen dark:bg-[#020617] text-gray-100 py-26 px-8 flex items-center justify-center relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '70px 70px', // Adjust size of the grid boxes here
      }}
    >
      {/* Optional: Radial glow overlay to mimic the subtle lighting in your image */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.08),transparent_45%)] pointer-events-none" />

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Header Section (Centered) */}
        <header className="mb-16 flex flex-col items-center text-center max-w-2xl mx-auto relative">
          {/* Badge mimicking the 'SCALABLE PRICING' design */}
          <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-3 py-1 mb-4">
            <span className="text-indigo-400 text-[10px]">⚡</span>
            <span className="text-indigo-400 text-xs font-bold tracking-wider uppercase">
              Scalable Infrastructure
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
            Plans that grow
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight mb-4">
            with your institution.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We replace fragmented tools with high-frequency business growth infrastructure.
          </p>
        </header>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8">
          
          {/* Card 1: Multi-Tier CRM (Dark Theme) */}
          <div className="relative overflow-hidden bg-[#0b1120]/90 backdrop-blur-sm border border-slate-800 rounded-[28px] p-10 flex flex-col justify-between group">
            <div className="absolute top-[10%] -right-[10%] w-[70%] h-[120%] border-l border-indigo-500/20 -rotate-[15deg] pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#4f46e5] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                <Users className="w-6 h-6 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Multi-Tier CRM</h2>
              <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md">
                A holistic view of every client interaction. Track project lifecycles, personnel notes, and engagement history in real-time.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-auto">
              <span className="bg-slate-800 hover:bg-slate-700 text-gray-200 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-colors duration-200">
                Automated Workflows
              </span>
              <span className="bg-slate-800 hover:bg-slate-700 text-gray-200 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-colors duration-200">
                Client Portal
              </span>
            </div>
          </div>

          {/* Card 2: Task Orchestration (Vibrant Purple Theme) */}
          <div className="bg-gradient-to-br from-[#4f46e5] to-[#3b82f6] text-white rounded-[28px] p-10 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-8">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Task Orchestration</h2>
              <p className="text-white/85 text-base leading-relaxed">
                Assign duties, manage schedules, and push instant notifications across your entire organization.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="h-[2px] bg-white/30 mb-4" />
              <span className="text-xs font-bold tracking-wider uppercase opacity-90">
                Efficiency Boosted
              </span>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}