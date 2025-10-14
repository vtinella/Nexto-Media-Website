'use client';

import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Deep Market Understanding",
      description: "We understand different demographics and age segments, allowing us to create targeted campaigns that resonate with your specific audience.",
    },
    {
      title: "Creativity Meets Strategy",
      description: "Combining marketing expertise with creative excellence to deliver campaigns that are both beautiful and effective.",
    },
    {
      title: "Results-Driven Approach",
      description: "We create campaigns that don't just look good – they drive real, measurable results for your business.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm text-blue-400 uppercase tracking-widest mb-6 font-medium">
              Why choose us
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your strategic partner in social media
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed font-light">
              We're not just another marketing agency. We're your strategic partner in building a dominant social media presence.
            </p>
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-blue-500 pl-6 hover:border-blue-400 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Team/Office Image */}
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              {/* Replace with actual team photo */}
              {/* <img src="/images/team-photo.jpg" alt="Our Team" className="w-full h-full object-cover" /> */}
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800">
                {/* Placeholder - replace with actual image */}
                <div className="absolute inset-0 bg-gray-950/40 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-7xl font-bold mb-4">100+</div>
                    <p className="text-xl text-blue-200">Successful Campaigns</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="relative w-full h-full">
                {/* Optional: Add a small team photo or keep stats */}
                {/* <img src="/images/team-small.jpg" alt="Team" className="w-full h-full object-cover opacity-20" /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold">50+</div>
                    <p className="text-sm text-gray-300 mt-1">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
