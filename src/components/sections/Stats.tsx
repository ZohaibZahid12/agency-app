import { stats } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Proven track record"
          title="Numbers That Prove It."
          description="These aren't vanity metrics. They're the same numbers we send our clients every month."
          light
        />

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center sm:p-8">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-500 to-[#773CDD]" />
                <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm leading-snug text-white/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
