import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import authorisedSyndicatorLogo from '../assets/Logo-Authorised-syndicator.png';
import ImageWithFallback from './ImageWithFallback';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-black text-white px-6 md:px-16 pt-36 pb-20 border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-sm">
        {/* Brand and tagline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
            <motion.a
              href="https://www.linkedin.com/in/alex-baddeley/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="#"
              aria-label="X (Twitter)"
              className="hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaXTwitter size={24} />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Navigation links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="font-medium text-gold mb-3">Navigation</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <motion.a
                  href="/mission"
                  className="hover:text-gold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Mission
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/about"
                  className="hover:text-gold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/innovation"
                  className="hover:text-gold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Innovation
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/mystable"
                  className="hover:text-gold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  MyStable
                </motion.a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="font-medium text-gold mb-3">Resources</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <motion.a
                  href="/docs"
                  className="hover:text-gold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Documentation
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/faq"
                  className="hover:text-gold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  FAQ
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://github.com/Badders80/2.0-no-SDKs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Changelog
                </motion.a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h4 className="font-medium text-gold mb-3">Legal</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <motion.a
                  href="/privacy"
                  className="hover:text-gold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/terms"
                  className="hover:text-gold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Terms of Service
                </motion.a>
              </li>
              <li>
                <span className="text-neutral-500">Private License</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Accreditation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="md:text-right"
        >
          <h4 className="font-medium text-gold mb-3">Accredited By</h4>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <ImageWithFallback
              src={authorisedSyndicatorLogo}
              alt="NZTR Authorised Syndicator"
              className="h-16 ml-[-6px] inline-block object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border + copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500"
      >
        &copy; {new Date().getFullYear()} Evolution Stables. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
