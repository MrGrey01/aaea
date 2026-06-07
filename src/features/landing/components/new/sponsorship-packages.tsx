import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Silver Sponsor",
    amount: "₦2.5M",
  },
  {
    name: "Gold Sponsor",
    amount: "₦5M",
    featured: true,
  },
  {
    name: "Platinum Sponsor",
    amount: "₦10M",
  },
];

export function SponsorshipPackages() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="text-[#D4A24C] uppercase tracking-widest text-sm">
            Sponsorship Packages
          </span>

          <h2 className="text-5xl font-bold mt-4">Partner With AAEA</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`
                rounded-3xl
                p-8
                border
                ${pkg.featured ? "border-[#D4A24C]" : "border-[#D4A24C]/15"}
                bg-[#08101F]
              `}
            >
              {pkg.featured && (
                <div className="mb-6 inline-flex rounded-full bg-[#D4A24C] px-4 py-2 text-black text-sm font-medium">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">{pkg.name}</h3>

              <div className="mt-6 text-5xl font-bold text-[#D4A24C]">
                {pkg.amount}
              </div>

              <ul className="mt-8 space-y-4 text-zinc-400">
                <li>✓ Brand Visibility</li>
                <li>✓ VIP Access</li>
                <li>✓ Speaking Opportunities</li>
                <li>✓ Networking Access</li>
              </ul>

              <Button className="w-full mt-8 bg-[#D4A24C] text-black hover:bg-[#e0b869]">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
