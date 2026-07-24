import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  "aria-label"?: string;
}

const variants = {
  primary: "bg-orange text-navy-dark hover:bg-orange/90 font-semibold",
  outline: "border border-white/20 text-white hover:bg-white/5 font-medium",
  ghost: "text-white/70 hover:text-white font-medium",
};

const sizes = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-3 text-sm min-h-[44px]",
  lg: "px-8 py-4 text-base min-h-[52px]",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-heading tracking-wide transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
