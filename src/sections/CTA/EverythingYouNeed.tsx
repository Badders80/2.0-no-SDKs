// src/sections/CTA/EverythingYouNeed.tsx (or the bottom CTA section) – wrap with Section to match middle sections
import * as React from "react";
import Section from "../../components/Section";

export default function EverythingYouNeed() {
  return (
    <Section id="mystable">
      <div className="text-left">
        <p className="text-sm tracking-widest uppercase text-gray-400">MyStable</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">
          Everything you need, in one <span className="text-brand-gold">stable</span> place.
        </h2>
        <p className="mt-4 max-w-2xl text-gray-300">
          Manage your stables, monitor your assets, and stay connected—simply, securely, and all in one spot.
        </p>
        {/* …buttons/links… */}
      </div>
    </Section>
  );
}
