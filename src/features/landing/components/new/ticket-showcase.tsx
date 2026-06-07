import Image from "next/image";
import { Button } from "@/components/ui/button";

const tickets = [
  {
    name: "Individual",
    price: "₦150,000",
  },
  {
    name: "Silver Table",
    price: "₦1.5M",
  },
  {
    name: "Gold Table",
    price: "₦3M",
  },
  {
    name: "Platinum Table",
    price: "₦5M",
  },
];

export function TicketShowcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[650px] rounded-3xl overflow-hidden border border-[#D4A24C]/20">
            <Image
              fill
              alt="AAEA Ticket"
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute bottom-8 left-8">
              <p className="text-[#D4A24C] uppercase tracking-widest">
                Official Ticket
              </p>

              <h3 className="text-4xl font-bold mt-3">
                Abuja Aviation
                <br />
                Excellence Awards
              </h3>
            </div>
          </div>

          <div>
            <span className="text-[#D4A24C] uppercase tracking-widest text-sm">
              Tickets
            </span>

            <h2 className="mt-4 text-5xl font-bold">Choose Your Experience</h2>

            <div className="mt-10 space-y-5">
              {tickets.map((ticket) => (
                <div
                  key={ticket.name}
                  className="
                  flex
                  justify-between
                  items-center
                  rounded-2xl
                  border
                  border-[#D4A24C]/15
                  bg-[#08101F]
                  p-6
                "
                >
                  <span>{ticket.name}</span>

                  <span className="font-bold text-[#D4A24C]">
                    {ticket.price}
                  </span>
                </div>
              ))}
            </div>

            <Button size="lg" className="mt-8 bg-[#D4A24C] text-black">
              Purchase Tickets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
