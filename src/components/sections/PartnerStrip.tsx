"use client";

import React from "react";

const PARTNERS = [
  "Aviation Brokerages",
  "Charter Operators",
  "Maintenance Organizations",
  "OEM Partners",
  "Strategic Technology Partners",
  "Aviation Brokerages",
  "Charter Operators",
  "Maintenance Organizations",
  "OEM Partners",
  "Strategic Technology Partners",
];

export function PartnerStrip() {
  return (
    <section className="bg-white h-[100px] flex items-center overflow-hidden relative group">
      <div className="flex whitespace-nowrap animate-marquee">
        {PARTNERS.concat(PARTNERS).map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-12 md:px-16 shrink-0"
          >
            <span className="font-heading font-bold uppercase tracking-[0.15em] text-[#060606]/70 text-lg md:text-xl whitespace-nowrap">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
