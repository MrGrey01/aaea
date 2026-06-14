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
    <section className="">
      <div className="w-full md:max-w-2xl mx-auto px-3">
        <div className="text-center">
          <span className="text-gold-500 uppercase tracking-widest text-sm">
            Event Timeline
          </span>

          <h2 className="mt-4 font-bold">Evening Schedule</h2>
        </div>

        <div className="max-w-3xl mx-auto mt-20">
          {timeline.map((item, index) => (
            <div key={item} className="flex gap-2">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gold-500" />

                {index !== timeline.length - 1 && (
                  <div className="w-px h-24 bg-gold-500/30" />
                )}
              </div>

              <div className="pb-3">
                <div className="text-gold-500 text-sm">{4 + index}:00 PM</div>

                <h3 className="text-sm font-semibold mt-1">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
