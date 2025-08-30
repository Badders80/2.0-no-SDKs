// src/components/Footer.tsx
import * as React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto max-w-[1200px] px-10 sm:px-16 py-24">
        {/* Row 1: Brand block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <img
              src="/src/assets/Gold-Evolution-Stables.svg"
              alt="Evolution Stables"
              className="h-10 mb-6"
            />
            <p className="text-gray-300 max-w-xl">
              A new era of ownership. Powered by transparency, innovation, and a global
              community of racehorse enthusiasts.
            </p>
          </div>

          {/* spacer to keep rhythm on large screens; remove if you prefer tighter fit */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Accreditation (right side on large) */}
          <div className="lg:col-span-3 lg:flex lg:items-center lg:justify-end">
            <div className="text-left lg:text-right">
              <p className="text-sm tracking-[0.2em] uppercase text-white/70 mb-3">
                Accredited By
              </p>
              <img
                src="/src/assets/Logo-Authorised-syndicator.png"
                alt="Authorised Syndicator"
                className="h-14 inline-block"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-brand-gold/30" />

        {/* Row 2: Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-white font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#mission" className="hover:text-brand-gold">Our Mission</a></li>
              <li><a href="#about" className="hover:text-brand-gold">About</a></li>
              <li><a href="#innovation" className="hover:text-brand-gold">Innovation</a></li>
              <li><a href="#mystable" className="hover:text-brand-gold">MyStable</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#docs" className="hover:text-brand-gold">Documentation</a></li>
              <li><a href="#faq" className="hover:text-brand-gold">FAQ</a></li>
              <li><a href="#changelog" className="hover:text-brand-gold">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#privacy" className="hover:text-brand-gold">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-brand-gold">Terms of Service</a></li>
              <li><a href="#license" className="hover:text-brand-gold">Private License</a></li>
            </ul>
          </div>

          {/* On large screens this empty col keeps the link grid balanced against the accreditation block above */}
          <div className="hidden lg:block" />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="w-full h-px bg-white/10 mb-8" />
          <div className="flex items-center gap-6 text-gray-400">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-brand-gold">in</a>
            <a href="https://x.com" aria-label="X" className="hover:text-brand-gold">X</a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-brand-gold">IG</a>
          </div>
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} Evolution Stables. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
