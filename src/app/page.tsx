import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stacks } from "@/components/sections/Stacks";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Compare } from "@/components/sections/Compare";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Blog } from "@/components/sections/Blog";
import { Testimonials } from "@/components/sections/Testimonials";
import { Engagement } from "@/components/sections/Engagement";
import { Contact } from "@/components/sections/Contact";
import { services, siteConfig } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/apple-icon`,
      email: siteConfig.email,
      description: siteConfig.description,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <Stacks />
        <Services />
        <Stats />
        <Industries />
        <Process />
        <Compare />
        <CaseStudies />
        <Blog />
        <Testimonials />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
