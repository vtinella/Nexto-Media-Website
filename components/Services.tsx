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
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm text-navy-600 uppercase tracking-widest mb-6 font-medium">
            The toolkit
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-gray-950 mb-6 leading-tight">
            What we offer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 rounded-2xl bg-gray-50 hover:bg-navy-50 transition-all border border-transparent hover:border-navy-200"
            >
              <h3 className="text-2xl font-semibold text-gray-950 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
