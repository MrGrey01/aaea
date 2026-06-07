import { cn } from "@/lib/utils";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface PartnersLogoProps {
  className?: string;
}
export const PartnersLogo = ({ className }: PartnersLogoProps) => {
  const partners = [
    {
      name: "FAAN",
      logo: "/partners/faan.png",
    },
    {
      name: "MET",
      logo: "/partners/met.png",
    },
    {
      name: "NCAA",
      logo: "/partners/ncaa.png",
    },
    {
      name: "AAL",
      logo: "/partners/afriautolink.png",
    },
    {
      name: "NAHCO",
      logo: "/partners/nahco.png",
    },
    {
      name: "NSIB",
      logo: "/partners/nsib.png",
    },
    {
      name: "AON",
      logo: "/partners/aon2.png",
    },
    {
      name: "NAMA",
      logo: "/partners/nama.png",
    },
  ];

  return (
    <div className={cn("mx-auto", className)}>
      <div className="relative flex items-center">
        {/* Slider */}
        <div className="flex-1 p-2 w-full">
          <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-partners gap-16 w-max">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="relative h-16 w-40 shrink-0">
                  <Image
                    fill
                    src={partner.logo}
                    alt={partner.name}
                    className=" object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
