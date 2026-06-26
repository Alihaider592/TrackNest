// app/solutions/layout.tsx
import React from "react";

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* This ensures the navbar and background grid apply to all sub-pages */}
      {children}
    </div>
  );
}