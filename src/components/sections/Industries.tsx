import { industries } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Industries() {
  const [featured, ...rest] = industries;
  const [second, ...compact] = rest;

  return (
    <section id="industries" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries we serve"
          title="We know your industry inside out"
          description="Engineers and designers who've shipped in your space before — no ramp-up time, no generic playbooks."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[featured, second].map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col justify-between gap-8 border border-ink-100 bg-ink-950 p-8 transition-colors duration-300 sm:p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {compact.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={0.16 + i * 0.06}>
                <div className="group flex h-full flex-col gap-4 border border-ink-100 bg-white p-6 transition-colors duration-300 hover:border-brand-300 hover:bg-brand-50/30">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink-50 text-ink-700 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold leading-snug text-ink-900">
                      {industry.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-500">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
