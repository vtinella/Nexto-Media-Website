'use client';

import { motion } from 'framer-motion';

export default function BehindTheScenes() {
  const images = [
    { src: '/images/bts/bts-1.jpg', title: 'Studio Setup' },
    { src: '/images/bts/bts-2.jpg', title: 'Creative Session' },
    { src: '/images/bts/bts-3.jpg', title: 'Video Production' },
    { src: '/images/bts/bts-4.jpg', title: 'Team Collaboration' },
  ];

  return (
    <section className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm text-blue-400 uppercase tracking-widest mb-6 font-medium">
            Behind the scenes
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Where the magic happens
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Take a peek into our creative process and see how we bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-800 border border-gray-700"
            >
              {/* Image Placeholder */}
              {/* <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              /> */}
              {/* Temporary gradient placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 group-hover:scale-105 transition-transform duration-500" />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Video Showcase */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-2xl aspect-video bg-gray-800 border border-gray-700">
            {/* Replace with actual video */}
            {/* <video controls className="w-full h-full object-cover">
              <source src="/videos/behind-the-scenes.mp4" type="video/mp4" />
            </video> */}
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-20 h-20 mx-auto mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-gray-300">Behind the Scenes Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
