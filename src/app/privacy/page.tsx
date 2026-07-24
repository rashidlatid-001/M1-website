"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const SECTIONS = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you create an account, request a demonstration, submit an inquiry, or communicate with us. This may include your name, email address, company information, professional role, and aircraft fleet details.",
  },
  {
    title: "How We Use Your Information",
    content:
      "M1 uses the information collected to operate, maintain, and enhance the M1 ecosystem. We use your data to provide and improve our services, respond to inquiries, send relevant communications about M1 updates, and fulfill our contractual obligations to industry partners.",
  },
  {
    title: "Information Sharing",
    content:
      "M1 does not sell, trade, or rent your personal information to third parties. We may share aggregated, anonymized data about our users or platform activity. We may share information with trusted partners who assist in operating our platform, subject to strict confidentiality obligations.",
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard security measures to protect your personal information. The M1 platform is built with a security-first architecture. However, no method of transmission over the Internet or method of electronic storage is 100% secure.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law. Upon account deletion, we will remove or anonymize your personal data within 30 days.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information. You may request a copy of all data we hold about you, opt out of marketing communications at any time, or request that we restrict processing of your data. Contact us at privacy@m1.com to exercise these rights.",
  },
  {
    title: "Cookies",
    content:
      "M1 uses essential cookies to operate the platform and analytical cookies to understand how users interact with our services. You may adjust your cookie preferences at any time through your browser settings. Disabling certain cookies may affect platform functionality.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about this Privacy Policy, please contact our Data Protection Officer at privacy@m1.com, or write to us at M1 Global Headquarters, Geneva, Switzerland.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-m1-bg text-white">
      <Header />
      <main className="flex-grow pt-40 pb-24 px-6 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-m1-silver/3 rounded-full blur-[100px] pointer-events-none" />

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
              Privacy Policy
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
            At M1, your privacy is fundamental to our relationship. This policy
            explains how we collect, use, and protect your information when you
            engage with the M1 ecosystem — the future operating system of
            private aviation.
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
