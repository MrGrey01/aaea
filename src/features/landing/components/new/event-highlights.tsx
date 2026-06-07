import Image from "next/image";

const items = [
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

export function EventHighlights() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="text-[#D4A24C] uppercase tracking-widest text-sm">
            Event Highlights
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Experience A Premier Aviation Event
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-16">
          {items.map((item) => (
            <div
              key={item.title}
              className="
              relative
              h-[300px]
              overflow-hidden
              rounded-3xl
            "
            >
              <Image
                fill
                alt={item.title}
                src={item.image}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
