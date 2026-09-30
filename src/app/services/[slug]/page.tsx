import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceHero } from "@/components/ui/ServiceHero";
import {
  serviceDetails,
  servicePhraseLinks,
  getServicePage,
  type ServiceBlock,
} from "@/lib/service-pages";
import { siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServicePage(params.slug);
  if (!service) return {};

  const url = `/services/${service.slug}`;

  return {
    title: service.title,
    description: service.metaDescription,
    keywords: [service.keyword],
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.metaDescription,
    },
  };
}

const linkPattern = new RegExp(
  `(${servicePhraseLinks
    .slice()
    .sort((a, b) => b.phrase.length - a.phrase.length)
    .map((p) => p.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
  "gi"
);

function linkifyText(text: string, currentSlug: string): ReactNode {
  const parts = text.split(linkPattern);
  if (parts.length === 1) return text;

  return parts.map((part, i) => {
    const match = servicePhraseLinks.find(
      (p) => p.phrase.toLowerCase() === part.toLowerCase()
    );
    if (!match || match.slug === currentSlug) return part;
    return (
      <Link
        key={i}
        href={`/services/${match.slug}`}
        className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-2 transition-colors hover:text-brand-800 hover:decoration-brand-400"
      >
        {part}
      </Link>
    );
  });
}

function Block({ block, slug }: { block: ServiceBlock; slug: string }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 text-2xl font-bold leading-snug text-ink-950 sm:text-[1.65rem]">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 text-xl font-bold leading-snug text-ink-950">{block.text}</h3>
      );
    case "p":
      return (
        <p className="mt-4 leading-relaxed text-ink-600">{linkifyText(block.text, slug)}</p>
      );
    case "list":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-ink-600">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>{linkifyText(item, slug)}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServicePage(params.slug);
  if (!service) notFound();

  const related = serviceDetails.filter((s) => s.slug !== service.slug).slice(0, 3);
  const url = `${siteConfig.url}/services/${service.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.navTitle,
    description: service.metaDescription,
    url,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: "Global",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="pb-20 pt-40 sm:pb-24 sm:pt-48">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" />
              All services
            </Link>

            <ServiceHero
              icon={service.icon}
              gradient={service.gradient}
              slug={service.slug}
              className="mt-6"
            />

            <h1 className="mt-8 text-display-md font-bold leading-tight text-ink-950 text-balance">
              {service.title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-ink-500">{service.excerpt}</p>

            <article className="mt-10 border-t border-ink-100 pt-10">
              {service.content.map((block, i) => (
                <Block key={i} block={block} slug={service.slug} />
              ))}
            </article>

            {service.faqs.length > 0 ? (
              <div className="mt-14 border-t border-ink-100 pt-10">
                <h2 className="text-2xl font-bold text-ink-950">Frequently Asked Questions</h2>
                <div className="mt-6 space-y-6">
                  {service.faqs.map((faq) => (
                    <div key={faq.q}>
                      <h3 className="text-base font-semibold text-ink-900">{faq.q}</h3>
                      <p className="mt-1.5 leading-relaxed text-ink-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-14 flex flex-col items-start gap-4 rounded-3xl border border-ink-100 bg-ink-50/60 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-bold text-ink-950">Have a project in mind?</p>
                <p className="mt-1 text-sm text-ink-500">
                  Talk to CodingCurves about your requirements — get a free technical audit.
                </p>
              </div>
              <Button href="/#contact" size="md" className="shrink-0">
                Start a project
              </Button>
            </div>
          </div>

          {related.length > 0 ? (
            <div className="mx-auto mt-20 max-w-5xl border-t border-ink-100 pt-14">
              <h2 className="text-xl font-bold text-ink-950">Other services</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {related.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br text-white ${item.gradient}`}
                        >
                          <ItemIcon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                      </div>
                      <h3 className="mt-3 text-sm font-bold leading-snug text-ink-950 transition-colors group-hover:text-brand-700">
                        {item.navTitle}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : null}
        </Container>
      </main>
      <Footer />
    </>
  );
}
