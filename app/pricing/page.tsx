"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Shield, Crown, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for small teams starting out.",
    features: ["Up to 10 users", "Basic dashboards", "Email support"],
    icon: <Shield className="w-6 h-6" />,
    color: "from-slate-400 to-slate-600",
    popular: false,
    button: "Get Started",
  },
  {
    name: "Business",
    price: { monthly: 49, annual: 39 },
    description: "For growing teams needing advanced features.",
    features: ["Unlimited users", "Automation workflows", "Analytics & reporting", "Priority support"],
    icon: <Zap className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-600",
    popular: true,
    button: "Start Business",
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    description: "Custom solutions for large organizations across industries.",
    features: ["Dedicated account manager", "API access", "Custom integrations", "Enterprise security"],
    icon: <Crown className="w-6 h-6" />,
    color: "from-amber-400 to-orange-600",
    popular: false,
    button: "Contact Sales",
  },
];
export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Visual Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6"
        >
          <Zap className="w-3 h-3 fill-current" /> Scalable Pricing
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
          Plans that grow <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            with your institution.
          </span>
        </h1>

        {/* Annual/Monthly Toggle */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <span
            className={`text-sm font-medium ${!isAnnual ? "text-white" : "text-slate-500"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-16 h-8 rounded-full bg-slate-800 border border-slate-700 p-1 transition-colors hover:border-slate-600"
          >
            <motion.div
              animate={{ x: isAnnual ? 32 : 0 }}
              className="w-6 h-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/40"
            />
          </button>
          <span
            className={`text-sm font-medium ${isAnnual ? "text-white" : "text-slate-500"}`}
          >
            Annual{" "}
            <span className="text-emerald-400 ml-1 text-xs font-bold">
              (Save 20%)
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative group rounded-[3rem] p-1 border transition-all duration-500 ${
              plan.popular
                ? "bg-gradient-to-b from-indigo-500/50 to-transparent"
                : "bg-slate-800/50 border-slate-800"
            }`}
          >
            <div className="relative bg-slate-900/90 backdrop-blur-2xl rounded-[2.9rem] p-10 h-full flex flex-col">
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-xl">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mb-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isAnnual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-5xl font-black text-white">
                      {typeof plan.price.monthly === "number"
                        ? isAnnual
                          ? `$${plan.price.annual}`
                          : `$${plan.price.monthly}`
                        : plan.price.monthly}
                    </span>
                    {typeof plan.price.monthly === "number" && (
                      <span className="text-slate-500 font-medium">/mo</span>
                    )}
                  </motion.div>
                </AnimatePresence>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">
                  {isAnnual && typeof plan.price.annual === "number"
                    ? `Billed $${plan.price.annual * 12} yearly`
                    : "Billed monthly"}
                </p>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-slate-300 text-sm"
                  >
                    <div className="mt-1 h-4 w-4 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-emerald-500" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group/btn ${
                  plan.popular
                    ? "bg-white text-slate-950 hover:bg-slate-100"
                    : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                }`}
              >
                {plan.button || "Get Started"}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQ Link / Help Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mt-20 text-slate-500 text-sm"
      >
        Have a larger institution?{" "}
        <a href="#" className="text-indigo-400 font-bold hover:underline">
          Talk to our experts
        </a>{" "}
        for a custom quote.
      </motion.p>
    </div>
  );
}
