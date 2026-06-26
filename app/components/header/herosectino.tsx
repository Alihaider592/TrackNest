import {
  LayoutDashboard,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
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
export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
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
  );
}
