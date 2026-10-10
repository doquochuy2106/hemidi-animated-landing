import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto rounded-3xl bg-brand-green px-8 py-16 sm:px-16 sm:py-20 text-center relative overflow-hidden shadow-xl">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-black/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-6 leading-tight">
            Are you interested in boosting your SEO ranking?
          </h2>
          <p className="text-gray-900 text-base sm:text-lg mb-8 max-w-xl mx-auto opacity-90 font-medium">
            Join thousands of businesses that trust Sark to transform their search performance into revenue.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-950 text-white font-bold text-base hover:bg-black transition-all transform hover:scale-105 shadow-lg shadow-black/20"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 text-brand-green" />
          </Link>
        </div>
      </div>
    </section>
  );
}
