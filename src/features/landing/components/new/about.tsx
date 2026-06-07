import { UserIcon } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section className="pt-5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              fill
              alt="VIP Lounge"
              src="/images/stage.png"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold font-heading uppercase">
              About AAEA
            </h3>

            <p className="mt-3 text-zinc-300 leading-relaxed">
              The Abuja Aviation Excellence Awards is Nigeria&apos;s leading
              platform celebrating outstanding achievements within the aviation
              ecosystem.
            </p>

            <p className="mt-2 text-zinc-400 leading-relaxed">
              From airlines and airports to regulators, innovators and aviation
              professionals, AAEA highlights the individuals and organizations
              driving the future of aviation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatCard value="10+" label="Years Of Excellence" />
            <StatCard value="5k+" label="Attendees & Members" />
            <StatCard value="100+" label="Awards Presented" />
            <StatCard value="50+" label="Partners & Sponsors" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-gold-500/15 bg-brand-700/40 p-3">
      <div className="flex items-center text-gold-600">
        <UserIcon size={40} />
      </div>
      <div className="uppercase">
        <div className="text-xl font-bold text-gold-500">{value}</div>
        <div className="text-sm font-bold text-zinc-400">{label}</div>
      </div>
    </div>
  );
}
