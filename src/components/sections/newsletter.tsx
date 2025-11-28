// import Image from "next/image";
import { Mail } from "lucide-react";

export const NewsLetter = () => {
  return (
    <section className="py-20 bg-linear-to-r from-[#F5C76A] to-[#E0B050] text-[#050814]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
        <p className="mb-8 font-medium opacity-80">
          Get the latest updates on submission deadlines, shortlist
          announcements, and ceremony details.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 rounded-md border-0 bg-white/90 focus:ring-2 focus:ring-[#050814] text-[#050814] placeholder:text-gray-500"
            />
          </div>
          <button className="bg-[#050814] text-white px-8 py-3 rounded-md font-bold hover:bg-black transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
