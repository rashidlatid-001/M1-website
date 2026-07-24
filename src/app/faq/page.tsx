"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    q: "What is M1?",
    a: "M1 is the definitive digital ecosystem for private aviation. It combines a premium aircraft marketplace with the M1 Operating System — a secure, connected infrastructure built to unify brokers, operators, and maintenance organizations. Think of it as the operating system the aviation industry has always needed.",
  },
  {
    q: "Who is M1 built for?",
    a: "M1 is built for the professional private aviation sector — aircraft brokers, charter operators, aircraft management companies, maintenance and repair organizations (MROs), OEMs, and high-net-worth individuals seeking a superior acquisition experience. If you operate in private aviation, M1 is built for you.",
  },
  {
    q: "What is the M1 Marketplace?",
    a: "The M1 Marketplace is a next-generation aircraft transaction platform. Unlike conventional listings directories, M1 Marketplace offers M1 Verified aircraft, exclusive off-market inventory, digital-first acquisition workflows, and integration with the M1 OS for seamless data continuity from listing to ownership.",
  },
  {
    q: "What is the M1 Operating System?",
    a: "The M1 OS is the central nervous system of our ecosystem. It serves as a secure data and workflow hub connecting all actors in the aviation value chain — from maintenance records and charter availability to fleet management and market intelligence. It turns fragmented data into precision action.",
  },
  {
    q: "What does M1 Verified mean?",
    a: "M1 Verified is our rigorous aircraft certification standard. A Verified aircraft has passed a comprehensive documentation review covering airworthiness records, maintenance history, ownership chain, and market valuation. It signals trust, transparency, and premium quality to buyers across our network.",
  },
  {
    q: "How do I join the Marketplace Beta?",
    a: "The M1 Marketplace Beta is currently in closed access for select industry partners. You can register your interest via the 'Join Marketplace Beta' button on the home page or contact us directly. Beta members receive two complimentary on-market listings and early access to all platform features.",
  },
  {
    q: "What does M1 stand for?",
    a: "M1 stands for Mach 1 — the speed of sound. It represents the threshold where aviation transcends conventional limits. M1 is the digital equivalent: we are breaking the sound barrier of aviation technology, moving an entire industry from the analogue era into a connected, intelligent future.",
  },
  {
    q: "How do I become an industry partner?",
    a: "Industry partnerships are at the core of the M1 model. We actively welcome brokers, charter operators, MROs, OEMs, and aviation technology companies. Visit our Industry Partnerships page or contact our partnerships team at partners@m1.com to explore how we can build together.",
  },
  {
    q: "Where is M1 headquartered?",
    a: "M1 is headquartered in Geneva, Switzerland — one of the world's premier aviation and financial centres. Our global reach spans the major aviation markets across Europe, North America, the Middle East, and Asia-Pacific.",
  },
  {
    q: "Is M1 live yet?",
    a: "M1 is currently in a pre-launch phase with our initial partner network. The Marketplace Beta launch is imminent. Interested operators and brokers can request early access now to secure founding member status, which includes priority listing placement and exclusive early-adopter benefits.",
  },
];

function FaqItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-m1-silver/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-start justify-between gap-8 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-heading tracking-wide uppercase transition-colors duration-300 ${isOpen ? "text-m1-silver" : "text-white/80 group-hover:text-white"}`}>
          {item.q}
        </span>
        <div className={`flex-shrink-0 w-6 h-6 border border-m1-silver/30 flex items-center justify-center transition-all duration-300 ${isOpen ? "border-m1-silver rotate-45 bg-m1-silver/10" : "group-hover:border-m1-silver/60"}`}>
          <div className="w-3 h-[1px] bg-m1-silver absolute" />
          <div className={`w-[1px] h-3 bg-m1-silver absolute transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-white/60 font-light leading-relaxed text-base max-w-3xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-m1-bg text-white">
      <Header />
      <main className="flex-grow pt-40 pb-24 px-6 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] max-w-4xl bg-m1-silver/3 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-xs font-heading tracking-[0.3em] uppercase text-m1-silver/50 mb-4 block">
              Knowledge Base
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-m1-silver mb-6">
              FAQ
            </h1>
            <p className="text-xl text-white/50 font-light max-w-2xl">
              Everything you need to know about M1 and the future of private aviation.
            </p>
          </motion.div>

          <div>
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem key={item.q} item={item} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 p-12 glass-panel border border-m1-silver/20 text-center"
          >
            <h2 className="text-2xl font-heading tracking-widest uppercase text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-white/60 font-light mb-8 max-w-md mx-auto">
              Our team is ready to walk you through the M1 ecosystem and answer any questions about our platform.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 font-heading tracking-widest text-sm uppercase text-m1-silver hover:text-white transition-colors duration-300 border-b border-m1-silver/30 hover:border-m1-silver pb-1"
            >
              Contact Our Team
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
