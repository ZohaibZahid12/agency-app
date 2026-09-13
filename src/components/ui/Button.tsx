import { cn } from "@/lib/utils";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-white shadow-soft hover:bg-accent-600 hover:shadow-card active:bg-accent-700",
  secondary: "bg-ink-950 text-white hover:bg-ink-800 shadow-soft",
  outline:
    "border border-ink-200 text-ink-800 bg-white hover:border-brand-300 hover:bg-brand-50/60",
  ghost: "text-ink-700 hover:bg-ink-100/80",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-[0.95rem] px-5 py-3 gap-2",
  lg: "text-base px-7 py-3.5 gap-2.5",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return typeof props.href === "string";
}

const baseKeys = ["variant", "size", "className", "children", "icon", "href"] as const;

function withoutBaseKeys<T extends object>(props: T): Omit<T, (typeof baseKeys)[number]> {
  const clone = { ...props } as Record<string, unknown>;
  baseKeys.forEach((key) => {
    delete clone[key];
  });
  return clone as Omit<T, (typeof baseKeys)[number]>;
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, icon } = props;

  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 whitespace-nowrap",
    "focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (isLinkProps(props)) {
    const anchorRest = withoutBaseKeys(props);
    return (
      <Link href={props.href} className={classes} {...anchorRest}>
        {children}
        {icon}
      </Link>
    );
  }

  const buttonRest = withoutBaseKeys(props);

  return (
    <button className={classes} {...buttonRest}>
      {children}
      {icon}
    </button>
  );
}
