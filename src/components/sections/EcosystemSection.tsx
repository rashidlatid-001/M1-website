"use client";

import React, { useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const ECOSYSTEM_ITEMS = [
  "Marketplace",
  "Operating System",
  "M1 Verified",
  "Industry Partner Network",
  "Future AI",
  "Predictive Maintenance",
  "Connected Aviation"
];

export function EcosystemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const springConfig = { damping: 25, stiffness: 100 };
  
  // Create static values first to avoid calling hooks inside style prop
  const smoothX = useSpring(mousePos.x * 40, springConfig);
  const smoothY = useSpring(mousePos.y * 40, springConfig);
  const rotateX = useSpring(mousePos.y * -10, springConfig);
  const rotateY = useSpring(mousePos.x * 10, springConfig);

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="py-32 bg-m1-bg relative border-t border-m1-silver/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image / Parallax */}
        <div className="relative h-[600px] w-full rounded-sm overflow-hidden group perspective-[1000px]">
          <motion.div 
            style={{ 
              x: smoothX, 
              y: smoothY, 
              rotateX, 
              rotateY 
            }}
            className="absolute inset-0 border border-m1-silver/20 transform-style-preserve-3d transition-shadow duration-500 group-hover:shadow-[0_0_60px_rgba(192,192,192,0.12)]"
          >
            {/* Bombardier Global 8000 — Real Image */}
            <Image 
              src="/aircraft.png"
              alt="Bombardier Global 8000 private jet"
              fill
              className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700"
              priority={false}
            />
            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-m1-bg/80 via-transparent to-m1-bg/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-m1-bg/40 via-transparent to-m1-bg/10" />
            
            <div className="absolute bottom-8 left-8 z-10">
              <span className="font-heading tracking-widest text-xs uppercase text-m1-silver/70 bg-black/40 backdrop-blur-sm px-3 py-1.5 border border-m1-silver/20">
                Bombardier Global 8000
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-signature text-3xl text-white/90 transform -rotate-2 mb-8 select-none">
              The M1 Difference
            </h3>
            
            <h2 className="text-3xl md:text-5xl font-heading font-light text-white mb-16 leading-tight">
              M1 is not a marketplace.<br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-m1-silver">
                M1 is the future aviation ecosystem.
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-y-8 gap-x-4">
            {ECOSYSTEM_ITEMS.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 group cursor-default"
              >
                <div className="h-px w-8 bg-m1-silver/30 group-hover:bg-m1-silver group-hover:w-12 transition-all duration-300" />
                <span className="text-white/70 group-hover:text-white font-heading tracking-wider uppercase text-sm transition-colors duration-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
