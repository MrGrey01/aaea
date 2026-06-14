import { TitleSeparator } from "@/components/shared/custom-separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheckBigIcon } from "lucide-react";

const packages = [
  {
    name: "Silver Sponsor",
    amount: "₦10M",
  },
  {
    name: "Gold Sponsor",
    amount: "₦50M",
    featured: true,
  },
  {
    name: "Platinum Sponsor",
    amount: "₦100M",
  },
];

export function SponsorshipPackages() {
  return (
    <div className="mx-auto">
      <div className="text-center">
        <span className="text-gold-500 uppercase tracking-widest text-sm">
          Sponsorship Packages
        </span>
      </div>

      <div className="border-b border-x border-gold-500/30 bg-brand-800/60 rounded-lg mt-8">
        <div className="grid lg:grid-cols-3 gap-2">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "flex flex-col gap-3 justify-between items-center rounded-xl p-4 border mb-3",
                pkg.featured
                  ? "md:scale-105 shadow-lg text-black bg-gold-500 border-gold-500/30"
                  : "border-gold-500/15 bg-brand-800",
              )}
            >
              <h3 className="text-3xl tracking-tight text-center font-bold">
                {pkg.name}
              </h3>

              {pkg.featured ? (
                <div className="flex items-center w-full mt-2 inline-flex text-[11px] font-medium uppercase tracking-tight text-center ">
                  <TitleSeparator variant="left" color="black" />
                  Most Popular
                  <TitleSeparator variant="right" color="black" />
                </div>
              ) : (
                <TitleSeparator className="mt-2" variant="center" />
              )}

              <div
                className={cn(
                  "mt-2 text-3xl font-bold",
                  pkg.featured ? "text-black" : "text-gold-500",
                )}
              >
                {pkg.amount}
              </div>

              {/* <ul className="mt-8 space-y-4 text-zinc-400">
                <li>✓ Brand Visibility</li>
                <li>✓ VIP Access</li>
                <li>✓ Speaking Opportunities</li>
                <li>✓ Networking Access</li>
              </ul> */}

              <Button
                size="lg"
                className={cn(
                  "w-full mt-2",
                  pkg.featured
                    ? "bg-transparent text-black border border-black/90"
                    : "bg-transparent text-gold-500 border border-gold-500/90",
                )}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-between px-6 py-2 bg-brand-800/50">
          <ul className="space-y-4 text-zinc-400">
            <li className="flex gap-2">
              <CircleCheckBigIcon className="text-gold-500" /> Brand Visibility
            </li>
            <li className="flex gap-2">
              <CircleCheckBigIcon className="text-gold-500" /> Complimentary
              Event Tickets
            </li>
            <li className="flex gap-2">
              <CircleCheckBigIcon className="text-gold-500" /> VIP Access
            </li>
            <li className="flex gap-2">
              <CircleCheckBigIcon className="text-gold-500" /> Networking Access
            </li>
          </ul>

          <ul className="space-y-4 text-zinc-400">
            <li className="flex gap-2">
              <CircleCheckBigIcon className="text-gold-500" /> Speaking
              Opportunities
            </li>
            <li className="flex gap-2">
              <CircleCheckBigIcon className="text-gold-500" /> Media and
              marketing Exposure
            </li>
            <Button size="lg" className="w-full mt-2 bg-gold-500 uppercase">
              Become A sponsor
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
}
