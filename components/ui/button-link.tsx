import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  icon?: ReactNode;
  size?: "sm" | "md";
  variant?: "solid" | "outline";
};

export function ButtonLink({
  href,
  icon,
  size = "md",
  variant = "solid",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 border text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-200 motion-reduce:transition-none",
        size === "sm" ? "min-h-10 px-4" : "min-h-12 px-6",
        variant === "solid"
          ? "border-champagne bg-champagne text-obsidian hover:border-champagne-light hover:bg-champagne-light"
          : "border-champagne bg-transparent text-ivory hover:bg-forest ",
        className,
      )}
      {...props}
    >
      {children}
      {icon}
    </a>
  );
}
