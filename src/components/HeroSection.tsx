import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline and Call to Actions */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            #1 Rated SEO & Creative Agency
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.12] text-gray-950 tracking-tight mb-6">
            The right SEO to boost{" "}
            <span className="highlight-green font-serif">your rankings</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed mb-8">
            Smart digital marketing strategies that boost search engine ranking and drive sustainable, organic revenue growth. Optimized for high performance and measurable conversions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-green hover:bg-brand-green-dark text-gray-950 font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-md shadow-brand-green/20"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="#visibility"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold text-base hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Social Proof & Metrics */}
          <div className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50/80 border border-gray-100">
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-gray-950">
                29,492+
              </div>
              <p className="text-xs text-gray-500 font-medium">Projects Optimized</p>
            </div>

            <div className="h-10 w-px bg-gray-200"></div>

            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-bold text-gray-900 text-sm ml-1">4.9/5</span>
              </div>
              <p className="text-xs text-gray-500 font-medium">Over 1,200 Reviews</p>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Robot Stage (Arch Container) */}
        <div className="lg:col-span-5 relative flex justify-center items-end">
          {/* Decorative Arch Backdrop matching Figma */}
          <div 
            id="hero-arch-target"
            className="w-[320px] sm:w-[380px] lg:w-[420px] h-[460px] sm:h-[540px] lg:h-[580px] rounded-t-[210px] bg-brand-card/70 border border-gray-200/60 shadow-inner relative flex items-center justify-center overflow-hidden"
          >
            {/* Subtle glow / shadow floor inside the arch */}
            <div className="absolute bottom-6 w-48 h-8 bg-black/10 rounded-full blur-md"></div>
            
            {/* Instruction badge for user / reviewer */}
            <div className="absolute top-8 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-xs font-medium text-gray-600 shadow-sm">
              ✨ 3D Mascot: Move cursor to interact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
