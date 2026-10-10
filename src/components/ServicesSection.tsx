import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Target Analysis",
      description:
        "Target analysis is an examination of potential targets to determine priority opportunities and market share capture.",
    },
    {
      title: "Content Optimization",
      description:
        "Content optimization is the process of making sure content is written in a way that it ranks high and converts visitors.",
    },
    {
      title: "Keyword Research",
      description:
        "Keyword research is the process by which you research high-intent queries across popular search engines like Google.",
    },
    {
      title: "Continuous Testing",
      description:
        "Continuous Testing is the process of executing automated tests and auditing technical metrics as part of continuous delivery.",
    },
    {
      title: "E-Commerce SEO",
      description:
        "Ecommerce SEO is the process of making your online store and product catalog rank prominently in search results.",
    },
    {
      title: "Website Migrations",
      description:
        "A site migration is a structured process to maintain traffic and preserve authority during URL or CMS changes.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-4 leading-tight">
            Qualities &amp; customizable
            <br />
            <span className="highlight-green font-serif">ideal SEO services</span>
          </h2>
        </div>

        {/* 6 Cards Grid (3 columns on lg, 2 on md, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between border-b border-gray-200 pb-10 group"
            >
              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-950 mb-3 group-hover:text-brand-green-dark transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-950 group-hover:gap-3 transition-all"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4 text-brand-green" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
