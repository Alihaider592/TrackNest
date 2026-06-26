import { motion } from "framer-motion";
import Link from "next/link";
export default function CTA() {
return(
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
)
}