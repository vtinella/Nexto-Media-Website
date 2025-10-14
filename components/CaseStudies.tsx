'use client';

import { motion } from 'framer-motion';

export default function CaseStudies() {
  const projects = [
    {
      title: "Brand Campaign",
      client: "Client A",
      category: "Social Media Strategy",
      image: "/images/projects/project-1.jpg" // Replace with your image
    },
    {
      title: "Product Launch",
      client: "Client B",
      category: "Video Production",
      image: "/images/projects/project-2.jpg"
    },
    {
      title: "Influencer Campaign",
      client: "Client C",
      category: "Influencer Marketing",
      image: "/images/projects/project-3.jpg"
    },
    {
      title: "Ad Campaign",
      client: "Client D",
      category: "Paid Advertising",
      image: "/images/projects/project-4.jpg"
    },
    {
      title: "AI-Optimized Ad Campaign",
      client: "Client E",
      category: "AI-Powered Advertising",
      image: "/images/projects/project-5.jpg"
    },
    {
      title: "Brand Awareness",
      client: "Client F",
      category: "Social Media Strategy",
      image: "/images/projects/project-6.jpg"
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-1/4 h-96 bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-1/3 h-96 bg-blue-800/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-blue-400 uppercase tracking-widest mb-6 font-medium">
            How we work
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Selected projects
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Explore our portfolio of successful campaigns that transformed brands into industry leaders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all border border-gray-700"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0">
                {/* Replace this div with actual image */}
                {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 to-black/80 group-hover:from-gray-950/90 group-hover:to-black/90 transition-all" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-md text-white text-xs font-medium uppercase tracking-wide border border-blue-400/30">
                    {project.category}
                  </span>
                </div>
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-base text-gray-300">{project.client}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
