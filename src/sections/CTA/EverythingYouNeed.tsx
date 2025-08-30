// src/sections/CTA/EverythingYouNeed.tsx
import React from "react";
import Section from "../../components/Section";

export default function EverythingYouNeed() {
  return (
    <Section className="bg-black">
      <p className="text-[11px] tracking-[0.18em] uppercase text-brand-grey">
        MyStable
      </p>

      <h2 className="mt-2 text-h1 font-extrabold text-white">
        Everything you need, in one <span className="text-brand-gold">stable</span> place.
      </h2>

      <p className="mt-4 max-w-[680px] text-body text-brand-grey">
        Manage your ownership, monitor your assets, and stay connected—simply,
        securely, and all in one spot.
      </p>

      <div className="mt-6">
        <a
          href="#mystable"
          className="inline-flex items-center rounded-xl px-5 py-2 text-[13px] font-semibold bg-brand-gold text-black hover:opacity-90"
        >
          Enter MyStable
        </a>
      </div>
    </Section>
  );
}
