import Image from "next/image";
// import { Plane } from "lucide-react";

export const FooterOne = () => {
  return (
    <footer className="bg-[#02040a] pt-20 pb-10 border-t border-white/5 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          {/* <div className="flex items-center gap-2 text-white">
            <Plane size={20} className="text-[#F5C76A]" />
            <span className="font-bold text-lg">AAEA</span>
          </div> */}
          <Image
            src="/assets/logo.png"
            alt="AAEA Logo"
            width={100}
            height={100}
            className=""
          />
          <p>Celebrating excellence in African aviation since 2012.</p>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">Awards</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#F5C76A]">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F5C76A]">
                Enter Now
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F5C76A]">
                Judges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F5C76A]">
                Winners Gallery
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">Event</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#F5C76A]">
                Ceremony Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F5C76A]">
                Sponsorship
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F5C76A]">
                Press Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F5C76A]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">Contact</h5>
          <p className="mb-2">Abuja International Conference Center</p>
          <p className="mb-2 text-white">hello@aaea.com.ng</p>
          <p>+234 800 AVIATION</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          &copy; 2025 Abuja Aviation Excellence Awards. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Entry
          </a>
        </div>
      </div>
    </footer>
  );
};
