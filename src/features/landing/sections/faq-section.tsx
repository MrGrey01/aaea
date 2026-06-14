"use client";

import { SectionBadge } from "@/components/shared/section-badge";
import { SectionTitle } from "@/components/shared/section-title";
import { useState } from "react";
import { Faq } from "@/lib/db/schema";
import { MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  faqs: Faq[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="w-full px-8 py-16 bg-brand-700/50">
      <div className="max-w-6xl w-full mx-auto">
        {/* Top border */}
        {/* <div className="border-t border-gray-200 mb-12" /> */}

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left label */}
          <div className="w-auto shrink-0 flex items-start gap-2 pt-1">
            <div className="flex flex-col">
              <SectionBadge label="FAQ" className="w-fit" />
              <div className="flex">
                <SectionTitle title="FAQs" className="text-gold-100" />
              </div>
            </div>
          </div>

          {/* FAQ rows */}
          <div className="flex-1">
            {faqs.map((faq, idx) => (
              <div key={faq.id}>
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center gap-12 py-5 text-left group"
                >
                  {/* Number */}
                  <span className="w-8 shrink-0 text-sm text-brand-400 font-normal tracking-wide">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={cn(
                      "flex-1 text-[15px] font-normal",
                      openId === faq.id ? " text-gold-500" : " text-brand-200",
                    )}
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Minus icon */}
                  <span className="shrink-0 text-gold-50 hover:text-gold-500 cursor-pointer leading-none">
                    {openId === faq.id ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>

                {/* Answer panel */}
                {openId === faq.id && (
                  <div className="pl-20 pb-6 text-[14px] text-gray-400 leading-relaxed max-w-2xl">
                    {faq.answer}
                  </div>
                )}

                {/* Divider */}
                <div className="border-t border-brand-200/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
