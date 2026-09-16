import { techStack } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Stacks() {
  const loop = [...techStack, ...techStack];

  return (
    <section className="border-y border-ink-100 bg-ink-50/50 py-10">
      <Container>
        <Reveal>
          <p className="text-center text-sm font-medium text-ink-400">
            Built with the tools engineering teams trust
          </p>
        </Reveal>
      </Container>

      <div className="relative mt-7 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-50 to-transparent sm:w-32" />
        <div className="group flex overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-14 pr-14 group-hover:[animation-play-state:paused]">
            {loop.map((name, i) => (
              <span
                key={i}
                className="shrink-0 font-display text-xl font-semibold tracking-tight text-ink-300 transition-colors duration-300 hover:text-brand-600"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
