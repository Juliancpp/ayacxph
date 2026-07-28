import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost" | "light";

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-6 py-3 font-[family-name:var(--font-ui)] text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 active:translate-y-px disabled:pointer-events-none disabled:opacity-55";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-ink/85",
  light: "bg-paper text-ink hover:bg-mist",
  outline: "border border-current hover:bg-current/10",
  ghost: "px-0 underline-offset-[6px] hover:underline",
};

export function Btn({
  variant = "solid",
  className,
  children,
  ...rest
}: ComponentProps<"button"> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function BtnLink({
  variant = "solid",
  className,
  children,
  ...rest
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function BtnAnchor({
  variant = "solid",
  className,
  children,
  ...rest
}: ComponentProps<"a"> & { variant?: Variant; children: ReactNode }) {
  return (
    <a className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

export function Eyebrow({
  children,
  className,
  accent,
}: {
  children: ReactNode;
  className?: string;
  accent?: "sage" | "steel" | "sand";
}) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", className)}>
      {accent && (
        <span
          aria-hidden="true"
          className={cn(
            "inline-block h-px w-8",
            accent === "sage" && "bg-sage",
            accent === "steel" && "bg-steel",
            accent === "sand" && "bg-sand",
          )}
        />
      )}
      {children}
    </p>
  );
}
