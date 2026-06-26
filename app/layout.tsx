import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/header/Page";
import Footer from "./components/footer/page";
import GlobalSpotlight from "./components/GlobalSpotlight/GlobalSpotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrackNest | Student Management System",
  description: "Modern student management platform built for efficiency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        antialiased
        bg-white
        dark:bg-slate-950
        text-slate-900
        dark:text-slate-100
        transition-colors
        duration-300
        relative
      `}
      >
        {/* Site-wide background effects */}
        <GlobalSpotlight />

        {/* Navbar - Kept at high z-index via its own component logic */}
        <Navbar />

        {/* Page Content - Relative z-10 ensures it sits above the spotlight grid */}
        <main className="min-h-screen relative z-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}