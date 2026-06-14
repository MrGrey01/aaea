"use client";
import { SponsorshipPackages } from "../components/new/sponsorship-packages";
import { EventTimeline } from "../components/new/event-timeline";
import { FeaturedSpeakers } from "../components/new/featured-speakers";

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="grid lg:grid-cols-12 gap-4 mx-auto">
        <div className="lg:col-span-7">
          <FeaturedSpeakers />
        </div>
        <div className="lg:col-span-5 flex gap-2">
          {/* <EventTimeline /> */}
          <SponsorshipPackages />
        </div>
      </div>
    </section>
  );
}
