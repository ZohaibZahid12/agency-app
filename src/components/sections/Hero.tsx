import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pb-20 pt-44 sm:pb-24 sm:pt-52">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black_10%,transparent_70%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] animate-pulse-soft rounded-full bg-brand-400/25 blur-[140px]" />
        <div className="absolute -right-24 top-10 h-[380px] w-[380px] animate-pulse-soft rounded-full bg-[#773CDD]/20 blur-[140px] [animation-delay:1s]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] animate-pulse-soft rounded-full bg-brand-300/20 blur-[140px] [animation-delay:2s]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-display-xl font-bold leading-[1.08] text-ink-950 text-balance">
            We help ambitious teams{" "}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-[#773CDD] bg-clip-text text-transparent">
              build products that scale
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            From idea to infrastructure — we design, build, and scale web,
            mobile, and AI-powered products for startups and growing
            engineering teams.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="group relative inline-flex overflow-hidden rounded-full p-[1.5px]">
              <span
                aria-hidden
                className="absolute inset-[-150%] animate-spin bg-[conic-gradient(from_90deg,#1450D2,#773CDD,#1450D2)] [animation-duration:3s]"
              />
              <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 backdrop-blur-xl">
                <span className="bg-gradient-to-r from-brand-600 to-[#773CDD] bg-clip-text text-base font-semibold text-transparent">
                  Start Your Project
                </span>
                <ArrowRight className="h-4.5 w-4.5 text-brand-600" />
              </span>
            </a>

            <a
              href="#case-studies"
              className="group inline-flex items-center gap-2 px-5 py-3.5 text-base font-semibold text-ink-700 transition-colors hover:text-brand-600"
            >
              See Our Work
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
