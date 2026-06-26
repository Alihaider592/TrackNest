"use client";

import React from 'react';
import { User, Mail, FileText, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';

export default function ContactNodeSection() {
  return (
    <main 
      className="min-h-screen dark:bg-[#020617] text-gray-100  py-16 px-4 md:px-16 flex items-center justify-center relative overflow-hidden select-none"
    >
      {/* Background Watermark Text "JOIN" */}
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 text-[24vw] font-black text-slate-900/30 tracking-tighter z-0 pointer-events-none font-sans">
        JOIN
      </div>

      <div className="max-w-7xl mt-8 w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
        
        {/* Left Side: Branding & Titles */}
        <div className="flex flex-col items-start space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-950/40 border border-indigo-500/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-indigo-400 text-[10px] font-bold tracking-widest uppercase">
              Contact & Support Protocol
            </span>
          </div>
          
          {/* Main Titles */}
          <div className="">
            <h1 className="text-6xl md:text-8xl font-extrabold  text-white tracking-tight uppercase leading-[0.95]">
              Get In
            </h1>
            <h1 className="text-6xl md:text-8xl  font-extrabold text-[#5046e6] tracking-tight uppercase leading-[0.95]">
              Touch
            </h1>
            <h1 className="text-6xl md:text-8xl  font-extrabold text-white tracking-tight uppercase leading-[0.95]">
              With Us
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm md:text-base max-w-sm font-medium leading-relaxed pt-4 border-l-2 border-indigo-600/30 pl-4">
            Have questions about our infrastructure or need assistance? Drop our node a message for administrative clearance.
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <form 
          className="space-y-3 w-full max-w-xl justify-self-center lg:justify-self-end" 
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Full Name */}
          <div>
            <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-2.5">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input 
                type="text" 
                className="w-full bg-[#090d16] border border-slate-900 rounded-xl pl-12 pr-4 py-4 text-sm text-slate-300 placeholder-slate-700 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-mono"
                placeholder="JOHN_DOE"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-2.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input 
                type="email" 
                className="w-full bg-[#090d16] border border-slate-900 rounded-xl pl-12 pr-4 py-4 text-sm text-slate-300 placeholder-slate-700 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-mono"
                placeholder="USER@DOMAIN.COM"
              />
            </div>
          </div>

          {/* Subject Line */}
          <div>
            <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-2.5">
              Subject
            </label>
            <div className="relative">
              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input 
                type="text" 
                className="w-full bg-[#090d16] border border-slate-900 rounded-xl pl-12 pr-4 py-4 text-sm text-slate-300 placeholder-slate-700 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all font-mono"
                placeholder="INQUIRY_GENERAL"
              />
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-2.5">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-slate-600" />
              <textarea 
                rows={4}
                className="w-full bg-[#090d16] border border-slate-900 rounded-xl pl-12 pr-4 py-4 text-sm text-slate-300 placeholder-slate-700 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all resize-none leading-relaxed"
                placeholder="Type your message or inquiry requirements here..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="inline-flex items-center justify-center gap-2 w-full bg-white hover:bg-slate-100 text-black font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 mt-2"
          >
            Send Message
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </form>

      </div>
    </main>
  );
}