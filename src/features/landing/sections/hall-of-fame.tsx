// import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { CardOne } from "@/components/shared/card-one";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
export const HallOfFame = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading
            title="Hall of Fame"
            subtitle="Celebrating past winners."
          />
          <Button variant="ghost" className="hidden md:flex">
            View Archive <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              year: "2024",
              winner: "FlyAir Global",
              award: "Airline of the Year",
              quote: "A testament to our team's resilience.",
            },
            {
              year: "2023",
              winner: "EcoSky",
              award: "Sustainability Champion",
              quote: "Leading the way to a greener future.",
            },
            {
              year: "2022",
              winner: "SafeJet Systems",
              award: "Safety Innovation",
              quote: "Safety is our only priority.",
            },
          ].map((winner, idx) => (
            <CardOne key={idx} className="relative">
              <div className="absolute top-4 right-4 text-[#F5C76A] font-bold text-4xl opacity-10">
                {winner.year}
              </div>
              <div className="mb-4">
                <Star
                  className="text-[#F5C76A] mb-2"
                  fill="currentColor"
                  size={20}
                />
                <h4 className="text-xl font-bold text-white">
                  {winner.winner}
                </h4>
                <p className="text-sm text-[#38E0FF] uppercase tracking-wider">
                  {winner.award}
                </p>
              </div>
              <p className="text-gray-400 italic border-l-2 border-white/20 pl-4">
                &quot;{winner.quote}&quot;
              </p>
            </CardOne>
          ))}
        </div>
      </div>
    </section>
  );
};
