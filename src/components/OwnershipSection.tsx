import React from 'react';

/**
 * The "Our Mission" section introduces the concept of ownership
 * re‑imagined. All copy is provided by the user verbatim and should
 * not be altered. Highlighted phrases are coloured gold to draw
 * attention within the paragraph.
 */
export default function OwnershipSection() {
  return (
    <section id="mission" className="bg-black px-6 md:px-20 py-24">
      <div className="max-w-4xl">
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
