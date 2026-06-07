import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#D4A24C]/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <h3 className="text-[#D4A24C] text-2xl font-bold">AAEA</h3>

            <p className="mt-4 text-zinc-400">
              Celebrating aviation excellence across Africa.
            </p>
          </div>

          <FooterColumn
            title="About"
            links={["About Us", "Awards", "Sponsors", "Gallery"]}
          />

          <FooterColumn
            title="Tickets"
            links={["Individual", "Silver", "Gold", "Platinum"]}
          />

          <FooterColumn title="Resources" links={["News", "FAQs", "Contact"]} />

          <FooterColumn
            title="Connect"
            links={["Facebook", "Instagram", "LinkedIn"]}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-zinc-500">
            © 2026 Abuja Aviation Excellence Awards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>

      <div className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <Link href="#" key={link} className="text-zinc-400 hover:text-white">
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
