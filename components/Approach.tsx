export default function Approach() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm text-navy-600 uppercase tracking-widest mb-6 font-medium">
            Our approach
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-gray-950 mb-8 leading-tight">
            People buy from people, not ads
          </p>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            We focus on creating engaging video content based on creative concepts that build personal connections between audiences and brands. Our data-driven strategies combine marketing expertise with creativity to create campaigns that resonate and drive results.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-navy-50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-navy-600 flex items-center justify-center mb-6 group-hover:bg-navy-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-950">Strategy First</h3>
              <p className="text-gray-600 leading-relaxed">Data-driven approach tailored to your unique business goals</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-navy-50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-navy-600 flex items-center justify-center mb-6 group-hover:bg-navy-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-950">Creative Content</h3>
              <p className="text-gray-600 leading-relaxed">Engaging video production that tells your brand story</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-navy-50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-navy-600 flex items-center justify-center mb-6 group-hover:bg-navy-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-950">Measurable Results</h3>
              <p className="text-gray-600 leading-relaxed">Campaigns that drive engagement and conversions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
