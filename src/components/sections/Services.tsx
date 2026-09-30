import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceArt } from "@/components/ui/ServiceArt";

export function Services() {
  return (
    <section id="services" className="bg-ink-50/60 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Full-Stack Services, Built to Ship."
          description="From your first Figma file to the infrastructure running in production — we build the full product stack."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
                >
                  <div
                    className={`relative h-36 overflow-hidden bg-gradient-to-br ${service.gradient}`}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]"
                    />
                    <ServiceArt slug={service.slug} className="pointer-events-none absolute inset-0" />
                    <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
                      <Icon className="h-4.5 w-4.5 text-white" strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-lg font-bold text-ink-950 transition-colors group-hover:text-brand-700">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
