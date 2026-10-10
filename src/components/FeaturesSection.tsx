import { TrendingUp, CloudCog, ShieldCheck } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "Initial SEO Project",
      description:
        "SEO is an ever-changing practice dictated by updates in SEO algorithms and technological innovation.",
    },
    {
      icon: CloudCog,
      title: "SEO Audit & Strategy",
      description:
        "Campaigns are tracked and data is leveraged throughout every campaign, ensuring our clients are one step ahead.",
    },
    {
      icon: ShieldCheck,
      title: "Local SEO Project",
      description:
        "This is the process of getting other websites to link back to a website. Links are a signal to Google that a website is high authority.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-4 leading-tight">
            <span className="highlight-green font-serif">Awesome features</span>
            <br />
            optimizing your website
          </h2>
        </div>

        {/* 3 Columns with dividing borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="px-6 py-8 md:py-4 flex flex-col items-center text-center group hover:bg-gray-50/50 rounded-xl transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-cream border border-gray-200 flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 group-hover:bg-brand-green/20 group-hover:text-black transition-all shadow-sm">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-950 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
