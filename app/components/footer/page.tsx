"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Twitter,
  Github,
  Linkedin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

// Special Effect Link Component
const socials = [
  { icon: Twitter, name: "Twitter" },
  { icon: Github, name: "GitHub" },
  { icon: Linkedin, name: "LinkedIn" },
];
const AnimatedLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="group relative flex items-center w-fit">
    <motion.span
      whileHover={{ x: 5 }}
      className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-sm transition-colors duration-300"
    >
      {children}
    </motion.span>
    {/* The "Special" Underline Effect */}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full" />
  </Link>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Solutions", "Pricing", "Releases"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact", "Blog"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  return (
    <footer className="relative bg-white dark:bg-[#020617] pt-24 pb-12 px-6 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      {/* Background Animated Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleX: [0.8, 1.1, 0.8],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 space-y-6"
          >
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7, ease: "anticipate" }}
                className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 cursor-pointer"
              >
                <span className="text-white font-bold text-lg">T</span>
              </motion.div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                TrackNest
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm italic">
              Empowering educational institutions with intelligent management
              tools to foster student success.
            </p>

            {/* Social Icons with Pulse Effect */}
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, name }, i) => (
                <motion.div
                  key={i}
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileHover={{ opacity: 1, y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="
          absolute -top-10 left-1/2 -translate-x-1/2
          px-3 py-1.5
          rounded-lg
          text-xs font-medium
          bg-slate-900 text-white
          dark:bg-white dark:text-slate-900
          shadow-lg
          opacity-0 group-hover:opacity-100
          flex items-center gap-1
        "
                  >
                    <Icon className="w-3 h-3" />
                    {name}
                  </motion.div>

                  {/* Button */}
                  <Link
                    href="#"
                    className="
          relative h-11 w-11 rounded-xl
          border border-slate-200 dark:border-slate-800
          flex items-center justify-center
          bg-white dark:bg-slate-900
          text-slate-500
          overflow-hidden
          group-hover:text-white
          transition-colors duration-300
        "
                  >
                    {/* Hover Background */}
                    <span className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                      className="relative z-10"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase text-[10px] tracking-[0.2em]">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <AnimatedLink href="#">{link}</AnimatedLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-6"
          >
            <h4 className="font-black text-slate-900 dark:text-white uppercase text-[10px] tracking-[0.2em]">
              Newsletter
            </h4>
            <div className="relative group">
              <input
                type="email"
                placeholder="email@institute.com"
                className="w-full px-5 py-4 bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-indigo-500 dark:focus:border-indigo-400 rounded-2xl text-sm outline-none transition-all duration-500 focus:shadow-[0_0_20px_rgba(79,70,229,0.2)]"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 top-2 bottom-2 px-4 bg-indigo-600 text-white rounded-xl shadow-md flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-slate-500 text-xs font-medium">
            © {currentYear} TrackNest Inc. Built with ❤️ for Educators.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-600 transition-colors group"
            >
              System Status{" "}
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              Live
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
