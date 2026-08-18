"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, Sparkles, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface KnowledgeCheckProps {
  question: string;
  options: Option[];
  explanation: string;
  hint?: string;
}

export function KnowledgeCheck({
  question = "Check your understanding",
  options = [],
  explanation = "",
  hint,
}: KnowledgeCheckProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const safeOptions = Array.isArray(options) ? options : [];
  const selectedOption = safeOptions.find((o) => o.id === selectedId);
  const isCorrect = selectedOption?.isCorrect ?? false;

  const handleSelect = (id: string) => {
    if (submitted) return;
    setSelectedId(id);
  };

  const handleCheck = () => {
    if (!selectedId) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedId(null);
    setSubmitted(false);
    setShowHint(false);
  };

  return (
    <div className="my-8 rounded-2xl border border-slate-200 dark:border-blue-500/20 bg-slate-50/70 dark:bg-[#0c0d17] p-6 sm:p-7 backdrop-blur-xl shadow-xl transition-all">
      {/* Header Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive Knowledge Check
        </div>

        {hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{showHint ? "Hide Hint" : "Need a Hint?"}</span>
          </button>
        )}
      </div>

      {/* Question */}
      <h3 className="text-base sm:text-lg font-bold text-foreground mb-4 leading-snug">
        {question}
      </h3>

      {/* Hint Alert if opened */}
      {showHint && hint && (
        <div className="mb-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-600 dark:text-amber-300 leading-relaxed animate-in fade-in">
          💡 <strong>Hint:</strong> {hint}
        </div>
      )}

      {/* Options List */}
      <div className="space-y-2.5 mb-6">
        {safeOptions.map((opt) => {
          const isSelected = selectedId === opt.id;
          let optionStyles =
            "border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.04] text-foreground";

          if (isSelected && !submitted) {
            optionStyles =
              "border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-300 font-semibold shadow-sm";
          } else if (submitted) {
            if (opt.isCorrect) {
              optionStyles =
                "border-emerald-500/60 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 font-semibold";
            } else if (isSelected && !opt.isCorrect) {
              optionStyles =
                "border-rose-500/60 bg-rose-500/10 text-rose-600 dark:text-rose-300 line-through opacity-80";
            } else {
              optionStyles = "opacity-50 border-slate-200 dark:border-white/[0.04]";
            }
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={submitted}
              className={cn(
                "w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer",
                optionStyles
              )}
            >
              <span>{opt.text}</span>
              {submitted && opt.isCorrect && (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              )}
              {submitted && isSelected && !opt.isCorrect && (
                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Action and Explanation */}
      {!submitted ? (
        <button
          onClick={handleCheck}
          disabled={!selectedId}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none text-white shadow-md transition-all cursor-pointer"
        >
          Check Answer
        </button>
      ) : (
        <div className="space-y-4 animate-in fade-in">
          <div
            className={cn(
              "p-4 rounded-xl border text-xs leading-relaxed",
              isCorrect
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                : "bg-rose-500/10 border-rose-500/20 text-rose-700 dark:text-rose-300"
            )}
          >
            <div className="font-bold mb-1 flex items-center gap-1.5">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Correct! Great job!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-500" />
                  <span>Not quite right. Let&apos;s review:</span>
                </>
              )}
            </div>
            <p className="mt-1 text-slate-700 dark:text-slate-300">{explanation}</p>
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Try Again</span>
          </button>
        </div>
      )}
    </div>
  );
}
