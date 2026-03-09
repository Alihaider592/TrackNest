"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
interface CounterProps {
  value: number;
}
function Counter({ value }: CounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function TrustNumber() {
  // 2. Added explicit types to the stats array
  const stats = [
    { label: "Active Businesses", value: 2500, suffix: "+", isStatic: false },
    { label: "Tasks Automated", value: 1.2, suffix: "M", isStatic: false },
    { label: "System Uptime", value: 99.9, suffix: "%", isStatic: false },
    { label: "Data Security", value: "AES-256", suffix: "", isStatic: true },
  ];

  return (
    <section className="py-16 border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative text-center group"
            >
              <div className="text-3xl md:text-4xl font-black text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-0.5">
                {/* 3. Logic Check: Only pass 'value' to Counter if it's a number */}
                {typeof stat.value === "number" && !stat.isStatic ? (
                  <>
                    <Counter value={stat.value} />
                    <span>{stat.suffix}</span>
                  </>
                ) : (
                  <span>{stat.value}</span>
                )}
              </div>
              
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-slate-500 dark:text-slate-400 mt-2 group-hover:text-indigo-500 transition-colors">
                {stat.label}
              </div>

              <motion.div 
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-indigo-500/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}