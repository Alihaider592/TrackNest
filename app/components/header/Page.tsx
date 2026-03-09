"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Spotlight Position Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the spotlight movement
  const springConfig = { damping: 25, stiffness: 700 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <>
      {/* Global Cursor Spotlight - Makes "empty" space feel alive */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[99] opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:opacity-100"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.06), transparent 80%)`,
          ),
        }}
      />

      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/70 dark:bg-slate-950/40 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 py-3"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group relative">
            <motion.div
              whileHover={{ rotate: -10, scale: 1.1 }}
              className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30"
            >
              <Sparkles className="text-white w-5 h-5" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white leading-none">
                TrackNest
              </span>
              <span className="text-[10px] font-medium text-indigo-500 uppercase tracking-widest mt-1">
                Management
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Modern Hover Effect */}
          <div className="hidden md:flex items-center bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 px-1.5 py-1.5 rounded-2xl backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all group/link"
              >
                {link.name}
                {/* Underline Animation */}
                <motion.div className="absolute bottom-1 left-4 right-4 h-0.5 bg-indigo-500 origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform" />
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-5 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all"
            >
              Sign in
            </Link>
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link
                href="/register"
                className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-indigo-500/50 transition-all flex items-center gap-2"
              >
                Request to Join
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Button stays the same */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

// Helper to make useTransform work inside the file if needed
import { useTransform } from "framer-motion";
