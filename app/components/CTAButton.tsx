"use client";

import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  href?: string;
  size?: "default" | "large";
  className?: string;
  onClick?: () => void;
}

export function CTAButton({
  children,
  href = "#",
  size = "default",
  className = "",
  onClick,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 border-2 border-accent text-accent bg-bg hover:bg-accent hover:text-bg cursor-pointer btn-pulse";

  const sizeClasses =
    size === "large"
      ? "px-10 py-5 text-lg rounded-[4px]"
      : "px-10 py-4 text-sm rounded-[4px]";

  const combined = `${baseClasses} ${sizeClasses} ${className}`;

  return (
    <a href={href} className={combined} onClick={onClick}>
      {children}
    </a>
  );
}
