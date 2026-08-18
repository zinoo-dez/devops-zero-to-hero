"use client";

import React, { useState } from "react";
import { Folder, FileText, Check, Copy, FolderTree as FolderTreeIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface FileTreeProps {
  tree?: string;
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

export function FileTree({ tree, children, title = "Project Structure", className = "" }: FileTreeProps) {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const rawContent =
    tree ||
    (typeof children === "string"
      ? children
      : (children as any)?.props?.children || String(children || ""));

  const lines = rawContent.trim().split("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawContent.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy tree structure", err);
    }
  };

  const renderTreeLine = (line: string, index: number) => {
    // Check for comment / annotation like "← ..." or "→ ..." or "# ..."
    const commentMatch = line.match(/^([\s│├──└──\/\w\.\-\_]+?)\s*([←→#].*)$/);
    let structurePart = line;
    let commentPart = "";

    if (commentMatch) {
      structurePart = commentMatch[1];
      commentPart = commentMatch[2];
    }

    // Split tree branch characters (├──, └──, │, spaces) from the filename
    const nodeMatch = structurePart.match(/^([\s│├──└──]+)?(.*)$/);
    const branchPrefix = nodeMatch ? nodeMatch[1] || "" : "";
    const nodeName = nodeMatch ? nodeMatch[2] || "" : structurePart;

    const isDirectory =
      nodeName.trim().endsWith("/") ||
      nodeName.trim().startsWith("/") ||
      nodeName.trim().toLowerCase().includes("root");

    return (
      <div
        key={index}
        className="flex items-center justify-between py-1 px-2 rounded-lg hover:bg-slate-500/10 font-mono text-[13px] sm:text-[13.5px] leading-relaxed transition-colors group/line"
      >
        <div className="flex items-center whitespace-pre overflow-x-auto">
          {/* Tree branch characters */}
          {branchPrefix && (
            <span className="text-slate-400 dark:text-slate-500 select-none font-light">
              {branchPrefix}
            </span>
          )}

          {/* Icon & File/Folder Name */}
          <span className="inline-flex items-center gap-1.5 ml-1">
            {isDirectory ? (
              <>
                <Folder className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0 fill-blue-500/20" />
                <span className="font-semibold text-blue-700 dark:text-blue-300">
                  {nodeName.trim()}
                </span>
              </>
            ) : (
              <>
                <FileText className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span className="text-slate-800 dark:text-slate-200">
                  {nodeName.trim()}
                </span>
              </>
            )}
          </span>
        </div>

        {/* Comment / Annotation tag */}
        {commentPart && (
          <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-sans italic ml-4 pl-2 border-l border-slate-300 dark:border-white/10 shrink-0 select-none">
            {commentPart}
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      className={[
        "my-6 rounded-2xl border shadow-xl overflow-hidden transition-all duration-200",
        isDark
          ? "border-white/10 bg-[#09090f]/95 shadow-black/40"
          : "border-slate-200 bg-slate-50/90 shadow-slate-200/60",
        className,
      ].join(" ")}
    >
      {/* Header bar */}
      <div
        className={[
          "flex items-center justify-between px-4 py-2.5 border-b text-xs",
          isDark
            ? "bg-white/[0.03] border-white/[0.06] text-slate-300"
            : "bg-white border-slate-200 text-slate-700",
        ].join(" ")}
      >
        <div className="flex items-center gap-2">
          {/* Terminal Dots */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <FolderTreeIcon className="w-3.5 h-3.5 text-blue-500" />
          <span className="font-bold uppercase tracking-wider text-[10px] text-blue-600 dark:text-blue-400">
            {title}
          </span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={[
            "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer",
            isDark
              ? "text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
              : "text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200",
          ].join(" ")}
          aria-label="Copy folder structure"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* File Tree Lines */}
      <div className="p-3 sm:p-4 overflow-x-auto space-y-0.5 select-text">
        {lines.map((line: string, idx: number) => renderTreeLine(line, idx))}
      </div>
    </div>
  );
}
