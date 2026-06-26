"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Video, 
  Code, 
  MessageSquare, 
  Download, 
  FileText,
  ArrowRight,
  ExternalLink
} from "lucide-react";

type Resource = {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  size: string; // Tailwind grid span
  color: string;
};

const resources: Resource[] = [
  {
    title: "Documentation",
    description: "The complete guide to mastering TrackNest. From setup to advanced API integrations.",
    icon: <BookOpen className="w-6 h-6" />,
    tag: "Guides",
    size: "md:col-span-2 md:row-span-1",
    color: "text-blue-400",
  },
  {
    title: "Video Tutorials",
    description: "Watch and learn with our step-by-step visual walkthroughs.",
    icon: <Video className="w-6 h-6" />,
    tag: "Videos",
    size: "md:col-span-1 md:row-span-1",
    color: "text-purple-400",
  },
  {
    title: "API Reference",
    description: "Build custom tools using our robust REST and GraphQL endpoints.",
    icon: <Code className="w-6 h-6" />,
    tag: "For Developers",
    size: "md:col-span-1 md:row-span-2",
    color: "text-emerald-400",
  },
  {
    title: "Community Forum",
    description: "Join 5,000+ educators sharing best practices and custom templates.",
    icon: <MessageSquare className="w-6 h-6" />,
    tag: "Community",
    size: "md:col-span-1 md:row-span-1",
    color: "text-amber-400",
  },
  {
    title: "Case Studies",
    description: "See how world-class institutions transformed their student management.",
    icon: <FileText className="w-6 h-6" />,
    tag: "Stories",
    size: "md:col-span-1 md:row-span-1",
    color: "text-rose-400",
  },
  {
    title: "Resource Assets",
    description: "Download branding kits, spreadsheet templates, and onboarding checklists.",
    icon: <Download className="w-6 h-6" />,
    tag: "Freebies",
    size: "md:col-span-2 md:row-span-1",
    color: "text-sky-400",
  },
];

export default function ResourcesPage() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-indigo-500 font-bold tracking-widest uppercase text-xs mb-4"
          >
            Library & Assets
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
            Everything you need <br />
            <span className="text-slate-600">to succeed.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Access our comprehensive collection of guides, developer tools, and community assets.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {resources.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[2.5rem] p-8 overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-xl transition-all duration-500 hover:border-slate-700 hover:bg-slate-900/60 ${item.size}`}
            >
              {/* Inner Decorative Glow */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/5 blur-[80px] rounded-full group-hover:bg-indigo-500/10 transition-colors" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl bg-slate-800 border border-slate-700 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-indigo-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all cursor-pointer">
                  Explore Now <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Top-right corner icon */}
              <div className="absolute top-8 right-8 text-slate-700 group-hover:text-slate-500 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}