'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ContactButton from './ContactButton';

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 pt-6">
        <div className="max-w-6xl mx-auto">
          <div className={`bg-black/45 backdrop-blur-xl rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'border-gray-700/70 shadow-[0_8px_30px_rgb(0,0,0,0.6)]'
              : 'border-gray-800/50 shadow-[0_4px_20px_rgb(0,0,0,0.4)]'
          }`}>
            <div className="px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <Link href="/#top" className="text-lg font-semibold text-white tracking-tight">
                    <Image src="/logo.png" alt="Enkel Signering Logo" width={100} height={32} />
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                  <Link
                    href="/#top"
                    className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10"
                  >
                    Home
                  </Link>
                  <Link
                    href="/#projects"
                    className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/#about"
                    className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10"
                  >
                    About
                  </Link>
                  <Link
                    href="/#contact"
                    className="ml-4 bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
                  >
                    Contact
                  </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors relative z-50"
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
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div className={`relative h-full flex flex-col items-center justify-center transition-all duration-500 ease-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <nav className="flex flex-col items-center space-y-8">
            <Link
              href="/#top"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-400 text-3xl font-semibold transition-all duration-300 hover:scale-110"
            >
              Home
            </Link>
            <Link
              href="/#projects"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-400 text-3xl font-semibold transition-all duration-300 hover:scale-110"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-400 text-3xl font-semibold transition-all duration-300 hover:scale-110"
            >
              About
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-white text-black hover:bg-blue-400 hover:text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-110"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <ContactButton type="email" variant="text" className="text-gray-400 text-sm" showIcon={false} />
          </div>
        </div>
      </div>
    </>
  );
}
