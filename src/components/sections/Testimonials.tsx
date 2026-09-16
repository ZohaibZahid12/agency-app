import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

const avatarPalette = [
  "bg-brand-500",
  "bg-accent-500",
  "bg-growth-500",
  "bg-ink-700",
  "bg-brand-700",
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <div className="flex h-full w-[320px] shrink-0 flex-col rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:w-[360px]">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-0.5 text-accent-500">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </span>
        <Quote className="h-6 w-6 text-ink-100" />
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-4">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${avatarPalette[index % avatarPalette.length]}`}
        >
          {initialsOf(testimonial.name)}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink-900">{testimonial.name}</p>
          <p className="text-xs text-ink-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="overflow-hidden py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Client love"
          title="Hear It From Them."
          description="Real feedback from the founders and product teams we work with every day."
        />
      </Container>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />
        <Reveal>
          <div className="group flex overflow-hidden">
            <div className="flex w-max animate-marquee gap-5 pl-5 group-hover:[animation-play-state:paused]">
              {loop.map((testimonial, i) => (
                <TestimonialCard key={i} testimonial={testimonial} index={i} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
