import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div
          className="
          rounded-[40px]
          border
          border-[#D4A24C]/30
          bg-gradient-to-r
          from-[#08101F]
          via-[#0d1628]
          to-[#08101F]
          p-16
          text-center
        "
        >
          <h2 className="text-5xl font-bold max-w-4xl mx-auto">
            Ready To Join Nigeria&apos;s Most Prestigious Aviation Awards Event?
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button size="lg" className="bg-[#D4A24C] text-black">
              Reserve Seat
            </Button>

            <Button size="lg" variant="outline" className="border-[#D4A24C]">
              Become Sponsor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
