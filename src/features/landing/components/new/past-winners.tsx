const winners = [
  "Air Peace",
  "FAAN",
  "Dana Air",
  "Aero Contractors",
  "Ibom Air",
];

export function PastWinners() {
  return (
    <section className="py-24 border-y border-[#D4A24C]/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="text-[#D4A24C] uppercase tracking-widest text-sm">
            Past Winners
          </span>

          <h2 className="mt-4 text-5xl font-bold">Celebrating Excellence</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {winners.map((winner) => (
            <div
              key={winner}
              className="
                rounded-2xl
                border
                border-[#D4A24C]/15
                bg-[#08101F]
                p-8
                text-center
              "
            >
              <div className="text-[#D4A24C] text-3xl mb-4">🏆</div>

              <h3 className="font-semibold">{winner}</h3>

              <p className="text-zinc-500 mt-2 text-sm">Excellence Award</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
