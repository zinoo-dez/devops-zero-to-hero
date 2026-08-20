"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "my" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center transition-colors cursor-pointer"
      aria-label="Toggle language"
      title={language === "en" ? "Switch to Myanmar" : "Switch to English"}
    >
      <span className="text-base select-none leading-none mt-0.5">
        {language === "en" ? "🇲🇲" : "🇺🇸"}
      </span>
    </button>
  );
}
