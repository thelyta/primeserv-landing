"use client";

import { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface FadeUpSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUpSection({
  children,
  className = "",
  delay = 0,
}: FadeUpSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
