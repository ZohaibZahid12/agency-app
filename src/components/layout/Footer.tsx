import Link from "next/link";
import { Mail, MapPin, Phone, Spline } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-[#773CDD] text-white shadow-glow">
                <Spline className="h-4.5 w-4.5" strokeWidth={2.25} />
              </span>
              <span className="font-display text-[1.05rem] font-bold leading-none tracking-tight text-ink-950">
                Coding
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-600">
                  Curves
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-500">
              {siteConfig.tagline}. We partner with founders and product teams
              to ship things worth using.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-ink-500">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 hover:text-ink-900">
                <Phone className="h-4 w-4 text-ink-400" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-ink-900">
                <Mail className="h-4 w-4 text-ink-400" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-ink-400" />
                {siteConfig.address}
              </p>
            </div>
            <Button href="#contact" size="sm" className="mt-6">
              Contact us
            </Button>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="Industries" links={footerLinks.additional} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-8 sm:flex-row">
          <p className="text-sm text-ink-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-sm text-ink-400 hover:text-ink-800">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-ink-400 hover:text-ink-800">
              Privacy
            </Link>
            <div className="flex items-center gap-1.5 pl-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-50 hover:text-ink-900"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink-900">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-ink-500 transition-colors hover:text-ink-900">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
