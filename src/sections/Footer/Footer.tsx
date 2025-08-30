// src/sections/Footer/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <div className="grid gap-10 md:grid-cols-5">
      {/* Logo block */}
      <div className="md:col-span-2">
        {/* SVG logo image only */}
        <img src="/src/assets/Gold-Evolution-Stables.svg" alt="Evolution Stables" className="h-10 w-auto object-contain" />
        <p className="mt-4 text-xs text-brand-grey">
          A new era of ownership. Powered by transparency, innovation, and community.
        </p>
      </div>

      {/* Link columns */}
      <div>
        <h5 className="text-sm font-semibold text-brand-gold">Navigation</h5>
        <ul className="mt-3 space-y-2 text-sm text-brand-grey">
          <li><a href="#mission" className="hover:text-brand-white">Our Mission</a></li>
          <li><a href="#about" className="hover:text-brand-white">About</a></li>
          <li><a href="#innovation" className="hover:text-brand-white">Innovation</a></li>
          <li><a href="#mystable" className="hover:text-brand-white">MyStable</a></li>
        </ul>
      </div>

      <div>
        <h5 className="text-sm font-semibold text-brand-gold">Resources</h5>
        <ul className="mt-3 space-y-2 text-sm text-brand-grey">
          <li><a href="#docs" className="hover:text-brand-white">Documentation</a></li>
          <li><a href="#faq" className="hover:text-brand-white">FAQ</a></li>
          <li><a href="#changelog" className="hover:text-brand-white">Changelog</a></li>
        </ul>
      </div>

      <div>
        <h5 className="text-sm font-semibold text-brand-gold">Legal</h5>
        <ul className="mt-3 space-y-2 text-sm text-brand-grey">
          <li><a href="#privacy" className="hover:text-brand-white">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:text-brand-white">Terms of Service</a></li>
          <li><a href="#license" className="hover:text-brand-white">Private License</a></li>
        </ul>
      </div>
    </div>
  );
}
