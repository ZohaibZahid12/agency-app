import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceArt } from "@/components/ui/ServiceArt";

export function ServiceHero({
  icon: Icon,
  gradient,
  slug,
  className,
}: {
  icon: LucideIcon;
  gradient: string;
  slug: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-52 overflow-hidden rounded-3xl bg-gradient-to-br shadow-soft sm:h-64",
        gradient,
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_20%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-[80px]" />
        <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-black/10 blur-[70px]" />
      </div>
      <ServiceArt slug={slug} className="pointer-events-none absolute inset-0" />
      <span className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 shadow-glow ring-1 ring-white/25 backdrop-blur-sm sm:h-16 sm:w-16">
        <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={1.5} />
      </span>
    </div>
  );
}
