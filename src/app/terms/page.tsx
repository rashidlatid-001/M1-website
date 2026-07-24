"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const SECTIONS = [
  {
    title: "Acceptance",
    content:
      "By accessing or using the M1 platform, website, or any associated services, you agree to be bound by these Terms of Use. If you do not agree to these terms, you may not use our services. These terms constitute a legally binding agreement between you and M1.",
  },
  {
    title: "Platform Access",
    content:
      "M1 grants you a limited, non-exclusive, non-transferable license to access and use the platform for your internal business purposes. You may not sublicense, sell, resell, transfer, assign, or otherwise commercially exploit or make available to any third party the M1 platform in any way.",
  },
  {
    title: "User Obligations",
    content:
      "You agree to use the platform only for lawful purposes and in accordance with these Terms. You must not use M1 to engage in any conduct that is fraudulent, abusive, or harmful. You are responsible for ensuring that all persons who access M1 through your account comply with these Terms.",
  },
  {
    title: "Intellectual Property",
    content:
      "The M1 platform, including all content, features, and functionality, is owned by M1 and protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content without our express written permission.",
  },
  {
    title: "Aircraft Listings",
    content:
      "M1 provides a platform for aircraft listings and transactions but is not a party to any transaction between buyers and sellers. M1 does not guarantee the accuracy, completeness, or legality of any listing. All aircraft transactions are subject to independent due diligence and applicable aviation regulations.",
  },
  {
    title: "M1 Verified",
    content:
      "The M1 Verified designation signifies that listed aircraft have passed our internal verification process. This verification does not constitute a warranty of airworthiness and should not substitute for independent inspections. M1 Verified status may be revoked at any time if an aircraft no longer meets our standards.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, M1 shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues. Our total liability to you for any claims arising from these Terms shall not exceed the fees paid by you to M1 in the preceding twelve months.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms are governed by and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Geneva, Switzerland.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-m1-bg text-white">
      <Header />
      <main className="flex-grow pt-40 pb-24 px-6 relative">
        <div className="absolute top-0 right-0 w-[50vw] h-[40vh] bg-m1-silver/3 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-xs font-heading tracking-[0.3em] uppercase text-m1-silver/50 mb-4 block">
              Legal
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-m1-silver mb-6">
              Terms of Use
            </h1>
            <p className="text-white/50 font-light text-sm">
              Last updated: January 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/70 font-light leading-relaxed mb-16 pb-16 border-b border-m1-silver/10"
          >
            These Terms of Use govern your access to and use of the M1
            platform. By using M1, you enter into an agreement with us that
            underpins the premium, trust-based ecosystem we are building for
            the future of private aviation.
          </motion.div>

          <div className="space-y-12">
            {SECTIONS.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="grid md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-m1-silver/10 last:border-0"
              >
                <div>
                  <h2 className="text-sm font-heading tracking-widest uppercase text-m1-silver">
                    {section.title}
                  </h2>
                </div>
                <p className="text-white/60 font-light leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
