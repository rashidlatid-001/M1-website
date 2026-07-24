"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function StoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-m1-bg text-white">
      <Header />
      <main className="flex-grow pt-40 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto space-y-32">
          
          {/* Intro */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-m1-silver mb-8">
              The M1 Story
            </h1>
            <p className="text-2xl text-white/80 font-light leading-relaxed font-heading">
              Aviation is the pinnacle of human engineering, yet the ecosystem that supports it remains grounded in the past. We built M1 to change that.
            </p>
          </motion.section>

          {/* The Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-heading tracking-widest uppercase text-m1-silver mb-6">The Fragmentation Problem</h2>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
              Today's aviation ecosystem is deeply fragmented. Brokers, operators, and maintenance organizations exist in isolated silos. Transactions are opaque, data is disconnected, and the true potential of modern aircraft is limited by legacy infrastructure.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              We realized that building a better marketplace wasn't enough. The industry didn't need another directory; it needed an operating system.
            </p>
          </motion.section>

          {/* Meaning of M1 */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-12 glass-panel border border-m1-silver/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-m1-silver/5 to-transparent z-0" />
            <div className="relative z-10 text-center">
              <h2 className="text-6xl font-signature text-m1-silver mb-8 transform -rotate-2">Mach 1</h2>
              <p className="text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
                Mach 1 represents the speed of sound—the threshold where aviation transcends conventional limits. M1 is the digital equivalent. We are breaking the sound barrier of aviation technology.
              </p>
            </div>
          </motion.section>

          {/* Vision & Mission */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-heading tracking-widest uppercase text-m1-silver mb-6">Vision for Connected Aviation</h2>
            <p className="text-lg text-white/70 font-light leading-relaxed mb-12">
              Imagine an ecosystem where an aircraft's health data directly informs its market value in real-time. Where maintenance schedules sync seamlessly with charter availability. Where acquiring a jet is as elegant and transparent as the machine itself.
            </p>

            <div className="border-l border-m1-silver/30 pl-8">
              <h3 className="text-sm font-heading tracking-widest uppercase text-m1-silver mb-4">Our Mission</h3>
              <p className="text-2xl text-white font-light">
                To engineer the definitive digital ecosystem for the future of private aviation.
              </p>
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
