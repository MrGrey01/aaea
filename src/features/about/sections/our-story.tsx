import { Button } from "@/components/ui/button";
import { PlayCircle, Trophy, Users, Globe, Calendar } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "250+",
    label: "Award Winners",
  },
  {
    icon: Users,
    value: "1,500+",
    label: "Industry Professionals",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Partner Organizations",
  },
  {
    icon: Calendar,
    value: "10+",
    label: "Years of Excellence",
  },
];

const galleryImages = [
  {
    src: "/images/gallery/photo-1464037866556-6812c9d1c72e.jpg",
    alt: "Airport control tower at dusk",
  },
  {
    src: "/images/gallery/female-pilot.png",
    alt: "Female aviation professional",
  },
  {
    src: "/images/gallery/photo-1436491865332-7a61a109cc05.jpg",
    alt: "Aircraft on runway at sunset",
  },
  {
    src: "/images/gallery/photo-1519167758481-83f550bb49b3.jpg",
    alt: "Awards gala event",
  },
];

export default function OurStory() {
  return (
    <section className="w-full py-10 bg-[#0b1a2e] font-sans">
      {/* ── Top row: text + gallery ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-14 pb-10 flex flex-col lg:flex-row gap-10 lg:gap-5 items-start">
        {/* Left: text block */}
        <div className="shrink-0 lg:w-75 xl:w-85">
          {/* Label */}
          <p className="text-[#C9922A] text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Our Story
          </p>

          {/* Headline */}
          <h2 className="font-heading text-xl md:text-4xl font-bold text-white leading-[1.1] mb-5">
            Honoring Today.
            <br />
            Inspiring Tomorrow.
          </h2>

          {/* Body */}
          <p className="text-white/60 text-sm leading-relaxed mb-7">
            Founded to spotlight the achievements and contributions of
            individuals, organizations, and institutions in aviation, AAEA
            brings together industry leaders, innovators, and changemakers for
            recognition, networking, and inspiration.
          </p>

          {/* Watch CTA */}
          <button className="group flex items-center gap-2 text-[#C9922A] text-[13px] font-semibold tracking-wide hover:text-amber-400 transition-colors duration-200">
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#C9922A] group-hover:border-amber-400 transition-colors duration-200">
              <PlayCircle
                size={16}
                className="fill-[#C9922A] group-hover:fill-amber-400 transition-colors duration-200"
              />
            </span>
            Watch Our Story
          </button>
        </div>

        {/* Right: image gallery */}
        <div className="flex-1 grid grid-cols-4 gap-3 min-h-24 md:min-h-55 md:h-full">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden bg-white/5 aspect-3/4 md:aspect-2/4"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              {/* subtle bottom gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0b1a2e]/50 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="md:hidden max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── Stats bar ── */}
      <div className="max-w-6xl mx-auto xmd:px-10 xlg:px-16 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-0 md:border-2 md:border-gold-500 rounded-lg">
        {/* Label */}
        <div className="flex md:min-h-24 items-center mx-auto sm:min-w-55 md:min-w-65 shrink-0 sm:border-r border-gold-500/40 sm:px-10">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
            Our Impact
            <br />
            <span className="text-white">in Aviation</span>
          </h3>
        </div>

        {/* Stats */}
        <div className="mx-auto flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x divide-gold-500/40 px-6 rounded-xl bg-gold-500/5 sm:bg-transparent">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col item-center sm:px-6 gap-2"
              style={{
                alignItems: "center",
              }}
            >
              <Icon
                size={28}
                className="text-[#C9922A] mb-1"
                strokeWidth={1.5}
              />
              <span className="text-white text-2xl md:text-3xl text-center font-bold tracking-tight">
                {value}
              </span>
              <span className="text-white/50 text-sm text-center leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
