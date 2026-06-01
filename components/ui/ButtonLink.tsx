import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonLinkVariant = "primary" | "secondary";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonLinkVariant;
};

const variants: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-foreground text-background hover:bg-zinc-800 dark:hover:bg-zinc-200",
  secondary:
    "border border-black/10 bg-white text-zinc-950 hover:bg-zinc-100 dark:border-white/15 dark:bg-black dark:text-zinc-50 dark:hover:bg-zinc-900",
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-md px-5 text-center transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
