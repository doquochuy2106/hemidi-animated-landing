import Link from "next/link";
import { Mail, Phone, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-cream border-t border-gray-200/80 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-200">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center font-bold text-black text-lg">
                S
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-gray-950">
                Sark<span className="text-brand-green">.</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-6">
              Empowering global brands with creative animated technology, intelligent SEO strategies, and measurable business growth.
            </p>
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
              Designed for HeMeDi Animated Web Test
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-gray-950 mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#services" className="hover:text-black transition-colors">
                  Target Analysis
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-black transition-colors">
                  Content Optimization
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-black transition-colors">
                  Keyword Research
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-black transition-colors">
                  Continuous Testing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-black transition-colors">
                  E-Commerce SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-gray-950 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#visibility" className="hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-black transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-black transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-black transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & HeMeDi Info */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-gray-950 mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gray-500 shrink-0" />
                <a href="mailto:recruit@hemidi.com" className="hover:text-black transition-colors">
                  recruit@hemidi.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-gray-500 shrink-0" />
                <a href="https://hemidi.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                  hemidi.com / behmd.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-500 shrink-0" />
                <a href="tel:02822001020" className="hover:text-black transition-colors">
                  028.2200.1020
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Sark. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, Three.js, GSAP &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
