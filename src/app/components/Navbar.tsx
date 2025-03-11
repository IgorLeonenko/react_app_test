"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#ff2d55]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold neon-text glitch-effect" data-text="BRIDGE OF SINNERS">
                BRIDGE OF SINNERS
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-300 hover:text-[#ff2d55] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/music"
                className="text-gray-300 hover:text-[#00f2ff] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Music
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-[#9d00ff] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-[#ff2d55] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="neon-border text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#ff2d55]/20"
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-[#ff2d55]/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-gray-300 hover:text-[#ff2d55] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/music"
              className="text-gray-300 hover:text-[#00f2ff] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Music
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-[#9d00ff] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-[#ff2d55] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="neon-border block text-white px-4 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-[#ff2d55]/20 mt-4 mx-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
