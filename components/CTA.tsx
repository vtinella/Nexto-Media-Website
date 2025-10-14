'use client';

import { motion } from 'framer-motion';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import ContactButton from './ContactButton';

export default function CTA() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "nextomedia" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's grab a coffee
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to transform your brand's social media presence? Book a meeting with us and let's discuss how we can help you become the industry leader.
          </p>

          {/* Contact Info Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <ContactButton type="email" variant="pill" />
            <ContactButton type="phone" variant="pill" />
          </div>
        </motion.div>

        {/* Cal.com Embed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gray-900/30 backdrop-blur-xl rounded-2xl p-4 md:p-8 border border-gray-800 shadow-2xl overflow-hidden">
            {/* Cal.com embed */}
            <div className="relative w-full rounded-xl overflow-hidden" style={{ minHeight: '700px', height: '700px' }}>
              <Cal
                namespace="nextomedia"
                calLink="nexto/nextomedia"
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
                config={{ layout: "month_view", theme: "dark" }}
              />
            </div>

            {/* Help text with action buttons */}
            <div className="mt-8 text-center">
              <p className="text-base text-gray-300 mb-4 font-medium">
                Can't find a suitable time?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <ContactButton type="email" variant="primary" />
                <ContactButton type="phone" variant="secondary" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Optional: Additional Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">30-Min Consultation</h3>
            <p className="text-gray-400 text-sm">Free initial strategy call</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">No Commitment</h3>
            <p className="text-gray-400 text-sm">Just a friendly conversation</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Quick Response</h3>
            <p className="text-gray-400 text-sm">We'll get back within 24h</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
