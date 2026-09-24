import { Check } from "lucide-react";
import { engagementModels } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Engagement() {
  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <SectionHeading
          eyebrow="How we work together"
          title="Work With Us, Your Way."
          description="Every team's need is different — here's how companies typically bring us in."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {engagementModels.map((model, i) => {
            const Icon = model.icon;
            return (
              <Reveal key={model.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-[#773CDD] text-white shadow-soft">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-ink-950">{model.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{model.description}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-ink-100 pt-6">
                    {model.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.25} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
