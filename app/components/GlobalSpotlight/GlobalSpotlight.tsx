"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, MotionValue } from "framer-motion";

// 1. Define the interface using the actual MotionValue type
interface SpotlightStyle extends React.CSSProperties {
  "--x": MotionValue<number> | string;
  "--y": MotionValue<number> | string;
}

export default function GlobalSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Note: We cast to 'any' only at the very end of the style object 
          if the motion.div component is being stubborn, but defining the 
          interface as SpotlightStyle (extending CSSProperties) is the 
          proper TS way to handle custom properties.
      */}
      <motion.div
        className="absolute inset-0 z-10 opacity-50"
        style={{
          background: `radial-gradient(1200px circle at var(--x) var(--y), rgba(79, 70, 229, 0.08), transparent 80%)`,
          "--x": smoothX,
          "--y": smoothY,
        } as SpotlightStyle}
      />

      {/* Grid Texture Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Visual Fillers for extra "Modern" depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/[0.02] to-transparent" />
    </div>
  );
}