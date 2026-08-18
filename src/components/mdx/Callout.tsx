import React from "react";
import {
  Lightbulb,
  Info,
  AlertTriangle,
  Star,
  AlertCircle,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "tip" | "note" | "warning" | "important" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutConfig: Record<
  CalloutType,
  {
    icon: LucideIcon;
    border: string;
    bg: string;
    text: string;
    title: string;
    iconColor: string;
  }
> = {
  tip: {
    icon: Lightbulb,
    border: "border-emerald-500/40",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    text: "text-emerald-700 dark:text-emerald-300",
    title: "PRO TIP",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  note: {
    icon: Info,
    border: "border-slate-500/40",
    bg: "bg-slate-50 dark:bg-white/[0.03]",
    text: "text-slate-700 dark:text-slate-200",
    title: "NOTE",
    iconColor: "text-slate-500 dark:text-slate-300",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-amber-500/40",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    text: "text-amber-700 dark:text-amber-300",
    title: "COMMON PITFALL / WARNING",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  important: {
    icon: Star,
    border: "border-blue-500/40",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    text: "text-blue-700 dark:text-blue-300",
    title: "IMPORTANT CONCEPT",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  danger: {
    icon: AlertCircle,
    border: "border-red-600/50",
    bg: "bg-red-50 dark:bg-red-950/30",
    text: "text-red-700 dark:text-red-400",
    title: "DANGER / CAUTION",
    iconColor: "text-red-600 dark:text-red-500",
  },
};

export function Callout({
  type = "note",
  title,
  children,
  className,
}: CalloutProps) {
  const config = calloutConfig[type] || calloutConfig.note;
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "relative my-6 rounded-2xl border-l-4 border p-5 backdrop-blur-md transition-all",
        config.border,
        config.bg,
        className
      )}
    >
      <div className="flex items-center gap-2 mb-2 font-bold text-xs uppercase tracking-wider">
        <Icon className={cn("w-4 h-4 shrink-0", config.iconColor)} />
        <span className={config.text}>{title || config.title}</span>
      </div>
      <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&_p]:text-slate-700 dark:[&_p]:text-slate-300 [&_code]:bg-black/5 dark:[&_code]:bg-white/10">
        {children}
      </div>
    </div>
  );
}
