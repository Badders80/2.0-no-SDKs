import React from "react";
import { FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa';
import authorisedSyndicatorLogo from '../assets/Logo-Authorised-syndicator.png';
import wed3nzFinalistLogo from '../assets/Logo-wed3nz-finalist.png';
import ImageWithFallback from './ImageWithFallback';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800 pt-36 pb-54 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-gold">Evolution Stables</h2>
          <p className="mt-2 text-gray-400 leading-relaxed">
            A new era of ownership. Powered by transparency, innovation, and a global community of racehorse enthusiasts.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-400">
            <a href="https://github.com/Badders80/2.0-no-SDKs" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <FaDiscord size={20} />
            </a>
            <a href="https://www.linkedin.com/in/alex-baddeley/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-medium text-gold mb-2">Navigation</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/mission" className="hover:text-white transition-colors">Our Mission</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="/innovation" className="hover:text-white transition-colors">Innovation</a></li>
            <li><a href="/mystable" className="hover:text-white transition-colors">MyStable</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-medium text-gold mb-2">Resources</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="https://github.com/Badders80/2.0-no-SDKs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Changelog</a></li>
          </ul>
        </div>

        {/* Legal & Credibility */}
        <div>
          <h4 className="font-medium text-gold mb-2">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><span className="text-gray-500">Private License</span></li>
          </ul>

          {/* Credibility badges */}
          <div className="mt-6">
            <h4 className="font-medium text-gold mb-2">Accredited By</h4>
            <div className="flex gap-4 items-center">
              <ImageWithFallback
                src={authorisedSyndicatorLogo}
                alt="NZTR Authorised Syndicator"
                className="h-10 object-contain"
              />
              <ImageWithFallback
                src={wed3nzFinalistLogo}
                alt="Innovative Solution Finalist"
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-neutral-800 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Evolution Stables. All rights reserved.
      </div>
    </footer>
  );
}