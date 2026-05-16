import { SectionHeading } from "@/components/shared/section-heading";
import Image from "next/image";
export const Judges = () => {
  return (
    <section className="py-24 bg-[#0C1020]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Distinguished Judges"
          subtitle="Evaluated by an independent panel of industry veterans."
        />

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#F5C76A] transition-colors">
                <Image
                  src={`https://images.unsplash.com/photo-${
                    i === 1
                      ? "1560250097-0b93528c311a"
                      : i === 2
                        ? "1573496359142-b8d87734a5a2"
                        : i === 3
                          ? "1580489944761-15a19d654956"
                          : "1507003211169-0a1dd7228f2d"
                  }?q=80&w=300&auto=format&fit=crop`}
                  alt="Judge"
                  fill
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h4 className="text-white font-bold text-lg">Dr. Name Surname</h4>
              <p className="text-[#38E0FF] text-sm mb-2">
                Former CEO, Aviation Corp
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-6 h-6 bg-white/10 rounded-full"></div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
