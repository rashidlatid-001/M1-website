"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-m1-bg text-white">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-24 relative">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-20 animate-glow"
            style={{
              background:
                "radial-gradient(circle, rgba(192,192,192,0.08) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[30vw] font-heading font-black text-white/[0.02] tracking-tighter leading-none">
            404
          </span>
        </div>

        <div className="relative z-10 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="font-signature text-4xl md:text-6xl text-m1-silver/70 block mb-6 -rotate-2">
              Off Course
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-m1-silver mb-6">
              Page Not Found
            </h1>
            <p className="text-lg text-white/50 font-light leading-relaxed mb-12 max-w-lg mx-auto">
              This route does not exist in the M1 ecosystem. Let us navigate
              you back to familiar airspace.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 font-heading tracking-widest text-sm uppercase bg-m1-silver/10 text-white border border-m1-silver hover:bg-m1-silver/20 transition-all duration-300 glass-panel parallelogram shine-effect"
              >
                Return to M1
              </Link>
              <Link
                href="/contact"
                className="font-heading tracking-widest text-sm uppercase text-m1-silver/70 hover:text-m1-silver transition-colors duration-300 border-b border-m1-silver/20 hover:border-m1-silver pb-1"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>

          {/* Animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            className="mt-20 mx-auto w-[60%] h-px bg-gradient-to-r from-transparent via-m1-silver/20 to-transparent"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
