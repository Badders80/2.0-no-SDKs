// src/sections/CTA/EverythingYouNeed.tsx
import React from "react";
import SectionFullBleed from "../../components/SectionFullBleed";
import bandImg from "../../assets/hooves-transition.jpg";

export default function EverythingYouNeed() {
  return (
    <SectionFullBleed
      className="bg-black"
      bg={<img src={bandImg} className="w-full h-full object-cover" alt="" />}
      overlayClass="bg-black/45"
    >
      <h2 className="text-sm uppercase tracking-[0.18em] text-brand-grey">MyStable</h2>
      <h3 className="mt-2 text-3xl font-bold">
        <span className="text-white">Everything you need, in one </span>
        <span className="text-brand-gold">stable place.</span>
      </h3>
      <p className="mt-4 max-w-prose text-sm text-brand-grey">
        All the essentials—from onboarding to updates—in one clean dashboard.
      </p>

      <div className="mt-6">
        <a
          href="#get-started"
          className="inline-flex items-center rounded-xl px-5 py-2 text-sm font-medium bg-brand-gold text-black hover:opacity-90"
        >
          Get started
        </a>
      </div>
    </SectionFullBleed>
  );
}
