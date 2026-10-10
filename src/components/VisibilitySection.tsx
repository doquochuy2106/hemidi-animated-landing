import { Play } from "lucide-react";

export default function VisibilitySection() {
  return (
    <section id="visibility" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Arch Card with Play Button */}
        <div className="lg:col-span-6 flex justify-center items-end">
          <div 
            id="visibility-arch-target"
            className="w-[320px] sm:w-[380px] lg:w-[440px] h-[440px] sm:h-[500px] lg:h-[540px] rounded-t-[220px] bg-brand-card border border-gray-300/60 relative flex items-center justify-center shadow-sm group"
          >
            {/* Play Button */}
            <button
              aria-label="Play introductory video"
              className="w-20 h-20 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 active:scale-95"
            >
              <Play className="w-8 h-8 fill-gray-900 ml-1" />
            </button>

            {/* Subtle floating badge */}
            <div className="absolute bottom-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-gray-800 shadow-sm">
              Watch 2-Min SEO Case Study
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Stats */}
        <div className="lg:col-span-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-6 leading-tight">
            We favor increasing the{" "}
            <span className="highlight-green font-serif">visibility of the website</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
            At its core, the meaning of search engine optimization (SEO) is increasing your website&apos;s visibility in the results of major search engines &amp; users and your customers want or need.
          </p>

          {/* Stats Counters */}
          <div className="grid grid-cols-2 gap-8 border-t border-gray-300/60 pt-8">
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gray-950 mb-2">
                70k+
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                SEO Projects completed
              </p>
            </div>

            <div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gray-950 mb-2">
                156+
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                Satisfied Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
