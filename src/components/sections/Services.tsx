import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="services" className="bg-ink-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to design, build, and scale your product"
          description="From your first Figma file to the infrastructure running in production — we build the full product stack."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <div className="group relative h-full border border-ink-100 bg-white p-7 transition-colors duration-300 hover:border-brand-300 hover:bg-brand-50/30">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ink-50 text-ink-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-ink-950">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
