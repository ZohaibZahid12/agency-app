import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/ui/SocialIcons";

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
            <Link href="/#home" className="flex items-center">
              <Image
                src="/logo.png"
                alt="CodingCurves"
                width={672}
                height={198}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-500">
              {siteConfig.tagline}. We partner with founders and product teams
              to ship things worth using.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-ink-500">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2.5 hover:text-ink-900"
              >
                <Phone className="h-4 w-4 text-ink-400" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 hover:text-ink-900"
              >
                <Mail className="h-4 w-4 text-ink-400" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-ink-400" />
                {siteConfig.address}
              </p>
            </div>
            <Button href="/#contact" size="sm" className="mt-6">
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
            <Link
              href={link.href}
              className="text-sm text-ink-500 transition-colors hover:text-ink-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
