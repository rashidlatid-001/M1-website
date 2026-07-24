"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function RequestDemoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-m1-bg text-white">
      <Header />
      <main className="flex-grow pt-32 pb-24 px-6 flex items-center justify-center relative">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl max-h-3xl bg-m1-silver/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-2xl w-full relative z-10 glass-panel p-8 md:p-12 border border-m1-silver/20 rounded-sm">
          <h1 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-m1-silver mb-8 text-center">
            Request Demo
          </h1>
          
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full bg-black/50 border border-m1-silver/20 p-4 text-white placeholder-white/40 focus:outline-none focus:border-m1-silver transition-colors" />
              <input type="text" placeholder="Company" className="w-full bg-black/50 border border-m1-silver/20 p-4 text-white placeholder-white/40 focus:outline-none focus:border-m1-silver transition-colors" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Position" className="w-full bg-black/50 border border-m1-silver/20 p-4 text-white placeholder-white/40 focus:outline-none focus:border-m1-silver transition-colors" />
              <input type="email" placeholder="Email" className="w-full bg-black/50 border border-m1-silver/20 p-4 text-white placeholder-white/40 focus:outline-none focus:border-m1-silver transition-colors" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select className="w-full bg-black/50 border border-m1-silver/20 p-4 text-white/40 focus:outline-none focus:border-m1-silver transition-colors appearance-none">
                <option value="" disabled selected>Fleet Size</option>
                <option value="1-5">1-5 Aircraft</option>
                <option value="6-20">6-20 Aircraft</option>
                <option value="21+">21+ Aircraft</option>
              </select>
              <input type="date" placeholder="Preferred Meeting Date" className="w-full bg-black/50 border border-m1-silver/20 p-4 text-white/40 focus:outline-none focus:border-m1-silver transition-colors" />
            </div>
            <textarea placeholder="Message" rows={4} className="w-full bg-black/50 border border-m1-silver/20 p-4 text-white placeholder-white/40 focus:outline-none focus:border-m1-silver transition-colors"></textarea>
            
            <div className="flex justify-center mt-4">
              <Button type="submit" variant="primary">Submit Request</Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
