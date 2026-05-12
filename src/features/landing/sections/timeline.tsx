import { SectionHeading } from "../customs/section-heading";
// import Image from "next/image";

import {
  Clock
} from "lucide-react";
export const Timeline = () => {
  return (
    <section className="py-24 bg-[#050814] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading center title="The Process" subtitle="Key dates for the 2025 AAEA season." />
          
          <div className="relative mt-16">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#38E0FF]/30 to-transparent hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { date: "June 1, 2025", title: "Submissions Open", desc: "Portal opens for all categories." },
                { date: "August 30, 2025", title: "Entry Deadline", desc: "Final day to submit documentation." },
                { date: "October 15, 2025", title: "Shortlist Announced", desc: "Finalists revealed online." },
                { date: "November 24, 2025", title: "Gala Ceremony", desc: "Live event at Abuja International Conference Center." },
              ].map((item, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 text-center ${idx % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#0C1020] border-2 border-[#38E0FF] flex items-center justify-center shadow-[0_0_15px_rgba(56,224,255,0.3)]">
                    <Clock size={20} className="text-[#38E0FF]" />
                  </div>
                  <div className={`flex-1 text-center ${idx % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-[#F5C76A] font-bold text-lg">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};
