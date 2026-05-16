import { Mail } from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const team = [
  {
    name: "Aisha Bello",
    role: "Executive Director",
    img: "/images/fallback.jpg",
  },
  {
    name: "Chukwuemeka Obi",
    role: "Head of Operations",
    img: "/images/fallback.jpg",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Director of Partnerships",
    img: "/images/fallback.jpg",
  },
  {
    name: "Oluwaseun Adeyemi",
    role: "Chief Communications Officer",
    img: "/images/fallback.jpg",
  },
  {
    name: "Ngozi Eze",
    role: "Awards & Nominations Lead",
    img: "/images/fallback.jpg",
  },
  {
    name: "Babatunde Lawal",
    role: "Strategy & Growth Director",
    img: "/images/fallback.jpg",
  },
  {
    name: "Amina Yusuf",
    role: "Events & Experience Manager",
    img: "/images/fallback.jpg",
  },
  {
    name: "Emeka Nwosu",
    role: "Technology & Media Lead",
    img: "/images/fallback.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-[#0b1a2e] font-sans py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#C9922A] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
              The People Behind AAEA
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-[1.1]">
              Meet Our Team.
            </h2>
          </div>
          <p className="text-white/50 text-[14px] leading-relaxed max-w-sm md:text-right">
            A passionate group of aviation enthusiasts, industry veterans, and
            creative minds dedicated to celebrating excellence.
          </p>
        </div>

        {/* ── Thin gold rule ── */}
        <div className="h-px bg-gradient-to-r from-[#C9922A]/60 via-[#C9922A]/20 to-transparent mb-12" />

        {/* ── Team grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#C9922A]/40 transition-all duration-400"
            >
              {/* Photo */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e] via-[#0b1a2e]/30 to-transparent" />

                {/* Social icons — slide up on hover */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 pb-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {[FaLinkedin, FaTwitter, Mail].map((Icon, j) => (
                    <button
                      key={j}
                      className="w-8 h-8 rounded-full bg-[#C9922A]/90 hover:bg-[#C9922A] flex items-center justify-center transition-colors duration-200"
                    >
                      <Icon
                        size={13}
                        className="text-[#0b1a2e]"
                        strokeWidth={2.2}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & role */}
              <div className="px-4 py-4">
                <p className="text-white font-semibold text-[15px] leading-snug mb-1 group-hover:text-[#C9922A] transition-colors duration-200">
                  {member.name}
                </p>
                <p className="text-white/45 text-[12px] leading-snug tracking-wide">
                  {member.role}
                </p>
              </div>

              {/* Gold bottom accent line */}
              <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#C9922A] to-amber-400 transition-all duration-500 mt-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
