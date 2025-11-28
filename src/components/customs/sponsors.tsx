import React, { useState, useEffect } from "react";
import {
  Plane,
  Award,
  Users,
  Calendar,
  Mail,
  Menu,
  X,
  ChevronRight,
  Star,
  Globe,
  Trophy,
} from "lucide-react";

export default function AAEAAwards() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    {
      icon: Trophy,
      title: "Airline of the Year",
      description: "Recognizing outstanding service and operational excellence",
      flagship: true,
    },
    {
      icon: Award,
      title: "Best Airport Services",
      description: "Excellence in passenger experience and facilities",
    },
    {
      icon: Users,
      title: "Aviation Professional",
      description: "Individual contributions to aviation advancement",
    },
    {
      icon: Star,
      title: "Safety Innovation",
      description: "Breakthrough in aviation safety technology",
    },
    {
      icon: Globe,
      title: "Regional Connectivity",
      description: "Expanding aviation access across Africa",
    },
    {
      icon: Plane,
      title: "Cargo Excellence",
      description: "Leadership in air freight and logistics",
    },
  ];

  const timeline = [
    { date: "Jan 15, 2026", event: "Submissions Open", status: "upcoming" },
    { date: "Apr 30, 2026", event: "Entry Deadline", status: "upcoming" },
    { date: "Jun 15, 2026", event: "Shortlist Announced", status: "upcoming" },
    { date: "Sep 20, 2026", event: "Awards Ceremony", status: "upcoming" },
  ];

  const judges = [
    {
      name: "Dr. Amina Hassan",
      role: "Aviation Policy Director",
      org: "ICAO Africa",
    },
    { name: "Captain James Okonkwo", role: "Chief Pilot", org: "Air Peace" },
    { name: "Sarah Mensah", role: "Airport CEO", org: "Accra Airport" },
    { name: "Prof. Ibrahim Sule", role: "Aviation Safety Expert", org: "NCAA" },
  ];

  const pastWinners = [
    {
      airline: "Ethiopian Airlines",
      award: "Airline of the Year",
      year: "2024",
      quote: "An honor that motivates us to continue our excellence journey.",
    },
    {
      airline: "Nnamdi Azikiwe Airport",
      award: "Best Airport Services",
      year: "2024",
      quote:
        "This recognition validates our commitment to passenger satisfaction.",
    },
    {
      airline: "Air Peace",
      award: "Regional Connectivity",
      year: "2023",
      quote: "Proud to connect Africa and bring people together.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#050814] to-[#050B18] text-white min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050814]/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Plane className="w-8 h-8 text-[#F5C76A] transform -rotate-45" />
                <div className="absolute inset-0 bg-[#F5C76A] blur-lg opacity-30"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight">AAEA</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#awards"
                className="text-[#F5F7FA] hover:text-[#F5C76A] transition-colors"
              >
                Awards
              </a>
              <a
                href="#categories"
                className="text-[#F5F7FA] hover:text-[#F5C76A] transition-colors"
              >
                Categories
              </a>
              <a
                href="#judges"
                className="text-[#F5F7FA] hover:text-[#F5C76A] transition-colors"
              >
                Judges
              </a>
              <a
                href="#winners"
                className="text-[#F5F7FA] hover:text-[#F5C76A] transition-colors"
              >
                Past Winners
              </a>
              <a
                href="#about"
                className="text-[#F5F7FA] hover:text-[#F5C76A] transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-[#F5F7FA] hover:text-[#F5C76A] transition-colors"
              >
                Contact
              </a>
              <button className="bg-[#F5C76A] text-[#050814] px-6 py-2 rounded-lg font-semibold hover:brightness-110 transition-all hover:shadow-lg hover:shadow-[#F5C76A]/30">
                Submit Entry
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0C1020] border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#awards"
                className="block text-[#F5F7FA] hover:text-[#F5C76A] py-2"
              >
                Awards
              </a>
              <a
                href="#categories"
                className="block text-[#F5F7FA] hover:text-[#F5C76A] py-2"
              >
                Categories
              </a>
              <a
                href="#judges"
                className="block text-[#F5F7FA] hover:text-[#F5C76A] py-2"
              >
                Judges
              </a>
              <a
                href="#winners"
                className="block text-[#F5F7FA] hover:text-[#F5C76A] py-2"
              >
                Past Winners
              </a>
              <a
                href="#about"
                className="block text-[#F5F7FA] hover:text-[#F5C76A] py-2"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-[#F5F7FA] hover:text-[#F5C76A] py-2"
              >
                Contact
              </a>
              <button className="w-full bg-[#F5C76A] text-[#050814] px-6 py-2 rounded-lg font-semibold mt-2">
                Submit Entry
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#38E0FF] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#F5C76A] rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#38E0FF] rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#F5C76A] rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#F5C76A]/10 border border-[#F5C76A]/30 rounded-full text-[#F5C76A] text-sm font-semibold">
                2026 Awards Season
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Celebrating Excellence in{" "}
                <span className="text-[#F5C76A]">Aviation</span>
              </h1>
              <p className="text-xl text-[#9CA3AF] leading-relaxed">
                Recognizing outstanding achievements, innovation, and leadership
                that shape the future of African aviation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-[#F5C76A] text-[#050814] px-8 py-4 rounded-lg font-semibold text-lg hover:brightness-110 transition-all hover:shadow-lg hover:shadow-[#F5C76A]/30 flex items-center justify-center gap-2">
                  Enter Now <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-[#38E0FF] text-[#38E0FF] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#38E0FF]/10 transition-all flex items-center justify-center gap-2">
                  View 2026 Categories
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <svg viewBox="0 0 400 400" className="w-full h-auto">
                  <defs>
                    <linearGradient
                      id="planeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#F5C76A" />
                      <stop offset="100%" stopColor="#38E0FF" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Globe */}
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    fill="none"
                    stroke="url(#planeGradient)"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="100"
                    fill="none"
                    stroke="url(#planeGradient)"
                    strokeWidth="1"
                    opacity="0.2"
                  />

                  {/* Flight paths */}
                  <path
                    d="M 80 200 Q 200 120 320 200"
                    fill="none"
                    stroke="#38E0FF"
                    strokeWidth="2"
                    opacity="0.4"
                    strokeDasharray="5,5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="10"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path
                    d="M 200 80 Q 280 200 200 320"
                    fill="none"
                    stroke="#F5C76A"
                    strokeWidth="2"
                    opacity="0.4"
                    strokeDasharray="5,5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="10"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Plane */}
                  <g filter="url(#glow)">
                    <path
                      d="M 200 160 L 220 180 L 240 170 L 235 185 L 250 190 L 235 195 L 240 210 L 220 200 L 200 220 L 195 200 L 180 210 L 175 195 L 160 190 L 175 185 L 170 170 L 190 180 Z"
                      fill="url(#planeGradient)"
                      opacity="0.9"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 200 190"
                        to="360 200 190"
                        dur="20s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>

                  {/* Stars */}
                  <circle cx="100" cy="100" r="2" fill="#F5C76A">
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="300" cy="120" r="2" fill="#38E0FF">
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="320" cy="280" r="2" fill="#F5C76A">
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5C76A]/20 to-[#38E0FF]/20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-[#0C1020] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F5C76A] mb-2">12</div>
              <div className="text-sm text-[#9CA3AF] uppercase tracking-wide">
                Years Running
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#38E0FF] mb-2">34</div>
              <div className="text-sm text-[#9CA3AF] uppercase tracking-wide">
                Countries Represented
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F5C76A] mb-2">280+</div>
              <div className="text-sm text-[#9CA3AF] uppercase tracking-wide">
                Entries Last Year
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#38E0FF] mb-2">18</div>
              <div className="text-sm text-[#9CA3AF] uppercase tracking-wide">
                Award Categories
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Award Categories
            </h2>
            <p className="text-xl text-[#9CA3AF]">
              Recognizing excellence across all facets of aviation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`group bg-[#0C1020] border ${
                  cat.flagship ? "border-[#F5C76A]" : "border-white/10"
                } rounded-xl p-6 hover:border-[#38E0FF] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#38E0FF]/20 cursor-pointer relative overflow-hidden`}
              >
                {cat.flagship && (
                  <div className="absolute top-0 right-0 bg-[#F5C76A] text-[#050814] px-3 py-1 text-xs font-bold rounded-bl-lg">
                    FLAGSHIP
                  </div>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      cat.flagship ? "bg-[#F5C76A]/20" : "bg-[#38E0FF]/20"
                    } group-hover:scale-110 transition-transform`}
                  >
                    <cat.icon
                      className={`w-6 h-6 ${
                        cat.flagship ? "text-[#F5C76A]" : "text-[#38E0FF]"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                    <p className="text-[#9CA3AF] text-sm">{cat.description}</p>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-[#38E0FF] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  View details <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#0C1020]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Dates</h2>
            <p className="text-xl text-[#9CA3AF]">
              Mark your calendar for the 2026 awards season
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#F5C76A] to-[#38E0FF] opacity-30"></div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-8 ${
                    idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      idx % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="inline-block bg-[#0C1020] border border-white/10 rounded-lg p-6 hover:border-[#F5C76A] transition-all">
                      <div className="text-[#F5C76A] font-semibold mb-2">
                        {item.date}
                      </div>
                      <div className="text-xl font-bold">{item.event}</div>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-[#F5C76A] border-4 border-[#050814]"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section id="judges" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Distinguished Judges
            </h2>
            <p className="text-xl text-[#9CA3AF]">
              Industry leaders ensuring fair and credible evaluation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {judges.map((judge, idx) => (
              <div
                key={idx}
                className="bg-[#0C1020] border border-white/10 rounded-xl p-6 hover:border-[#38E0FF] transition-all hover:scale-105 text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#F5C76A] to-[#38E0FF] p-1">
                  <div className="w-full h-full rounded-full bg-[#0C1020] flex items-center justify-center">
                    <Users className="w-10 h-10 text-[#F5C76A]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{judge.name}</h3>
                <p className="text-sm text-[#9CA3AF] mb-1">{judge.role}</p>
                <p className="text-xs text-[#38E0FF]">{judge.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Winners Section */}
      <section id="winners" className="py-24 bg-[#0C1020]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Past Winners
            </h2>
            <p className="text-xl text-[#9CA3AF]">
              Celebrating our champions of excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pastWinners.map((winner, idx) => (
              <div
                key={idx}
                className="bg-[#0C1020] border border-white/10 rounded-xl p-6 hover:border-[#F5C76A] transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-[#F5C76A]" />
                  <div className="text-sm text-[#9CA3AF]">{winner.year}</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{winner.airline}</h3>
                <p className="text-[#38E0FF] font-semibold mb-4">
                  {winner.award}
                </p>
                <p className="text-sm text-[#9CA3AF] italic">
                  &quot;{winner.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-linear-to-r from-[#F5C76A]/10 to-[#38E0FF]/10 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-12 h-12 text-[#F5C76A] mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-[#9CA3AF] mb-6">
            Get updates about submission deadlines, announcements, and exclusive
            aviation insights
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-[#0C1020] border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#38E0FF] text-white"
            />
            <button className="bg-[#F5C76A] text-[#050814] px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0C1020] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="w-6 h-6 text-[#F5C76A] transform -rotate-45" />
                <span className="text-xl font-bold">AAEA</span>
              </div>
              <p className="text-sm text-[#9CA3AF]">
                Celebrating excellence in African aviation since 2014
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm text-[#9CA3AF]">
                <a
                  href="#"
                  className="block hover:text-[#F5C76A] transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block hover:text-[#F5C76A] transition-colors"
                >
                  Awards
                </a>
                <a
                  href="#"
                  className="block hover:text-[#F5C76A] transition-colors"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="block hover:text-[#F5C76A] transition-colors"
                >
                  Submit Entry
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3">Resources</h4>
              <div className="space-y-2 text-sm text-[#9CA3AF]">
                <a
                  href="#"
                  className="block hover:text-[#F5C76A] transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="block hover:text-[#F5C76A] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block hover:text-[#F5C76A] transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="block hover:text-[#F5C76A] transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3">Connect</h4>
              <p className="text-sm text-[#9CA3AF] mb-3">info@aaea.awards</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F5C76A]/20 hover:text-[#F5C76A] transition-all"
                >
                  <span className="text-xl">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#38E0FF]/20 hover:text-[#38E0FF] transition-all"
                >
                  <span className="text-xl">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F5C76A]/20 hover:text-[#F5C76A] transition-all"
                >
                  <span className="text-xl">f</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-[#9CA3AF]">
            <p>© 2026 Abuja Aviation Excellence Awards. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
