import { Button } from "@/components/ui/button";
import Image from "next/image";

const speakers = [
  {
    name: "Capt. John Smith",
    role: "CEO, Airline Group",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
  },
  {
    name: "Mrs. Ifeoma Okonkwo",
    role: "Director General",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Mr. Allen Coker",
    role: "CEO, Air Peace",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Mr. Allen Coker 2u",
    role: "CEO, Air Peace",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];

export function FeaturedSpeakers() {
  return (
    <section className="">
      <div className="container mx-auto px-6">
        <div className="flex">
          <span className="text-gold-500 text-sm font-bold uppercase tracking-widest">
            Featured Speakers
          </span>
        </div>

        <div className="grid lg:grid-cols-4 gap-3 mt-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="overflow-hidden rounded-3xl border border-gold-500/15 bg-brand-800"
            >
              <div className="relative h-[250px]">
                <Image
                  fill
                  alt={speaker.name}
                  src={speaker.image}
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg">{speaker.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-center mt-3">
          <Button
            size="lg"
            className="max-w-2xl w-full mt-2 bg-brand-800/40 rounded-sm text-gold-500 border border-gold-500/90 uppercase"
          >
            View All Speakers
          </Button>
        </div>
      </div>
    </section>
  );
}
