import { MapPin, Phone, Mail } from "lucide-react";
import { SiteConfig } from "@/lib/db/schema/site-config";

interface ContactSectionProps {
  siteConfig: SiteConfig;
}

export const Sidebar = ({ siteConfig }: ContactSectionProps) => {
  type SocialLink = {
    key: keyof Pick<
      SiteConfig,
      "instagram" | "youtube" | "linkedin" | "facebook"
    >;
    label: string;
  };

  const socialLinks: SocialLink[] = [
    { key: "instagram", label: "Instagram" },
    { key: "youtube", label: "YouTube" },
    { key: "linkedin", label: "LinkedIn" },
    { key: "facebook", label: "Facebook" },
  ];

  return (
    <aside className="space-y-8 border-b border-border p-6 md:border-b-0 md:border-r md:p-10">
      <div>
        <p className="mb-4 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          Get in touch
        </p>
        {[
          { Icon: Mail, label: "Email", value: siteConfig.email },

          { Icon: Phone, label: "Phone", value: siteConfig.phone },
          {
            Icon: MapPin,
            label: "Studio",
            value: `${siteConfig.city}, ${siteConfig.country}`,
          },
        ].map(({ Icon, label, value }) => (
          <div key={label} className="mb-5 flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
              <Icon className="h-3.5 w-3.5 text-gold-500" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                {label}
              </p>
              <p className="text-sm">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="mb-3 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          Follow the work
        </p>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((social) => {
            const href = siteConfig?.[social.key];

            // Skip empty links
            if (!href) return null;

            return (
              <a
                key={social.key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-gold-500 transition-colors"
              >
                <button className="rounded-full border border-border bg-muted px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-gold-500 hover:text-gold-500 capitalize">
                  {social.label}
                </button>
              </a>
            );
          })}
        </div>
      </div>

      <div>
        <p className="mb-3 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          Availability
        </p>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-muted p-3.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.15)]" />
          <div>
            <p className="text-sm font-medium">Currently accepting bookings</p>
            <p className="text-[11px] text-muted-foreground">
              Next available: May 2026
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
