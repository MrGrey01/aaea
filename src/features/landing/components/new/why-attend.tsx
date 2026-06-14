import { TitleSeparator } from "@/components/shared/custom-separator";
import { Users, Trophy, Handshake, TrendingUp } from "lucide-react";
import Image from "next/image";

const whyItems = [
  {
    icon: Users,
    title: "Network",
    image: "/icons/network.svg",
    text: "Connect with aviation experts, leaders and professionals.",
  },
  {
    icon: Trophy,
    title: "Recognition",
    image: "/icons/recognition.svg",
    text: "Celebrate industry achievements and gain nobility among peers.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    image: "/icons/partnership.svg",
    text: "Build valuable strategic relationships and explore new opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Insights",
    image: "/icons/insights.svg",
    text: "Discover industry trends and opportunities for the future of aviation.",
  },
];

const eventHighlights = [
  {
    title: "Awards Presentation",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
  },
  {
    title: "Networking Sessions",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    title: "Gala Dinner",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  },
  {
    title: "Industry Exhibition",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
];

export const WhyAttend = () => {
  return (
    <section className="container mx-auto px-8 py-12">
      <TitleSeparator
        className="max-w-4/5 mx-auto mb-4 shadow-[0_0_8px_rgba(255,215,0,0.2)]"
        variant="center"
      />
      <div className="grid md:grid-cols-2 gap-6">
        <Why />
        <EventHighlights />
      </div>
    </section>
  );
};

export function Why() {
  return (
    <div className="">
      <div className="text-center md:text-left">
        <h2 className="uppercase font-heading font-bold">
          Why Attend The AAEA?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
        {whyItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="relative flex flex-col items-center text-center rounded-xl bg-brand-700/50 backdrop-blur-lg border border-gold-500/15 p-4"
            >
              {/* <Icon className="w-10 h-10 text-gold-500" /> */}
              <Image src={item.image} alt="" width={57} height={57} />

              <h3 className="mt-5 font-semibold text-gold-500 uppercase">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-400 text-balance line-clamp-4">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function EventHighlights() {
  return (
    <div className="">
      <div className="text-center md:text-left">
        <h2 className="font-bold uppercase">Event Highlights</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-3 mt-4">
        {eventHighlights.map((item) => (
          <div
            key={item.title}
            className="relative h-35 overflow-hidden rounded-xl border-2 border-gold-500/30 hover:border-gold-500/60 hover:shadow-[0_0_8px_rgba(255,215,0,0.2)] transition"
          >
            <Image
              fill
              alt={item.title}
              src={item.image}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/70" />

            <div className="absolute bottom-4 left-4 max-w-[30%]">
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
