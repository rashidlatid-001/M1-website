"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function OperatingSystemSection() {
  return (
    <section className="relative py-32 bg-[#030303] overflow-hidden">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-widest uppercase text-m1-silver mb-8">
            Operating<br />System
          </h2>
          
          <div className="space-y-6 text-white/70 font-light text-lg">
            <p>
              M1 OS is the central nervous system for modern aviation. A secure, digital-first infrastructure built to unify an historically fragmented industry.
            </p>
            <p>
              Serving brokers, operators, and maintenance organizations, it bridges the gap between operations, aircraft acquisitions, and predictive maintenance management.
            </p>
            <p>
              It is the foundation of the future aviation vision, turning data into precision action.
            </p>
          </div>
          
          <div className="mt-12">
            <Button variant="secondary">Become an Early Adopter</Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[600px] w-full"
        >
          {/* Abstract representation of the OS / Data flowing */}
          <div className="absolute inset-0 border border-white/5 bg-white/[0.02] backdrop-blur-3xl flex items-center justify-center p-8">
             <div className="w-full h-full border border-m1-silver/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-m1-silver to-transparent opacity-50 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-m1-silver to-transparent opacity-50 animate-pulse" />
                
                {/* Simulated interface lines */}
                <div className="absolute inset-x-8 top-12 h-px bg-white/10" />
                <div className="absolute inset-x-8 top-24 h-px bg-white/10" />
                <div className="absolute inset-x-8 top-36 h-px bg-white/10" />
                
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-m1-silver/30 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border border-m1-silver/50 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute w-2 h-2 bg-m1-silver shadow-[0_0_10px_#fff]" />
                </div>
             </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
