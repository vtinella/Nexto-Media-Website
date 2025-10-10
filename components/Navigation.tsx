'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 pt-6">
      <div className={`max-w-6xl mx-auto transition-all duration-300 ${
        isScrolled ? 'shadow-xl shadow-navy-900/10' : ''
      }`}>
        <div className="bg-navy-900/80 backdrop-blur-xl rounded-2xl border border-navy-700/50">
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="text-lg font-semibold text-white tracking-tight">
                  Nexto Media
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  href="#projects"
                  className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10"
                >
                  Projects
                </Link>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="ml-4 bg-white text-navy-900 hover:bg-gray-100 px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden border-t border-navy-700/50">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 block px-4 py-3 text-base font-medium rounded-lg transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 block px-4 py-3 text-base font-medium rounded-lg transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 block px-4 py-3 text-base font-medium rounded-lg transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 block px-4 py-3 text-base font-medium rounded-lg transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
