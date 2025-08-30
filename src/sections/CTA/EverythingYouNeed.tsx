// src/sections/CTA/EverythingYouNeed.tsx
import * as React from "react";
import Section from "../../components/Section";

export default function EverythingYouNeed() {
  return (
    <Section id="mystable">
      <div className="text-left">
        {/* Section label */}
        <p className="text-sm tracking-widest uppercase text-gray-400">
          MyStable
        </p>

        {/* Section heading */}
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">
          Everything you need, in one{" "}
          <span className="text-brand-gold">stable</span> place.
        </h2>

        {/* Body text */}
        <p className="mt-4 max-w-2xl text-gray-300">
          Manage your stables, monitor your assets, and stay connected—simply,
          securely, and all in one spot.
        </p>

        {/* CTA buttons / links */}
        <div className="mt-6 flex gap-4">
          <a
            href="#get-started"
            className="inline-flex items-center rounded-md border border-brand-gold px-5 py-2 text-sm font-medium text-brand-gold hover:bg-brand-gold hover:text-black transition-colors"
          >
            Get started
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center rounded-md border border-gray-600 px-5 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
    </Section>
  );
}
