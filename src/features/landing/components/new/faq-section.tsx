"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <span className="text-[#D4A24C] uppercase tracking-widest text-sm">
            FAQs
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-16">
          <AccordionItem value="1">
            <AccordionTrigger>How do I purchase tickets?</AccordionTrigger>

            <AccordionContent>
              Tickets can be purchased directly through the official AAEA
              platform.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="2">
            <AccordionTrigger>How do I nominate someone?</AccordionTrigger>

            <AccordionContent>
              Nominations are submitted online through the nomination portal.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="3">
            <AccordionTrigger>How can my company sponsor?</AccordionTrigger>

            <AccordionContent>
              Sponsorship opportunities are available through our partnership
              team.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
