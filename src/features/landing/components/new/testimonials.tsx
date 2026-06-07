const testimonials = [
  {
    quote:
      "AAEA remains one of the most prestigious aviation events in Africa.",
    author: "Industry Executive",
  },
  {
    quote: "Exceptional networking opportunities and world-class recognition.",
    author: "Airline CEO",
  },
  {
    quote: "A benchmark for aviation excellence and innovation.",
    author: "Airport Director",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="text-[#D4A24C] uppercase tracking-widest text-sm">
            Testimonials
          </span>

          <h2 className="mt-4 text-5xl font-bold">What Industry Leaders Say</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="
              rounded-3xl
              border
              border-[#D4A24C]/15
              bg-[#08101F]
              p-8
            "
            >
              <p className="text-zinc-300 leading-relaxed">
                &quot;{item.quote}&quot;
              </p>

              <p className="mt-6 text-[#D4A24C] font-semibold">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
