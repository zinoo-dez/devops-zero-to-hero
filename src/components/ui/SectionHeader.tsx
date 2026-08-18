import React from "react";
import { cn } from "@/lib/utils";
import { GradientText } from "./GradientText";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
        {title}{" "}
        {highlight && (
          <GradientText gradient="from-white via-blue-200 to-blue-500">
            {highlight}
          </GradientText>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
