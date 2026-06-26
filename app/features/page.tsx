"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  LayoutDashboard,
  Zap,
  ShieldCheck,
  Users,
  Globe,
  BarChart3,
  Layers,
  ArrowRight,
} from "lucide-react";

// --- Types ---
type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  color: string;
};

const features: Feature[] = [
  {
    title: "Real-time Analytics",
    description:
      "Monitor team and project performance with live data streaming. Sub-second insights for critical decision-making across any organization.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-2",
    color: "indigo",
  },
  {
    title: "Instant Automation",
    description:
      "Automate repetitive workflows and processes in seconds, freeing your teams to focus on strategic tasks.",
    icon: <Zap className="w-6 h-6" />,
    color: "amber",
  },
  {
    title: "Global Infrastructure",
    description:
      "Deploy resources across multiple regions with 99.99% uptime for global teams and projects.",
    icon: <Globe className="w-6 h-6" />,
    color: "emerald",
  },
  {
    title: "Advanced Security",
    description:
      "Enterprise-grade AES-256 encryption, SOC2 Type II compliance, and robust access control built into every layer of your stack.",
    icon: <ShieldCheck className="w-6 h-6" />,
    className: "md:col-span-2",
    color: "rose",
  },
  {
    title: "Team Collaboration",
    description:
      "Real-time collaboration with live cursors, shared workspaces, and threaded comments for seamless team alignment.",
    icon: <Users className="w-6 h-6" />,
    color: "sky",
  },
  {
    title: "Modular Scaling",
    description:
      "Easily scale from small teams to thousands of users without friction, adapting to any business or project size.",
    icon: <Layers className="w-6 h-6" />,
    color: "orange",
  },
];

// --- Sub-Component: Spotlight Card ---
const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition-colors hover:bg-slate-900 ${feature.className || ""}`}
    >
      {/* Dynamic Spotlight Background */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-${feature.color}-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300`}>
            {feature.icon}
          </div>
          <h4 className="mb-3 text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
            {feature.title}
          </h4>
          <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
            {feature.description}
          </p>
        </div>
        
        <div className="mt-8 flex items-center text-sm font-medium text-indigo-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export default function Features() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section id="features" ref={targetRef} className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Decorative blurred background elements */}
      <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <motion.div style={{ opacity, scale }} className="container mx-auto max-w-7xl px-6">
        <div className="mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 mb-6"
          >
            Engineering Excellence
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Everything you need, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 bg-[length:200%_auto] animate-gradient">nothing you dont.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Our management system replaces a dozen disconnected tools with one unified, 
            lightning-fast interface designed for high-growth teams.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}