import { TitleSeparator } from "@/components/shared/custom-separator";
import {
  Plane,
  Building2,
  User,
  Shield,
  Lightbulb,
  Package,
  Trophy,
  Star,
} from "lucide-react";

const categories = [
  {
    icon: Plane,
    title: "Airline Of The Year",
  },
  {
    icon: Building2,
    title: "Airport Of The Year",
  },
  {
    icon: User,
    title: "Pilot Of The Year",
  },
  {
    icon: Lightbulb,
    title: "Innovation Award",
  },
  {
    icon: Shield,
    title: "Safety Excellence",
  },
  {
    icon: Package,
    title: "Cargo Excellence",
  },
  {
    icon: Trophy,
    title: "Young Aviator",
  },
  {
    icon: Star,
    title: "Lifetime Achievement",
  },
];

export function AwardCategories() {
  return (
    <section className="pt-4 pb-5">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mt-2 text-center">
          <TitleSeparator
            className="w-24 shadow-[0_0_8px_rgba(255,215,0,0.2)]"
            variant="left"
          />
          <span className="text-gold-500 uppercase text-sm tracking-widest">
            Award Categories
          </span>

          <TitleSeparator
            className="w-24 shadow-[0_0_8px_rgba(255,215,0,0.2)]"
            variant="right"
          />
          {/* <h2 className="mt-4 text-5xl font-bold">
            Celebrating Industry Excellence
          </h2> */}
        </div>

        <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-3 mt-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-gold-500/15 bg-brand-700/40 px-2 py-3 hover:border-gold-500/50 transition flex flex-col items-center text-center"
              >
                <Icon className="w-10 h-10 text-gold-500" strokeWidth={2} />

                <h3 className="mt-3 text-zinc-400 text-sm font-semibold font-heading leading-tight uppercase">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="flex items-center max-w-3xl mx-auto justify-center mt-4">
          <TitleSeparator
            className="w-12 shadow-[0_0_8px_rgba(255,215,0,0.2)]"
            variant="left"
          />
          <button className="flex bg-brand-700/30 border-x-2 border-b-2 border-gold-500/50 text-gold-500 hover:bg-gold-600 py-2 px-8 rounded-lg font-semibold transition  backdrop-blur-2xl">
            View All Awards
          </button>
          <TitleSeparator
            className="w-12 shadow-[0_0_8px_rgba(255,215,0,0.2)]"
            variant="right"
          />
        </div>
      </div>
    </section>
  );
}
