import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import authorisedSyndicatorLogo from '../assets/Logo-Authorised-syndicator.png';
import ImageWithFallback from './ImageWithFallback';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 pt-36 pb-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-sm">
        {/* Brand and tagline */}
        <div>
          <h2 className="text-2xl font-semibold text-gold leading-tight">
            EVOLUTION
            <br />
            STABLES
          </h2>
          <p className="mt-4 text-white max-w-xs leading-relaxed">
            A new era of ownership. Powered by transparency, innovation, and a global community of
            racehorse enthusiasts.
          </p>
          <div className="flex space-x-4 mt-6 text-gold">
            <a
              href="https://www.linkedin.com/in/alex-baddeley/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <FaXTwitter size={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Navigation links */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-gold mb-3">Navigation</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="/mission" className="hover:text-gold transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/innovation" className="hover:text-gold transition-colors">
                  Innovation
                </a>
              </li>
              <li>
                <a href="/mystable" className="hover:text-gold transition-colors">
                  MyStable
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gold mb-3">Resources</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="/docs" className="hover:text-gold transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Badders80/2.0-no-SDKs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gold mb-3">Legal</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="/privacy" className="hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gold transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <span className="text-neutral-500">Private License</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditation */}
        <div className="md:text-right">
          <h4 className="font-medium text-gold mb-3">Accredited By</h4>
          <ImageWithFallback
            src={authorisedSyndicatorLogo}
            alt="NZTR Authorised Syndicator"
            className="h-16 ml-[-6px] inline-block object-contain"
          />
        </div>
      </div>

      {/* Bottom border + copyright */}
      <div className="mt-20 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} Evolution Stables. All rights reserved.
      </div>
    </footer>
  );
}
