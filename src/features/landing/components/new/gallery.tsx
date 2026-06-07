import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865",
  "https://images.unsplash.com/photo-1552664730-d307ca884978",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
];

export function Gallery() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="text-[#D4A24C] uppercase tracking-widest text-sm">
            Gallery
          </span>

          <h2 className="mt-4 text-5xl font-bold">Moments That Inspire</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {images.map((image) => (
            <div
              key={image}
              className="relative h-[300px] overflow-hidden rounded-3xl"
            >
              <Image fill src={image} alt="" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
