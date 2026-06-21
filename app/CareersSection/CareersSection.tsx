import React from 'react';
import { Users, ClipboardList } from 'lucide-react';

export default function CareersSection() {
  return (
    <main className="min-h-screen bg-[#030712] text-gray-100 py-16 px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Header Section */}
        <header className="mb-16 max-w-xl">
          <span className="text-[#6366f1] text-xs font-bold tracking-widest uppercase block mb-4">
            Scalable Infrastructure
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything your team needs.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We replace fragmented tools with high-frequency business growth infrastructure.
          </p>
        </header>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8">
          
          {/* Card 1: Multi-Tier CRM (Dark Theme) */}
          <div className="relative overflow-hidden bg-[#0b1120] border border-slate-800 rounded-[28px] p-10 flex flex-col justify-between group">
            {/* Diagonal line decoration matching your reference image */}
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