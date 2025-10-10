'use client';

export default function ClientLogos() {
  const clients = [
    { name: "Client 1", logo: "/images/clients/client-1.png" },
    { name: "Client 2", logo: "/images/clients/client-2.png" },
    { name: "Client 3", logo: "/images/clients/client-3.png" },
    { name: "Client 4", logo: "/images/clients/client-4.png" },
    { name: "Client 5", logo: "/images/clients/client-5.png" },
    { name: "Client 6", logo: "/images/clients/client-6.png" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-12">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 group"
            >
              {/* Replace text with actual logo images */}
              {/* <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              /> */}
              {/* Temporary placeholder */}
              <div className="flex items-center justify-center w-32 h-12 bg-gray-200 rounded-lg group-hover:bg-navy-100 transition-colors">
                <span className="text-gray-400 text-xs font-semibold group-hover:text-navy-600 transition-colors">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
