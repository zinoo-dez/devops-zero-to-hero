import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientText({
  children,
  className,
  gradient = "from-white via-blue-200 to-blue-500",
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent font-extrabold",
        gradient,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
