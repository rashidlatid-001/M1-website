"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-heading tracking-widest text-sm uppercase transition-all duration-300 parallelogram shine-effect group";
  
  const variants = {
    primary: "bg-m1-silver/10 text-white border border-m1-silver hover:bg-m1-silver/20 hover:text-white glass-panel",
    secondary: "bg-transparent text-m1-silver border border-m1-silver/50 hover:border-m1-silver hover:bg-m1-glass hover:text-white glass-panel"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 group-hover:text-shadow-sm transition-all duration-300">
        {children}
      </span>
      {/* Additional animated inner border for that premium feel */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500 parallelogram" />
    </motion.button>
  );
}
