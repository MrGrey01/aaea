import { Target, Eye, Gem, CheckCircle2 } from "lucide-react";

const values = [
  "Excellence",
  "Integrity",
  "Innovation",
  "Collaboration",
  "Inclusion",
];

const cards = [
  {
    number: "01",
    icon: Target,
    title: "Our Mission",
    body: "To recognize and celebrate excellence, innovation, and leadership in the aviation industry while inspiring continuous growth and development.",
    values: null,
  },
  {
    number: "02",
    icon: Eye,
    title: "Our Vision",
    body: "To be the leading aviation awards platform in Africa, driving industry transformation and setting the benchmark for excellence and professionalism.",
    values: null,
  },
  {
    number: "03",
    icon: Gem,
    title: "Our Values",
    body: null,
    values,
  },
];

export function MissionSection() {
  return (
    <section className="relative w-full bg-brand-700 font-sans py-14 md:py-20 overflow-hidden">
      {/* Faint full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gallery/photo-1436491865332-7a61a109cc05.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-brand-700/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map(({ number, icon: Icon, title, body, values }) => (
            <div
              key={number}
              className="group relative flex flex-col rounded-xl border border-white/10 bg-[#0d1f38]/80 backdrop-blur-sm p-7 md:p-8 overflow-hidden hover:border-gold-500/40 transition-all duration-300"
            >
              {/* Faint number watermark */}
              <span className="absolute bottom-5 right-6 font-heading text-6xl font-bold text-white/6 select-none leading-none">
                {number}
              </span>

              {/* Icon */}
              <div className="mb-4 w-12 h-12 rounded-full border border-gold-500/40 bg-gold-500/10 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-gold-500" strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-[17px] font-bold text-white mb-3 leading-tight">
                {title}
              </h3>

              {/* Gold underline */}
              <div className="h-0.5 w-8 bg-gold-500 mb-5 group-hover:w-14 transition-all duration-300" />

              {/* Body or values list */}
              {body && (
                <p className="text-white/55 text-sm leading-relaxed">{body}</p>
              )}

              {values && (
                <ul className="flex flex-col gap-2.5 mt-1">
                  {values.map((v) => (
                    <li key={v} className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={15}
                        className="text-gold-500 shrink-0"
                        strokeWidth={2}
                      />
                      <span className="text-white/70 text-sm">{v}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
