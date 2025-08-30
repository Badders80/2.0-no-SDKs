// src/sections/Ownership/OwnershipReimagined.tsx
import React from "react";
import SectionFullBleed from "../../components/SectionFullBleed";
import bandImg from "../../assets/hero-horses.png"; // optional, or remove bg prop

export default function OwnershipReimagined() {
  return (
    <SectionFullBleed
      className="bg-black"
      bg={<img src={bandImg} className="w-full h-full object-cover opacity-40" alt="" />}
      overlayClass="bg-black/40"
    >
      <h2 className="text-sm uppercase tracking-[0.18em] text-brand-grey">Our vision</h2>
      <h3 className="mt-2 text-3xl font-bold">
        <span className="text-white">Ownership </span>
        <span className="text-brand-gold">Re-imagined</span>
      </h3>
      <p className="mt-4 max-w-prose text-sm text-brand-grey">
        Modern ownership that's flexible, transparent, and engaging.
      </p>

      <div className="mt-6">
        <a
          href="#learn-more"
          className="inline-flex items-center rounded-xl px-5 py-2 text-sm font-medium bg-brand-gold text-black hover:opacity-90"
        >
          Learn more
        </a>
      </div>
    </SectionFullBleed>
  );
}
