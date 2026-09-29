import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { serviceDetails } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack product services from CodingCurves — web, mobile, AI, MVP, SaaS, DevOps, product design, and software scaling.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Header />
      <main className="pb-20 pt-40 sm:pb-24 sm:pt-48">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Full-Stack Services, Built to Ship."
            description="From your first Figma file to the infrastructure running in production — we build the full product stack."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-1.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`relative flex h-32 items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br ${service.gradient}`}
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]"
                      />
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                      </span>
                      <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="text-lg font-bold text-ink-950 transition-colors group-hover:text-brand-700">
                        {service.navTitle}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                        {service.excerpt}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
