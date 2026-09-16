import { Check, X } from "lucide-react";
import { comparisonRows, siteConfig } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Compare() {
  return (
    <section className="bg-ink-50/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why teams switch"
          title="Not Your Typical Dev Shop."
          description="We've been hired to fix what other agencies left behind more than once. Here's the difference up front."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm" delay={0.1}>
          <div className="grid grid-cols-2">
            <div className="border-b border-r border-ink-100 px-5 py-4 sm:px-8">
              <span className="text-sm font-semibold text-ink-400">Typical dev shop</span>
            </div>
            <div className="border-b border-ink-100 bg-brand-50/50 px-5 py-4 sm:px-8">
              <span className="text-sm font-semibold text-brand-700">{siteConfig.shortName}</span>
            </div>
          </div>

          {comparisonRows.map((row, i) => {
            const isLast = i === comparisonRows.length - 1;
            return (
              <div key={row.typical} className="grid grid-cols-2">
                <div
                  className={`flex items-start gap-3 border-r border-ink-100 px-5 py-5 sm:px-8 ${isLast ? "" : "border-b"}`}
                >
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-300" strokeWidth={2.5} />
                  <span className="text-sm leading-relaxed text-ink-500">{row.typical}</span>
                </div>
                <div
                  className={`flex items-start gap-3 bg-brand-50/50 px-5 py-5 sm:px-8 ${isLast ? "" : "border-b border-ink-100"}`}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-growth-600" strokeWidth={2.5} />
                  <span className="text-sm font-medium leading-relaxed text-ink-800">{row.us}</span>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
