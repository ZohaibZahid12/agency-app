import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <div className={cn("flex items-center gap-2.5", align === "center" && "justify-center")}>
          <span className="h-[3px] w-6 shrink-0 rounded-full bg-accent-500" aria-hidden />
          <span
            className={cn(
              "text-sm font-semibold",
              light ? "text-white/70" : "text-ink-500"
            )}
          >
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-display-md font-bold text-balance",
          light ? "text-white" : "text-ink-950"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            light ? "text-white/70" : "text-ink-500"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
