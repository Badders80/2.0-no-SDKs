import * as React from "react";

/**
 * OurMission (split out of Hero)
 * IMPORTANT:
 * - Paste the EXACT existing "Our Mission" markup between the markers below.
 * - Keep the SAME wrappers (<section> / <Section>), classNames, spacing, and copy.
 * - Do NOT change colours, sizes, or CTA styles.
 */
export default function OurMission() {
  return (
    <section id="mission" className="bg-black">
      <div className="mx-auto max-w-[1200px] px-10 sm:px-16 py-24">
        <p className="uppercase text-sm tracking-widest text-graytext mb-4">Our Mission</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          OWNERSHIP
          <br />
          RE‑IMAGINED
        </h2>
        <p className="text-lg mb-6">
          Traditional racehorse ownership — expensive, restrictive, and opaque — has historically
          excluded those who dream of experiencing the thrill firsthand.
        </p>
        <p className="text-lg">
          Evolution Stables removes these barriers, delivering ownership that's{' '}
          <span className="text-gold font-medium">genuinely accessible</span>,{' '}
          <span className="text-gold font-medium">fully transparent</span>, and{' '}
          <span className="text-gold font-medium">uniquely liquid</span>.
        </p>
        <div className="mt-10">
          <a
            href="#get-started"
            className="inline-flex items-center border border-gold text-gold px-6 py-2 text-sm tracking-wide hover:bg-gold hover:text-black transition"
          >
            JOIN THE REVOLUTION
            <span className="ml-3 text-xl">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
