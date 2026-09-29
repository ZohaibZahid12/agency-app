import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceHero({
  icon: Icon,
  gradient,
  className,
}: {
  icon: LucideIcon;
  gradient: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-52 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br shadow-soft sm:h-64",
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
      <span className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 shadow-glow ring-1 ring-white/25 backdrop-blur-sm sm:h-24 sm:w-24">
        <Icon
          className="h-9 w-9 text-white sm:h-11 sm:w-11"
          strokeWidth={1.5}
        />
      </span>
    </div>
  );
}
