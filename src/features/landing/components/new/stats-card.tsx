import { Building2, Users, Trophy, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  className?: string;
}

const eventData = [
  {
    name: "Industry Leaders",
    numbers: "500+",
    icon: <Users />,
  },
  {
    name: "Airlines & Airports",
    numbers: "50+",
    icon: <Plane />,
  },
  {
    name: "Award Categories",
    numbers: "20+",
    icon: <Trophy />,
  },
  {
    name: "Sponsors & Partners",
    numbers: "30+",
    icon: <Building2 />,
  },
];
export function StatsCard2({ className }: StatsCardProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.55)] bg-brand-800/50 backdrop-blur-2xl",
        className,
      )}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,196,0,0.12),transparent_45%)]" />

      {/* Content */}
      <div className="relative space-y-4">
        <h3 className="text-sm md:text-lg leading-tight text-gold-500 font-semibold mb-3">
          AAEA 2026 <br />
          AT A GLANCE
        </h3>

        {eventData.map((item) => (
          <div key={item.name} className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/12 text-gold-400 ring-1 ring-gold-500/20">
              {item.icon}
            </div>
            <div>
              <p className="mb-1 text-sm font-bold font-heading uppercase text-gold-400">
                {item.numbers}
              </p>
              <p className="text-sm font-medium uppercase text-white/90">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="text-sm text-zinc-400 mb-3">Countdown To Event</p>

        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            ["01", "Days"],
            ["14", "Hrs"],
            ["35", "Min"],
            ["48", "Sec"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-black/20 p-3"
            >
              <div className="text-xl font-bold">{value}</div>

              <div className="text-xs text-zinc-500">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom reflection */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-gold-500/4 to-transparent" />
    </div>
  );
}
