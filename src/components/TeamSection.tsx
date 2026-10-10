/* eslint-disable @next/next/no-img-element */
export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
              <span className="highlight-green font-serif">Meet our amazing SEO</span>
              <br />
              team for your business
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our SEO team will take the time to truly understand your business, your goals, and your mission. We recognize that your needs are unique, and that&apos;s what inspires our team.
            </p>
          </div>
        </div>

        {/* 3 Team Circles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-start">
          {/* Member 1: Esther Howard */}
          <div className="flex flex-col items-center group">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-amber-100/60 border-4 border-white shadow-md mb-6 relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                alt="Esther Howard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-950 mb-1">
              Esther Howard
            </h3>
            <p className="text-gray-500 font-medium text-sm">
              Senior SEO Manager
            </p>
          </div>

          {/* Member 2: Leslie Alexander (3D Robot Mascot Spot!) */}
          <div id="team-robot-target" className="flex flex-col items-center relative">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-white border-4 border-white shadow-md mb-6 relative flex items-center justify-center overflow-hidden">
              {/* Subtle circular ripple */}
              <div className="absolute inset-0 rounded-full border border-gray-100 bg-gradient-to-b from-gray-50 to-brand-cream/50"></div>
              
              <div className="relative z-10 text-center px-4">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-green/20 text-brand-dark text-xs font-bold mb-1">
                  AI &amp; Mascot
                </span>
                <p className="text-xs text-gray-400">
                  Interactive 3D Stage
                </p>
              </div>
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-950 mb-1">
              Leslie Alexander
            </h3>
            <p className="text-gray-500 font-medium text-sm">
              AI SEO Executive
            </p>
          </div>

          {/* Member 3: Savannah Nguyen */}
          <div className="flex flex-col items-center group">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-orange-100/60 border-4 border-white shadow-md mb-6 relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Savannah Nguyen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-950 mb-1">
              Savannah Nguyen
            </h3>
            <p className="text-gray-500 font-medium text-sm">
              Account Manager
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
