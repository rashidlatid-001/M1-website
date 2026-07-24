"use client";

import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 10,
      size: 1 + Math.random() * 2,
      opacity: 0.15 + Math.random() * 0.3,
    })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-m1-silver"
          style={{
            left: p.left,
            bottom: "-5%",
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `particle-drift ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center bg-m1-bg"
    >
      {/* Background parallax layer with hero image */}
      <motion.div
        style={{ y: yBg, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Hero background image */}
        <Image
          src="/hero-bg.png"
          alt="Luxury private jet interior"
          fill
          className="object-cover object-center opacity-30"
          priority
        />

        {/* Edge gradients — cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-m1-bg via-transparent to-m1-bg/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-m1-bg/60 via-transparent to-m1-bg z-10" />
      </motion.div>

      {/* Particles */}
      <Particles />

      {/* Cinematic center glow */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none z-[2] animate-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(192,192,192,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center pt-24"
      >
        {/* Handwritten accent */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="font-signature text-3xl md:text-5xl text-white/90 mb-4 -rotate-2 select-none"
        >
          Ecosystem
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-7xl md:text-[9rem] lg:text-[11rem] font-heading font-black tracking-[0.1em] text-gradient-silver leading-none mb-6 select-none"
        >
          M1
        </motion.h1>

        {/* Operating System — Line — Marketplace */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="flex items-center gap-6 w-full max-w-3xl"
        >
          <h2 className="text-base md:text-2xl lg:text-3xl font-heading font-extralight tracking-[0.2em] uppercase text-white/90 whitespace-nowrap">
            Operating System
          </h2>

          {/* Animated connecting line */}
          <div className="h-[1px] flex-grow bg-m1-silver/20 relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-m1-silver/60 to-transparent"
            />
          </div>

          <h2 className="text-base md:text-2xl lg:text-3xl font-heading font-extralight tracking-[0.2em] uppercase text-m1-silver/80 whitespace-nowrap">
            Marketplace
          </h2>
        </motion.div>
      </motion.div>

      {/* Bottom Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <p className="font-heading tracking-[0.35em] uppercase text-[11px] md:text-xs text-m1-silver/50">
          Every path leads to M1
        </p>
      </motion.div>
    </section>
  );
}
