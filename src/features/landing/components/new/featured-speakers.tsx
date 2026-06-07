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
    name: "Dr. Olumide Akin",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];

export function FeaturedSpeakers() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="text-[#D4A24C] text-sm uppercase tracking-widest">
            Featured Speakers
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Industry Leaders & Visionaries
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mt-16">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-[#D4A24C]/15
                bg-[#08101F]
              "
            >
              <div className="relative h-[350px]">
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
      </div>
    </section>
  );
}
