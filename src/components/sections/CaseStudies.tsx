import { ArrowRight, Quote } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const accentByIndex = [
  "from-brand-500 to-brand-700",
  "from-brand-500 to-[#773CDD]",
  "from-growth-500 to-growth-700",
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Case studies"
          title="Built. Shipped. Proven."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal key={study.title} delay={i * 0.1}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                <div
                  className={`relative flex h-40 items-end bg-gradient-to-br p-6 ${accentByIndex[i % accentByIndex.length]}`}
                >
                  <Quote className="absolute right-5 top-5 h-9 w-9 text-white/25" />
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {study.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold text-ink-950">
                      {study.result}
                    </span>
                    <span className="text-sm font-medium text-ink-400">
                      {study.resultLabel}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-ink-950">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {study.summary}
                  </p>
                  <blockquote className="mt-5 border-l-2 border-brand-200 pl-4 text-sm italic leading-relaxed text-ink-600">
                    “{study.quote}”
                  </blockquote>
                  <p className="mt-4 text-sm font-semibold text-ink-900">
                    {study.author}
                    <span className="block text-xs font-normal text-ink-400">
                      {study.role}
                    </span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* <Reveal className="mt-12 flex justify-center">
          <Button href="#blog" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            View all stories
          </Button>
        </Reveal> */}
      </Container>
    </section>
  );
}
