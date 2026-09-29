import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

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
                    className={`relative flex h-28 items-center justify-between overflow-hidden bg-gradient-to-br px-6 ${service.gradient}`}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]"
                    />
                    <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                    </span>
                    <ArrowUpRight className="relative h-5 w-5 text-white/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
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
