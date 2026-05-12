export const MetricBar = () => {
  return (
    <section className="border-y border-white/10 bg-[#0C1020]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Years Running", value: "12" },
          { label: "Countries", value: "30+" },
          { label: "Annual Entries", value: "500+" },
          { label: "Categories", value: "24" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="text-center md:text-left border-r last:border-0 border-white/10 pr-4"
          >
            <p className="text-3xl font-bold text-[#F5C76A] mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
