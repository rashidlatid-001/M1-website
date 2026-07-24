"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-m1-bg text-white">
      <Header />
      <main className="flex-grow pt-32 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-m1-silver mb-6">
              Contact
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h3 className="font-heading tracking-widest uppercase text-m1-silver mb-4">Headquarters</h3>
                <p className="text-white/70 font-light text-lg">Geneva, Switzerland<br />Global Aviation Hub</p>
              </div>
              
              <div>
                <h3 className="font-heading tracking-widest uppercase text-m1-silver mb-4">Direct Lines</h3>
                <div className="space-y-4 text-white/70 font-light text-lg">
                  <p><span className="text-white">General Enquiries:</span> contact@m1.com</p>
                  <p><span className="text-white">Partnership Enquiries:</span> partners@m1.com</p>
                  <p><span className="text-white">Media Enquiries:</span> press@m1.com</p>
                </div>
              </div>

              <div>
                <h3 className="font-heading tracking-widest uppercase text-m1-silver mb-4">Social</h3>
                <a href="https://linkedin.com/company/m1" className="text-white/70 hover:text-white transition-colors font-light text-lg underline underline-offset-4">
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Premium Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-panel p-8 md:p-12 border border-m1-silver/20 relative"
            >
              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-heading uppercase tracking-widest text-m1-silver">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-m1-silver/30 py-2 text-white focus:outline-none focus:border-m1-silver transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-heading uppercase tracking-widest text-m1-silver">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-m1-silver/30 py-2 text-white focus:outline-none focus:border-m1-silver transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-heading uppercase tracking-widest text-m1-silver">Subject</label>
                  <select className="w-full bg-transparent border-b border-m1-silver/30 py-2 text-white focus:outline-none focus:border-m1-silver transition-colors appearance-none">
                    <option className="bg-m1-bg">General Enquiry</option>
                    <option className="bg-m1-bg">Partnership</option>
                    <option className="bg-m1-bg">Media</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-heading uppercase tracking-widest text-m1-silver">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-m1-silver/30 py-2 text-white focus:outline-none focus:border-m1-silver transition-colors resize-none"></textarea>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" variant="primary">Send Transmission</Button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
