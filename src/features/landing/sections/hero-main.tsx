"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  CalendarDays,
  Clock3,
  MapPin,
  Play,
} from "lucide-react";
import {
  OutlineButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/buttons";
import { StatsCard2 } from "../components/new/stats-card";
import { PartnersLogo } from "../components/partners-logos";
import { Separator } from "@/components/ui/separator";
import { WatchVideoButton } from "../components/nav/watch-view-btn";

export function HeroSection() {
  return (
    <section className="relative flex flex-col isolate min-h-screen overflow-hidden bg-brand-950 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg/hero-bg.png"
          alt="Aircraft landing"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.96)_0%,rgba(2,6,23,0.82)_38%,rgba(2,6,23,0.58)_58%,rgba(2,6,23,0.88)_100%)]" />

        {/* Bottom glow */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-brand-950 via-brand-950/80 to-transparent" />

        {/* Radial light */}
        <div className="absolute left-1/2 top-[42%] h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gold-500/40" />

      <div className="container relative z-10 mx-auto xflex xmin-h-screen flex-1 max-w-7xl items-center px-6 pt-28 pb-16 lg:px-8">
        <div className="grid w-full gap-14 lg:grid-cols-[1.5fr_0.72fr] lg:items-end">
          {/* LEFT CONTENT */}
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div className="mb-4">
              {/* <div className="h-px w-14 bg-gold-500" /> */}
              <p className="text-center md:text-left text-sm font-bold uppercase tracking-[0.28em] text-gold-400">
                Recognizing Excellence. <br />
                Elevating Aviation.
              </p>
            </div>

            {/* Heading */}
            <div className="space-y-1 text-center md:text-left">
              <h1 className="font-heading text-[5.3rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-[10.7rem]">
                AAEA
              </h1>

              <div className="space-y-0">
                <h2 className="font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white md:text-[3.7rem]">
                  Abuja Aviation
                </h2>

                <h2 className="font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-gold-500 md:text-[3.7rem]">
                  Excellence Awards
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-center md:text-left mt-4 max-w-xl text-base leading-6 text-white/72 md:text-lg">
              Celebrating innovation, excellence, and leadership in the aviation
              industry. Join us for an unforgettable evening of recognition and
              networking.
            </p>

            {/* CTA */}
            <div className="mt-6 flex items-center gap-2">
              <PrimaryButton className="text-sm">
                Reserve Seat{" "}
                <ArrowRightIcon
                  className="h-3 md:h-5 w-3 md:w-5"
                  strokeWidth={2}
                />
              </PrimaryButton>
              <OutlineButton className="hidden md:flex text-sm">
                Nominate Candidate{" "}
                <ArrowRightIcon
                  className="h-3 md:h-5 w-3 md:w-5"
                  strokeWidth={2}
                />
              </OutlineButton>
              <WatchVideoButton
                videoId="TUuL8mpOlOE?si=kPKQtoAd4F8NLSrb"
                title="Watch Trailer"
              />
            </div>

            <div className="mt-10 flex flex-wrap gap-3 border-t border-gold-500/10 pt-6">
              <InfoCard
                icon={<CalendarDays className="w-5 h-5" />}
                title="23rd May, 2026"
                subtitle="Saturday"
              />

              <Separator orientation="vertical" className="bg-gold-500/40" />

              <InfoCard
                icon={<Clock3 className="w-5 h-5" />}
                title="6:00 PM Prompt"
                subtitle="Red Carpet: 5:30 PM"
              />
              <Separator
                orientation="vertical"
                className="bg-gold-500/40 hidden md:block"
              />
              <InfoCard
                icon={<MapPin className="w-5 h-5" />}
                title="Abuja Continental"
                subtitle="Abuja, Nigeria"
              />
              <Separator orientation="vertical" className="bg-gold-500/40" />
              <InfoCard
                className=""
                icon={<MapPin className="w-5 h-5" />}
                title="Dress Code"
                subtitle="Black Tie"
              />
            </div>
          </div>

          {/* RIGHT INFO CARD */}
          <div className="flex justify-center md:justify-end">
            <StatsCard2 />
          </div>
        </div>
      </div>
      <div className="w-full mb-2 z-100">
        <Separator className="bg-gold-500/30 max-w-[80%] mx-auto opacity-30" />
        <PartnersLogo className="py-3" />
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  subtitle,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 uppercase", className)}>
      {/* icon */}
      <div className="text-gold-500">{icon}</div>

      <div className="text-xs">
        <p className="">{title}</p>
        {subtitle && <p className="text-xs text-white/50">{subtitle}</p>}
      </div>
    </div>
  );
}
