'use client';

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Social Media Strategy",
      description: "Data-driven, customized solutions that position your brand as the industry leader. We analyze your audience and create strategies that drive engagement and growth.",
    },
    {
      title: "Video Production & Content",
      description: "Our specialty. From concept to final cut, we craft scroll-stopping video content optimized for every platform. Professional production quality that captures attention and drives conversions.",
    },
    {
      title: "AI-Powered Advertising",
      description: "Leverage cutting-edge AI technology to optimize ad spend in real-time. Our machine learning algorithms continuously analyze performance data to maximize ROI and reduce wasted budget.",
    },
    {
      title: "Influencer Marketing",
      description: "Connecting brands with the right reach. We partner with influencers who align with your brand values to expand your reach and build authentic connections.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-blue-400 uppercase tracking-widest mb-6 font-medium">
            The toolkit
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What we offer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-10 rounded-2xl bg-gray-800 hover:bg-gray-750 transition-all border border-gray-700 hover:border-blue-500/50 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <div className="w-6 h-6 bg-blue-500 group-hover:bg-white rounded transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
