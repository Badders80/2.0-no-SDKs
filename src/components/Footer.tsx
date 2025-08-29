// src/components/Footer.tsx
import * as React from "react";
import { FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

import esText from "../assets/EVOLUTION STABLES.png";
import nztrBadge from "../assets/Untitled design (1).png";

const GOLD = "#C79B55";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-[#E6DED1]">
      <div className="mx-auto max-w-[1120px] px-6 pt-12">
        {/* Top row: logo + blurb */}
        <div className="flex flex-col items-start text-left">
          {/* Logo image */}
          <img
            src={esText} // import your logo image
            alt="Evolution Stables"
            className="block w-[280px] mb-4"
          />

          {/* Blurb text (forced line breaks) */}
          <p className="text-[16px] leading-relaxed max-w-md">
            A new era of ownership. Powered by <br />
            transparency, innovation, and a global <br />
            community of racehorse enthusiasts.
          </p>
        </div>
      </div>

      {/* Divider line goes here (full width across container) */}
      <div
        className="mt-10"
        style={{ borderTop: `1px solid ${GOLD}` }}
      />

      <div className="mx-auto max-w-[1120px] px-6">
        {/* Bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 py-10 md:py-12">
          {/* Left column is empty (logo is above the line now) */}

          {/* Middle columns */}
          <div className="md:col-span-8 grid grid-cols-3 gap-6">
            <nav>
              <h3 className="mb-3 text-sm font-medium uppercase" style={{ color: GOLD }}>
                Navigation
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/#mission">Our Mission</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#innovation">Innovation</a></li>
                <li><a href="/mystable">MyStable</a></li>
              </ul>
            </nav>

            <nav>
              <h3 className="mb-3 text-sm font-medium uppercase" style={{ color: GOLD }}>
                Resources
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/docs">Documentation</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/changelog">Changelog</a></li>
              </ul>
            </nav>

            <nav>
              <h3 className="mb-3 text-sm font-medium uppercase" style={{ color: GOLD }}>
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/license">Private License</a></li>
              </ul>
            </nav>
          </div>

          {/* Right column: accredited badge */}
          <div className="md:col-span-4">
            <h3 className="mb-3 text-sm font-medium uppercase" style={{ color: GOLD }}>
              Accredited By
            </h3>
            <img
              src={nztrBadge}
              alt="NZTR Authorised Syndicator"
              className="h-24 w-auto object-contain"
            />
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-6 py-2">
          <FaLinkedinIn className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
          <FaXTwitter className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
          <FaInstagram className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer" />
        </div>

        {/* Copyright */}
        <p className="pb-8 text-center text-xs opacity-70">
          &copy; {new Date().getFullYear()} Evolution Stables. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
