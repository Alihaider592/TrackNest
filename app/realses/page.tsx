"use client";

import { motion } from "framer-motion";

const releases = [
  {
    version: "v2.4.0",
    date: "March 10, 2026",
    tag: "Major",
    title: "The Intelligence Update",
    description: "Introducing native AI integration and real-time collaboration tools.",
    features: ["Deep Learning Engine", "Multi-user Editing", "Auto-save Recovery"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    version: "v2.3.5",
    date: "Feb 22, 2026",
    tag: "Patch",
    title: "Performance & Stability",
    description: "Reduced bundle size by 15% and fixed navigation flickering on mobile.",
    features: ["Faster Load Times", "Bug Fixes", "CSS Optimization"],
    color: "from-blue-500 to-indigo-500"
  }
];

const ReleasesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-white flex flex-col p-6 md:p-12 overflow-hidden selection:bg-indigo-500/30">
      {/* Background Decorative Blobs to fill "Empty" space */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Changelog
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter"
          >
            New <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Releases</span>
          </motion.h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Every update, every fix, every breakthrough. Tracking the evolution of our platform in real-time.
          </p>
        </header>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line with Indigo Glow */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />

          {releases.map((release, idx) => {
            const isEven = idx % 2 === 0;
            
            return (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`relative mb-32 flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}
              >
                {/* Timeline Dot with Pulse Effect */}
                <div className="absolute left-[16px] md:left-1/2 top-0 z-20 -translate-x-1/2">
                   <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                </div>

                {/* Content Card Group */}
                <div className={`group w-full md:w-[46%] ml-12 md:ml-0 cursor-default`}>
                  <div className="relative p-[1px] rounded-[2rem] overflow-hidden transition-all duration-500 bg-slate-200 dark:bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-500">
                    
                    <div className="bg-white dark:bg-[#0a0a0a] p-8 rounded-[1.95rem] transition-all duration-500">
                      
                      {/* Version & Date */}
                      <div className={`flex items-center gap-4 mb-6 ${isEven ? "md:flex-row-reverse" : "flex-row"}`}>
                        <span className={`text-[10px] font-black px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300`}>
                          {release.version}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                          {release.date}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {release.title}
                      </h3>
                      
                      <p className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300/80 text-sm leading-relaxed mb-8 transition-colors duration-300">
                        {release.description}
                      </p>

                      {/* Feature Tags */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        {release.features.map(feat => (
                          <span key={feat} className="text-[10px] font-bold px-3 py-1 rounded-lg border border-slate-100 dark:border-white/5 text-slate-400 dark:text-slate-500 group-hover:border-indigo-500/30 group-hover:text-indigo-500 transition-all duration-300">
                            {feat}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReleasesPage;