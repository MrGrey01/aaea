import { Button } from "../ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export const HeroTwo = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#050B18] via-[#050B18]/50 to-transparent z-0"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#38E0FF]/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F5C76A] text-xs font-bold uppercase tracking-widest">
            <Star size={12} fill="currentColor" /> 2025 Edition Open
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Celebrating <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F5C76A] to-[#F7E1B5]">
              Excellence
            </span>{" "}
            <br />
            in Aviation
          </h1>
          <p className="text-lg text-gray-400 max-w-lg">
            The Abuja Aviation Excellence Awards honors the innovators, leaders,
            and organizations shaping the future of African aerospace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="h-12 px-8 text-base">Enter Now</Button>
            <Button variant="secondary" className="h-12 px-8 text-base">
              View 2025 Categories
            </Button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          {/* Using a placeholder image for Aviation */}
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
            alt="Aviation Abstract"
            fill
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#050814] via-transparent to-transparent opacity-80"></div>

          {/* Floating decorative card */}
          <div className="absolute bottom-8 left-8 bg-[#050814]/90 backdrop-blur-md p-4 rounded-lg border-l-4 border-[#F5C76A] shadow-lg animate-pulse">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
              Upcoming Ceremony
            </p>
            <p className="font-bold text-white">November 24, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};
