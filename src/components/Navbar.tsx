"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center font-bold text-black text-lg transition-transform group-hover:scale-105">
            S
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-gray-900">
            Sark<span className="text-brand-green">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#features" className="hover:text-black transition-colors">
            Features
          </Link>
          <Link href="#visibility" className="hover:text-black transition-colors">
            About Us
          </Link>
          <Link href="#services" className="hover:text-black transition-colors">
            Services
          </Link>
          <Link href="#team" className="hover:text-black transition-colors">
            Team
          </Link>
          <Link href="#faq" className="hover:text-black transition-colors">
            FAQ
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-900 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all shadow-sm"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-black"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-4 text-base font-medium">
          <Link
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-green"
          >
            Features
          </Link>
          <Link
            href="#visibility"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-green"
          >
            About Us
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-green"
          >
            Services
          </Link>
          <Link
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-green"
          >
            Team
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-green"
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 py-3 rounded-full bg-black text-white text-sm font-semibold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
