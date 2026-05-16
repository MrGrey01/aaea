import Image from "next/image";
import { SiteConfig } from "@/lib/db/schema/site-config";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Logo } from "@/components/shared/logo";

interface Props {
  config: SiteConfig;
}

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerNavigation: FooterSection[] = [
  {
    title: "Awards",
    links: [
      { label: "Categories", href: "/categories" },
      { label: "Enter Now", href: "/enter" },
      { label: "Judges", href: "/judges" },
      { label: "Winners Gallery", href: "/winners" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Event",
    links: [
      { label: "Ceremony Details", href: "/event" },
      { label: "Sponsorship", href: "/sponsorship" },
      { label: "Press Center", href: "/press" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  // {
  //   title: "Legal",
  //   links: [
  //     { label: "Privacy Policy", href: "/privacy-policy" },
  //     { label: "Terms of Entry", href: "/terms" },
  //   ],
  // },
];

export const FooterOne = ({ config }: Props) => {
  const socials = [
    {
      icon: FaInstagram,
      href: config.instagram,
      label: "Instagram",
    },
    {
      icon: FaFacebookF,
      href: config.facebook,
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      href: config.twitter,
      label: "Twitter",
    },
    {
      icon: FaYoutube,
      href: config.youtube,
      label: "YouTube",
    },
  ].filter((social) => social.href);

  return (
    <footer className="border-t border-white/5 bg-[#02040a] text-sm text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block">
            <Image
              src="/logos/logo.png"
              alt="AAEA Logo"
              width={110}
              height={110}
              priority
            />
          </Link>

          <p className="mt-5 max-w-md leading-relaxed">{config.tagline}</p>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-[#F5C76A] hover:text-[#F5C76A]"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation Sections */}
        {footerNavigation.map((section) => (
          <div key={section.title}>
            <h5 className="mb-5 text-sm font-semibold uppercase tracking-wide text-white">
              {section.title}
            </h5>

            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#F5C76A]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-[#F5C76A]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h5 className="mb-5 text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h5>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 text-[#F5C76A]" size={16} />
              <p>
                Abuja International Conference Centre,
                <br />
                Abuja, Nigeria
              </p>
            </div>

            <a
              href={`mailto:${config.email}`}
              className="flex items-center gap-3 transition-colors hover:text-[#F5C76A]"
            >
              <Mail size={16} className="text-[#F5C76A]" />
              {config.email}
            </a>

            <a
              href="tel:+23480028428466"
              className="flex items-center gap-3 transition-colors hover:text-[#F5C76A]"
            >
              <Phone size={16} className="text-[#F5C76A]" />
              {config.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Abuja Aviation Excellence Awards. All
            rights reserved.
          </p>

          <p>Designed for celebrating aviation excellence across Africa.</p>
        </div>
      </div>
    </footer>
  );
};
