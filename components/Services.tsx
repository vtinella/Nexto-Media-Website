'use client';

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Social Media Strategy",
      description: "Data-driven, customized solutions that position your brand as the industry leader. We analyze your audience and create strategies that drive engagement and growth.",
    },
    {
      title: "Content Production",
      description: "Video is the new language businesses must learn. We create compelling video content that tells your story and connects with your audience on an emotional level.",
    },
    {
      title: "Paid Advertising",
      description: "Right ad, right audience, right platform. Our targeted advertising campaigns maximize your ROI and deliver measurable results across all major platforms.",
    },
    {
      title: "Influencer Marketing",
      description: "Connecting brands with the right reach. We partner with influencers who align with your brand values to expand your reach and build authentic connections.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-navy-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-navy-600 uppercase tracking-widest mb-6 font-medium">
            The toolkit
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-gray-950 mb-6 leading-tight">
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
              className="group p-10 rounded-2xl bg-white hover:bg-navy-50 transition-all border border-gray-200 hover:border-navy-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center mb-6 group-hover:bg-navy-600 transition-colors">
                <div className="w-6 h-6 bg-navy-600 group-hover:bg-white rounded transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-950 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
