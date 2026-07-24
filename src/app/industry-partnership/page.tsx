"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const PARTNER_TYPES = [
  { title: "Broker Partnerships", desc: "Gain unparalleled access to off-market inventory and data." },
  { title: "Charter Operators", desc: "Integrate seamlessly with the M1 network to maximize fleet utilization." },
  { title: "Aircraft Management", desc: "Streamline operations and elevate the owner experience." },
  { title: "MRO Organizations", desc: "Connect maintenance schedules directly with operational demand." },
  { title: "OEMs", desc: "Direct integrations for predictive maintenance and lifecycle management." },
  { title: "Aviation Technology", desc: "Build on top of the M1 OS to deliver new value to the industry." },
  { title: "Future Integrations", desc: "Shape the next generation of connected aviation with us." },
];

export default function IndustryPartnershipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-m1-bg text-white">
      <Header />
      <main className="flex-grow pt-32 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-m1-silver mb-6">
              Industry Partnerships
            </h1>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
              Join the ecosystem that is reshaping the future of private aviation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {PARTNER_TYPES.map((pt, i) => (
              <motion.div 
                key={pt.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 glass-panel border border-m1-silver/10 hover:border-m1-silver/40 transition-colors group"
              >
                <div className="h-1 w-12 bg-m1-silver/30 group-hover:bg-m1-silver mb-6 transition-colors duration-300" />
                <h3 className="text-xl font-heading tracking-wider uppercase mb-4 text-white group-hover:text-m1-silver transition-colors">
                  {pt.title}
                </h3>
                <p className="text-white/60 font-light">
                  {pt.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <Button variant="primary">Become a Partner</Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
