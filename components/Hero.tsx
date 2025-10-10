'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const words = ['social media', 'TikTok', 'Instagram', 'YouTube', 'LinkedIn'];
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    const fullText = words[currentWord];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(75);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Pause at the end
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
      setDelta(200);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-gray-950/90 to-navy-900/95 z-10" />
        {/* Replace this div with a video element or image */}
        <div className="w-full h-full bg-gray-900">
          {/* Video placeholder - replace src with your video */}
          {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video> */}
          {/* Or use an image */}
          {/* <img src="/images/hero-background.jpg" alt="" className="w-full h-full object-cover" /> */}
          <div className="w-full h-full bg-gradient-to-br from-navy-900 to-gray-900" />
        </div>
      </div>

      {/* Floating animated orbs */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-navy-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-navy-600/15 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
          >
            We create industry leaders on{' '}
            <span className="text-navy-400">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A digital marketing agency at the intersection of strategy, creativity, and video production.
            We build creative social media strategies that transform brands into market leaders.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#projects"
                className="block bg-navy-600 text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-navy-700 transition-all shadow-lg hover:shadow-xl"
              >
                View our work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="block border border-gray-300 text-white px-8 py-4 rounded-lg text-base font-medium hover:border-navy-600 hover:bg-navy-600/20 transition-all"
              >
                Let's talk
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
          <svg className="w-5 h-5 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
