import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react"; // or your preferred icon set

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Credibility badges */}
        <div className="flex gap-6 items-center">
          <img src="../assets/Logo-Authorised-syndicator.png" alt="NZTR Authorised Syndicator" className="h-12 object-contain" />
          <img src="../assets/Logo-wed3nz-finalist.png" alt="Innovative Solution Finalist" className="h-12 object-contain" />
        </div>

        {/* Socials */}
        <div className="flex gap-6 text-lg">
          <a href="https://www.linkedin.com/in/alex-baddeley/" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://x.com/EvoStables" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://instagram.com/EvoStables" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Evolution Stables. All rights reserved.
      </div>
    </footer>
  );
}
