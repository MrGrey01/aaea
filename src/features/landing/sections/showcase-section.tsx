"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRightIcon,
  Star,
} from "lucide-react";
import { TitleSeparator } from "@/components/shared/custom-separator";

const galleryImages = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/gallery-5.png",
  "/images/gallery-6.png",
];

const testimonials = [
  {
    quote:
      "The Abuja Aviation Excellence Awards is the premier event that truly celebrates excellence and innovation in our industry. An inspiring experience every year.",
    author: "Capt. Roland Iyayi",
    role: "Aviation Executive",
  },
  {
    quote:
      "This awards ceremony represents the pinnacle of achievement in African aviation. Being recognized here is an honor that motivates us to reach even greater heights.",
    author: "Dr. Amina Bello",
    role: "Airline CEO",
  },
  {
    quote:
      "The networking opportunities and recognition at this event have been invaluable for our organization's growth and visibility in the aviation sector.",
    author: "Engr. Tunde Okonkwo",
    role: "Airport Director",
  },
];

const faqItems = [
  "How can I nominate a candidate or organization?",
  "How can I purchase tickets?",
  "Are sponsorship packages customizable?",
  "What is the dress code for the event?",
];

export function ShowcaseSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="w-full bg-background/40 py-12 px-6">
      <div className="max-w-screen mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Gallery Highlights Column */}
          <div className="flex flex-col">
            <div className="border-t border-gold-500/40 pt-4">
              <h3 className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground mb-5 uppercase">
                Gallery Highlights
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-4/3 rounded-md overflow-hidden border border-gold-500/30 group cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(200,155,60,0.3)]" />
                </div>
              ))}
            </div>
            <div className="relative">
              <TitleSeparator
                className="absolute inset-0 mx-auto mt-px w-24 shadow-[0_0_8px_rgba(255,215,0,0.4)]"
                variant="center"
              />
              <TitleSeparator
                className="absolute bottom-0 right-0 mx-auto mt-px w-32 shadow-[0_0_8px_rgba(255,215,0,0.2)]"
                variant="center"
              />
              <button className="w-full py-3 border border-gold-500/50 rounded-md text-gold-500 text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-gold-500 hover:text-background transition-all duration-300">
                View Full Gallery
              </button>
            </div>
          </div>

          {/* Testimonials Column */}
          <div className="relative flex flex-col">
            <div className="border-t border-gold-500/40 pt-4">
              <h3 className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground mb-5 uppercase">
                What People Say
              </h3>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="h-full mb-5 bg-navy-light border border-gold-500/20 rounded-lg p-6 flex-1 relative flex flex-col items-center">
                <div className="absolute top-0 left-0 text-gold-500 text-5xl opacity-30 font-serif leading-none p-3">
                  &quot;
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed mb-6 text-center px-2">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="text-center">
                  <p className="text-gold-500 font-semibold text-sm">
                    — {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>

                <div className="flex gap-2 mt-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-gold-500"
                          : "bg-gold-500/30 hover:bg-gold-500/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 mx-auto w-full flex items-center justify-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-gold-500/50 flex items-center justify-center text-gold-500 hover:bg-gold-500/10 hover:shadow-[0_0_15px_rgba(200,155,60,0.3)] transition-all duration-300 backdrop-blur-xl"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <TitleSeparator
                  className="w-24 mt-2 shadow-[0_0_8px_rgba(255,215,0,0.2)]"
                  variant="center"
                />

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-gold-500/50 flex items-center justify-center text-gold-500 bg-gold-500/10 hover:bg-gold-500/20 hover:shadow-[0_0_15px_rgba(200,155,60,0.3)] transition-all duration-300 backdrop-blur-xl"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Column */}
          <div className="flex flex-col">
            <div className="border-t border-gold-500/40 pt-4">
              <h3 className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground mb-5 uppercase">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              {faqItems.map((question, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 py-3 px-4 bg-navy-light border border-gold-500/20 rounded-md hover:border-gold-500/40 hover:bg-gold-500/5 transition-all duration-300 group text-left"
                >
                  <Star
                    className="w-3.5 h-3.5 text-gold-500 shrink-0"
                    fill="currentColor"
                  />
                  <span className="text-foreground/90 text-xs flex-1">
                    {question}
                  </span>
                  <ChevronRightIcon className="w-4 h-4 text-gold-500/70 group-hover:text-gold-500 transition-colors" />
                </button>
              ))}
            </div>

            <button className="w-full py-3 border border-gold-500/50 rounded-md text-gold-500 text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-gold-500 hover:text-background transition-all duration-300 mt-auto">
              View All FAQs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
