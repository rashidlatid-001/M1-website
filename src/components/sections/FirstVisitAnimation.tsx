"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEQUENCE = ["M1", "Marketplace", "Operating System", "Mach", "1", "M1"];

export function FirstVisitAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldRun, setShouldRun] = useState(false);

  const handleComplete = useCallback(() => {
    setIsVisible(false);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const hasVisited = localStorage.getItem("m1_visited");
    if (hasVisited) {
      setIsVisible(false);
      onComplete();
    } else {
      setShouldRun(true);
      localStorage.setItem("m1_visited", "true");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!shouldRun || !isVisible) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < SEQUENCE.length - 1) return prev + 1;
        clearInterval(timer);
        setTimeout(handleComplete, 1200);
        return prev;
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [shouldRun, isVisible, handleComplete]);

  if (!shouldRun || !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } }}
          className="fixed inset-0 z-[100] bg-m1-bg flex flex-col overflow-hidden"
        >
          {/* Blurred header simulation */}
          <div className="relative z-[101] h-24 flex items-center justify-between px-6 max-w-7xl mx-auto w-full">
            <div className="text-2xl font-heading font-bold tracking-widest text-white/30 blur-[2px]">
              M1
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading tracking-widest text-sm uppercase text-white/30 blur-[2px] hidden md:block">
                Menu
              </span>
              <div className="w-6 h-5 flex flex-col justify-between blur-[2px] opacity-30">
                <span className="h-[2px] w-full bg-white"></span>
                <span className="h-[2px] w-full bg-white"></span>
                <span className="h-[2px] w-full bg-white"></span>
              </div>
            </div>
          </div>

          {/* Main animated text */}
          <div className="flex-1 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ opacity: 0, filter: "blur(12px)", scale: 0.92, y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
                exit={{ opacity: 0, filter: "blur(12px)", scale: 1.08, y: -10 }}
                transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="text-5xl md:text-7xl lg:text-9xl font-heading font-black tracking-[0.15em] text-m1-silver text-center px-4 select-none"
              >
                {SEQUENCE[currentIndex]}
              </motion.h1>
            </AnimatePresence>

            {/* Cinematic ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none animate-glow"
              style={{ background: "radial-gradient(circle, rgba(192,192,192,0.06) 0%, transparent 70%)" }}
            />

            {/* Subtle horizontal line accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] h-px bg-gradient-to-r from-transparent via-m1-silver/10 to-transparent pointer-events-none"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
