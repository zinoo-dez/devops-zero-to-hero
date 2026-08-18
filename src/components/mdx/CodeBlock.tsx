"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
  language?: string;
  filename?: string;
  code?: string;
}

export function CodeBlock({
  children,
  className,
  language,
  filename,
  code: rawCode,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(getTextContent).join("");
    if (React.isValidElement(node)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return getTextContent((node.props as any).children);
    }
    return "";
  };

  const codeText = rawCode || (children ? getTextContent(children) : "");

  const handleCopy = async () => {
    if (!codeText) return;
    try {
      await navigator.clipboard.writeText(codeText.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  };

  const derivedLang =
    language || (className ? className.replace(/language-/, "") : "bash");

  return (
    <div className="relative group/code my-6 rounded-2xl border border-white/[0.1] bg-[#09090d] shadow-2xl overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          {/* Terminal Dots */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <span className="font-bold text-blue-400 uppercase tracking-widest text-[10px]">
            {derivedLang}
          </span>
          {filename && (
            <span className="text-muted-foreground font-mono text-[11px] ml-2 px-2 py-0.5 rounded bg-white/5 border border-white/5">
              {filename}
            </span>
          )}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-muted-foreground hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 sm:p-5 overflow-x-auto text-[13.5px] leading-relaxed font-mono text-slate-200 selection:bg-blue-500/40">
        {children || <pre><code>{codeText}</code></pre>}
      </div>
    </div>
  );
}
