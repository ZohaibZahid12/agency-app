import { processSteps } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="process" className="bg-ink-50/60 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From Idea to Impact."
          description="No jargon, no black boxes. Here's exactly what happens when you work with us."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-ink-200 lg:block"
            aria-hidden
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={i * 0.1}>
                  <div className="relative mx-auto flex max-w-xs flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-ink-950 shadow-card ring-1 ring-ink-100">
                      <Icon
                        className="h-6 w-6 text-brand-600"
                        strokeWidth={1.75}
                      />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-[#00C2E8] text-[0.65rem] font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-ink-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
