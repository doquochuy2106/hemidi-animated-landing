export default function BrandsSection() {
  const brands = [
    { name: "Microsoft", logoText: "Microsoft" },
    { name: "Airbnb", logoText: "airbnb" },
    { name: "OLA", logoText: "OLA" },
    { name: "Walmart", logoText: "Walmart*" },
    { name: "Google", logoText: "Google" },
  ];

  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider shrink-0">
          1000+ Big brands trust us
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-10 sm:gap-14 text-gray-400 font-bold text-xl sm:text-2xl">
          <span className="hover:text-gray-900 transition-colors cursor-default tracking-tight">
            Microsoft
          </span>
          <span className="hover:text-gray-900 transition-colors cursor-default lowercase tracking-tighter text-2xl">
            airbnb
          </span>
          <span className="hover:text-gray-900 transition-colors cursor-default font-black tracking-widest text-2xl">
            OLA
          </span>
          <span className="hover:text-gray-900 transition-colors cursor-default font-serif tracking-normal text-2xl">
            Walmart<span className="text-amber-500">❊</span>
          </span>
          <span className="hover:text-gray-900 transition-colors cursor-default tracking-tight text-2xl">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-amber-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </span>
        </div>
      </div>
    </section>
  );
}
