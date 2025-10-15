'use client';

import { useEffect, useState } from 'react';

interface ObfuscatedTextProps {
  text: string;
  type: 'email' | 'phone';
  className?: string;
  onClick?: () => void;
}

/**
 * ObfuscatedText - Displays text that's protected from web scrapers
 *
 * Protection methods used:
 * 1. Text is not in the initial HTML (rendered client-side only)
 * 2. Text is split and reversed in the DOM
 * 3. CSS is used to reverse it back visually
 * 4. No direct href/tel links in HTML for bots to scrape
 */
export default function ObfuscatedText({
  text,
  type,
  className = '',
  onClick
}: ObfuscatedTextProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !text) {
    // Return placeholder during SSR to prevent layout shift
    return (
      <span className={className} style={{ opacity: 0 }}>
        Loading...
      </span>
    );
  }

  // Split text into parts to make scraping harder
  const parts = text.split('');
  const reversed = parts.reverse();

  return (
    <span
      className={`inline-block ${className}`}
      onClick={onClick}
      style={{
        direction: 'rtl',
        unicodeBidi: 'bidi-override',
        userSelect: 'text',
      }}
      data-type={type}
    >
      {reversed.join('')}
    </span>
  );
}
