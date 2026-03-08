"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Zap,
  ShieldCheck,
  Users,
  Globe,
  BarChart3,
  Layers,
} from "lucide-react";
import { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
};

const features: Feature[] = [
  {
    title: "Real-time Analytics",
    description:
      "Monitor team performance with live data streaming directly to your command center.",
    icon: <LayoutDashboard className="w-6 h-6 text-indigo-400" />,
    className: "md:col-span-2",
  },
  {
    title: "Instant Automation",
    description: "Set up If-This-Then-That workflows to handle repetitive tasks.",
    icon: <Zap className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Global Infrastructure",
    description: "Deploy resources across 30+ regions with 99.99% uptime.",
    icon: <Globe className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Advanced Security",
    description:
      "Enterprise-grade AES-256 encryption and SOC2 Type II compliance.",
    icon: <ShieldCheck className="w-6 h-6 text-rose-400" />,
    className: "md:col-span-2",
  },
  {
    title: "Team Collaboration",
    description: "Live cursors, threaded comments and shared workspaces.",
    icon: <Users className="w-6 h-6 text-sky-400" />,
  },
  {
    title: "Custom Reporting",
    description: "Generate automated PDF reports for stakeholders.",
    icon: <BarChart3 className="w-6 h-6 text-violet-400" />,
  },
  {
    title: "Modular Scaling",
    description: "Add or remove modules as your business grows.",
    icon: <Layers className="w-6 h-6 text-orange-400" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-white mb-16">
          Core Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className={`p-8 rounded-3xl bg-slate-900 border border-slate-800 ${f.className || ""}`}
            >
              <div className="mb-6 p-4 bg-slate-800 rounded-2xl w-fit">
                {f.icon}
              </div>

              <h4 className="text-2xl font-bold text-white mb-3">{f.title}</h4>

              <p className="text-slate-400">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}