"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ClipboardList,
  Users2,
  ArrowRight,
  BarChart3,
  Sparkles,
  ShieldCheck,
  Zap,
  Briefcase,
  Layers
} from "lucide-react";
import TrustNumber from "./components/trustnumber";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-50 selection:bg-indigo-500/30 transition-colors duration-300 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-[128px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2], x: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-[128px]"
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-md text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-8 cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNIFIED OPERATIONAL INTELLIGENCE</span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-8xl font-black tracking-tight mb-6 leading-[1.05]"
          >
            Run your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-400">
              Business Smarter.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            TrackNest is the high-performance workspace to orchestrate your 
            clients, team, and financials in one seamless digital ecosystem.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/register"
              className="group w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/25"
            >
              Get Started Free{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              Book a Demo
            </Link>
          </motion.div>

          {/* Premium Dashboard Preview */}
          <motion.div
            variants={fadeIn}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="mt-20 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-3 shadow-2xl">
              <div className="rounded-2xl bg-slate-100 dark:bg-slate-950 aspect-[16/9] flex items-center justify-center border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center">
                    <LayoutDashboard className="w-10 h-10 text-indigo-500" />
                  </div>
                  <p className="text-slate-400 font-medium italic">
                    Centralized Operations Dashboard
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-indigo-600 dark:text-indigo-400 font-bold text-sm tracking-[0.2em] uppercase mb-4">
                Scalable Infrastructure
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold">
                Everything your team needs.
              </h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 md:w-1/3">
              We replaced fragmented tools with a unified engine for high-frequency 
              business growth and team collaboration.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-12 gap-6"
          >
            {/* Feature 1: Dynamic CRM */}
            <motion.div
              variants={fadeIn}
              className="md:col-span-8 group relative overflow-hidden p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] hover:shadow-2xl transition-all"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="h-14 w-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-500/20 group-hover:rotate-6 transition-transform">
                    <Users2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4 tracking-tight">
                    Multi-Tier CRM
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-sm">
                    A holistic view of every client interaction. Track project lifecycles, 
                    personnel notes, and engagement history in real-time.
                  </p>
                </div>
                <div className="mt-12 flex gap-3">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold">
                    Automated Workflows
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold">
                    Client Portal
                  </span>
                </div>
              </div>
              <div className="absolute top-10 right-[-10%] w-1/2 h-full bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl -rotate-12 group-hover:rotate-0 transition-transform duration-700 hidden lg:block border border-indigo-100 dark:border-indigo-800" />
            </motion.div>

            {/* Feature 2: Workforce Management */}
            <motion.div
              variants={fadeIn}
              className="md:col-span-4 p-10 bg-indigo-600 dark:bg-indigo-500 text-white rounded-[2.5rem] shadow-2xl shadow-indigo-500/30 flex flex-col justify-between"
            >
              <div>
                <ClipboardList className="w-10 h-10 mb-8 opacity-90 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold mb-4">Task Orchestration</h4>
                <p className="text-indigo-100/80 leading-relaxed mb-8">
                  Assign duties, manage schedules, and trigger instant 
                  notifications across your entire organization.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-white w-3/4"
                  />
                </div>
                <p className="text-xs font-medium opacity-80 uppercase tracking-widest text-center">
                  Efficiency Boosted by 85%
                </p>
              </div>
            </motion.div>

            {/* Feature 3: Financial Analytics */}
            <motion.div
              variants={fadeIn}
              className="md:col-span-4 p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] hover:border-indigo-500/50 transition-colors"
            >
              <div className="h-12 w-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Automated Billing</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Enterprise-grade invoicing with recurring billing, automatic 
                reconciliations, and encrypted payment gateways.
              </p>
            </motion.div>

            {/* Feature 4: Strategic Analytics */}
            <motion.div
              variants={fadeIn}
              className="md:col-span-8 p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10"
            >
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-4">
                  Predictive Growth Insights
                </h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Generate deep-dive performance reports and visual trend graphs. 
                  Identify bottlenecks and optimize your resource allocation with AI-driven data.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="w-full md:w-48 aspect-square bg-slate-50 dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center"
              >
                <BarChart3 className="w-12 h-12 text-indigo-500 opacity-50" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-slate-900 dark:bg-white rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-3xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white dark:text-slate-950 mb-8 tracking-tight">
              Modernize your <br className="hidden md:block" /> business engine.
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/register"
                className="px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/40"
              >
                Claim your workspace
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 bg-white/10 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-2xl hover:bg-white/20 dark:hover:bg-slate-200 transition-all backdrop-blur-sm"
              >
                Custom Integration
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <TrustNumber />
    </main>
  );
}