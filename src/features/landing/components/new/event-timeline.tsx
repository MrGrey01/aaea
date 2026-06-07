const timeline = [
  "Registration & Cocktail",
  "Welcome Reception",
  "Opening Ceremony",
  "Awards Presentation",
  "Gala Dinner",
  "Networking Session",
];

export function EventTimeline() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="text-[#D4A24C] uppercase tracking-widest text-sm">
            Event Timeline
          </span>

          <h2 className="mt-4 text-5xl font-bold">Evening Schedule</h2>
        </div>

        <div className="max-w-3xl mx-auto mt-20">
          {timeline.map((item, index) => (
            <div key={item} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#D4A24C]" />

                {index !== timeline.length - 1 && (
                  <div className="w-px h-24 bg-[#D4A24C]/30" />
                )}
              </div>

              <div className="pb-12">
                <div className="text-[#D4A24C] text-sm">{4 + index}:00 PM</div>

                <h3 className="text-xl font-semibold mt-1">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
