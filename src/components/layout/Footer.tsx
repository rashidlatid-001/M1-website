"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom cursor-based parallax
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const logoX = useSpring(mousePosition.x * -50, springConfig);
  const logoY = useSpring(mousePosition.y * -50, springConfig);

  return (
    <footer 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden bg-m1-bg border-t border-m1-silver/10"
    >
      {/* Background Parallax Logo */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5"
        style={{ x: logoX, y: logoY }}
      >
        <h1 className="text-[30vw] font-heading font-black tracking-tighter select-none">
          M1
        </h1>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-24">
          
          <div className="flex flex-col gap-4">
            <h3 className="font-heading tracking-widest text-m1-silver uppercase text-sm mb-4">Navigation</h3>
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link>
            <Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-heading tracking-widest text-m1-silver uppercase text-sm mb-4">Compliance</h3>
            <span className="text-white/60">FAA Compliant</span>
            <span className="text-white/60">EASA Certified Partners</span>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-heading tracking-widest text-m1-silver uppercase text-sm mb-4">Contact</h3>
            <a href="mailto:contact@m1.com" className="text-white/60 hover:text-white transition-colors">contact@m1.com</a>
            <a href="https://linkedin.com/company/m1" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
            <span className="text-white/60">Global Headquarters<br/>Geneva, Switzerland</span>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <span className="text-white/40 text-sm font-heading tracking-wider">
            © 2026 M1.
          </span>
          <span className="text-m1-silver text-sm font-heading tracking-widest uppercase">
            Every path leads to M1.
          </span>
        </div>
      </div>
    </footer>
  );
}
