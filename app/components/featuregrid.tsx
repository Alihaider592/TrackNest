import {
  ClipboardList,
  Users2,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
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
export default function FeatureGrid() {
  return (
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
  );
}
