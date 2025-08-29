import React from 'react';

/**
 * The innovation block describes the digital syndication concept
 * offered by Evolution Stables. It features a heading with mixed
 * colour styling, a subheading, descriptive paragraph and three
 * features summarised in a grid. All content is specified verbatim.
 */
export default function DigitalSyndication() {
  return (
    <section id="innovation" className="bg-black px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-graytext mb-4">Innovation</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          DIGITAL <span className="text-gold">SYNDICATION</span>
        </h2>
        <p className="text-graytext text-lg mb-6">
          The modern way to experience ownership — for investors and everyday owners.
        </p>
        <p className="text-graytext text-lg mb-16 max-w-4xl">
          By tokenising ownership into accessible shares, we’ve created a modern evolution of
          racing’s age-old tradition — syndication. Each digital share represents a stake in a
          real-world racehorse, connecting your investment directly to its performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Fractional Ownership */}
          <div>
            <div className="mb-4">
              <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black text-sm font-bold">
                ●
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fractional Ownership</h3>
            <p className="text-graytext">
              Own a percentage of a racehorse without the traditional barriers. Start with as little
              as you’re comfortable with.
            </p>
          </div>
          {/* Performance Linked */}
          <div>
            <div className="mb-4">
              <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black text-sm font-bold">
                ●
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance Linked</h3>
            <p className="text-graytext">
              Your returns are directly tied to your horse’s success on the track. Win, place, or
              show — you share in the glory.
            </p>
          </div>
          {/* Community Driven */}
          <div>
            <div className="mb-4">
              <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black text-sm font-bold">
                →
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-graytext">
              Join a community of passionate owners, share the excitement, celebrate victories, and
              build lasting connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
