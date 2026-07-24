"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Request a Demo", href: "/request-demo" },
  { name: "Industry Partnerships", href: "/industry-partnership" },
  { name: "M1 Story", href: "/story" },
  { name: "Contact", href: "/contact" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    
    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen ? "bg-m1-bg/75 backdrop-blur-md border-b border-m1-silver/20" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-bold tracking-widest text-white relative group">
            M1
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-m1-silver transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <button
            onClick={toggleMenu}
            className="text-white hover:text-m1-silver transition-colors flex items-center gap-2 group"
          >
            <span className="font-heading tracking-widest text-sm uppercase hidden md:block">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300 group-hover:-scale-y-100" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 96, opacity: 1 }} // 96px is h-24 of header
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 right-0 z-40 bg-m1-bg/75 backdrop-blur-xl border-b border-m1-silver/30 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-8">
                <nav className="flex flex-col md:flex-row md:items-center justify-start gap-8 md:gap-12">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white/70 hover:text-m1-silver text-lg font-heading tracking-widest uppercase transition-all duration-300 relative group cursor-pointer block"
                      >
                        {item.name}
                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-m1-silver transition-all duration-500 group-hover:w-full"></span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
