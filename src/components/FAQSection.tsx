"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is SEO and why is it important for my website?",
      a: "Search Engine Optimization (SEO) improves your site's visibility on search engines like Google. High rankings drive organic, targeted visitors without ongoing ad spend, resulting in higher trust and conversions.",
    },
    {
      q: "How long does it take to see results from SEO campaigns?",
      a: "Most businesses see noticeable ranking improvements within 3 to 6 months as search engines re-crawl updated content and authority accumulates naturally.",
    },
    {
      q: "What are the key elements of on-page and technical SEO?",
      a: "Key components include keyword optimization, page speed, mobile responsiveness, semantic HTML structure, internal linking, and meta tags that help search engines understand content context.",
    },
    {
      q: "How does off-page SEO impact my rankings and domain authority?",
      a: "Off-page SEO consists of backlinks, digital PR, brand mentions, and social signals. High-quality editorial backlinks act as votes of confidence that elevate domain credibility.",
    },
    {
      q: "How often should I update and optimize my SEO strategy?",
      a: "SEO is an ongoing process. Search engine algorithms evolve constantly, so auditing technical health and refreshing content quarterly keeps you ahead of competitors.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
            <span className="highlight-green font-serif">Frequently asked</span>
            <br />
            question
          </h2>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-gray-900 group-hover:text-brand-green-dark transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0 text-gray-600 group-hover:border-black transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed pr-12 animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
