"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const BENEFITS = [
  "Exclusive industry partner circle",
  "Two free on-market listings",
  "Integration with M1 Operating System",
  "Reach up to 10x more relevant buyers",
  "Aircraft asset verification",
  "Trusted exclusivity",
  "Premium listing quality",
  "Digital-first acquisition experience"
];

export function MarketplaceSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 32,
    seconds: 10
  });

  useEffect(() => {
    // Determine the target date (45 days, 12h, 32m, 10s from now) just for initial calculation
    // Or we can just decrement this state every second for simplicity to match the requirement exactly
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-m1-bg border-t border-m1-silver/10 overflow-hidden">
      {/* Background cinematic glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-m1-silver/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-m1-silver mb-6"
          >
            Marketplace
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 font-light mb-12"
          >
            M1 Marketplace is a next-generation aircraft marketplace.
          </motion.p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <div className="mt-1.5 w-1.5 h-1.5 bg-m1-silver transform rotate-45 group-hover:scale-150 transition-transform duration-300" />
                <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button variant="primary">Join Marketplace Beta</Button>
          </motion.div>
        </div>

        {/* Right Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative lg:ml-auto p-12 glass-panel border border-m1-silver/20 text-center parallelogram"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-m1-silver/5 to-transparent z-0" />
          <div className="relative z-10">
            <h3 className="font-heading uppercase tracking-widest text-sm text-m1-silver mb-8">
              Marketplace Beta Launch
            </h3>
            
            <div className="flex gap-4 justify-center">
              <TimeUnit value={timeLeft.days} label="Days" />
              <span className="text-2xl text-m1-silver/30 mt-4">:</span>
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <span className="text-2xl text-m1-silver/30 mt-4">:</span>
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <span className="text-2xl text-m1-silver/30 mt-4">:</span>
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[70px]">
      <div className="text-4xl md:text-5xl font-heading font-bold text-white tabular-nums tracking-tighter">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-m1-silver/60 mt-2">
        {label}
      </div>
    </div>
  );
}
